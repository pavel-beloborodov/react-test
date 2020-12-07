import { GridColumn } from "components/Grid";

export const PLANET_DETAILS_COLUMNS: GridColumn[] = [
  { key: "name", label: "Name", type: "string" },
  { key: "rotation_period", label: "Rotation Period", type: "string" },
  { key: "orbital_period", label: "Orbital Period", type: "string" },
  { key: "diameter", label: "Diameter", type: "string" },
  { key: "climate", label: "Сlimate", type: "string" },
  { key: "gravity", label: "Gravity", type: "string" },
  { key: "terrain", label: "Terrain", type: "string" },
  { key: "surface_water", label: "Surface Water", type: "string" },
];
