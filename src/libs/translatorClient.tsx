export const translatorClient = (value: string) => {
  switch (value) {
    case "MTBF":
      return "Probabilidad de fallo";
    case "capacity":
      return "Capacidad";
    case "read":
      return "Lectura";
    case "write":
      return "Escritura";
    case "architecture":
      return "Arquitectura";
    case "integrated_graphics":
      return "Gráficos integrados";
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
      return "Formato";
    case "memory_type":
      return "Tipo de memoria";
    case "max_memory":
      return "Memoria maxima";
    case "boost_clock":
      return "Boost clock";
    case "manufacturer":
      return "Fabricante";
    case "CAS_latency":
      return "Latencia CAS";
    case "memory_size":
      return "Memoria";
    case "speed":
      return "Velocidad";
    case "timing":
      return "Latencia";
    case "benchmark":
      return "Rendimiento";
    case "gpu_boost_clock":
      return "GPU Boost Clock";
    case "memory":
      return "Memoria";
    case "efficiency_rating":
      return "Eficiencia";
    case "wattage":
      return "Potencia";
    case "height":
      return "Altura";
    case "width":
      return "Ancho";
    case "cooler_type":
      return "Tipo de Cooler";
    case "fans":
      return "Ventiladores";
    case "fans_size":
      return "Tamano del Ventilador";
    case "noise_level":
      return "Ruido";   
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
