import React from 'react'
import Moovies from './Moovies.js'
import MooviesSideBar from './MooviesSideBar.js'

class MooviesContainer extends React.Component{

    state = {
        moovies:[],
        reviews:[]
    }

    render(){
        return(
            <div className="mooviesContainer">
                <Moovies getReviews={this.getReviews}addReview={this.addReview} moovies={this.state.moovies}/>  
                <MooviesSideBar getMoovie={this.getMoovie}topReviews={this.topReviews()} addMoovie={this.addMoovie}/>
            </div>
        )
    }

    topReviews = () => {
        return this.state.reviews.filter(review => review.rating === 5)
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

    fetchMoovies = () => {
        fetch("http://localhost:3000/moovies")
        .then(res => res.json())
        .then(moovieData => console.log(moovieData))
    }

    fetchReviews = () => {
        fetch("http://localhost:3000/reviews")
        .then(res => res.json())
        .then(reviewData => console.log(reviewData))
    }

    componentDidMount = () => {
        this.fetchMoovies()
        this.fetchReviews()
    }
}

export default MooviesContainer;