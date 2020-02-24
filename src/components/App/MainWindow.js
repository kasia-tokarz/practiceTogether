import React from 'react';
import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

const MainWindow = () => {
    const [locationInput, setLocationInput] = useState("")
    

    const history = useHistory();
    const handleClick = ()=> {
        let geo = navigator.geolocation;
        let lat = "";
        let lon = "";
        
        if (geo) {
            

            const options = {
                enableHighAccuracy: true
            }
            geo.getCurrentPosition(function (location) {
                lat= location.coords.latitude;
                lon= location.coords.longitude;
                
                history.push(`map/${lat},${lon}`);
            }, null, options);
        }
        else {
            console.log('niedostępny');
        }



    }

    


    
    return (

        <div className="mainInput">
            <div id="inputWrapper">
                <input
                    id="inputCode"
                    type="text"
                    onChange={(ev)=>setLocationInput(ev.target.value)}
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