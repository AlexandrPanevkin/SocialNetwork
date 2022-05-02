const SEND_MESSAGE = "SEND-MESSAGE";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      state.newMessageText = "";
      state.messages.push({ id: 6, message: newMessage });
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
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
