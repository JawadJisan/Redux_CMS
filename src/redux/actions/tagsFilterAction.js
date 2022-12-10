import { TOGGLE_TAGS } from "../actionsTypes/actionTypes";

export const toggleTags = (tagName) => {
    return {
        type: TOGGLE_TAGS,
        payload: tagName,
    }
}