import React from 'react'
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

export default function Wrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}