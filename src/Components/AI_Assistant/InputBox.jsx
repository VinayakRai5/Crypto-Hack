import { useState } from "react";

const InputBox = ({ sendMessage, loading, handleImageUpload, input, setInput }) => {

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-grey-900 p-4">
      {loading && <progress className="w-full" />}
      <input
        disabled={loading}
        type="text"
        className="form-control bg-grey text-white px-4 py-2 rounded-md w-full focus:outline-none"
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
      <button style={{marginTop: 20}}className="bg-white text-black align-center px-6 py-2 rounded-md" onClick={() => document.getElementById("file-input").click()}>
      <b style={{ marginLeft: 2, fontSize: 20 }}>Upload Image</b> 
      </button>
    </div>
  );
};

export default InputBox;