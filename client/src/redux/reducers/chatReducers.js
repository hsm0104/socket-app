const initialState = {
    inputState: false
};

export default function chatReducers(state = initialState, action){
    switch (action.type) {
        case "CHANGEINPUTSTATE":
            return{
                ...state,
                inputState: !state.inputState
            }
    
        default:
            return state;
    }
}