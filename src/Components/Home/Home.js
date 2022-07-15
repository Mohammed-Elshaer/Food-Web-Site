import React, { Fragment } from 'react';
// import Header from '../Header/Header';
import './Home.css';
import myimg from './../../assets/1.png';
import slidimg from './../../assets/1.jpg';
import slidimg2 from './../../assets/2 (1).jpg';
import ingredientsimg from './../../assets/2.png';
import {Carousel,  } from 'react-bootstrap';
import Data from './../../Data';

function Home() {
    
    const blogitem = Data.map((item)=>{
        return(
            <div className='col-md-4'>
                <div className='box'>
                <img src={item.img}/>
                <h5>{item.title}</h5>
                <span>{item.Time}</span>
                <h6>{item.price}<span>{item.des}</span></h6>
                </div>
                <div className='bb'>
                <button className='btn'>order now </button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Fragment>
                {/* <Header /> */}
                <section className='number'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <h2>1287+</h2>
                                <h6>SAVINGS</h6>
                            </div>
                            <div className='col-md-3'>
                                <h2>5786+</h2>
                                <h6>PHOTOS</h6>
                            </div>
                            <div className='col-md-3'>
                                <h2>1440+</h2>
                                <h6>ROCKETS</h6>
                            </div>
                            <div className='col-md-3'>
                                <h2>7110+</h2>
                                <h6>GLOBES</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='pride '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={myimg} alt="img"/>
                        </div>
                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                                 odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                                 </p>
                                 <button className='btn'>learn mor </button>
                        </div>
                    </div>
                </div>
                </section>

                <section className='ingredients '>
                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                                 odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                            <ul>
                                <li>
                                    <i class="fa fa-check"></i>
                                    Etiam sed dolor ac diam volutpat.
                                </li>
                                <li>
                                    <i class="fa fa-check"></i>
                                    Erat volutpat aliquet imperdiet.
                                </li>
                                <li> 
                                    <i class="fa fa-check"></i>
                                    purus a odio finibus bibendum.
                                    </li>
                            </ul>
                            <button className='btn'>learn mor </button>
                        </div>
                        <div className='col-md-6'>
                            <img src={ingredientsimg} alt="img"/>
                        </div>
                    </div>
                </div>
                </section>

                <section className='parallex '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                        <h2>
                        When a man's stomach is full it makes no<br/>
                        difference whether he is rich or poor.
                        </h2>
                        <div className='vedio'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                                 odio <br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                            <a href=''>
                            <i class="fa fa-play"></i>
                            <span>watch our story</span>
                            </a>
                        </div>
                            
                        </div>
                    </div>
                </div>
                </section>

                <section className='card '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                        <h2>
                            Explore Our Foods
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. 
                            Mauris feugiat erat tellus. Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                        </p>
                            
                        </div>
                    
                        <div className='row'>
                            {blogitem}

                        </div>
                    </div>
                </div>
                </section>

                <section className='slider'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12'>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className=""
                                    src={slidimg}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <p>  "Far far away, behind the word mountains, far from the countries
                                         Vokalia and Consonantia, there live the blind texts. "
                                    </p>
                                    <h3>Maccy Doe - Front End</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <img
                                    className=""
                                    src={slidimg2}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <p>
                                        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                        there live the blind texts. Separated they live far from the countries Vokalia."
                                    </p>
                                    <h3>Johnthan Doe - UX Designer</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                
                            </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        </div>
    );
}

export default Home;