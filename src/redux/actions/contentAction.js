import { ADD_BLOG_AS_HISTORY, ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, GET_SINGLE_CONTENT, UPDATE_CONTENT } from "../actionsTypes/actionTypes";

export const addContent = (content) => {
    return {
        type: ADD_CONTENT,
        payload: content,
    }
}

export const deletContent = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id,
    }
}
export const getContent = (data) => {
    return {
        type: GET_CONTENT,
        payload: data,
    }
}
export const addBlogAsHistory = (content) => {
    return {
        type: ADD_BLOG_AS_HISTORY,
        payload: content
    };
};

export const getSingleContent = (id) => {
    return {
        type: GET_SINGLE_CONTENT,
        payload: id,
    }
}
export const updateContent = (content) => {
    return {
        type: UPDATE_CONTENT,
        payload: content,
    }
}