import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import {ProductsData} from "./saleTypes";

interface SalesState {
  data: ProductsData;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: SalesState = {
  data: [],
  status: 'idle',
};

export const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = salesSlice.actions;

export const selectSales = (state: RootState) => state.sales.data;

export default salesSlice.reducer;
