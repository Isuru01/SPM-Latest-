import React, { useState } from "react";
import "./chtbot.css";
import NavBar from "../../components/nav/NavBar";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";
const systemMessage = {
  role: "system",
  content:
    "at the beginning you should welcome student and ask name. after you ask which lab sheet they need support.sheet1 include if conditions questions,sheet2 has loop question programming and sheet 3 has memory management questions. after student choose lab sheet, you can answer questions. after answer also ask student satisfied with that. after that ask feedback for answer and leave chat. if student ask anything not related to scope dont answer and say ask within range.If user say does not understand, please provide link to refer and sugget write a mail to lab instructor kamal.s@sliit.lk",
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I'm Interactive programming assistance chatbot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  const handleChatIconClick = () => {
    setShowImage(false);
  };

  return (
    <div className="App">
      <div className="dv1">
        <NavBar />
      </div>
      <h1>Wellcome to Interactive Programming assistance tool</h1>
      {showImage && (
        <img
          className="img1"
          src="https://chat360.io/wp-content/uploads/2021/05/Top-10-website-chatbot-examples-of-2022.svg"
          alt="robot"
        />
      )}
      <div style={{ position: "center", height: "650px", width: "700px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "fixed",
            bottom: isChatOpen ? "380px" : "20px",
            right: "20px",
            zIndex: "999",
          }}
        >
          {!isChatOpen ? (
            <img
              className="img2"
              src="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png" // image source
              alt="Chatbot Icon"
              style={{ width: "80px", height: "80px", cursor: "pointer" }}
              onClick={() => {
                setIsChatOpen(true);
                handleChatIconClick();
              }}
            />
          ) : null}
        </div>
        {isChatOpen ? (
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="Programming Assistance is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        ) : null}
      </div>
    </div>
  );
}

export default Chatbot;
