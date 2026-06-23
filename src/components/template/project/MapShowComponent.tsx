import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// متادیتا برای وضعیت‌های پروژه
const statusMeta = {
  available: { color: "#4CAF50", label: "موجود" },
  sold: { color: "#F44336", label: "فروخته شده" },
  reserved: { color: "#FF9800", label: "رزرو" },
};

// کامپوننت نقشه
const MapComponent = ({
  projects = [],
  activeFilter = "all",
  onProjectClick,
}) => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [L, setL] = useState(null);

  // بارگذاری Leaflet
  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet.default);
    });
  }, []);

  // ساخت آیکون برای نشانگرها
  const makeIcon = (color) => {
    if (!L) return null;
    return L.divIcon({
      className: "",
      html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:3px solid rgba(212,207,200,0.9);box-shadow:0 2px 8px rgba(0,0,0,0.4);"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });
  };

  // محتوای پاپ‌آپ برای هر پروژه
  const getPopupHtml = (p) => {
    const m = statusMeta[p.status] || { color: "#888", label: p.status };
    return `<div style="padding:12px;font-family:Sora,sans-serif;direction:rtl;text-align:right;">
      <p style="font-size:13px;font-weight:600;margin:0 0 4px;color:#D4CFC8;">${p.name}</p>
      <p style="font-size:11px;color:#8a8880;margin:0 0 8px;">${p.loc} · ${p.sqm}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:11px;color:${m.color};font-weight:500;">${m.label}</span>
        <span style="font-size:12px;font-weight:600;color:#D4CFC8;">${p.price}</span>
      </div>
    </div>`;
  };

  // رندر کردن نشانگرها روی نقشه
  const renderMarkers = () => {
    if (!mapRef.current || !L) return;

    markersRef.current.forEach((item) => {
      mapRef.current.removeLayer(item.marker);
    });
    markersRef.current = [];

    const filtered =
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.status === activeFilter);

    filtered.forEach((p) => {
      const m = statusMeta[p.status] || { color: "#888", label: p.status };
      const marker = L.marker([p.lat, p.lng], {
        icon: makeIcon(m.color),
      }).addTo(mapRef.current);

      marker.bindPopup(getPopupHtml(p), {
        closeButton: false,
        offset: [0, -4],
        autoPan: false,
      });

      marker.on("mouseover", () => marker.openPopup());
      marker.on("mouseout", () => marker.closePopup());
      marker.on("click", () => onProjectClick(p));

      markersRef.current.push({ marker, id: p.id });
    });
  };

  // راه‌اندازی اولیه نقشه
  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current && L) {
      const mapInstance = L.map("map").setView([40.728, -73.985], 12);
      L.control.zoom({ position: "topright" }).addTo(mapInstance);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
        maxZoom: 19,
      }).addTo(mapInstance);
      mapRef.current = mapInstance;
      renderMarkers();
    }
  }, [L]);

  // بروزرسانی نشانگرها هنگام تغییر فیلتر
  useEffect(() => {
    if (mapRef.current && L) {
      renderMarkers();
    }
  }, [activeFilter, L]);

  return <div id="map" className="h-full w-full"></div>;
};

// داده‌های نمونه
const sampleProjects = [
  {
    id: 1,
    name: "پروژه آسمان",
    loc: "تهران، خیابان ولیعصر",
    sqm: "۱۲۵ متر",
    price: "۳,۲۰۰,۰۰۰,۰۰۰ تومان",
    status: "available",
    lat: 40.728,
    lng: -73.985,
  },
  {
    id: 2,
    name: "پروژه باغ",
    loc: "شیراز، بلوار جمهوری",
    sqm: "۱۸۰ متر",
    price: "۴,۵۰۰,۰۰۰,۰۰۰ تومان",
    status: "sold",
    lat: 40.735,
    lng: -73.99,
  },
  {
    id: 3,
    name: "پروژه دریا",
    loc: "اصفهان، خیابان چهارباغ",
    sqm: "۹۰ متر",
    price: "۲,۱۰۰,۰۰۰,۰۰۰ تومان",
    status: "reserved",
    lat: 40.72,
    lng: -73.98,
  },
];

// کامپوننت اصلی با dynamic
const MapShowComponent = dynamic(
  () =>
    Promise.resolve((props) => {
      // اگر props پروژه نداشت، از نمونه استفاده کن
      const projects = props.projects || sampleProjects;
      return <MapComponent {...props} projects={projects} />;
    }),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-[#3c4142] flex items-center justify-center text-[#D4CFC8]">
        در حال بارگذاری نقشه...
      </div>
    ),
  },
);

export default MapShowComponent;
