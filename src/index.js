import state, { addPost, typeNewPost, addMessage, typeNewMessage } from "./redux/state";
import { rerenderAllTree } from "./render";

rerenderAllTree(state, addPost, typeNewPost, addMessage, typeNewMessage);
