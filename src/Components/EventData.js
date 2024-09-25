// data/eventsData.js
import image from "../assets/city1.png";

export const eventsData = {
    formalEvents: [
        {
            name: "Annual General Meeting",
            image: "https://media.istockphoto.com/id/858430316/photo/board-room-meeting.jpg?s=2048x2048&w=is&k=20&c=EoOnDSJV3YBfT3r-vVVdnTgUCSfXK71mgjMk0k15W_8=",
            description:
                "Our formal annual gathering to discuss society matters.",
        },
        {
            name: "Corporate Gala",
            image: "https://source.unsplash.com/1600x900/?gala",
            description: "A black-tie event with guest speakers and dinner.",
        },
        {
            name: "Awards Ceremony",
            image: "",
            description: "Celebrating the achievements of our society members.",
        },
        // Add more formal events here
    ],
    informalEvents: [
        {
            name: "Social Hangout",
            image: "https://media.istockphoto.com/id/510591490/photo/friends-having-a-great-time-in-cafe.jpg?s=2048x2048&w=is&k=20&c=dGY8IFpF7O26qYNSwxCeDwTw3d-H5yaRJfNY8hdzaM8=",
            description: "A relaxed gathering to network and socialize.",
        },
        {
            name: "Outdoor Picnic",
            image: "https://source.unsplash.com/1600x900/?picnic",
            description: "A fun-filled day outdoors with food and games.",
        },
        {
            name: "Game Night",
            image: "https://source.unsplash.com/1600x900/?games",
            description: "A night of board games and video games.",
        },
        // Add more informal events here
    ],
    otherEvents: [
        {
            name: "Charity Fundraiser",
            image: image,
            description: "Raising funds for a good cause.",
        },
        {
            name: "Community Service",
            image: "https://source.unsplash.com/1600x900/?service",
            description:
                "Giving back to the community with various activities.",
        },
        // Add more other events here
    ],
};
