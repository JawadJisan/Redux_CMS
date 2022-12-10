import { TOGGLE_TAGS } from "../actionsTypes/actionTypes"


export const initialState = {
    filters: {
        tags: [],
    }
}
const tagsFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAGS:
            if (!state.filters.tags.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: [...state.filters.tags, action.payload]
                    }
                }
            } else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: state.filters.tags.filter((tag) => tag !== action.payload)
                    }
                }
            }
        default:
            return state
    }
}
export default tagsFilterReducer