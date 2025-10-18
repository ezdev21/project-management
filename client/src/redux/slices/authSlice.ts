import { createSlice } from "@reduxjs/toolkit";
import api from "../../libs/api";
import { useNavigate } from "react-router-dom";

interface User {
    name: string,
    email: string,
}

const initialState:User = {
    name: "",
    email: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
      logIn: (state, action) => {
        const navigate = useNavigate();
        api.post('/auth/login',action.payload)
        .then(res=>{
        if(res.status==200){
            state.name = action.payload.name,
            state.email = action.payload.email,
            localStorage.setItem('token',res.data.token)
            navigate("/dashboard")
        }
        })
        .catch(err=>{
        console.log(err)
        })
      },
      signUp: (state, action) => {
        api.post('/auth/signup',action.payload)
        .then(res=>{
            if(res.status == 200){
              state.name = action.payload.name;
              state.email = action.payload.email;
            }
            else{
             
            }
        })
        .catch(err=>{
            console.log(err)
        }) 
        },
    }
})   

export const { logIn, signUp } = authSlice.actions;

export default authSlice.reducer;