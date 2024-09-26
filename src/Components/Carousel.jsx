// components/Carousel.js
import React, { Suspense } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Lazy load the EventCard component
const EventCard = React.lazy(() => import("./EventCard"));

const EventCarousel = ({ events }) => {
    return (
        <div className="max-w-6xl mx-auto">
            {" "}
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                // Ensure the carousel takes full container height
                className="h-full"
            >
                {events.map((event, index) => (
                    <div key={index}>
                        {" "}
                        {/* Wrap the EventCard component in a Suspense component */}
                        <Suspense fallback={<div>Loading...</div>}>
                            <EventCard event={event} />
                        </Suspense>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default EventCarousel;
