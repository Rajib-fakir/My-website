import React, { useState, useEffect, useRef } from 'react';
import '../../../public/styles/AiChat.css';

const AiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

console.log(window)

  const apiKey = "AIzaSyDm-vj2p6wgvORrYeFYGtHhhPvAqwOqQW4";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

const scrollToBottom = () => {
  chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  
  
};




  useEffect(() => {
    const storedMessages = JSON.parse(sessionStorage.getItem("chatMessages")) || [];
    setMessages(storedMessages);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);


useEffect(() => {
  scrollToBottom();
}, [typing]);





  const formatResponse = (text) => {
    return text.replace(/```(.*?)```/gs, (_, code) => {
      return `<pre><code>${code.trim()}</code></pre>`;
    });
  };

  const simulateTyping = async (text) => {
    window.scrollTo(0,window.innerHeight)
    setTyping(true);
    const formatted = formatResponse(text);
    const chars = formatted.split('');
    let current = '';
    for (let i = 0; i < chars.length; i++) {
      current += chars[i] === ' ' ? '\u00A0' : chars[i];
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = current;
        return [...newMessages];
     
      });




      

      await new Promise(res => setTimeout(res, 5)); // typing speed
    }
    
    setTyping(false);
  };

  const handleSend = async () => {
  if (input.trim() === '') return;

  const userMessage = { text: input, sender: 'user' };
  setMessages(prev => [...prev, userMessage]);

  try {
    const chatHistory = [...messages, userMessage].map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text.replace(/\u00A0/g, ' ') }]
    }));

    const requestBody = {
      contents: chatHistory
    };

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    const data = await res.json();
    const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply";

    const aiMessage = { text: "", sender: 'ai' };
    setMessages(prev => [...prev, aiMessage]);
    await simulateTyping(aiReply);

  } catch (error) {
    console.error(error);
    alert("Request failed");
  }

  setInput('');
};


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
    
   
  };

  return (
    <div className=" main-chat p-0 m-0 ">
<div className="chat-window p-2 py-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          />
        ))}
        {typing && <div className="typing-indicator">Typing...</div>}
    <div ref={chatEndRef} />    
      </div>


      <div className="row chat-input m-0 bg-light">
        <div className="card p-1 m-0 w-100">
          <input
            placeholder="Write your text"
            type="text"
            className="input-box p-3 w-100"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="d-flex justify-content-end align-items-end">
            <button
              disabled={input === ""}
              className={input === "" ? "disabled" : "enabled"}
              onClick={handleSend}
            >
              <i className="bi bi-send send p-0 m-0"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
