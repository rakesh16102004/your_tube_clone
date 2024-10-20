// const authreducer=(state={data:null},actions)=>{
//     switch (actions.type) {
//         case "AUTH":
//             localStorage.setItem("Profile",JSON.stringify({...actions?.data}));
//             return {...state,data:actions?.data}
    
//         default:
//             return state;
//     }
// }


const authreducer = (state = { data: null }, actions) => {
    switch (actions.type) {
        case "AUTH":
            console.log("Action Data in Reducer:", actions?.data); // Debug log to check action data
            localStorage.setItem("Profile", JSON.stringify({ ...actions?.data }));
            return { ...state, data: actions?.data };
            
            default:
                return state;
            }
        };
        
export default authreducer;