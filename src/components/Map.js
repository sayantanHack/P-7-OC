import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '70%'
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    render() {
        return ( <
            Map google = { this.props.google }
            zoom = { 8 }
            style = { mapStyles }
            initialCenter = {
                { lat: 22.572645, lng: 88.363892 }
            }
            />

        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAt8LgR0WMmTuTZUq6qRTo5nWo551o7MHc'
})(MapContainer);