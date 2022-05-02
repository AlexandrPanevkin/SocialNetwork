import React from "react";
import {
  sendMessageCreator,
  updateMewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let newMessageText = e.target.value;
    props.store.dispatch(updateMewMessageTextCreator(newMessageText));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            placeHolder="Enter yout email"
            onChange={onNewMessageChange}
            value={newMessageText}
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
