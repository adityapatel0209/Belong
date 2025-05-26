import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_CONFIG } from "../../../config/api";

const genAI = new GoogleGenerativeAI(API_CONFIG.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: API_CONFIG.MODEL_NAME,
    systemInstruction: API_CONFIG.SYSTEM_INSTRUCTION,
});

const generationConfig = API_CONFIG.GENERATION_CONFIG;

const Aiui = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messageBoxRef = useRef(null);

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{ text: 'Hello there! How can I help you today?', type: 'response' }]);
        }
    }, [messages]);

    useEffect(() => {
        if (messageBoxRef.current) {
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (inputValue.trim().length > 0) {
            const userMessage = { text: inputValue, type: 'message' };
            setMessages(prev => [...prev, userMessage]);
            setInputValue('');
            setIsLoading(true);
            
            try {
                const responseText = await fetchResponse(inputValue);
                setMessages(prev => [...prev, { text: responseText, type: 'response' }]);
            } catch (error) {
                setMessages(prev => [...prev, { text: 'Sorry, I encountered an error. Please try again.', type: 'response' }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const fetchResponse = async (userMessage) => {
        const chatSession = model.startChat({
            generationConfig,
            history: [{ role: "user", parts: [{ text: userMessage }] }],
        });
        const result = await chatSession.sendMessage(userMessage);
        return result.response.text();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const formatText = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            .replace(/\*(.*?)\*/g, '<i>$1</i>')
            .replace(/\n/g, '<br />');
    };

    const renderMessage = (msg, index) => {
        const formattedText = formatText(msg.text);
        const isLastMessage = index === messages.length - 1;

        return (
            <div
                key={index}
                className={`flex ${msg.type === 'response' ? 'justify-start' : 'justify-end'} mb-4 animate-fade-in`}
            >
                <div className={`flex items-start max-w-[80%] ${msg.type === 'response' ? 'flex-row' : 'flex-row-reverse'}`}>
                    {msg.type === 'response' && (
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mr-2 flex-shrink-0 border border-white/30">
                            <img src="/man.png" alt="AI" className="w-6 h-6" />
                        </div>
                    )}
                    <div
                        className={`rounded-2xl px-4 py-2 ${
                            msg.type === 'response'
                                ? 'bg-white/20 backdrop-blur-md text-gray-800 border border-white/30'
                                : 'bg-blue-500/80 backdrop-blur-md text-white border border-white/30'
                        } shadow-lg`}
                    >
                        <span
                            className="text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: formattedText }}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] bg-background">
            <div className="flex-1 container mx-auto px-4 py-4 max-w-4xl">
                <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl h-full flex flex-col border border-white/30">
                    <div className="p-3 border-b border-white/30">
                        <h2 className="text-xl font-bold text-gray-800 text-center">Chat and Buddy</h2>
                        <p className="text-gray-600 text-center text-sm mt-1">
                            Your caring companion
                        </p>
                    </div>
                    
                    <div
                        ref={messageBoxRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
                    >
                        {messages.map((msg, index) => renderMessage(msg, index))}
                        {isLoading && (
                            <div className="flex justify-start mb-4 animate-pulse">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mr-2 border border-white/30">
                                        <img src="/man.png" alt="AI" className="w-6 h-6" />
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/30">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100" />
                                            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-3 border-t border-white/30">
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                            <input
                                type="text"
                                className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-sm"
                                placeholder="Type your message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !inputValue.trim()}
                                className={`p-2 rounded-full ${
                                    isLoading || !inputValue.trim()
                                        ? 'bg-gray-300/50 cursor-not-allowed'
                                        : 'bg-blue-500/80 hover:bg-blue-600/80 backdrop-blur-md'
                                } transition-all duration-200 border border-white/30`}
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aiui;
