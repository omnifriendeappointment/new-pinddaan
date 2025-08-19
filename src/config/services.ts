export const services = [
  {
    id: 1,
    title: "Pinddaan Rituals",
    description: "Complete Pinddaan ceremony for your ancestors with all necessary rituals and offerings",
    icon: "🙏",
    includes: [
      "Complete Pinddaan ceremony",
      "Pandit services",
      "All ritual materials",
      "Sacred offerings"
    ]
  },
  {
    id: 2,
    title: "Tarpan Seva",
    description: "Sacred water offerings and prayers for ancestors at holy ghats",
    icon: "💧",
    includes: [
      "Tarpan ceremony",
      "Holy water offerings",
      "Pandit guidance",
      "Sacred mantras"
    ]
  },
  {
    id: 3,
    title: "Shraddh Ceremony",
    description: "Annual remembrance ceremony for departed souls with complete rituals",
    icon: "🔥",
    includes: [
      "Complete Shraddh ritual",
      "Food offerings",
      "Brahmin feeding",
      "Sacred fire ceremony"
    ]
  },
  {
    id: 4,
    title: "Narayan Bali",
    description: "Special ceremony for those who died unnaturally or suffered from diseases",
    icon: "🕊️",
    includes: [
      "Narayan Bali ritual",
      "Special offerings",
      "Extended ceremonies",
      "Peace prayers"
    ]
  },
  {
    id: 5,
    title: "Asthi Visarjan",
    description: "Sacred immersion of ashes in holy Falgu river with proper ceremonies",
    icon: "🌊",
    includes: [
      "Asthi Visarjan ceremony",
      "Holy river immersion",
      "Prayer offerings",
      "Final blessings"
    ]
  },
  {
    id: 6,
    title: "Gaya Ji Shraddh",
    description: "Complete Gaya Ji Shraddh package with visits to all important vedis",
    icon: "🛕",
    includes: [
      "All vedi visits",
      "Complete ceremonies",
      "Transportation",
      "Full day pandit guidance"
    ]
  }
];

export const serviceCategories = [
  {
    name: "Pinddaan Seva",
    description: "Traditional ancestor worship ceremonies",
    services: services.filter(s => [1, 3, 6].includes(s.id))
  },
  {
    name: "Tarpan & Water Ceremonies",
    description: "Sacred water offerings and rituals",
    services: services.filter(s => [2, 5].includes(s.id))
  },
  {
    name: "Special Ceremonies",
    description: "Specialized rituals for specific needs",
    services: services.filter(s => [4].includes(s.id))
  }
];
