import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../App.css';
import Header from '../Miscellaneous/Header';
import AboutBanner from "./aboutUsBanner.png"

export const AboutUs = () => {
    const [searchparams] = useSearchParams();
    let Allow = searchparams.get("Allow");
    let image = {
        cover: require('../Main/about.jpg')
    }
    return (
        <>
            <Header Allow={Allow}></Header>
            <div className="container py-5" style={{ marginTop: '8rem' }}>
                <div className="row shadow">
                    <div className="col-md-6 ">
                        <h1 className='Heading text-center py-3'>About Us</h1>
                        <h3 className='sub-Heading mb-3 mt-3 text-center'>Sub Heading Goes Here</h3>
                        <p className='sub-Heading text-center mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente voluptatem numquam mollitia necessitatibus quam ipsum ullam, ea laboriosam harum iusto, dolores officia vitae deserunt deleniti. Voluptate facere architecto eius consectetur. Nam, excepturi a repellat odio praesentium perspiciatis soluta reiciendis repudiandae libero, quaerat aperiam dignissimos!x</p>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={AboutBanner} alt="img" />
                    </div>
                </div>
            </div>
        </>

    )
}