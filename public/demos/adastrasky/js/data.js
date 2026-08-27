

// ===== DATOS DE EJEMPLO (fijos, solo para la vista previa) =====

export const ISLANDS = [
  {
    id: "tenerife",
    label: "Tenerife",
    today: { temp: "14°C", cloud: "Cielo despejado", note: "Condiciones excelentes esta noche · nubosidad 8%" },
    constellations: ["Orión", "Casiopea", "Osa Mayor", "Cygnus"],
    zones: [
      { icon: "🔭", name: "Observatorio del Teide", meta: "Observatorio · Bortle 2 · 2.390 m" },
      { icon: "🌌", name: "Mirador de Chipeque", meta: "Mirador astronómico · Bortle 3 · 2.240 m" },
    ],
  },
  {
    id: "gran-canaria",
    label: "Gran Canaria",
    today: { temp: "16°C", cloud: "Parcialmente nublado", note: "Buena visibilidad tras medianoche · nubosidad 24%" },
    constellations: ["Orión", "Tauro", "Perseo"],
    zones: [
      { icon: "🌌", name: "Mirador del Pico del Inglés", meta: "Mirador astronómico · Bortle 3 · 1.350 m" },
      { icon: "🏞️", name: "Roque Nublo", meta: "Mirador paisajístico · Bortle 3 · 1.813 m" },
    ],
  },
  {
    id: "la-palma",
    label: "La Palma",
    today: { temp: "13°C", cloud: "Cielo despejado", note: "Una de las mejores noches del mes · nubosidad 4%" },
    constellations: ["Orión", "Casiopea", "Andrómeda", "Cygnus"],
    zones: [
      { icon: "🔭", name: "Roque de los Muchachos", meta: "Observatorio · Bortle 2 · 2.396 m" },
      { icon: "🌌", name: "Mirador de Sicasumbre", meta: "Mirador astronómico · Bortle 2 · 1.200 m" },
    ],
  },
  {
    id: "lanzarote",
    label: "Lanzarote",
    today: { temp: "18°C", cloud: "Cielo despejado", note: "Zona Starlight certificada · nubosidad 11%" },
    constellations: ["Orión", "Tauro", "Osa Mayor"],
    zones: [
      { icon: "🌌", name: "Llano del Jable", meta: "Mirador astronómico · Bortle 3 · 180 m" },
      { icon: "🏞️", name: "Timanfaya", meta: "Mirador paisajístico · Bortle 3 · 510 m" },
    ],
  },
  {
    id: "fuerteventura",
    label: "Fuerteventura",
    today: { temp: "19°C", cloud: "Cielo despejado", note: "Cielos protegidos, muy poca luz artificial · nubosidad 6%" },
    constellations: ["Orión", "Casiopea", "Cygnus"],
    zones: [
      { icon: "🌌", name: "Morro Velosa", meta: "Mirador astronómico · Bortle 2 · 690 m" },
      { icon: "🏞️", name: "Playa de Sotavento", meta: "Mirador paisajístico · Bortle 3 · 50 m" },
    ],
  },
  {
    id: "la-gomera",
    label: "La Gomera",
    today: { temp: "15°C", cloud: "Parcialmente nublado", note: "Mejor visibilidad en la zona alta · nubosidad 30%" },
    constellations: ["Orión", "Perseo"],
    zones: [
      { icon: "🌌", name: "Mirador del Santo", meta: "Mirador astronómico · Bortle 2 · 870 m" },
      { icon: "🏞️", name: "Alto de Garajonay", meta: "Mirador paisajístico · Bortle 3 · 1.487 m" },
    ],
  },
  {
    id: "el-hierro",
    label: "El Hierro",
    today: { temp: "14°C", cloud: "Cielo despejado", note: "Isla 100% renovable, cero contaminación industrial · nubosidad 5%" },
    constellations: ["Orión", "Casiopea", "Osa Mayor", "Andrómeda"],
    zones: [
      { icon: "🌌", name: "Mirador de Jinama", meta: "Mirador astronómico · Bortle 1 · 1.300 m" },
      { icon: "🏞️", name: "Punta de la Restinga", meta: "Mirador paisajístico · Bortle 2 · 50 m" },
    ],
  },
  {
    id: "la-graciosa",
    label: "La Graciosa",
    today: { temp: "17°C", cloud: "Cielo despejado", note: "El cielo más oscuro del archipiélago · nubosidad 3%" },
    constellations: ["Orión", "Cygnus", "Andrómeda", "Casiopea"],
    zones: [
      { icon: "🏞️", name: "Playas del Norte", meta: "Mirador paisajístico · Bortle 1 · 50 m" },
      { icon: "🏞️", name: "Centro de La Graciosa", meta: "Mirador paisajístico · Bortle 1 · 80 m" },
    ],
  },
];