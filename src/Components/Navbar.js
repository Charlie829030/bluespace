import React from 'react'
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = () => {
  function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
  }

  function scrollDown(){
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior:"smooth"
    })
  }

    return (
        <>
            <nav>
                <div >
                    {/* <img className='group' src='../img/Group_2.png' /> */}
                    <GiHamburgerMenu className='group' />
                </div>

                <div>
                    <img className='logo' src='img/LOGO2_1.png' />
                </div>

                <div>
                    <a className='btn' href='https://github.com/Charlie829030'>Got a Project? Click Here</a>
                </div>

            </nav>


            <div style={{ marginTop: "185px" }}>

                <div className='rowform'>
                    <div className='background-image'>

                      <img className='rotedstar' src='img/star.png' />
                       
                        <div className='animation'>
                            <img className='cloud' src='img/cloud.png' />
                        </div>
                    </div>

                    <div className='content'>
                        <div><img className='keylogo' src='img/key.png' /></div>

                        <div className='text'>
                            <h1 className='key'>Key to your</h1>
                            <h1 className='digital'>Digital Empire</h1>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur. Eget dapibus tortor lacus diam duis sagittis accumsan neque. Amet tincidunt nam molestie fermentum fringilla eget nulla ultrices. Non convallis suspendisse scelerisque et. Proin sem at porttitor eros.</p>
                            <button className='arrowbtn' onClick={scrollDown} ><img src='img/arrow.png' /></button>
                        </div>

                    </div>
                </div>


                <div className='rowform'>
                    <div className='background-image'>
                        <img className='slidestar' src='img/deck.png' style={{ width: "60%" }} />
                    </div>

                    <div className='content' style={{ marginTop: "150px" }}>

                        <div className='text' >
                            <h1 className='digital'>Website</h1>
                            <h1 className='key' style={{ letterSpacing: "5px" }}>Development</h1>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur. Eget dapibus tortor lacus diam duis sagittis accumsan neque. Amet tincidunt nam molestie fermentum fringilla eget nulla ultrices. Non convallis suspendisse scelerisque et. Proin sem at porttitor eros.</p>
                            <button className='knowmore'>Know More</button>
                        </div>
                        <button className='arrowbtn' onClick={scrollDown} style={{ marginTop: "40px" }}><img src='img/arrow.png' onClick={scrollDown}/></button>

                    </div>
                </div>

                <div className='rowform'>

                    <div className='content' style={{ marginTop: "150px", textAlign: "start" }}>

                        <div className='text'>
                            <h1 className='digital' style={{ textAlign: "start" }}>Graphic</h1>
                            <h1 className='key' style={{ letterSpacing: "5px", textAlign: "start" }}>Design</h1>
                            <p className='para' style={{ textAlign: "start" }}>Lorem ipsum dolor sit amet consectetur. Eget dapibus tortor lacus diam duis sagittis accumsan neque. Amet tincidunt nam molestie fermentum fringilla eget nulla ultrices. Non convallis suspendisse scelerisque et. Proin sem at porttitor eros.</p>
                            <button className='knowmore'>Know More</button>
                        </div>
                        <button className='arrowbtn' onClick={scrollDown} style={{ marginTop: "40px" }}><img src='img/arrow.png' /></button>

                    </div>

                    <div className='background-image'>
                        <img className='slidestar2' src='img/star2.png' style={{ height: "100vh", marginLeft: "125px" }} />
                    </div>

                </div>

                <div className='rowform'>

                    <div className='content' style={{ marginTop: "150px", textAlign: "start" }}>

                        <div className='text'>
                            <h1 className='digital' style={{ textAlign: "start" }}>Brand</h1>
                            <h1 className='key' style={{ letterSpacing: "5px", textAlign: "start" }}>Marketing</h1>
                            <p className='para' style={{ textAlign: "start" }}>Lorem ipsum dolor sit amet consectetur. Eget dapibus tortor lacus diam duis sagittis accumsan neque. Amet tincidunt nam molestie fermentum fringilla eget nulla ultrices. Non convallis suspendisse scelerisque et. Proin sem at porttitor eros.</p>
                            <button className='knowmore'>Know More</button>
                        </div>
                        <button className='arrowbtn' onClick={scrollUp} style={{ marginTop: "40px" }}><img src='img/arrow2.png' /></button>

                    </div>

                    <div className='background-image'>
                        <img  className='slidestar5' src='img/halfstar2.png' style={{ width: "55rem", height: "18rem", marginTop: "110px", position: "relative", right: "215px" }} />
                    </div>

                    <div className='background-image'>
                        <img className='slidestar4' src='img/halfstar.png' style={{ width: "55rem", height: "18rem", marginTop: "390px", position: "relative", right: "64.5rem" }} />
                    </div>

                    <div className='background-image'>
                        <img  className='slidestar3'  src='img/star2.png' style={{ height: "80vh", width: "400px", marginLeft: "-83rem", marginTop: "110px" }} />
                    </div>

                </div>
            </div>


        </>
    )
}

export default Navbar