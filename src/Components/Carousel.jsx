// components/Carousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventCard from "./EventCard";

const EventCarousel = ({ events }) => {
    return (
        <div className="max-w-6xl mx-auto">
            {" "}
            {/* Set fixed height for the carousel */}
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                className="h-full" // Ensure carousel takes full height of the container
            >
                {events.map((event, index) => (
                    <div
                        key={index}
                    >
                        {" "}
                        {/* Ensure full height for each slide */}
                        <EventCard event={event} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default EventCarousel;
