import { updateContent } from "../actions/contentAction";

const updateBlogContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://redux-assignment-server.onrender.com/product", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json()
        console.log(data)
        if (data.acknowledged) {
            dispatch(addContent({
                _id: data.insertedId,
                ...product,
            }))
            console.log("Product Added")
        }
    }
}
export default updateBlogContent;