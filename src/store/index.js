import { configureStore } from "@reduxjs/toolkit";
import menuListReducer from './modules/menu-list'

const store = configureStore({
    reducer: {
        menuList: menuListReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
     })
})

export default store