import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectSales, setData} from "./app-redux/salesSlice";
import jsonData from './data.json';
import {Grid, Paper, Typography} from "@mui/material";
import ProductDetails from "./components/ProductDetails";
import SalesGraph from "./components/SalesGraph";
import SalesTable from "./components/SalesTable";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const salesData = useSelector(selectSales);
  useEffect(() => {
    dispatch(setData(jsonData));
  }, [dispatch]);

  return (
    salesData.length > 0 ? (   <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <ProductDetails product={salesData[0]} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper elevation={0} sx={{ p: 2 }}>
          <Typography variant="h6" component="h2">
            Retail Sales
          </Typography>
          <SalesGraph sales={salesData[0].sales} />
        </Paper>
        <SalesTable sales={salesData[0].sales} />
      </Grid>
    </Grid>) : null

  );
};

export default App;
