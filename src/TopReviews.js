import Review from './Review.js'

const TopReviews = ({getMoovie, reviews}) => {

    const renderReviews = () => {
        return reviews.map(review => <Review getMoovie={getMoovie} key={review.id} id={review.moovieId} title={review.title} content={review.content} rating={review.rating}/>)
    }
    
    return(
        <div className="topReviews">
            <h4>Top Moovies</h4>
            {renderReviews()}
        </div>
    )
}

export default TopReviews