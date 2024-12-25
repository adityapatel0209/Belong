import React, { useState } from "react";
import { motion } from "framer-motion";
import { EventModal } from "./animated-modal";
// Import your JSON file
import eventItems from './events.json';

export function EventGrid() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleSelect = (event) => {
        setSelectedEvent(event);
    };

    const gapSize = 'gap-8'; // Adjustable gap size
    const paddingSize = 'px-7'; // Adjustable padding size (left and right padding)

    return (
        <div className={`max-w-full mx-auto ${paddingSize} ${gapSize} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            {eventItems.map((event, i) => (
                <motion.div
                    key={i}
                    className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                    onClick={() => handleSelect(event)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-6 bg-white dark:bg-gray-900">
                        <h3 className="text-lg font-bold mb-1 text-neutral-800 dark:text-white">
                            {event.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                            <strong>Date:</strong> {event.date}
                        </p>
                    </div>
                </motion.div>
            ))}

            {selectedEvent && (
                <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
            )}
        </div>
    );
}
