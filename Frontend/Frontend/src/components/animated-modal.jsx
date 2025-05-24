import React from "react";
import { motion } from "framer-motion";

export function EventModal({ event, onClose }) {
    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    {event.title}
                </h4>
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-sm text-gray-500 dark:text-gray-300">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Details:</strong> {event.details}</p>
                    <p><strong>How to Join:</strong> {event.howToJoin}</p>
                </div>
                <button
                    className="mt-4 px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28 mx-auto block"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </motion.div>
    );
}
