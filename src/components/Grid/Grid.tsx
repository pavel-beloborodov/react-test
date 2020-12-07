import React, { useCallback } from "react";
import cn from "classnames";
import IconButton from "../IconButton";
import styles from "./Grid.module.scss";
import { GridAction, GridColumn, GridProps, TableElement } from "./Grid.types";

function Grid<C extends TableElement>(props: GridProps<C>) {
  const { columns, className, data, onClick, actions = [] } = props;
  const hasActions = actions.length > 0;
  return (
    <table className={cn(styles.grid, className)}>
      <thead>
        <tr className={styles.gridRowHeader}>
          {columns.map((column) => (
            <th
              className={cn(styles.gridColumnHeader, {
                [styles.gridColumn_alignRight]: column.type === "number",
              })}
              key={column.key}
            >
              {column.label}
            </th>
          ))}
          {hasActions && <th className={styles.gridColumnHeader}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <GridItem
            key={row.id}
            actions={actions}
            columns={columns}
            onClick={onClick}
            row={row}
          />
        ))}
      </tbody>
    </table>
  );
}

interface GridItemProps {
  onClick?: (id: string) => void;
  columns: GridColumn[];
  row: any & {
    id: string;
  };
  actions: GridAction[];
}

function GridItem(props: GridItemProps) {
  const { row, onClick, columns, actions } = props;
  const onRowClick = useCallback(() => onClick && onClick(row.id), [
    row.id,
    onClick,
  ]);

  return (
    <tr
      className={cn(styles.gridRow, { [styles.gridRow_selectable]: !!onClick })}
      onClick={onRowClick}
    >
      {columns.map((column) => (
        <td
          className={cn(styles.gridColumn, {
            [styles.gridColumn_alignRight]: column.type === "number",
          })}
          key={column.key}
        >
          {row[column.key]}
        </td>
      ))}
      <td className={styles.gridActions}>
        {actions.map((action) => (
          <ActionItem
            key={action.id}
            Icon={action.Icon}
            onClick={action.onClick}
            label={action.label}
            id={row.id}
          />
        ))}
      </td>
    </tr>
  );
}

interface ActionItemProps extends GridAction {}

function ActionItem(props: ActionItemProps) {
  const { onClick, id, label, Icon } = props;
  const onActionClick = useCallback(
    (event) => {
      event.stopPropagation();
      onClick(id);
    },
    [id, onClick]
  );
  return (
    <IconButton
      className={styles.gridActionItem}
      Icon={Icon}
      title={label}
      onClick={onActionClick}
      invert={true}
    />
  );
}

export default React.memo(Grid);
