const initialState = "";
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
        return action.user;
        default: 
        return state;
    }
}

export default reducer;

