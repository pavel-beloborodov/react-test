import { GridColumn } from "components/Grid";

export const FILM_COLUMNS: GridColumn[] = [
  { key: "title", label: "Title", type: "string" },
  { key: "episode_id", label: "Episode", type: "number" },
  { key: "opening_crawl", label: "Opening", type: "string" },
  { key: "director", label: "Director", type: "string" },
  { key: "producer", label: "Producer", type: "string" },
];
