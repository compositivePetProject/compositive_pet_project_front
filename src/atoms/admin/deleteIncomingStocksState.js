import { atom } from "recoil";

export const deleteIncomingStocksState = atom({
    key: "deleteIncomingStocksState",
    default: [{
        productIncomingStockId: 0
    }]
})