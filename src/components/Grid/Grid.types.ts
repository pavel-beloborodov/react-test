import React from "react";

export interface GridAction {
  id: string;
  label: string;
  Icon: React.FunctionComponent;
  onClick: (id: string) => void;
}

export interface GridColumn {
  key: string;
  label: string;
  type: "string" | "number";
}

export interface TableElement {
  id: string;
}

export type GridProps<D extends TableElement> = {
  columns: GridColumn[];
  actions?: GridAction[];
  onClick?: (id: string) => void;
  data: D[];
  className?: string;
};
