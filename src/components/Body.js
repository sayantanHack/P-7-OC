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
                            return (
                                <div className="box">
                                    <h3> {restaurantData.name} </h3>
                                    <p>
                                        {restaurantData.address} ,
                                        {restaurantData.neighborhood}
                                    </p>
                                </div>

                            );
                        })
                    }

                </div>
            </div>
        );
    }
}

export default BodyElement;