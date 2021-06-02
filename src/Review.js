const Review = ({getMoovie, title, content, id, rating}) => {

    const displayRating = (rating) => {
        switch(rating){
            case 5:
                return "⭐⭐⭐⭐⭐";
            case 4:
                return "⭐⭐⭐⭐";
            case 3:
                return "⭐⭐⭐";
            case 2:
                return "⭐⭐";
            case 1:
                return "⭐";
            default:
                break;
        }
    }
    let moovie = getMoovie ? getMoovie(id): null
    return(
        <div className="review">
            <p>{moovie ? `Review for ${moovie.title}`: null}</p>
            <h4>{`${title} - ${displayRating(rating)}`}</h4>
            <p>{content}</p>
        </div>
    )
}

export default Review;