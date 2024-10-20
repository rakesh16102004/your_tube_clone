import * as api from "../Api";
import { setcurrentuser } from "./currentuser.js";
// export const login=(authdata)=>async(dispatch)=>{
//     try {
//         const {data}=await api.login(authdata);
//         dispatch({type:"AUTH",data})
//         dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile'))))
//     } catch (error) {
//         alert(error)
//     }
// }

export const login = (authdata) => async (dispatch) => {
    try {
        const { data } = await api.login(authdata);
        console.log("Backend Response:", data); // Add this to check the response from the backend

        dispatch({ type: "AUTH", data });
        localStorage.setItem("Profile", JSON.stringify({ ...data }));
        
        console.log("Stored Profile in LocalStorage:", localStorage.getItem('Profile')); // Debug local storage
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile'))));
    } catch (error) {
        alert(error);
        console.log("Login Error:", error); // Add error handling
    }
};