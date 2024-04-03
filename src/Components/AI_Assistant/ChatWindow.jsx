import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MDEditor, { image } from "@uiw/react-md-editor";
import InputBox from "./InputBox";
import logo from "../../assets/images/assistant.png";
import "../../assets/ChatWindow.css"; // For custom styles
import { textOnly, multimodal, chat } from "../../Helpers/gemini";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const Header = () => {
  return (
    <div className="header">
      <h1 id="chat-header">
        <img src={logo} alt="gemini" width={120} />
        <b style={{ marginLeft: 5 }}>Chatbot</b>
      </h1>
      <small>Our Helpful Assistant at your needs</small>
    </div>
  );
};

const ChatWindow = () => {
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Auto-scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (inputText) => {
    if (!inputText) {
      return;
    }

    // Update messages with the user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user", timestamp: new Date() },
    ]);

    setLoading(true);

    try {
      const text = await chat(inputText);

      // Update messages with the AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: text,
          sender: "Assistant",
          timestamp: new Date(),
        },
      ]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("generateContent error: ", error);
    }
  };

  const handleImageUpload = (event, inputText) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = async () => {
      const imageBinary = reader.result;
      const imageUrl = `data:${file.type};base64,${btoa(imageBinary)}`;
  
      // Update messages with the user image
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          imageUrl: imageUrl,
          text: input,
          sender: "user",
          timestamp: new Date(),
          isImage: true,
        },
      ]);
  
      setLoading(true);
  
      try {
        const text = await multimodal(imageBinary, input);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: text,
            sender: "Assistant",
            timestamp: new Date(),
          },
        ]);
      } catch (error) {
        console.error("multimodal error: ", error);
      } finally {
        setInput(""); // Clear the input box
        setLoading(false);
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className={`chat-window`}>
      <Header />
      <div className="chat-container" ref={chatContainerRef}>
      {messages.map((message, index) => (
  <div
    key={index}
    className={`message ${message.sender === "user" ? "user" : "ai"}`}
  >
    {message.isImage ? (
      <>
        <img src={message.imageUrl} alt="Uploaded" />
        {message.text && <p className="message-text">{message.text}</p>}
      </>
    ) : (
      <>
        <p className="message-text">{message.text}</p>
        <span
          className={`time ${message.sender === "user" ? "user" : "ai"}`}
        >
          {message.timestamp
            ? dayjs(message.timestamp).format("DD.MM.YYYY HH:mm:ss")
            : ""}
        </span>
      </>
    )}
  </div>
))}
      </div>
      <InputBox sendMessage={sendMessage} loading={loading} handleImageUpload={handleImageUpload} input={input} setInput={setInput} />
    </div>
  );
};

export default ChatWindow;
