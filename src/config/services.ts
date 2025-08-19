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
  title: "Tripindi Shraddh",
  description: "A Vedic ritual performed to honor and liberate ancestors of the past three generations, seeking peace for their souls.",
  icon: "🕯️",
  includes: [
    "Sankalp and purification rituals",
    "Offerings of Pind daan and Tarpan",
    "Chanting of mantras for ancestors",
    "Priest-guided Shraddh ceremony",
    "Blessings for family well-being"
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
    services: services.filter(s => [2].includes(s.id))
  },
  {
    name: "Special Ceremonies",
    description: "Specialized rituals for specific needs",
    services: services.filter(s => [4, 5].includes(s.id))
  }
];
