import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cryptoDetails: [],
  isLoading: false,
  error: null,
  fetched: false,
};

export const fetchCryptoDetails = createAsyncThunk(
  'crypto/fetchCryptoDetails',
  async (id) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?market_data=true`);
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const cryptoDetailsSlice = createSlice({
  name: 'cryptoDetails',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCryptoDetails.fulfilled, (state, action) => {
        const transformedData = [
          {
            id: action.payload.id,
            symbol: action.payload.symbol,
            name: action.payload.name,
            currentPrice: action.payload.market_data.current_price.usd,
            coinGeckoScore: action.payload.coingecko_score,
            marketCapRank: action.payload.market_cap_rank,
            liquidityScore: action.payload.liquidity_score,
            publicInterestScore: action.payload.public_interest_score,
            lastUpdated: action.payload.last_updated,
            largeImage: action.payload.image.large,
          },
        ];
        state.cryptoDetails = transformedData;
        state.isLoading = false;
        state.fetched = true;
        state.error = null;
      })
      .addCase(fetchCryptoDetails.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default cryptoDetailsSlice.reducer;
