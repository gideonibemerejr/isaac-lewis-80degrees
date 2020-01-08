import React from "react";
import cover from '../../assets/80DegreesVelvertCoverARtfinal.jpg'
import './HomePage.css'

const HomePage = () => {
    return (
        <>

        <div className="flex justify-center items center ma4 image">
            <figure className='cover-image ma0'>
                <img src={cover} alt ="80DegreesVelvetCover" />
            </figure>
        </div>
        </>
    )
}

export default HomePage
