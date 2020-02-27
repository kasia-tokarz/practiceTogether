import React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Geocode from "react-geocode";




const MainWindow = () => {
    const [locationInput, setLocationInput] = useState("")


    const history = useHistory();
    const handleClick = () => {
        // let geo = navigator.geolocation;
        // let lat = "";
        // let lon = "";

        // if (geo) {


        //     const options = {
        //         enableHighAccuracy: true
        //     }
        //     geo.getCurrentPosition(function (location) {
        //         lat= location.coords.latitude;
        //         lon= location.coords.longitude;

        //         history.push(`map/${lat},${lon}`);
        //     }, null, options);
        // }
        // else {
        //     console.log('niedostępny');
        // }

        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyDxhPoHdmvEiL-X4oikMKwW7J0MDALNZbQ");

        // set response language. Defaults to english.
        Geocode.setLanguage("pl");

        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("pl");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();

        // Get latidude & longitude from address.
        Geocode.fromAddress(locationInput).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                history.push(`map/${lat},${lng}`);
            },
            error => {
                console.error(error);
            }
        );



    }





    return (

         <div className="mainInput">
            <div id="inputWrapper">
                <input
                    id="inputCode"
                    type="text"
                    onChange={(ev) => setLocationInput(ev.target.value)}
                    value={locationInput}
                    name="locationInput"
                    placeholder="Wpisz swoją miejscowość lub kod pocztowy!"
                />

                <button id="detect" onClick={handleClick}>Szukaj!!!</button>
            </div>

        </div> 

    );
};

export default MainWindow;
