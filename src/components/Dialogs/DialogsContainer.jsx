import React from "react";
import {
  sendMessageCreator,
  updateMewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (newMessageText) => {
    props.store.dispatch(updateMewMessageTextCreator(newMessageText));
  };

  return (
    <Dialogs
      updateNewMessageText={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
