export type CarSpecifications = {
  brand: string;
  models: {
    name: string;
    transmission: string;
    fuelType: string;
    seatNumbers: number;
    condition: string;
    price: number;
    rentPrice: number;
  }[];
};

const CarSpecifications: CarSpecifications[] = [
  {
    brand: "Toyota",
    models: [
      {
        name: "Camry",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 25000,
        rentPrice: 150,
      },
      {
        name: "Corolla",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 15000,
        rentPrice: 100,
      },
      {
        name: "RAV4",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 20000,
        rentPrice: 120,
      },
      {
        name: "Highlander",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 7,
        condition: "New",
        price: 35000,
        rentPrice: 200,
      },
      {
        name: "Prius",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 5,
        condition: "Used",
        price: 18000,
        rentPrice: 110,
      },
    ],
  },
  {
    brand: "Honda",
    models: [
      {
        name: "Civic",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
      },
      {
        name: "Accord",
        transmission: "CVT",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 18000,
        rentPrice: 110,
      },
      {
        name: "CR-V",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
      },
      {
        name: "Pilot",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 8,
        condition: "New",
        price: 35000,
        rentPrice: 200,
      },
      {
        name: "Odyssey",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
      },
    ],
  },
  {
    brand: "Ford",
    models: [
      {
        name: "F-150",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 6,
        condition: "New",
        price: 40000,
        rentPrice: 220,
      },
      {
        name: "Mustang",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "Used",
        price: 30000,
        rentPrice: 170,
      },
      {
        name: "Explorer",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 35000,
        rentPrice: 190,
      },
      {
        name: "Escape",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 25000,
        rentPrice: 150,
      },
      {
        name: "Focus",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 20000,
        rentPrice: 120,
      },
    ],
  },
  {
    brand: "Chevrolet",
    models: [
      {
        name: "Silverado",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 40000,
        rentPrice: 220,
      },
      {
        name: "Camaro",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "Used",
        price: 35000,
        rentPrice: 190,
      },
      {
        name: "Equinox",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
      },
      {
        name: "Traverse",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 45000,
        rentPrice: 250,
      },
      {
        name: "Malibu",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
      },
    ],
  },
  {
    brand: "Volkswagen",
    models: [
      {
        name: "Golf",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
      },
      {
        name: "Passat",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 20000,
        rentPrice: 120,
      },
      {
        name: "Tiguan",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
      },
      {
        name: "Jetta",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 23000,
        rentPrice: 140,
      },
      {
        name: "Atlas",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 35000,
        rentPrice: 200,
      },
    ],
  },
  {
    brand: "BMW",
    models: [
      {
        name: "3 Series",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 40000,
        rentPrice: 220,
      },
      {
        name: "5 Series",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
      },
      {
        name: "X3",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 45000,
        rentPrice: 250,
      },
      {
        name: "X5",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 60000,
        rentPrice: 350,
      },
      {
        name: "i8",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 2,
        condition: "Used",
        price: 100000,
        rentPrice: 500,
      },
    ],
  },
  {
    brand: "Mercedes-Benz",
    models: [
      {
        name: "C-Class",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 45000,
        rentPrice: 250,
      },
      {
        name: "E-Class",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 55000,
        rentPrice: 320,
      },
      {
        name: "GLC",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
      },
      {
        name: "GLE",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 65000,
        rentPrice: 380,
      },
      {
        name: "S-Class",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 80000,
        rentPrice: 450,
      },
    ],
  },
  {
    brand: "Audi",
    models: [
      {
        name: "A4",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 40000,
        rentPrice: 220,
      },
      {
        name: "A6",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
      },
      {
        name: "Q5",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 45000,
        rentPrice: 250,
      },
      {
        name: "Q7",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 60000,
        rentPrice: 350,
      },
      {
        name: "TT",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
      },
    ],
  },
  {
    brand: "Lexus",
    models: [
      {
        name: "ES",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 45000,
        rentPrice: 250,
      },
      {
        name: "RX",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 55000,
        rentPrice: 320,
      },
      {
        name: "NX",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
      },
      {
        name: "LS",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 65000,
        rentPrice: 380,
      },
      {
        name: "GX",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 80000,
        rentPrice: 450,
      },
    ],
  },
  {
    brand: "Nissan",
    models: [
      {
        name: "Altima",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
      },
      {
        name: "Maxima",
        transmission: "CVT",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
      },
      {
        name: "Rogue",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
      },
      {
        name: "Pathfinder",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 35000,
        rentPrice: 200,
      },
      {
        name: "Frontier",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
      },
    ],
  },
  {
    brand: "Mazda",
    models: [
      {
        name: "Mazda3",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 23000,
        rentPrice: 140,
      },
      {
        name: "Mazda6",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 26000,
        rentPrice: 160,
      },
      {
        name: "CX-5",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
      },
      {
        name: "CX-9",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 40000,
        rentPrice: 240,
      },
      {
        name: "MX-5",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 35000,
        rentPrice: 200,
      },
    ],
  },
  {
    brand: "Hyundai",
    models: [
      {
        name: "Elantra",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
      },
      {
        name: "Sonata",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
      },
      {
        name: "Tucson",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
      },
      {
        name: "Santa Fe",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 38000,
        rentPrice: 220,
      },
      {
        name: "Kona",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 26000,
        rentPrice: 160,
      },
    ],
  },
  {
    brand: "Kia",
    models: [
      {
        name: "Optima",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 23000,
        rentPrice: 140,
      },
      {
        name: "Sorento",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 35000,
        rentPrice: 200,
      },
      {
        name: "Sportage",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
      },
      {
        name: "Telluride",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 8,
        condition: "New",
        price: 40000,
        rentPrice: 240,
      },
      {
        name: "Forte",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 22000,
        rentPrice: 130,
      },
    ],
  },
  {
    brand: "Subaru",
    models: [
      {
        name: "Impreza",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 24000,
        rentPrice: 150,
      },
      {
        name: "Outback",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
      },
      {
        name: "Forester",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
      },
      {
        name: "Legacy",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 32000,
        rentPrice: 200,
      },
      {
        name: "Crosstrek",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 26000,
        rentPrice: 160,
      },
    ],
  },
  {
    brand: "Jeep",
    models: [
      {
        name: "Wrangler",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "New",
        price: 35000,
        rentPrice: 220,
      },
      {
        name: "Cherokee",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
      },
      {
        name: "Grand Cherokee",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 38000,
        rentPrice: 240,
      },
      {
        name: "Renegade",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 25000,
        rentPrice: 150,
      },
      {
        name: "Compass",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 27000,
        rentPrice: 170,
      },
    ],
  },
  {
    brand: "Volvo",
    models: [
      {
        name: "S60",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 38000,
        rentPrice: 240,
      },
      {
        name: "S90",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 45000,
        rentPrice: 280,
      },
      {
        name: "XC40",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 40000,
        rentPrice: 250,
      },
      {
        name: "XC60",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 48000,
        rentPrice: 300,
      },
      {
        name: "XC90",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 52000,
        rentPrice: 320,
      },
    ],
  },
  {
    brand: "Porsche",
    models: [
      {
        name: "911",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "New",
        price: 100000,
        rentPrice: 500,
      },
      {
        name: "Cayenne",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 90000,
        rentPrice: 450,
      },
      {
        name: "Macan",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 80000,
        rentPrice: 400,
      },
      {
        name: "Panamera",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "New",
        price: 110000,
        rentPrice: 550,
      },
      {
        name: "Boxster",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 95000,
        rentPrice: 475,
      },
    ],
  },
  {
    brand: "Tesla",
    models: [
      {
        name: "Model 3",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 5,
        condition: "New",
        price: 50000,
        rentPrice: 300,
      },
      {
        name: "Model S",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 5,
        condition: "Used",
        price: 80000,
        rentPrice: 500,
      },
      {
        name: "Model X",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 7,
        condition: "Used",
        price: 90000,
        rentPrice: 550,
      },
      {
        name: "Model Y",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 5,
        condition: "New",
        price: 60000,
        rentPrice: 350,
      },
      {
        name: "Cybertruck",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 6,
        condition: "New",
        price: 70000,
        rentPrice: 400,
      },
    ],
  },
  {
    brand: "Ferrari",
    models: [
      {
        name: "458 Italia",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 250000,
        rentPrice: 1500,
      },
      {
        name: "F8 Tributo",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "New",
        price: 300000,
        rentPrice: 1800,
      },
      {
        name: "812 Superfast",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "New",
        price: 350000,
        rentPrice: 2000,
      },
      {
        name: "Portofino",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 280000,
        rentPrice: 1600,
      },
      {
        name: "SF90 Stradale",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 2,
        condition: "New",
        price: 500000,
        rentPrice: 3000,
      },
    ],
  },
  {
    brand: "Lamborghini",
    models: [
      {
        name: "Huracan",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "New",
        price: 300000,
        rentPrice: 1800,
      },
      {
        name: "Aventador",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 400000,
        rentPrice: 2400,
      },
      {
        name: "Urus",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 350000,
        rentPrice: 2000,
      },
      {
        name: "Sian",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 2,
        condition: "New",
        price: 3000000,
        rentPrice: 15000,
      },
      {
        name: "Veneno",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 5000000,
        rentPrice: 25000,
      },
    ],
  },
];

export default CarSpecifications;
