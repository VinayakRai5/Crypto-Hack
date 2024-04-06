import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import InputBox from "./InputBox";
import { textOnly, multimodal, chat } from "../../Helpers/gemini";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const Header = () => {
  return (
    <div className="header bg-grey-900 text-white p-4">
      <h1 id="chat-header" className="flex items-center">
      <img src="chat3.png" alt="chatbot" className="h-12" />

        <b style={{ marginLeft: 12, fontSize: 35 }}>Financial Advisor -</b> <b style={{ marginTop: 4, marginLeft: 8, fontSize: 20 }}>Your Financial and Mental Health Supporter</b>
      </h1>
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

    // Check if the scroll position is at the bottom before updating messages
    const isScrolledToBottom = chatContainerRef.current.scrollHeight - chatContainerRef.current.clientHeight <= chatContainerRef.current.scrollTop + 1;

    // Update messages with the user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "User", timestamp: new Date() },
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

      // If scrolled to bottom before the update, scroll to the bottom again after updating messages
      if (isScrolledToBottom) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }

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
          sender: "User",
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
    <div className="chat-window flex flex-col bg-grey-900 text-white">
      <Header />
      <div className="chat-container flex-grow overflow-y-auto p-4" style={{ maxHeight: "calc(90vh - 200px)" }} ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "User" ? "bg-grey-900 text-white" : "bg-gray-600 text-white"} flex flex-col items-start space-y-1 py-2 px-4 rounded-md`}
          >
            <span className="font-bold">{message.sender}</span>
            {message.isImage ? (
              <>
                <img src={message.imageUrl} alt="Uploaded" className="max-w-xs rounded-lg" />
                {message.text && <p className="message-text mt-2">{message.text}</p>}
              </>
            ) : (
              <>
                <p className="message-text mt-2">{message.text}</p>
                <span className={`time text-sm`}>
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
