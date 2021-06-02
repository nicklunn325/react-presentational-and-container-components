import React from 'react'
import Moovies from './Moovies.js'
import MooviesSideBar from './MooviesSideBar.js'

class MooviesContainer extends React.Component{

    state = {
        moovies:[],
        reviews:[]
    }

    topReviews = () => {
        return this.state.reviews.filter(review => review.rating === 5)
    }
    
    render(){
        return(
            <div className="mooviesContainer">
                <Moovies getReviews={this.getReviews}addReview={this.addReview} moovies={this.state.moovies}/>  
                <MooviesSideBar getMoovie={this.getMoovie}topReviews={this.topReviews()} addMoovie={this.addMoovie}/>
            </div>
        )
    }

    getReviews = (moovieId) => {
        return this.state.reviews.filter(review => review.moovieId === moovieId)
    }

    getMoovie = (moovieId) => {
        return this.state.moovies.find(moovie => moovie.id === moovieId)
    }

    addMoovie = (moovie) => {
        this.setState(prevState => ({
            moovies: [...prevState.moovies, moovie]
        }))
    }

    addReview = (review) => {
        this.setState(prevState => ({
            reviews: [...prevState.reviews, review]
        }))
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/moovies")
        .then(res => res.json())
        .then(moovieData => this.setState({
            moovies: moovieData
        }))
        fetch("http://localhost:3000/reviews")
        .then(res => res.json())
        .then(reviewData => this.setState({
            reviews: reviewData
        }))
    }
}

export default MooviesContainer;