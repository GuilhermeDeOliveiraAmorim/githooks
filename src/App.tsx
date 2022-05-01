import React, { useEffect, useState } from "react";

export default function App() {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null
    });

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    function handlePositionReceived({coords}: any) {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
    }

    return (
        <>
            Latitude: {location.latitude}
            <br />
            Longitude: {location.longitude}
        </>
    );
}
