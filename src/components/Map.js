import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import restaurants from './data/restaurant.json';

const mapStyles = {
    width: '70%',
    height: '100%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: props,     //Shows the infoWindow to the selected place upon a marker
            activeMarker: {},     //Shows the active marker upon click
            showingInfoWindow: false  //Hides or the shows the infoWindow
        };
    }
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
    onMarkerClick = () =>
        this.setState({
            //selectedPlace: restaurant,
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
        return (<
            Map google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={
                { lat: 22.5329854, lng: 88.384943 }
            }
            >

            {
                restaurants.map((restaurantData)=>{
                    return (
                        <Marker onClick={this.onMarkerClick} title={restaurantData.name} 
                        position={
                            {lat: restaurantData.latlng.lat , lng: restaurantData.latlng.lng }
                        } />
                    )
                })
            }
             
            <InfoWindow marker= {this.state.activeMarker} visisble={this.state.showingInfoWindow} 
            onClose={this.onClose}>
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