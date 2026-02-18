export interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: number;
  priceDisplay: string;
  mileage: string;
  engine: string;
  transmission: string;
  color: string;
  condition: string;
  category: string;
  images: string[];
  specs: {
    horsepower: string;
    torque: string;
    acceleration: string;
    topSpeed: string;
    fuelType: string;
    seats: string;
    drivetrain: string;
  };
  description: string;
  badge?: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-AMG G63",
    brand: "Mercedes-Benz",
    year: 2023,
    price: 185000000,
    priceDisplay: "₦185,000,000",
    mileage: "4,200 km",
    engine: "4.0L V8 Biturbo",
    transmission: "9-Speed AMG Speedshift TCT",
    color: "Obsidian Black Metallic",
    condition: "Tokunbo",
    category: "SUV",
    badge: "Featured",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=85",
    ],
    specs: {
      horsepower: "577 hp",
      torque: "850 Nm",
      acceleration: "4.5s (0-100 km/h)",
      topSpeed: "220 km/h",
      fuelType: "Petrol",
      seats: "5",
      drivetrain: "4MATIC AWD",
    },
    description:
      "The iconic Mercedes-AMG G63 — a legend redefined. Commanding presence meets uncompromising performance. This unit is in pristine condition, fully optioned with Night Package, AMG Performance Exhaust, and Burmester Surround Sound.",
  },
  {
    id: 2,
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    year: 2023,
    price: 215000000,
    priceDisplay: "₦215,000,000",
    mileage: "6,800 km",
    engine: "4.4L P530 Twin-Turbo V8",
    transmission: "8-Speed Automatic",
    color: "Santorini Black",
    condition: "Tokunbo",
    category: "SUV",
    badge: "New Arrival",
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85",
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    ],
    specs: {
      horsepower: "530 hp",
      torque: "750 Nm",
      acceleration: "4.6s (0-100 km/h)",
      topSpeed: "250 km/h",
      fuelType: "Petrol",
      seats: "5",
      drivetrain: "All-Wheel Drive",
    },
    description:
      "The pinnacle of British luxury. This Range Rover Autobiography SWB is finished in Santorini Black with Ebony/Ivory interior. Equipped with Executive Comfort Seats, Meridian Signature Sound, and the Advanced Off-Road Capability Package.",
  },
  {
    id: 3,
    name: "BMW X7 M60i",
    brand: "BMW",
    year: 2023,
    price: 155000000,
    priceDisplay: "₦155,000,000",
    mileage: "8,100 km",
    engine: "4.4L Twin-Turbo V8",
    transmission: "8-Speed Steptronic Sport",
    color: "Frozen Black Metallic",
    condition: "Tokunbo",
    category: "SUV",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85",
      "https://images.unsplash.com/photo-1617531653332-bd46c16f7d5f?w=1200&q=85",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=1200&q=85",
    ],
    specs: {
      horsepower: "530 hp",
      torque: "750 Nm",
      acceleration: "4.7s (0-100 km/h)",
      topSpeed: "250 km/h",
      fuelType: "Petrol",
      seats: "7",
      drivetrain: "xDrive AWD",
    },
    description:
      "BMW's flagship SUV in its most powerful guise. The X7 M60i commands attention with its imposing split-headlight design and delivers supercar-rivalling performance. Full M Sport Package, Sky Lounge Panoramic Roof, and Bowers & Wilkins Diamond Surround Sound.",
  },
  {
    id: 4,
    name: "Lexus LX 600 Ultra Luxury",
    brand: "Lexus",
    year: 2023,
    price: 175000000,
    priceDisplay: "₦175,000,000",
    mileage: "3,500 km",
    engine: "3.5L Twin-Turbo V6",
    transmission: "10-Speed Direct-Shift Automatic",
    color: "Sonic Titanium",
    condition: "Tokunbo",
    category: "SUV",
    badge: "Hot",
    images: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=85",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=85",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=85",
    ],
    specs: {
      horsepower: "409 hp",
      torque: "650 Nm",
      acceleration: "6.7s (0-100 km/h)",
      topSpeed: "210 km/h",
      fuelType: "Petrol",
      seats: "4",
      drivetrain: "TNGA-F AWD",
    },
    description:
      "The LX 600 Ultra Luxury — Lexus's ultimate expression of comfort and refinement. The 4-seat Ultra Luxury configuration offers massage seats, dual 11.6\" rear screens, and an exclusive Kiriko glass effect trim that must be experienced in person.",
  },
  {
    id: 5,
    name: "Porsche Cayenne Turbo GT",
    brand: "Porsche",
    year: 2023,
    price: 195000000,
    priceDisplay: "₦195,000,000",
    mileage: "2,900 km",
    engine: "4.0L Twin-Turbo V8",
    transmission: "8-Speed PDK",
    color: "GT Silver Metallic",
    condition: "Tokunbo",
    category: "SUV",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1200&q=85",
    ],
    specs: {
      horsepower: "659 hp",
      torque: "850 Nm",
      acceleration: "3.3s (0-100 km/h)",
      topSpeed: "300 km/h",
      fuelType: "Petrol",
      seats: "4",
      drivetrain: "Porsche Traction Management AWD",
    },
    description:
      "The Cayenne Turbo GT is the fastest Cayenne ever built — a track-focused SUV that defies physics. Coilover suspension, carbon-ceramic brakes, and GT Sport steering wheel. 0-100 in 3.3 seconds. A genuine supercar in SUV clothing.",
  },
  {
    id: 6,
    name: "Toyota Land Cruiser 300 GR Sport",
    brand: "Toyota",
    year: 2024,
    price: 145000000,
    priceDisplay: "₦145,000,000",
    mileage: "1,200 km",
    engine: "3.5L Twin-Turbo V6",
    transmission: "10-Speed Automatic",
    color: "Precious Black Pearl",
    condition: "Brand New",
    category: "SUV",
    badge: "Brand New",
    images: [
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=1200&q=85",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85",
    ],
    specs: {
      horsepower: "415 hp",
      torque: "650 Nm",
      acceleration: "6.7s (0-100 km/h)",
      topSpeed: "210 km/h",
      fuelType: "Petrol",
      seats: "7",
      drivetrain: "Kinetic Dynamic Suspension AWD",
    },
    description:
      "The all-new Land Cruiser 300 GR Sport — Toyota's most capable and luxurious off-roader ever. KDSS suspension, Multi-Terrain Monitor, and a stunning GR Sport body kit. This is the vehicle that conquers both the city and the wild.",
  },
];

export const getBadgeColor = (badge?: string) => {
  switch (badge) {
    case "Featured":
      return "bg-[#C6A45C] text-[#0B0B0D]";
    case "New Arrival":
      return "bg-emerald-500 text-white";
    case "Hot":
      return "bg-red-500 text-white";
    case "Brand New":
      return "bg-blue-500 text-white";
    default:
      return "bg-[#C6A45C] text-[#0B0B0D]";
  }
};
