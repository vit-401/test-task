import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {SalesRecord} from "../app-redux/saleTypes";

const SalesGraph: React.FC<{ sales: SalesRecord[] }> = ({sales}) => (
  <LineChart width={1200} height={300} data={sales}>
    <XAxis dataKey="weekEnding"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Tooltip/>
    <Line type="monotone" dataKey="retailSales" stroke="#8884d8"/>
    <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d"/>
    {/* ... you might want to add more lines for unitsSold and retailerMargin ... */}
  </LineChart>
);

export default SalesGraph