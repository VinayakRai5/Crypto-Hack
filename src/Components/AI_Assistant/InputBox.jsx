import { useState } from "react";

const InputBox = ({ sendMessage, loading, handleImageUpload, input, setInput }) => {

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="input-box">
      {loading && <progress style={{ width: "100%" }} />}
      <input
        disabled={loading}
        type="text"
        className="form-control"
        placeholder="Type a message..."
        value={loading ? "Loading..." : input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e, input)}
        style={{ display: "none" }}
        id="file-input"
      />
      <button onClick={() => document.getElementById("file-input").click()}>
        Upload Image
      </button>
    </div>
  );
};

export default InputBox;

