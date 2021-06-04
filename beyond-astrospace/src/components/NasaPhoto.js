import React from 'react';
import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_NASA_KEY;

function NasaPhoto() {
    // Create state for Nasa photo of the day
    const [photoData, setPhotoData] = useState(null);

    // Load image function
    const fetchPhoto = async () => {
        // Get the response from the server from url
        const res = await fetch(
            // `https://api.nasa.gov/planetary/apod?api_key=uI3wqvNmTro5u2quzRST6fCjfGEYh1Tx3tg2jfA7`
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        // Convert to jso5
        const data = await res.json();
        // Set list to json object
        setPhotoData(data);
        console.log(data);
    };

    // Update action, only call once
    useEffect(() => {
        fetchPhoto(); // Call function
    }, []);

    // If loading, then display loading message
    if (photoData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} />
            ) : (
                <iframe
                    title="space-video"
                    src={photoData.url}
                    framerborder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}

            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </div>
    )
};

export default NasaPhoto;