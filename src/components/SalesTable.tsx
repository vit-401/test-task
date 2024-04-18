import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {SalesRecord} from "../app-redux/saleTypes";


const SalesTable: React.FC<{ sales: SalesRecord[] }> = ({ sales }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="sales table">
        <TableHead>
          <TableRow>
            <TableCell>Week Ending</TableCell>
            <TableCell align="right">Retail Sales</TableCell>
            <TableCell align="right">Wholesale Sales</TableCell>
            <TableCell align="right">Units Sold</TableCell>
            <TableCell align="right">Retailer Margin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map((row) => (
            <TableRow
              key={row.weekEnding}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.weekEnding}
              </TableCell>
              <TableCell align="right">{row.retailSales}</TableCell>
              <TableCell align="right">{row.wholesaleSales}</TableCell>
              <TableCell align="right">{row.unitsSold}</TableCell>
              <TableCell align="right">{row.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
