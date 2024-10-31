import { createSlice } from '@reduxjs/toolkit';

const quotes = [
    {
        quote: 'I have learned over the years that when one’s mind is made up, this diminishes fear.',
        author: 'Rosa Parks'
    },
    {
        quote: 'If you want to lift yourself up, lift up someone else.',
        author: 'Booker T. Washington'
    },
    {
        quote: 'It does not matter how slowly you go as long as you do not stop.',
        author: 'Confucius'
    }
];

const randomQuote = (quotes) => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        currentQuote: randomQuote(quotes),
        quotes: quotes
    },
    reducers: {
        nextQuote: (state, action) => {
            state.currentQuote = randomQuote(state.quotes)
        }
    }
});

export const { nextQuote } = quotesSlice.actions;