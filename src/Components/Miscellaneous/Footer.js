import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useTranslation } from 'react-i18next';
import i18next from "i18next"
import '../../App.css';
import { Link } from 'react-router-dom';


export default function Footer() {
    let images = {
        facebook: require('./Footer Images/facebook.png'),
        google: require('./Footer Images/google.png'),
        instagram: require('./Footer Images/instagram.png'),
        youtube: require('./Footer Images/youtube.png'),

    }
    const { t } = useTranslation();
    return (
        <>
            {/* <MDBFooter bgColor='light' className='text-center text-lg-left'>

                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>{t("ourBranches")}</span>
                    </div>

                    <div className='d-flex'>
                        <p>
                            {t("branch1")}
                        </p>
                        <p>
                            {t("branch2")}
                        </p>
                        <p>
                            {t("branch3")}
                        </p>
                        <p>
                            {t("branch4")}
                        </p>
                        <p>
                            {t("branch5")}
                        </p>

                        <p>
                            {t("branch6")}
                        </p>

                    </div>
                </section>
                <MDBContainer className='p-4'>
                    <p className='d-flex justify-content-center align-items-center'>
                        <span className='me-3'>{t("Companieswedealwith")}</span>
                    </p>
                    <MDBRow>
                        <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>{t("kenya")}</h5>

                            <ul className='list-unstyled mb-0  text-left'>
                                <li className=' text-left'>
                                    <a className='text-dark'>
                                        {t("Kenya1")}
                                    </a>
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("kenya2")}
                                    </a>  {t("kenya2")}
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("kenya3")}            </a>
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("kenya4")}</a>
                                </li>

                            </ul>
                        </MDBCol>


                        <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>{t("EGYPT")}</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a className='text-dark'>
                                        {t("Egypt1")}
                                    </a>
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("Egypt2")}                                </a>
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("Egypt3")}
                                    </a>
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("Egypt4")}
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>



                        <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase mb-0'>{t("pakistan")}</h5>

                            <ul className='list-unstyled'>
                                <li>
                                    <a className='text-dark'>
                                        {t("Pakistan1")}
                                    </a>
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("Pakistan2")}
                                    </a>
                                </li>
                                <li>
                                    <a className='text-dark'>
                                        {t("Pakistan3")}
                                    </a>
                                </li>

                            </ul>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter> */}


            {/* -------------------ANOTHER FOOTER------------------- */}
            <div className="footer-siderbar">
                <div className='container py-2'>
                    <div className='row' >
                        <div className='col-md-6'>
                            <h2>{t("ourBranches")}</h2>
                        </div>
                        <div className='Names col-md-6 d-flex align-items-center justify-content-around'>
                            <p>
                                {t("branch1")}
                            </p>
                            <p>
                                {t("branch2")}
                            </p>
                            <p>
                                {t("branch3")}
                            </p>
                            <p>
                                {t("branch4")}
                            </p>
                            <p>
                                {t("branch5")}
                            </p>

                            <p>
                                {t("branch6")}
                            </p>
                        </div>
                    </div>
                </div>

                <hr className='container' />

                <h2 className='container py-3'>{t("Companieswedealwith")}</h2>
                <div className="container py-3">
                    <div className="row Names">
                        <div className="widget col-md-3">
                            <div>
                                <h5>{t("kenya")}</h5>
                                {/* <ul> */}
                                <li><a>{t("Kenya1")}</a></li>
                                <li><a>{t("kenya2")}</a></li>
                                <li><a >{t("kenya3")}</a></li>
                                <li><a>{t("kenya4")}</a></li>
                                {/* </ul> */}

                            </div>
                        </div>
                        <div className="widget col-md-3">
                            <div>
                                <h5>{t("EGYPT")}</h5>
                                {/* <ul> */}
                                <li><a>{t("Egypt1")}</a></li>
                                <li><a>{t("Egypt2")}</a></li>
                                <li><a>{t("Egypt3")}</a></li>
                                <li><a>{t("Egypt4")}</a></li>
                                {/* </ul> */}
                            </div>
                        </div>
                        <div className="widget col-md-3 md-flex justify-content-end">
                            <div>
                                <h5>{t("pakistan")}</h5>
                                {/* <ul> */}
                                <li><a>{t("Pakistan1")}</a></li>
                                <li><a>{t("Pakistan2")}</a></li>
                                <li><a>{t("Pakistan3")}</a></li>
                                {/* </ul> */}

                            </div>
                        </div>
                        <div className="widget col-md-3 md-flex justify-content-end">
                            <div>
                                <h5>SUBSCRIBE TODAY</h5>
                                <ul>
                                </ul>
                                <div className='images d-flex align-items-center justify-content-around'>
                                    <img className='Icon-Img' src={images.google} alt='google' />
                                    <img className='Icon-Img' src={images.youtube} alt='youtube' />
                                    <img className='Icon-Img' src={images.instagram} alt='instagram' />
                                    <img className='Icon-Img' src={images.facebook} alt='facebook' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center text-dark py-2'>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark'>
                        MDBootstrap.com
                    </a>
                </div>
            </div>

        </>

    );
}