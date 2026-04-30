import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello, how can I help you? You can ask me to flip a coin, roll a dice, or get today's date.", sender: "bot", id: 1 }
  ]);

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
