import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../libs/api";
import { useNavigate } from "react-router-dom";

interface User {
    name: string,
    email: string,
}

interface Registration{
    name:string,
    email:string,
    password:string,
    passwordConfirmation:string
}

const initialState:User = {
    name: "",
    email: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
      logIn: (state, action: PayloadAction<{email:string,password:string}>) => {
        const navigate = useNavigate();
        api.post('/auth/login',action.payload)
        .then(res=>{
        if(res.status==200){
            state.name = res.data.name,
            state.email = res.data.email,
            localStorage.setItem('token',res.data.token)
            navigate("/dashboard")
        }
        })
        .catch(err=>{
        console.log(err)
        })
      },
      signUp: (state, action: PayloadAction<Registration>) => {
        api.post('/auth/signup',action.payload)
        .then(res=>{
            if(res.status == 200){
              state.name = res.data.name;
              state.email = res.data.email;
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