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
        if (groups) {

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
                {groups.map((group, i) => <li className="liId" key={i}>
                    #groupName: {group.groupName},
                    <br />
                    #onwer: {group.owner.name},
                    <br />
                    #practice: {group.practices}
                    <a href={`mailto:${group.owner.email}?subject=${group.groupName}&body=ChceDolaczycDoWasLaski`} target="_app">

                        <i className="add fas fa-user-plus" />
                    </a>
                </li>)}

                <button className="btn create" onClick={createNewGroupForm}>Create new group</button>
            </div>
        </div>


    );
};

export default MapWithList;
