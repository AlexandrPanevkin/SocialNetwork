import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 1, message: "Hi,  how are you?", likesCount: 12 },
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Masha" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
      newMessageText: "",
    },
    sideBar: {},
  },
  _callSubscriber() {
    console.log("asdasd");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

// export default store;
