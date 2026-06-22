import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useI18n, useTheme } from "../providers";

// Arbitrary placeholder point in central Foshan (Chancheng) until the real showroom address is set.
const OFFICE_COORDS: [number, number] = [23.0277, 113.1216];

export function OfficeMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { t } = useI18n();
  const address = t.foshan.addressLocal;
  const hqLabel = t.foshan.hqLabel;

  useEffect(() => {
    if (!containerRef.current) return;

    const map = L.map(containerRef.current, {
      center: OFFICE_COORDS,
      zoom: 15,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    const tiles = theme === "light"
      ? "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

    L.tileLayer(tiles, { subdomains: "abcd", maxZoom: 20 }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control
      .attribution({ position: "bottomleft", prefix: false })
      .addAttribution("© OpenStreetMap © CARTO")
      .addTo(map);

    const pinIcon = L.divIcon({
      className: "",
      html: `
        <div style="position: relative; width: 28px; height: 36px;">
          <div style="
            position: absolute; top: 0; left: 50%; transform: translateX(-50%);
            width: 28px; height: 28px; border-radius: 50%;
            background: var(--deline-gold-button); border: 2px solid var(--deline-surface);
            box-shadow: 0 0 0 4px color-mix(in srgb, var(--deline-gold) 30%, transparent), 0 4px 10px rgba(0,0,0,0.4);
          "></div>
          <div style="
            position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
            width: 8px; height: 8px; border-radius: 50%; background: var(--deline-bg);
          "></div>
          <div style="
            position: absolute; top: 26px; left: 50%; transform: translateX(-50%);
            width: 0; height: 0;
            border-left: 6px solid transparent; border-right: 6px solid transparent;
            border-top: 10px solid var(--deline-gold-button);
          "></div>
        </div>
      `,
      iconSize: [28, 36],
      iconAnchor: [14, 36],
    });

    L.marker(OFFICE_COORDS, { icon: pinIcon })
      .addTo(map)
      .bindTooltip(
        `<div style="font-family: var(--font-sans); font-size: 11px; color: var(--deline-text);">
           <div style="color: var(--deline-gold); letter-spacing:1px; text-transform:uppercase; font-size:9px; margin-bottom:4px;">${hqLabel}</div>
           ${address}
         </div>`,
        { permanent: false, direction: "top", offset: [0, -32], className: "deline-tooltip" },
      );

    return () => {
      map.remove();
    };
  }, [theme, address, hqLabel]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="absolute inset-0" style={{ borderRadius: "var(--deline-radius)", overflow: "hidden", border: "1px solid var(--deline-divider)" }} />
      <div className="absolute top-3 left-3 z-[400] pointer-events-none" style={{ fontFamily: "var(--font-sans)" }}>
        <div style={{ color: "var(--deline-gold)", fontSize: 9, letterSpacing: "2.25px", textTransform: "uppercase", lineHeight: "13.5px", fontWeight: 700 }}>
          {hqLabel}
        </div>
        <div style={{ color: "var(--deline-text-2)", fontSize: 10, lineHeight: "14px", marginTop: 2 }}>{address}</div>
      </div>
    </div>
  );
}
