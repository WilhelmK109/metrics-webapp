import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCryptoMetrics = createAsyncThunk(
  'cryptoMetrics/fetchCryptoMetrics',
  async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD&api_key=bf47d143a098761ab1094a71d87e761deba8b1998957ab709631b191d2bdd0bf');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.Data;
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
