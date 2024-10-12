import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./productApi";

export const getProducts = createAsyncThunk("products/getProducts",async()=>{
    const products = fetchProducts()
    return products;
});

const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:"idle",
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
    .addCase(getProducts.pending,(state)=>{
        state.status = "loading",
    })
    .addCase(getProducts.fulfilled,(state,action)=>{
        state.items = action.payloadl
        state.status = "succeeded";
    })
    .addCase(getProducts.rejected,(state)=>{
        state.status="failed"
    })
    }
})

export default productSlice.reducer;