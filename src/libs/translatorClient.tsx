export const translatorClient = (value: string) => {
  switch (value) {
    case "MTBF":
      return "Probabilidad de fallo";
    case "capacity":
      return "capacidad";
    case "read":
      return "lectura";
    case "write":
      return "escritura";
    case "architecture":
      return "arquitectura";
    case "integrated_graphics":
      return "gráficos integrados";
    case "launch_date":
      return "Fecha de lanzamiento";
    case "number_of_efficient_cores":
      return "Nucleos eficientes";
    case "number_of_performance_cores":
      return "Nucleos de rendimiento";
    case "stock_cooler":
      return "Cooler de Stock";
    case "total_cores":
      return "Nucleos totales";
    case "total_threads":
      return "Hilos totales";
    case "form_factor":
      return "formato";
    case "memory_type":
      return "Tipo de memoria";
    case "max_memory":
      return "Memoria maxima";
    case "boost_clock":
      return "Boost clock";
    case "manufacturer":
      return "Fabricante";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    default:
      return value;
  }
};
