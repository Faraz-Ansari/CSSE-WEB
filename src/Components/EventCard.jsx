// components/EventCard.js
import React from "react";

const EventCard = ({ event }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4 shadow-md rounded-lg">
            {" "}
            {/* Styling for visibility */}
            <img
                src={event.image}
                alt={event.className}
                className=" object-cover rounded-lg mb-4" // Image height and styling
            />
            <h3 className="text-xl font-semibold text-center mb-2">
                {event.name}
            </h3>{" "}
            {/* Title with spacing */}
            <p className="text-gray-500 text-center">
                {event.description}
            </p>{" "}
            {/* Description */}
        </div>
    );
};

export default EventCard;
