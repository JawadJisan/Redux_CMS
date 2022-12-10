import { deletContent } from "../actions/contentAction";


const deletBlogContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://redux-assignment-server.onrender.com/product/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json()

        if (data.acknowledged) {
            dispatch(deletContent(id))
        }
    }
}
export default deletBlogContent;