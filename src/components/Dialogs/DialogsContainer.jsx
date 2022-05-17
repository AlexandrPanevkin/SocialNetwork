import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateMewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (newMessageText) => {
      dispatch(updateMewMessageTextCreator(newMessageText));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
