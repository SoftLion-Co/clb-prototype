type CountryInfo = {
  country: string;
  agriculturalCrops: string[];
  deliveryOptions: string[];
};

const countries: CountryInfo[] = [
  {
    country: "Germany",
    agriculturalCrops: [
      "Wheat",
      "Barley",
      "Corn",
      "Sorghum",
      "Rye",
      "Oats",
      "Sunflower",
      "Soybean",
      "Rapeseed",
      "Linseed",
    ],
    deliveryOptions: ["CIF", "FAC", "FCA", "CFR"],
  },
  {
    country: "Italy",
    agriculturalCrops: [
      "Wheat",
      "Barley",
      "Corn",
      "Sorghum",
      "Rye",
      "Oats",
      "Sunflower",
      "Soybean",
      "Rapeseed",
      "Linseed",
    ],
    deliveryOptions: ["CIF", "FAC", "FCA", "CFR"],
  },
];

export default countries;