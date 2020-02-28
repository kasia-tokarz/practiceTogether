import React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Geocode from "react-geocode";
import ImageBox from './ImageBox';




const MainWindow = () => {
    const [locationInput, setLocationInput] = useState("")


    const history = useHistory();
    const handleClick = () => {
       
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
                alert('Nieprawidłowy adres!');
            }
        );



    }





    return (
        <>

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
        <ImageBox/> 

      
        
                    </>

    );
};

export default MainWindow;
