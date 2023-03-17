import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Header from '../Miscellaneous/Header';
import "./ViewDetail.css"

const ViewDetail = () => {

    // let img = {
    //     mainImage: require('../assets/images/burger.png'),

    const [searchparams] = useSearchParams();

    let img = searchparams.get("img");
    // }
    return (
        <>
            <Header From={"Home"}

            ></Header>
            <div className="shadow container py-5 bg-white" style={{ marginTop: '7rem' }}  >
                <div className="row" >
                    {/* Col of 1  */}
                    <div className="col-md-1"></div>

                    {/* Col of 4  */}
                    <div className="col-md-4">
                        <img className='Image' src={img} alt="img" />
                    </div>

                    {/* Col of 6  */}
                    <div className="col-md-6">
                        <h1>Some heading goes here</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime sequi ad ex excepturi dolore blanditiis iste, expedita obcaecati voluptate ratione. Rem molestiae quasi reprehenderit, eius quis illum maiores minus quibusdam iusto ullam ratione vero officiis modi quam nemo eligendi ut. Vel eligendi nemo assumenda, reiciendis accusamus quasi itaque corrupti!</p>

                        <div className="buttons d-flex align-items-center justify-content-start pt-3">
                            <button className='Buy-Button bg-gradient'>BUY NOW</button>
                            <button className='Wish-Button bg-gradient ms-3'>ADD TO WISHLIST</button>
                        </div>
                    </div>

                    {/* Col of 1  */}
                    <div className="col-md-1"></div>
                    <div className="container">
                        <hr className='mt-5' />
                    </div>
                </div>
                <h3 className='text-center mt-3'>Recent Views</h3>
            </div>
        </>
    )
}

export default ViewDetail