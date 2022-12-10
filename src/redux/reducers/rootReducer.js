import contentReducer from "./contentReducer";
import tagsFilterReducer  from "./tagsFilterReducer";
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    content: contentReducer,
    filter: tagsFilterReducer,

})
export default rootReducer;
