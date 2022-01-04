const initialState = {
    balance: 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'WITHDRAW':
            return {
                balance: state.balance - action.data
            }
        case "DEPOSIT":
            return {
                balance: state.balance + action.data
            }
        default: 
            return state
    }
}

export default reducer;