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


export default function Footer() {
    const { t } = useTranslation();
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>

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
                                </a>
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
        </MDBFooter>
    );
}