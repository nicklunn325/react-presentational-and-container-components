import React from 'react'

class NewReviewForm extends React.Component{
    state = {
        title: "",
        content:"",
        rating: 1
    }

    onChange = (e) => {
        let obj = {}
        let value = e.target.id === "rating" ? parseInt(e.target.value) : e.target.value
        obj[e.target.id] = value
        this.setState(obj)
    }

    onSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accepts":"application/json"
            },
            body: JSON.stringify({...this.state, moovieId: this.props.moovieId})
        }

        fetch("http://localhost:3000/reviews", config)
        .then(res => res.json())
        .then(reviewData => this.props.addReview(reviewData))
        this.props.onClick()
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>Title:</label>
                <input onChange={this.onChange} type="text" id="title" value={this.state.title}/>
                <br/>
                <label>Content:</label>
                <input onChange={this.onChange} type="textArea" id="content" value={this.state.content}/>
                <br/>
                <label>Rating:</label>
                <select onChange={this.onChange} value={this.state.rating} id="rating">
                    <option value={1}>⭐</option>
                    <option value={2}>⭐⭐</option>
                    <option value={3}>⭐⭐⭐</option>
                    <option value={4}>⭐⭐⭐⭐</option>
                    <option value={5}>⭐⭐⭐⭐⭐</option>
                </select>
                <br/>
                <input type="submit" value="Review Moovie"/>
            </form>
        )
    }
}

export default NewReviewForm;