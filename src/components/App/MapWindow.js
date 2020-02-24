import React, { useEffect, useState } from 'react';
import "./MapWindow.scss"
const MapWindow = (props) => {
    const [data, setData] = useState(false);
    useEffect(() => {

        const lonLat = props.match.params.latlon;
        
        // fetch(`https://maps.googleapis.com/maps/api/staticmap?center=${lonLat}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCR2-lOPQRH9CTAyQynVkUNTavpj5q7kp8`)
        //     .then(response => {
        //         if (response.ok) {
        //             return response.text();
        //         } else {
        //             throw new Error("Błąd sieci!!");
        //         }
        //     })
        //     .then(data => {
        //         alert(data)
        //         document.querySelector('#mapContent').innerHTML = data;
        //         //setData(data);
        //     })
        //     .catch(err => {
        //         console.error("Pojawiły się błędy!!!" + err.message)

        //     })

        document.getElementById("mapContent").src = `https://maps.googleapis.com/maps/api/staticmap?center=${lonLat}&zoom=13&size=1200x600&maptype=roadmap&key=AIzaSyCR2-lOPQRH9CTAyQynVkUNTavpj5q7kp8`;


    }, []);

    






    return (
        <div id="wrapper">
            <div id="wrapperMap">
                <div id="map">
                    <img id="mapContent" alt="x"></img>
                </div>
                <div id="mapList">

                    <div>

                        <h2>Grupy w Twojej okolicy:</h2>
                    
                    <ul>
                        <li>Kunegunda</li>
                        <button>join</button>

                        <li>Deneris</li>
                        <button>join</button>

                        <li>Matylda</li>
                        <button>join</button>
                    </ul>
                    <button>create group</button>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default MapWindow;