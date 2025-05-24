import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "<Use your own API Key"; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are my caring companion, here to help me navigate my feelings and foster connections, and not make me feel isolated. my name is Aditya. you can call me by my name for the responses",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const Aiui = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [topMargin, setTopMargin] = useState(16); // Adjustable top margin
    const [bottomMargin, setBottomMargin] = useState(4); // Adjustable bottom margin
    const messageBoxRef = useRef(null);

    useEffect(() => {
        // Initial greeting message
        if (messages.length === 0) {
            setMessages([{ text: 'Hello there! How can I help you today?', type: 'response' }]);
        }
    }, [messages]);

    useEffect(() => {
        // Scroll to bottom when a new message is added
        if (messageBoxRef.current) {
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (inputValue.length > 0) {
            const userMessage = { text: inputValue, type: 'message' };
            setMessages(prev => [...prev, userMessage]);
            setInputValue('');
            // Placeholder response while waiting for the AI response
            const responseMessage = { text: '...', type: 'response' };
            setMessages(prev => [...prev, responseMessage]);
            const responseText = await fetchResponse(inputValue);
            setMessages(prev => {
                const updatedMessages = [...prev];
                updatedMessages[updatedMessages.length - 1] = { text: responseText, type: 'response' };
                return updatedMessages;
            });
        }
    };

    const fetchResponse = async (userMessage) => {
        const chatSession = model.startChat({
            generationConfig,
            history: [{ role: "user", parts: [{ text: userMessage }] }],
        });
        const result = await chatSession.sendMessage(userMessage);
        let responseText = result.response.text();
        return cleanResponse(responseText);
    };

    const cleanResponse = (responseText) => {
        return responseText.replace(/\./g, '').trim();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const formatText = (text) => {
        // Handle bold text: **text**
        const boldText = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        // Handle italic text: *text*
        const italicText = boldText.replace(/\*(.*?)\*/g, '<i>$1</i>');
        return italicText;
    };

    const renderMessage = (msg) => {
        const formattedText = formatText(msg.text);

        return (
            <div
                key={msg.text}
                className={`chat ${msg.type} flex items-center my-2 p-2 rounded-lg max-w-lg ${msg.type === 'response' ? 'bg-gray-600 mr-auto' : 'bg-blue-500 ml-auto'}`}
            >
                {msg.type === 'response' && (
                    <img src="/man.png" alt="Chatbot" className="w-9 h-9 mr-2" />
                )}
                <span className="text-white" dangerouslySetInnerHTML={{ __html: formattedText }}></span>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center mt-11 h-screen w-screen">
            <div className={`container mt-${topMargin} mb-${bottomMargin} w-4/5 max-w-4xl p-4 bg-gray-100 rounded-lg shadow-lg`}>
                <div className="text-center mb-4">
                    <h2 className="text-xl font-bold">Chat and Buddy</h2>
                    <p className="text-gray-600">Your caring companion to navigate your feelings and foster connections.</p>
                </div>
                <div className="message-box flex-1 overflow-y-auto p-4 bg-transparent rounded-b-lg" ref={messageBoxRef}>
                    {messages.map((msg, index) => renderMessage(msg))}
                </div>
                <div className="messagebar h-16 border-t border-gray-600 bg-gray-800 flex items-center justify-center rounded-b-lg">
                    <div className="bar-wrapper flex items-center w-full p-2 bg-gray-700 rounded-md">
                        <input
                            type="text"
                            className="flex-1 bg-transparent border-none outline-none text-gray-300 placeholder-gray-500"
                            placeholder="Enter your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button className="text-white ml-2" onClick={handleSend}>
                            <span className="material-symbols-rounded">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aiui;
