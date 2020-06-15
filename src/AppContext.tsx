import React from "react";
import { GameStore } from "./stores";

export const createStores = () => {
    return { gameStore: new GameStore() };
};

export const stores = createStores();

export const AppContext = React.createContext(stores);
