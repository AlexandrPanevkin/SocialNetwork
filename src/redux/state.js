const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const SEND_MESSAGE = 'SEND-MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      let newMessage = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = "";
      this._state.dialogsPage.messages.push({id: 6, message: newMessage});
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT, newText: text })
 
   export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateMewMessageTextCreator = (text) => ({
   type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;
