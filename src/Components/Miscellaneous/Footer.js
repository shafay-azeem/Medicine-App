import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>

            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>OUR BRANCHES</span>
                </div>

                <div className='d-flex'>
                    <p>
                        Aden (main branch and head office).
                    </p>
                    <p>
                        Sana’a
                    </p>
                    <p>
                        Hudida
                    </p>
                    <p>
                        Taiz
                    </p>
                    <p>
                        Ibb
                    </p>

                    <p>
                        Aldhale
                    </p>

                </div>
            </section>
            <MDBContainer className='p-4'>
                <p className='d-flex justify-content-center align-items-center'>
                    <span className='me-3'>Companies we deal with</span>
                </p>
                <MDBRow>
                    <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>KENYA</h5>

                        <ul className='list-unstyled mb-0  text-left'>
                            <li className=' text-left'>
                                <a className='text-dark'>
                                    IVEE INFUSIONS EPZ LTD
                                </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    UNIVERSAL CARPORATION LTD
                                </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    MACS PHARMACEUTICALS LTD            </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    PHARMA INTERNATIONAL PHARMACEUTICAL INDUSTRIES (PICO)</a>
                            </li>

                        </ul>
                    </MDBCol>


                    <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>EGYPT</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a className='text-dark'>
                                    HYGIENIC PRODUCTS LTD
                                </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    EGYPTIAN GERMAN COMPANY FOR PAPER INDUSTRIES                                </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    EGYPTIAN ARABIC FOR PAPER PRODUCTION
                                </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    EXCEL CEUTIX FOR COSMETICS INDUSTRY
                                </a>
                            </li>
                        </ul>
                    </MDBCol>



                    <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>PAKISTAN</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a className='text-dark'>
                                    SAFFRON PHARMACEUTICALS PVT LTD
                                </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    ROYAL LABORATORIES
                                </a>
                            </li>
                            <li>
                                <a className='text-dark'>
                                    REVIVE PHARMKON
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
        </MDBFooter>
    );
}