import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

class Index extends React.Component {
    render() {
        return (
            <BaseLayout className='cover'>
                <div className='main-section'>
                    <div className='background-image'>
                        {/* <Image src='' alt='' width={1500} height={500} /> */}
                    </div>
                    <Container>
                        <Row>
                            <Col md='6'>
                                <div className='hero-section'>
                                    <div className={`flipper`}>
                                        <div className='back'>
                                            <div className='hero-section-content'>
                                                <h2> Frontend Developer </h2>
                                                <p className='hero-section-content-intro'>
                                                    Have a look at my portfolio and job
                                                    history.
                                                </p>
                                            </div>
                                            <Image
                                                className='image'
                                                src='/images/section-1.png'
                                                alt='Alt Home picture'
                                                width={500}
                                                height={600}
                                            />
                                            <div className='shadow-custom'>
                                                <div className='shadow-inner'> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6' className='hero-welcome-wrapper'>
                                <div className='hero-welcome-text'>
                                    <h2>
                                        Welcome to the portfolio of Harry Yates. A
                                        Frontend Developer based between Stockholm and
                                        London.
                                    </h2>
                                </div>
                                <div className='hero-welcome-bio'>
                                    <h3>Selected Work</h3>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BaseLayout>
        );
    }
}

export default Index;
