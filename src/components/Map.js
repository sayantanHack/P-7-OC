import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import restaurants from './data/restaurant.json';

const mapStyles = {
    width: '70%',
    height: '100%'
};

export class MapContainer extends Component {
/*
    state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };

    constructor(props) {
        super(props);
        const {lat,lng} = this.props.initialCenter
    }

    <Marker onClick={this.onMarkerClick} name={} />
                <InfoWindow
                    marker= {this.state.activeMarker} visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
*/
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    render() {
        return (/*<
            Map google={this.props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={
                { lat: 22.6072325, lng: 88.2825886 }
            }>

                
            </Map>*/
            <Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
  <Marker onClick={this.onMarkerClick}
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker onClick={this.onMarkerClick}
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  
  

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Hello Map</h1>
            </div>
        </InfoWindow>

</Map>

             
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAt8LgR0WMmTuTZUq6qRTo5nWo551o7MHc'
})(MapContainer);