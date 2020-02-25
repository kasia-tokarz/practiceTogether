import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';

const AnyReactComponent = ({ text, onSelect }) => <i style={{ fontSize: '35px', color: 'darkred' }} onClick={onSelect} className="fa fa-map-marker"></i>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.955413,
        lng: 30.337844
      },
      zoom: 17,
      markers: []
    }
  }

  componentDidMount() {
    const markers = [
      {
        lat: 52.1340517,
        lng: 17.5202935
      },
      {
        lat: 51.1440517,
        lng: 17.0302935
      }
    ];
    if (this.props.match.params.latlon) {
      const lat = parseFloat(this.props.match.params.latlon.split(',')[0]).toFixed(6);
      const lng = parseFloat(this.props.match.params.latlon.split(',')[1]).toFixed(6);

      markers[0] = {
        lat: lat,
        lng: lng
      }

      this.setState({
        center: {
          lat: lat,
          lng: lng
        },
        markers: markers
      });

    }
  }

  showMarker(marker) {
   
  }

  render() {

    return (
      <div>

        {
          this.state.center.lat > 0 ? <div style={{ height: 'calc(100vh - 80px)', width: '50%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDxhPoHdmvEiL-X4oikMKwW7J0MDALNZbQ' }}
              defaultCenter={{
                lat: parseFloat(this.state.center.lat),
                lng: parseFloat(this.state.center.lng)
              }}

              defaultZoom={this.state.zoom}
            >

              {this.state.markers.map((marker, i) => {
                const component = <AnyReactComponent key={i} onSelect={this.showMarker(marker)} lat={marker.lat} lng={marker.lng} text="My Marker" />
                return component;
              })}

            </GoogleMapReact>
          </div>
            : <h1>Ładuję...</h1>
        }
      </div>



    );
  }
}

export default SimpleMap;


