import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { WorkoutService } from './WorkoutService';

const AnyReactComponent = ({ text, onSelect }) => <i style={{ fontSize: '35px', color: 'darkred' }} title={text} onClick={onSelect} className="fa fa-map-marker"></i>;

const SimpleMap = ({location}) => {
  const [center, setCenter] = useState({
    lat: 51.1108305,
    lng: 17.0292442
  });
  const [zoom, setZoom] = useState(17)
  const [markers, setMarkers] = useState([{
    lat: 51.1108305,
    lng: 17.0292442,
    name: 'Coders-Lab Brain Torture'
  }]);
  
  useEffect(() => {
    const groups = new WorkoutService().getAllGroupes();
    if (groups){
      
      const newMarkers = groups.map(group => {
        return {
          lat: group.location.lat,
          lng: group.location.lng,
          name: group.groupName
        }
      });
      setMarkers( newMarkers);
    }

    if (location) {
      const lat = parseFloat(location.lat).toFixed(6);
      const lng = parseFloat(location.lng).toFixed(6);

      setCenter({
        lat: lat,
        lng: lng
      })
      

    }

  }, [location]);

  return (
    <div>
      {
        center.lat > 0 ? <div style={{ height: 'calc(80vh - 80px)', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDxhPoHdmvEiL-X4oikMKwW7J0MDALNZbQ' }}
            defaultCenter={{
              lat: parseFloat(center.lat),
              lng: parseFloat(center.lng)
            }}

            defaultZoom={zoom}
          >

            {markers.map((marker, i) => {
              const component = <AnyReactComponent key={i} lat={marker.lat} lng={marker.lng} text={marker.name} />
              return component;
            })}

          </GoogleMapReact>
        </div>
          : <h1>Ładuję...</h1>
      }
    </div>



  );
}


export default SimpleMap;
