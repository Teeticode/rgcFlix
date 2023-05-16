import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPost } from "../helpers";

const initialState = {
    token:'',
    loading:false,
    error:'',
    user:{},
    message:''
}
export const registerUser = createAsyncThunk(
    'registerUser',
    async (body)=>{
        const result = await fetchPost('register', body)
        return result
    }
)

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.fulfilled, (state, {payload:{error, message}})=>{
            state.loading = false;
            if(error){
                state.message = ''
                state.error = error;
            }else{
                state.error = '';
                state.message = message;
            }
        })
        .addCase(registerUser.pending, (state,action)=>{
            state.loading = true;
        })
    }
})