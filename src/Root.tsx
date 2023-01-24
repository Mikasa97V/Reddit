import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader/root";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import './main.global.css';
import AppComponent from "./App";
import {rootReducer} from "./redux/rootReducer";
import {BrowserRouter} from 'react-router-dom';
import {StoreProvider} from "easy-peasy";
import {commentStore} from "./Easy-Peasy-Store/store";

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

function RootComponent() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <Provider store={store}>
            <StoreProvider store={commentStore}>
            {isMounted &&
            <BrowserRouter>
                <AppComponent/>
            </BrowserRouter>
            }
            </StoreProvider>
        </Provider>
    );
}

export const Root = hot(() => <RootComponent/>);
