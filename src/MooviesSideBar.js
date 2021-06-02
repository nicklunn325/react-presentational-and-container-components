import NewMoovieForm from './NewMoovieForm.js'
import TopReviews from './TopReviews.js'

const MooviesSideBar = ({addMoovie, getMoovie, topReviews}) => {
    return (
        <div className="mooviesSideBar">
            <NewMoovieForm addMoovie={addMoovie}/>
            <TopReviews getMoovie={getMoovie} reviews={topReviews} />
        </div>
    )
}

export default MooviesSideBar;