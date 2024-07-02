import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { ComponentProps, useMemo } from "react";

interface Column<T> {
  key: string;
  renderCell: (item: T, index: number) => React.ReactNode;
  suppressHydrationWarning?: boolean;
  hideIf?: (items: T[]) => boolean;
  label: React.ReactNode | string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  getRowKey: (item: T) => string;
  tableProps?: ComponentProps<typeof ChakraTable>;
}

const Table = <T,>({
  columns,
  data,
  getRowKey,
  tableProps,
}: TableProps<T>): JSX.Element => {
  const filteredColumns = useMemo(() => {
    return columns.filter((column) => {
      if (column.hideIf) {
        return !column.hideIf(data);
      }
      return true;
    });
  }, [columns, data]);

  return useMemo(
    () => (
      <ChakraTable {...tableProps}>
        <Thead>
          <Tr>
            {filteredColumns.map((column) => (
              <Th key={column.key}>{column.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => {
            const key = getRowKey(row);

            return (
              <Tr key={key}>
                {filteredColumns.map((column) => {
                  return (
                    <Td
                      suppressHydrationWarning={column.suppressHydrationWarning}
                      key={[column.key, key].join("-")}
                    >
                      {column.renderCell(row, index)}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
    ),
    [tableProps, filteredColumns, data, getRowKey]
  );
};

export default Table;
