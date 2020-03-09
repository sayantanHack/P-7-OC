import React, { Component } from 'react';
import '../App.css';
import restaurants from './data/restaurant.json';
import RestaurantList from './RestaurantList';

class BodyElement extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Body">
                <h2>The Resturants list</h2>

                <RestaurantList />

                <div>
                {
                        restaurants.map((restaurantData) => {
                            return (
                                <div className="box">
                                    <h3> {restaurantData.name} </h3>
                                    <p>
                                        {restaurantData.address} ,
                                        {restaurantData.neighborhood},
                                    </p>
                                    <b>Category: {restaurantData.cuisine_type}</b>
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