const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "Fetch succes/ replace later":
        return { ...state, ...payload }

    default:
        return state
    }
}
