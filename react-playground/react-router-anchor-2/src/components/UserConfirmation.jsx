import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "antd";

const container = document.createElement("div");
const UserConfirmation = (payload, callback) => {
  const { action, location, curHref, message } = JSON.parse(payload);

 
  const handlerModalClose = (callbackState) => {
    ReactDOM.unmountComponentAtNode(container);

 
    callback(callbackState);

    if (!callbackState && action === "POP") {
      window.history.replaceState(null, null, curHref);
    }
  };

  ReactDOM.render(
    <Modal
      visible={true}
      onCancel={() => handlerModalClose(false)}
      onOk={() => handlerModalClose(true)}
      title="Warning"
    >
      {message}
    </Modal>,
    container
  );
};
export default UserConfirmation;
