import React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SimpleMap from './SimpleMap';

import { WorkoutService } from './WorkoutService'

import './MapWithList.scss';


const MapWithList = (props) => {
    const [latLng, setLatLng] = useState({});
    const [groups, setGroups] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (props.match.params.latlon) {
            const lat = parseFloat(props.match.params.latlon.split(',')[0]).toFixed(6);
            const lng = parseFloat(props.match.params.latlon.split(',')[1]).toFixed(6);

            const latLng = {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            }

            setLatLng(latLng);
        }

        const groups = new WorkoutService().getAllGroupes();
        if(groups) {

            setGroups(groups);
        }

    }, [])

    const createNewGroupForm = () => {
        
        history.push(`/form/${latLng.lat},${latLng.lng}`);
    }

    return (
        <div className="componentWrapper">
            <div className="mapWrapper">
                <SimpleMap location={latLng}></SimpleMap>
            </div>
            <div className="listWrapper">
                <h2>Grupy w Twojej okolicy</h2>
                {groups.map((group, i) => <li id="liId" key={i}><i id="location" className="fas fa-map-marker-alt"></i>{group.groupName}<i id="add" className="fas fa-user-plus"></i></li>)}

                <button className="btn create" onClick={createNewGroupForm}>Create new group</button>
            </div>
        </div>


    );
};

export default MapWithList;
