import { getSingleContent } from "../actions/contentAction";



const singleContentData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://redux-assignment-server.onrender.com/product/${id}`);
        const data = await res.json()
        // console.log("From Thunk: ", data)
        if (data) {
            dispatch(getSingleContent(data))
        }

    }
}
export default singleContentData;