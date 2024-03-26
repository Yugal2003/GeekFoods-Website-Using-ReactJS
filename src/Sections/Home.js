import React from "react";
// import img2 from '../img/img.jpeg'
import gharIMG from '../Img/ghar.jpeg' 
import './Home.css';
import Button from "../component/Button";
import HeaderSecation from "../component/HeaderSecation";
import Girl from "../component/GirlImg";
import Footer from "../component/Footer";

const Home = () =>{
    return (
        <>
            {/* header section start */}
                <HeaderSecation></HeaderSecation>
            {/* header section end */}

            {/* main section start */}
                <div className="main">
                    {/* <img src={img2} alt="back_img" className="img" width="1519px" height="700px" /> */}
                    <h1 className="letsText">Let us find your</h1>
                    <h1 className="foreverText">&nbsp;&nbsp;Forever Food.</h1>
                    <p className="ptag">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br></br>&nbsp;&nbsp;&nbsp; &nbsp;Nesciunt illo tenetur fuga ducimus numquam ea!</p>

                    <div className="two_btns">
                        <Button  fontfamily={"Segoe UI"} cursor={"pointer"} fontsize={"14px"} fontweight={"700"} color={"white"} backgroundColor= {"#E11D48"} border={"none"} padding={"0.8rem 3rem"} borderradius={"8px"}>Search Now</Button>

                        <Button  fontfamily={"Segoe UI"} cursor={"pointer"} fontsize={"14px"} fontweight={"700"} color={"#E11D48"} backgroundColor= {"#FFFFFF"} marginLeft={"1.2rem"} border={"none"} padding={"0.8rem 3rem"} borderradius={"8px"}>Know more</Button>
                    </div>
                </div>
            {/* main section end */}

            {/* img with text content start */}
                <div className="img_with_text">
                     <img src={gharIMG} className="ghar_img" alt="ghar_img" width="740px" height="600px" />
                     
                     <div className="text_content">
                        <h1 className="h1tag">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempore,<br></br> debitis.
                        </h1>
                        <p className="ptext">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!<br></br> Quidem est esse numquam odio deleniti, beatae, magni dolores provident<br></br> quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                        </p>
                        <Button  fontfamily={"Segoe UI"} cursor={"pointer"} fontsize={"14px"} fontweight={"700"} color={"#FFFFFF"} backgroundColor= {"#4F46E5"} marginLeft={"6.6rem"} marginTop={"2rem"} border={"none"} padding={"0.8rem 3rem"} borderradius={"8px"}>Get in Touch</Button>
                     </div>
                </div>
            {/* img with text content end */}
            
            {/* GirlImg start */}
                <Girl></Girl>
            {/* GirlImg end */}
            
            {/* footer start */}
                <Footer></Footer>
            {/* footer end */}
        </>
    );
}
export default Home;
