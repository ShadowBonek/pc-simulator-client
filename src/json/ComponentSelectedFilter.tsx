import CpuFilter from "components_simulator/organisms/Filter/CpuFilter";
import MoboFilter from "components_simulator/organisms/Filter/MoboFilter";
import RamFilter from "components_simulator/organisms/Filter/RamFilter";
import GpuFilter from "components_simulator/organisms/Filter/GpuFilter";
import PowerFilter from "components_simulator/organisms/Filter/PowerFilter";
import CaseFilter from "components_simulator/organisms/Filter/CaseFilter";
import NvmeFilter from "components_simulator/organisms/Filter/NvmeFilter";
import SsdFilter from "components_simulator/organisms/Filter/SsdFilter";
import HddFilter from "components_simulator/organisms/Filter/HddFilter";
import CoolerFilter from "components_simulator/organisms/Filter/CoolerFilter";
import FanFilter from "components_simulator/organisms/Filter/FanFilter";
export const componentSelectedFilter: any = {
  cpu: CpuFilter,
  mobo: MoboFilter,
  ram: RamFilter,
  gpu: GpuFilter,
  power: PowerFilter,
  case: CaseFilter,
  nvme: NvmeFilter,
  ssd: SsdFilter,
  hdd: HddFilter,
  cooler: CoolerFilter,
  fan: FanFilter,
};
