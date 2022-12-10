import { ADD_BLOG_AS_HISTORY, ADD_CONTENT, GET_CONTENT, GET_SINGLE_CONTENT } from "../actionsTypes/actionTypes";

const initialState = {
    contents: [],
    history: [],
}

const contentReducer = (state = initialState, action) => {
    const selectedBlog = state.history.find(
        (product) => product._id === action.payload._id
    );
    switch (action.type) {
        case ADD_BLOG_AS_HISTORY:
            if (selectedBlog) {
                const newHistory = state.history.filter(
                    (product) => product._id !== selectedBlog._id
                );
                return {
                    ...state,
                    history: [...newHistory, selectedBlog],
                };
            }
            return {
                ...state,
                history: [...state.history, { ...action.payload }],
            };
        case ADD_CONTENT:
            return {
                ...state,
                contents: [...state.contents, action.payload]
            };

        case GET_CONTENT:
            return {
                ...state,
                contents: action.payload
            };
        case GET_SINGLE_CONTENT:
            return {
                ...state,
                historys: [...state.history, action.payload]
            };




        default:
            return state;
    }
}

export default contentReducer;