import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './Home.css';
const image1 = "./imgs/frontPatio.jpeg"
const image2 = "./imgs/diningRoom.jpg";
const image3 = "./imgs/lounge.jpg";
const image4 = "./imgs/terrace.jpg";
const image5 = "./imgs/theGrotto.jpg";

class HomePage extends Component {
    render() {
        return (
           <div className="homePage">
                {/* FRONT PAGE */}
                <Container className="container">
                    <Row className="mainContent">
                        <Col>
                            <img src="./imgs/justShoreThing.png" id="shoreThing"></img>
                        </Col>
                    </Row>
                </Container>
                
                {/* AREAS/PARALLAX SECTION */}

                <Container fluid>
                    {/* ROW 1 */}
                    <Row  className="inside">
                        <Col xs={12} lg={8} className="sectionImg">
                            <Parallax 
                                bgImage={image1} 
                                bgImageStyle={{
                                    paddingBottom:"100px",
                                    height:"600px",
                                    width:"100%",
                                    position: "absolute"
                                    }} 
                                strength={250} 
                                >
                                <div className="parallaxSize">
                                    <div className="inside">
                                        
                                    </div>
                                </div>
                            </Parallax>
                        </Col>
                        <Col xs={12} lg={4, {order:'first'}} className="sectionDesc">
                            <h1>Boardwalk Patio</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacus quis quam semper auctor. Fusce a felis sem. Duis eu bibendum nibh, vel bibendum orci. Nulla id auctor urna. Fusce gravida metus id condimentum ullamcorper. Nunc ac felis velit. Maecenas ac felis lorem. Morbi ornare dolor turpis, vel commodo erat efficitur ut. Ut ullamcorper ornare interdum. Sed a mi auctor est feugiat mollis. Duis congue mauris quis cursus finibus. Nunc tincidunt vulputate nunc vitae lobortis. Ut vel ornare urna. Integer congue venenatis tristique.</p>
                        </Col>
                    </Row>
                    {/* ROW 2  */}
                    <Row  className="inside">
                        <Col xs={12} lg={8} className="sectionImg">
                            <Parallax 
                                bgImage={image3} 
                                bgImageStyle={{
                                    paddingBottom:"100px",
                                    height:"600px",
                                    width:"100%",
                                    position: "absolute"
                                    }} 
                                strength={250} 
                                >
                                <div className="parallaxSize">
                                    <div className="inside">
                                        
                                    </div>
                                </div>
                            </Parallax>
                        </Col>
                        <Col xs={12} lg={4} className="sectionDesc">
                            <h1>Bar & Lounge</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacus quis quam semper auctor. Fusce a felis sem. Duis eu bibendum nibh, vel bibendum orci. Nulla id auctor urna. Fusce gravida metus id condimentum ullamcorper. Nunc ac felis velit. Maecenas ac felis lorem. Morbi ornare dolor turpis, vel commodo erat efficitur ut. Ut ullamcorper ornare interdum. Sed a mi auctor est feugiat mollis. Duis congue mauris quis cursus finibus. Nunc tincidunt vulputate nunc vitae lobortis. Ut vel ornare urna. Integer congue venenatis tristique.</p>
                        </Col>
                    </Row>

                    {/* ROW 3 */}
                    <Row  className="inside">
                        <Col xs={12} lg={8} className="sectionImg">
                            <Parallax 
                                bgImage={image2} 
                                bgImageStyle={{
                                    paddingBottom:"100px",
                                    height:"600px",
                                    width:"100%",
                                    position: "absolute"
                                    }} 
                                strength={250} 
                                >
                                <div className="parallaxSize">
                                    <div className="inside">
                                        
                                    </div>
                                </div>
                            </Parallax>
                        </Col>
                        <Col xs={12} lg={4, {order:'first'}} className="sectionDesc">
                            <h1>Dining</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacus quis quam semper auctor. Fusce a felis sem. Duis eu bibendum nibh, vel bibendum orci. Nulla id auctor urna. Fusce gravida metus id condimentum ullamcorper. Nunc ac felis velit. Maecenas ac felis lorem. Morbi ornare dolor turpis, vel commodo erat efficitur ut. Ut ullamcorper ornare interdum. Sed a mi auctor est feugiat mollis. Duis congue mauris quis cursus finibus. Nunc tincidunt vulputate nunc vitae lobortis. Ut vel ornare urna. Integer congue venenatis tristique.</p>
                        </Col>
                    </Row>
                    
                    {/* ROW 4 */}
                    <Row  className="inside"> 
                        <Col xs={12} lg={8} className="sectionImg">
                            <Parallax 
                                bgImage={image4} 
                                bgImageStyle={{
                                    paddingBottom:"100px",
                                    height:"600px",
                                    width:"100%",
                                    position: "absolute"
                                    }} 
                                strength={250} 
                                >
                                <div className="parallaxSize">
                                    <div className="inside">
                                        
                                    </div>
                                </div>
                            </Parallax>
                        </Col>
                        <Col xs={12} md={4} md={{order:'last'}} className="sectionDesc">
                            <h1>Terrace</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacus quis quam semper auctor. Fusce a felis sem. Duis eu bibendum nibh, vel bibendum orci. Nulla id auctor urna. Fusce gravida metus id condimentum ullamcorper. Nunc ac felis velit. Maecenas ac felis lorem. Morbi ornare dolor turpis, vel commodo erat efficitur ut. Ut ullamcorper ornare interdum. Sed a mi auctor est feugiat mollis. Duis congue mauris quis cursus finibus. Nunc tincidunt vulputate nunc vitae lobortis. Ut vel ornare urna. Integer congue venenatis tristique.</p>
                        </Col>
                    </Row>

                    {/* ROW 5 */}
                    <Row  className="inside final">
                        <Col xs={12} lg={8} className="sectionImg">
                            <Parallax 
                                bgImage={image5} 
                                bgImageStyle={{
                                    paddingBottom:"100px",
                                    height:"600px",
                                    width:"100%",
                                    position: "absolute"
                                    }} 
                                strength={250} 
                                >
                                <div className="parallaxSize">
                                    <div className="inside">
                                        
                                    </div>
                                </div>
                            </Parallax>
                        </Col>
                        <Col xs={12} sm={{order:'last'}} lg={4, {order:'first'}} className="sectionDesc final">
                            <h1>The Grotto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacus quis quam semper auctor. Fusce a felis sem. Duis eu bi</p>
                        </Col>
                    </Row>
                </Container>
           </div>
        )
    }   
}


export default HomePage;