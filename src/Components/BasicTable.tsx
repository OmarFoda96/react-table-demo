import React, { useMemo } from "react";

import { useTable } from "react-table";
import Columns from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import "./basicTable.css";

const BasicTable: React.FC = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,footerGroups } =
    useTable<any>({ columns, data });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any) => {
         return <tr  {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => {
              return (
                <th key={column.id} {...column.getHeaderProps}>{column.render("Header")}</th>
              );
            })}
          </tr>;
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup: any) => {
         return <tr  {...footerGroup.getHeaderGroupProps()}>
            {footerGroup.headers.map((column: any) => {
              return (
                <th key={column.id} {...column.getFooterProps}>{column.render("Footer")}</th>
              );
            })}
          </tr>;
        })}
      </tfoot>
    </table>
  );
};

export default BasicTable;
