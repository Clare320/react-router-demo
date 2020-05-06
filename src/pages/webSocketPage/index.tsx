import React from "react";
import { Button, Input, Divider } from "antd";

const { TextArea } = Input;

export default function TestWebSocketPage() {
  let socket: WebSocket;

  const handleOpen = () => {
    socket = new WebSocket("ws://echo.websocket.org");
    socket.onopen = (e) => {
      console.log("WebSocket is open now.");
    };
    socket.onmessage = (e) => {
      console.log("onmessage-->", e.data);
    };
    socket.onclose = (e) => {
      console.log("onclose-->", e);
    };
    socket.onerror = (e) => {
      console.log("onerror-->", e);
    };
  };
  const handleClose = () => {
    socket.close();
  };

  return (
    <div>
      <div style={{ marginTop: 10 }}>
        <Button onClick={handleOpen}>Open</Button>
        <Button style={{ marginLeft: 8 }} onClick={handleClose}>
          Close
        </Button>
      </div>
      <TextArea rows={10} style={{ margin: 20, maxWidth: 750 }} />
      <Divider />
      <div>
        <Input placeholder='输入信息' style={{ maxWidth: 680 }} />
        <Button style={{ marginLeft: 10 }}>Send</Button>
      </div>
    </div>
  );
}
