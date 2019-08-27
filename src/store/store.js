import { createStore } from "redux";
import rootReducer from "../reducer/reducer";

const configStore = ( initial )  => {
    return createStore(rootReducer, initial);
}

export default configStore;