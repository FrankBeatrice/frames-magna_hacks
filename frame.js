const frame = {
    version: "1.0",
    type: "frame",
    title: "Flappy Bird Game",
    description: "Play a basic version of the classic Flappy Bird game!",
    image: "https://example.com/flappy-bird-image.png", // Link to an image thumbnail of your game
    url: "http://localhost:3000/", // Direct URL to your game
    buttons: [
        {
            name: "Play Game",
            action: "http://localhost:3000/"
        }
        // ... other buttons or actions if necessary
    ]
    // ... add other fields based on the Farcaster frame specification
};

module.exports = frame;
