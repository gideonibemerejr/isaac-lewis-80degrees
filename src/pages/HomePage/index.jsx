import React from "react";
import cover from '../../assets/80DegreesVelvertCoverARtfinal.jpg'
import './HomePage.css'

const HomePage = () => {
    return (
        <>

        <div className="flex flex-column justify-center items-center mh4 mt5 image ">
            <figure className='cover-image ma0'>
                <img src={cover} alt ="80DegreesVelvetCover" />
            </figure>
            <div>
                <h3 className='f3-ns f6'>
                    <a target='_blank' rel='noopener noreferrer' className='link white dim' href="https://ditto.fm/80-degrees-velvet"
                    >

                    Listen to 80 Degrees / Velvet
                    </a>
                </h3>
            </div>
        </div>
        </>
    )
}

export default HomePage
