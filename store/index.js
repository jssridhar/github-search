import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

export const initStore = (preloadedState = {}) => {
    return configureStore({
        reducer,
        preloadedState
    })
};