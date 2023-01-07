export const initState = null

export const reducer = (state, action) =>{
    // eslint-disable-next-line eqeqeq
    if (action.type=="USER") {
        return action.payload
    }
    return state
}