import React, { Component } from 'react';
import '../App.css';
import restaurants from './data/restaurant.json';

class BodyElement extends Component {
    render() {
        return (
            <div className="Body">
                <h2>The Resturants list</h2>
                <div>
                    {
                        restaurants.map((restaurantData) => {
                            return <h3> {restaurantData.name} </h3>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default BodyElement;