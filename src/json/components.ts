// const TODAY = new Date().toISOString().substring(0, 10);
export const components: any = {
  // !CPU
  cpu: [
    { key: "type", inputType: "text", defaultValue: "cpu", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Intel", "Amd"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },
    { key: "total_cores", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "number_of_performance_cores", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "number_of_efficient_cores", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "total_threads", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "boost_clock", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "cache", inputType: "number", defaultValue: 0, readOnly: false },
    {
      key: "integrated_graphics",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Yes", "No"],
    },
    {
      key: "socket",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "LGA1700", "AM4"],
    },
    {
      key: "architecture",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Alder Lake", "Zen 3"],
    },
    { key: "launch_date", inputType: "text", defaultValue: "", readOnly: false },
    {
      key: "stock_cooler",
      inputType: "select",
      defaultValue: "no",
      readOnly: false,
      options: ["", "Yes", "No"],
    },
    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
    { key: "keywords", inputType: "text", defaultValue: "", readOnly: false },
  ],
  // !MOBO
  mobo: [
    { key: "type", inputType: "text", defaultValue: "mobo", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "MSI"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },
    {
      key: "platform",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "intel", "amd"],
    },
    {
      key: "socket",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "LGA1700", "AM4"],
    },
    {
      key: "chipset",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Z690", "H670", "B660", "H610", "X570", "B550", "A520"],
    },
    {
      key: "max_memory",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "32 GB", "64 GB", "128 GB"],
    },
    {
      key: "ram_type",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "DDR5", "DDR4"],
    },

    {
      key: "memory_speed_max",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [
        0, 6400, 6000, 5400, 5333, 5200, 5066, 5000, 4933, 4800, 4733, 4666, 4600, 4533, 4200, 4066,
        3200,
      ],
    },
    {
      key: "PCIe",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "PCIe 3.0", "PCIe 4.0", "PCIe 5.0"],
    },
    {
      key: "lan_speed_max",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "1G", "2.5G", "10G"],
    },

    {
      key: "form_factor",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "EATX", "ATX", "Micro ATX", "Mini ITX"],
    },
    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    {
      key: "power",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 100, 70, 60, 30],
    },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !RAM
  ram: [
    { key: "type", inputType: "text", defaultValue: "ram", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Corsair"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "memory_size",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: ["", "8 GB", "16 GB", "32 GB", "64 GB", "128 GB"],
    },
    {
      key: "speed",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 3600, 3466, 3200, 3000, 2666],
    },
    {
      key: "ram_type",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "DDR5", "DDR4"],
    },
    {
      key: "CAS_latency",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 18, 17, 16, 15, 13],
    },
    //     { key: "timing", inputType: "text", defaultValue: "", readOnly: false },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    {
      key: "power",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: ["", 3, 6, 12, 24, 48],
    },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !GPU
  gpu: [
    { key: "type", inputType: "text", defaultValue: "gpu", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Nvidia", "Amd"],
      //       options: ["", "AORUS", "Asus", "EVGA", "MSI", "Zotac"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "memory",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "4 GB", "8 GB", "10 GB", "12 GB", "16 GB", "24 GB", "32 GB"],
    },
    {
      key: "memory_type",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "GDDR5", "GDDR5X", "GDDR6", "GDDR6X"],
    },
    { key: "gpu_boost_clock", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "length", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "benchmark", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "launch_date", inputType: "text", defaultValue: "", readOnly: false },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !POWER
  power: [
    { key: "type", inputType: "text", defaultValue: "power", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Corsair"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "wattage",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 400, 450, 500, 550, 600, 650, 750, 850, 1000, 1200, 1500, 1600],
    },
    {
      key: "efficiency_rating",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: [
        "",
        "80 PLUS Titanium",
        "80 PLUS Platinum",
        "80 PLUS Gold",
        "80 PLUS Bronze",
        "80 PLUS",
      ],
    },
    {
      key: "modular",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Full", "Semi", "No"],
    },
    {
      key: "form_factor",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "ATX", "SFX"],
    },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !CASE
  case: [
    { key: "type", inputType: "text", defaultValue: "case", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Corsair"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "form_factor",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "SUPER TOWER", "FULL TOWER", "MID TOWER", "SMALL FORM"],
    },
    {
      key: "PSU",
      inputType: "select",
      defaultValue: "no",
      readOnly: false,
      options: ["no", "yes"],
    },
    { key: "height", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "length", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "width", inputType: "number", defaultValue: 0, readOnly: false },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !NVME
  nvme: [
    { key: "type", inputType: "text", defaultValue: "nvme", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Samsung"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "capacity",
      inputType: "select",
      defaultValue: "0",
      readOnly: false,
      options: ["0", "250 GB", "500 GB", "1 TB", "2 TB"],
    },
    { key: "read", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "write", inputType: "number", defaultValue: 0, readOnly: false },
    {
      key: "TBW",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "150 TB", "300 TB", "600 TB", "1200 TB"],
    },
    {
      key: "MTBF",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 1.5, 1.6],
    },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !SSD
  ssd: [
    { key: "type", inputType: "text", defaultValue: "ssd", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Samsung"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "capacity",
      inputType: "select",
      defaultValue: "0",
      readOnly: false,
      options: ["0", "250 GB", "500 GB", "1 TB", "2 TB", "4 TB"],
    },
    { key: "read", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "write", inputType: "number", defaultValue: 0, readOnly: false },
    {
      key: "TBW",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "150 TB", "300 TB", "600 TB", "1200 TB", "2400 TB"],
    },
    {
      key: "MTBF",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 1.5, 1.6],
    },
    {
      key: "form_factor",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, '2.5"', '3.5"'],
    },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !HDD
  hdd: [
    { key: "type", inputType: "text", defaultValue: "hdd", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Seagate"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "capacity",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["0", "1 TB", "2 TB", "3 TB", "4 TB", "6 TB", "8 TB"],
    },
    {
      key: "rpm",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: ["", 5400, 7200],
    },
    {
      key: "cache",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: ["", "64 MB", "256 MB"],
    },
    {
      key: "interface",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "SATA 6 Gb/s"],
    },
    {
      key: "form_factor",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, '2.5"', '3.5"'],
    },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !COOLER
  cooler: [
    { key: "type", inputType: "text", defaultValue: "cooler", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Corsair"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    {
      key: "cooler_type",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Air", "Liquid"],
    },
    {
      key: "fans",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 1, 2, 3],
    },
    {
      key: "fans_size",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 92, 95.5, 120, 140],
    },
    { key: "compatibility", inputType: "text", defaultValue: "", readOnly: false },

    { key: "noise_level", inputType: "text", defaultValue: "", readOnly: false },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    { key: "power", inputType: "select", defaultValue: 0, readOnly: false, options: [0, 10, 15] },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
  // !FAN
  fan: [
    { key: "type", inputType: "text", defaultValue: "fan", readOnly: true },
    {
      key: "manufacturer",
      inputType: "select",
      defaultValue: "",
      readOnly: false,
      options: ["", "Corsair"],
    },
    { key: "model", inputType: "text", defaultValue: "", readOnly: false },

    //     {
    //       key: "cooler_type",
    //       inputType: "select",
    //       defaultValue: "",
    //       readOnly: false,
    //       options: ["", "Air", "Liquid"],
    //     },
    //     {
    //       key: "fans",
    //       inputType: "select",
    //       defaultValue: 0,
    //       readOnly: false,
    //       options: [0, 1, 2, 3],
    //     },
    {
      key: "fans_size",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 92, 95.5, 120, 140],
    },
    //     { key: "compatibility", inputType: "text", defaultValue: "", readOnly: false },

    { key: "noise_level", inputType: "text", defaultValue: "", readOnly: false },

    { key: "price", inputType: "number", defaultValue: 0, readOnly: false },
    {
      key: "power",
      inputType: "select",
      defaultValue: 0,
      readOnly: false,
      options: [0, 3, 6, 9, 12],
    },
    { key: "quantity", inputType: "number", defaultValue: 1, readOnly: true },
    { key: "error", inputType: "text", defaultValue: "false", readOnly: true },
    { key: "warning", inputType: "text", defaultValue: "none", readOnly: true },
    {
      key: "available",
      inputType: "select",
      defaultValue: "true",
      readOnly: false,
      options: ["true", "false"],
    },
  ],
};
