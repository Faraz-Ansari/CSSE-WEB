// components/Event.js
import React, { useState } from "react";
import EventCarousel from "../../Components/Carousel";
import { eventsData } from "../../Components/EventData";

const Event = () => {
    const [activeTab, setActiveTab] = useState("formalEvents");

    return (
        <div className="p-4 md:p-6">
            {" "}
            {/* Add padding for small screens */}
            {/* Tab navigation */}
            <div className="tabs tabs-boxed font-semibold  flex-wrap">
                {" "}
                {/* Flex-wrap for smaller screens */}
                <button
                    className={`tab ${
                        activeTab === "formalEvents" ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab("formalEvents")}
                >
                    Formal Events
                </button>
                <button
                    className={`tab ${
                        activeTab === "informalEvents" ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab("informalEvents")}
                >
                    Informal Events
                </button>
                <button
                    className={`tab ${
                        activeTab === "otherEvents" ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab("otherEvents")}
                >
                    Other Events
                </button>
            </div>
            {/* Tab content with responsive margin */}
            <div className="mt-4 md:mt-8">
                {" "}
                {/* More margin on larger screens */}
                {activeTab === "formalEvents" && (
                    <EventCarousel events={eventsData.formalEvents} />
                )}
                {activeTab === "informalEvents" && (
                    <EventCarousel events={eventsData.informalEvents} />
                )}
                {activeTab === "otherEvents" && (
                    <EventCarousel events={eventsData.otherEvents} />
                )}
            </div>
        </div>
    );
};

export default Event;
