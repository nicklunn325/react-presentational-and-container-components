import Moovie from "./Moovie.js"
import React from "react"
import Review from './Review.js'
class Moovies extends React.Component{
    state={
        renderMoovies: true,
        currentMoovie:""
    }
   renderMoovies = () => {
        return this.props.moovies.map(moovie => <Moovie onClick={this.onClick} addReview={this.props.addReview} key={moovie.id} moovie={moovie}/>)
    }

    renderReviews = () => {
        let reviews = this.props.getReviews(this.state.currentMoovie.id)

        return reviews.map(review => <Review key={review.id} id={review.id} title={review.title} content={review.content} rating={review.rating}/>)
    }

    onClick = (moovie) => {
        this.setState(prevState => ({
            renderMoovies: false,
            currentMoovie: moovie
        }))
    }

    mooviesClick = () => {
        this.setState({
            renderMoovies: true
        })
    }

    render(){
        return(
            <div className="moovies">
                <h4 onClick={this.mooviesClick}className="mooviesHeader">{this.state.renderMoovies ? "Moovies" : `Reviews for ${this.state.currentMoovie.title}`}</h4>
                {this.state.renderMoovies ? this.renderMoovies(): this.renderReviews()}
            </div>
        )
    }
}

export default Moovies;