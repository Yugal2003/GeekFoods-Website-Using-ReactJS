import React, { useState } from "react";
import './Resturants.css';
import {data} from '../component/Data';
import HeaderSecation from "../component/HeaderSecation";
import Footer from "../component/Footer";

const Restaurants = () =>{

    const [dinner,setDinner] = useState(data);

    function filterData(restoName){
        const findData = data.filter((curElm) =>{
            if(curElm.name.toLowerCase().includes(restoName.trim())){
                return true;
            }
            return false;
        });
        setDinner(findData);
    }

    // function updateData(e){
    //     let obj = [...dinner];

    //     obj[0].rating = e.target.value;

    //     setDinner(obj);
    // }

    return(
        <div>
            <HeaderSecation/>
            <div className="input_plus_rating">
                <input type="text" onChange={(e) => {filterData(e.target.value)}} placeholder="Search restaurants..."/>
                <p>Minimum Rating:<input type="number"/></p>
            </div>

            {
                dinner.map((items,index) => {
                    return(
                        <div className="All_Restaurant" key={index}>
                            <div className="single_Restaurant">
                                <div className="cn_chinese_plus_address">
                                    <div className="cn_chinese_plus_stars">
                                            <h3>{items.name}</h3>
                                            <svg stroke="currentColor" color="#FACC15" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="w-5 h-5 text-yellow-400" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" color="#FACC15" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="w-5 h-5 text-yellow-400" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" color="#FACC15" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="w-5 h-5 text-yellow-400" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" color="#FACC15" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="w-5 h-5 text-yellow-400" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" color="#FACC15" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="w-5 h-5 text-yellow-400" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    </div>
                                    <div className="address">
                                        <p className="ptags_for_address"> <svg width={"15px"} height={"15px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>&nbsp;{items.address},&nbsp;{items["address line 2"]}</p>
                                        <p className="ptags_for_address">{items.outcode}&nbsp;&nbsp;{items.postcode}</p>
                                    </div>
                                </div>

                                <div className="visit_menu_part">
                                    <p><svg width={"18px"} height={"16px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#22c55e" d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>{items.type_of_food}</p>
                                    <button><a href={"www.google.com"} className="atag_with_visit_menu">Visit Menu</a></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Footer/>
        </div>
    );
}

export default Restaurants;