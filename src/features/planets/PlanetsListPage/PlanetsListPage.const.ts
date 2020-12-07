import { GridColumn } from "components/Grid";

export const PLANET_LIST_COLUMNS: GridColumn[] = [
  { key: "name", label: "Name", type: "string" },
  { key: "rotation_period", label: "Rotation Period", type: "number" },
  { key: "orbital_period", label: "Orbital Period", type: "number" },
  { key: "diameter", label: "Diameter", type: "number" },
  { key: "climate", label: "Сlimate", type: "string" },
  { key: "gravity", label: "Gravity", type: "string" },
  { key: "terrain", label: "Terrain", type: "string" },
  { key: "surface_water", label: "Surface Water", type: "number" },
  { key: "film_count", label: "Film Count", type: "number" },
  { key: "residents_count", label: "Resident Count", type: "number" },
];
