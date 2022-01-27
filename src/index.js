import state, { addPost, typeNewPost } from "./redux/state";
import { rerenderAllTree } from "./render";

rerenderAllTree(state, addPost, typeNewPost);
