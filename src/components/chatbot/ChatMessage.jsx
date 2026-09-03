import React from 'react';
import { Bot, User, Loader2 } from 'lucide-react';
import './ChatBot.css';

export function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`chat-message ${isUser ? 'chat-message--user' : 'chat-message--assistant'}`}>
      <div className="chat-message__avatar" aria-hidden="true">
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>
      <div className="chat-message__bubble">
        {message.content.split('\n').map((line, i) => (
          line ? <p key={i}>{line}</p> : <br key={i} />
        ))}
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="chat-message chat-message--assistant">
      <div className="chat-message__avatar" aria-hidden="true">
        <Bot size={14} />
      </div>
      <div className="chat-message__bubble chat-message__bubble--typing" aria-label="AI is typing">
        <span /><span /><span />
      </div>
    </div>
  );
}
