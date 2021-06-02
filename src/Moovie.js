import React from 'react'
import NewReviewForm from './NewReviewForm.js'

class Moovie extends React.Component {

    state = {
        review: false 
    }

    onClick = () => {
        this.setState(prevState => ({
            review: !prevState.review
        }))
    }

    render(){
        return(
            <div key={this.props.moovie.id}>
                <p onClick={() => this.props.onClick(this.props.moovie)}>{this.props.moovie.title}</p>
                {this.state.review ? <NewReviewForm addReview={this.props.addReview} onClick={this.onClick} moovieId={this.props.moovie.id}/> : <img onClick={this.onClick}className="moovieImage" src={this.props.moovie.imgURL} alt={this.props.moovie.title}/>}
            </div>
        )
    }
}

export default Moovie;