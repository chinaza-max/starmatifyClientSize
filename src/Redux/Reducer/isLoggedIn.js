const logReducer=(state=false,action)=>{
    switch(action.type){
      case "isLogged":
            return !state;
       default:
            return state
    }
  }

  export default logReducer