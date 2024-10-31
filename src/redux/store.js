import { configureStore } from '@reduxjs/toolkit';
import { quotesSlice } from './slices/quotes';

export const store = configureStore({
    reducer: {
        quotes: quotesSlice.reducer
    }
})