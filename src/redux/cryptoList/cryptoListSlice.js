import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptoMetrics = createAsyncThunk(
  'cryptoMetrics/fetchCryptoMetrics',
  async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 20,
          page: 1,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  },
);

export const cryptoListSlice = createSlice({
  name: 'cryptoMetrics',
  initialState: {
    cryptoMetrics: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoMetrics.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCryptoMetrics.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        cryptoMetrics: action.payload,
      }))
      .addCase(fetchCryptoMetrics.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const selectCryptoMetrics = (state) => state.cryptoMetrics;
export default cryptoListSlice.reducer;
