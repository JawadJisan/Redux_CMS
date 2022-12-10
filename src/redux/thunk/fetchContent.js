import { getContent } from "../actions/contentAction";

const loadContentData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://redux-assignment-server.onrender.com/products");
        const data = await res.json()

        if (data.data.length) {
            dispatch(getContent(data.data))
        }

    }
}
export default loadContentData;