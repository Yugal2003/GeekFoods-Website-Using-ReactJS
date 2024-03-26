import React from "react";
import girlImg from '../Img/girl.JPG';
import './GirlImg.css'

const Girl = () =>{
    const  data =  [
        {
            id : 1,
            name : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
            img : girlImg,
            authorname : "Gladis Lennon",
            work : "Head of SEO"
        },
        {
            id : 2,
            name : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.',
            img : girlImg,
            authorname : "Gladis Lennon",
            work : "Head of SEO"
        },
        {
            id : 3,
            name : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.',
            img : girlImg,
            authorname : "Gladis Lennon",
            work : "Head of SEO"
        },
        {
            id : 4,
            name : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.',
            img : girlImg,
            authorname : "Gladis Lennon",
            work : "Head of SEO"
        },
        {
            id : 5,
            name : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!',
            img : girlImg,
            authorname : "Gladis Lennon",
            work : "Head of SEO"
        },
        {
            id : 6,
            name : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.',
            img : girlImg,
            authorname : "Gladis Lennon",
            work : "Head of SEO"
        }
    ]
    return (
        <div>
            {
                data.map((curElm) => {
                    return(
                        <> 
                            <div className="two_divs">
                                <div className="girl_div1">{curElm.name}</div>
                                <div className="girl_div2">
                                      <img className="girl_img" alt="girlIMAGE" src= {curElm.img}/>
                                      <div>
                                            <p className="ptags">{curElm.authorname}</p>
                                            <p className="ptags">{curElm.work} </p>
                                      </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }   
        </div>
    );
}

export default Girl;