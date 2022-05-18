const SEND_MESSAGE = "SEND-MESSAGE";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = state.newMessageText;
      let stateCopy2 = {...state}
      stateCopy2.messages = [...state.messages]
      stateCopy2.messages.push({ id: 6, message: newMessage });
      state.newMessageText = "";
      return stateCopy2;
  }
    case UPDATE_NEW_MESSAGE_TEXT:
      let stateCopy2 = {...state}
      stateCopy2.newMessageText = action.newText;
      return stateCopy2;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})

export const updateMewMessageTextCreator = (text) => ({
 type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;
