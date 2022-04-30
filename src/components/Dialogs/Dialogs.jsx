import React from "react";
import { addMessageActionCreator, updateMewMessageTextActionCreator } from "../../redux/state";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    // let action = { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text };
    let action = updateMewMessageTextActionCreator(text)
    props.dispatch(action);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}{" "}
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.dialogsPage.newMessageText}
        />
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
