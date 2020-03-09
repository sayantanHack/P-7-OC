import React, {Component} from 'react';
import restaurants from './data/restaurant.json';

class RestaurantList extends Component{
    constructor(props){
        super(props);
        this.state = {
            //let restaurants = 
            //restaurants: this.props.restaurants
        }
    }

    test(){
        let restaurant = {id: 3, name: "CCCC"}
        let restaurants= this.state.restaurants;
        this.state.restaurants.push(restaurant)
        this.setState({restaurants: restaurants})
    }
    
    addReview(restaurantId, review){
        let restaurants= this.state.restaurants;
       let restaurant = this.restaurants.select((id) => this.id = restaurantId)
        let reviews = restaurant.reviews || [];
        reviews.push(review)
        restaurants.map((res) => {
             if (res.id ==  restaurantId)
                 res.reviews = reviews;   
        })
        this.setState({restaurants: restaurants})
    }

    render(){
        return(
            <div>
                <h3>Restaurants are here. Have a look.</h3>
                                
            </div>
        )
    }
}

export default RestaurantList;