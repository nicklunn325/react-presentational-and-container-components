import React from 'react'

class NewMoovieForm extends React.Component{
    state = {
        title: "",
        imgURL:""
    }

    onChange = (e) => {
        let obj = {}
        obj[e.target.id] = e.target.value
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
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:3000/moovies', config)
        .then(res => res.json())
        .then(moovie => this.props.addMoovie(moovie))

        this.clearForm()
    }

    clearForm = () => {
        this.setState({
            title:"",
            imgURL:""
        })
    }

    render(){
        return(
            <div>
                <h4>New Moovie Form</h4>
                <form onSubmit={this.onSubmit}>
                    <label>Title: </label>
                    <input onChange={this.onChange} type="text" id="title" value={this.state.title}/>
                    <br/>
                    <label>Image URL: </label>
                    <input onChange={this.onChange} type="text" id="imgURL" value={this.state.imgURL}/>
                    <br/>
                    <input type="submit" value="Create Moovie"/>
                </form>
            </div>
        )
    }
}

export default NewMoovieForm;