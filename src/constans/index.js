export const featureProducts = [
  {
    id: 1,
    name: "RO Membrane (75 GPD)",
    price: 1200,
    discountPrice: 899,
    category: "Filter",
    image: "/images/membrane.webp",
  },
  {
    id: 2,
    name: "Sediment Filter",
    price: 250,
    discountPrice: 149,
    category: "Filter",
    image: "/images/Sediment.webp",
  },
  {
    id: 3,
    name: "Carbon Filter",
    price: 400,
    discountPrice: 299,
    category: "Filter",
    image: "/images/carbonFilter.jpg",
  },
  {
    id: 4,
    name: "Booster Pump",
    price: 2500,
    discountPrice: 1999,
    category: "Pump",
    image: "/images/Pump.png",
  },
];

export const servicePoints = [
  {
    id: 1,
    name: "Perfect Planning",
  },
  {
    id: 2,
    name: "Professional Design",
  },
  {
    id: 3,
    name: "Furniture Design",
  },
  {
    id: 4,
    name: "Interior Design",
  },
  {
    id: 5,
    name: "Exterior Design",
  },
  {
    id: 6,
    name: "24/7 Hours Support",
  },
];

export const plans = [
  {
    id: 1,
    name: "Basic",
    price: 99,
    duration: "Yearly",
    features: [
      "General living space",
      "Interior design advices",
      "Complete home redesign",
      "Modern interior planning",
      "Kitchen design",
    ],
    isFeatured: false,
  },
  {
    id: 2,
    name: "Premium",
    price: 199,
    duration: "Yearly",
    features: [
      "General living space",
      "Interior design advices",
      "Complete home redesign",
      "Modern interior planning",
      "Kitchen design",
    ],
    isFeatured: true, // 🔥 highlight this card
  },
  {
    id: 3,
    name: "Advanced",
    price: 299,
    duration: "Yearly",
    features: [
      "General living space",
      "Interior design advices",
      "Complete home redesign",
      "Modern interior planning",
      "Kitchen design",
    ],
    isFeatured: false,
  },
];
