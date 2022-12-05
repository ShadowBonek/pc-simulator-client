export const componentSelectedQuery: any = {
  //!CPU
  cpu: {
    manufacturer: ["", "amd", "intel"],
    socket: ["", "lga1700", "am4"],
    integrated_graphics: ["", "Si", "No"],
  },
  //!MOBO
  mobo: {
    manufacturer: ["", "MSI"],
    platform: ["", "intel", "amd"],
    ram_type: ["", "DDR5", "DDR4"],
    socket: ["", "lga1700", "am4"],
    lan_speed_max: ["", "1G", "2.5G", "10G"],
    form_factor: ["", "EATX", "ATX", "Micro ATX", "Mini ITX"],
    PCIe: ["", "PCIe 3.0", "PCIe 4.0", "PCIe 5.0"],
  },
  //!RAM
  ram: {
    manufacturer: ["", "Corsair"],
    memory_size: ["", "8 GB", "16 GB", "32 GB", "64 GB", "128 GB"],
    ram_type: ["", "DDR4", "DDR5"],
  },
  //!GPU
  gpu: {
    manufacturer: ["", "Nvidia", "Amd"],
    memory: ["", "4 GB", "8 GB", "10 GB", "12 GB", "16 GB", "24 GB", "32 GB"],
    memory_type: ["", "GDDR5", "GDDR5X", "GDDR6", "GDDR6X"],
  },
  //!POWER
  power: {
    manufacturer: ["", "Corsair"],
    efficiency_rating: [
      "",
      "80 PLUS Titanium",
      "80 PLUS Platinum",
      "80 PLUS Gold",
      "80 PLUS Bronze",
      "80 PLUS",
    ],
    wattage: ["", 400, 450, 500, 550, 600, 650, 750, 850, 1000, 1200, 1500, 1600],
    form_factor: ["", "ATX", "SFX"],
    modular: ["", "Full", "Semi", "No"],
  },
  //!CASE
  case: {
    manufacturer: ["", "Corsair"],
    form_factor: ["", "SUPER TOWER", "FULL TOWER", "MID TOWER", "SMALL FORM"],
    PSU: ["", "Si", "No"],
  },
  //!NVME
  nvme: {
    manufacturer: ["", "Samsung"],
    capacity: ["", "250 GB", "500 GB", "1 TB", "2 TB"],
  },
  //!SSD
  ssd: {
    manufacturer: ["", "Samsung"],
    capacity: ["", "250 GB", "500 GB", "1 TB", "2 TB", "4 TB"],
  },
  //!HDD
  hdd: {
    manufacturer: ["", "Seagate"],
    capacity: ["", "1 TB", "2 TB", "3 TB", "6 TB", "8 TB"],
    rpm: ["", 5400, 7200],
    cache: ["", "64 MB", "256 MB"],
  },
  //!COOLER
  cooler: {
    manufacturer: ["", "Corsair"],
    cooler_type: ["", "air", "liquid"],
    socket: ["", 1700, "am4"],
    fans: ["", 1, 2, 3],
    fans_size: ["", 120, 140],
  },
  //!FAN
  fan: {
    manufacturer: ["", "Corsair"],
    //     cooler_type: ["", "air", "liquid"],
    //     socket: ["", 1700, "am4"],
    //     fans: ["", 1, 2, 3],
    fans_size: ["", 120, 140],
  },
};
