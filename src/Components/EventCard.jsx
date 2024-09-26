const EventCard = ({ event }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4 shadow-md rounded-lg">
            {" "}
            <img
                src={event.image}
                alt={event.className}
                className=" object-cover rounded-lg mb-4"
                // Lazy load the image
                loading="lazy"
            />
            {/* Event title */}
            <h3 className="text-xl font-semibold text-center mb-2">
                {event.name}
            </h3>{" "}
            {/* Event description */}
            <p className="text-gray-500 text-center">
                {event.description}
            </p>{" "}
        </div>
    );
};

export default EventCard;
