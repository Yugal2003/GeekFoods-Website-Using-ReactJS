import React, { useState } from 'react'
import "./MainPart.css"

const MainPart = () => {
  let data = [
    {
      "idCategory": "1",
      "strCategory": "Apple",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dz7-XilV0DK4h05_jPJkesswadW5b_KikQ&s",
      "strCategoryDescription": `The apple is one of the pome (fleshy) fruits.Apples at harvest vary widely in size, shape, colour, and acidity.The thousands of varieties fall into three broad classes: cider, cooking, and dessert varieties`
      },
      {
      "idCategory": "2",
      "strCategory": "Banana",
      "strCategoryThumb": "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
      "strCategoryDescription": `A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.If you eat a banana every day for breakfast, your roommate might nickname you "the monkey"`
      },
      {
      "idCategory": "3",
      "strCategory": "Grapes",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8ALgDIzGd_rHEW_xFBvqvzDt_IlV2vZUymnEAwNeag&s",
      "strCategoryDescription": `A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters`
      },
      {
      "idCategory": "4",
      "strCategory": "Orange",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH7Uvw1O7ixFL66NfZ8g9B9YC-R7esc6Cvg&s",
      "strCategoryDescription": `Oranges are citrus fruits with fragrant, leathery skin and juicy flesh. The most common types are the sweet (or common) orange, the sour (or Seville) orange, and the mandarin orange`
      },
      {
      "idCategory": "5",
      "strCategory": "Kiwi",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpi0yem6HDZpstrjhENHha3ZAvq8n9O5B2bg&s",
      "strCategoryDescription": `The ellipsoidal kiwi fruit is a true berry and has furry brownish green skin. The firm translucent green flesh has numerous edible purple-black seeds embedded around a white centre.`
      },
      {
      "idCategory": "6",
      "strCategory": "Watermalon",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO89SXc2ZdFemJvMGnOh93CApBIkpKF7C4Pw&s",
      "strCategoryDescription": `Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo`
      },
      {
      "idCategory": "7",
      "strCategory": "Jamun",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcxNubZHmwq3-3zipxFjBNHaC0ao8RAPWYw&s",
      "strCategoryDescription": `The most commonly found variety of Jamun fruit is often oblong and has a deep purple to bluish colour. The pulp of the fruit is grey to pink in colour, and has a seed in the centre`
      },
      {
      "idCategory": "8",
      "strCategory": "Papaya",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeEPU_k53RsGbGvvYEkb47uFociEXDBdrLQ&s",
      "strCategoryDescription": `The papaya fruit is slightly sweet, with an agreeable musky tang, which is more pronounced in some varieties and in some climates than in others.`
      },
      {
      "idCategory": "9",
      "strCategory": "Lime",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbg9U0Rf8IDf3-uNKhXiRSaPN5LnizlO3oYQ&s",
      "strCategoryDescription": `Limes are sour, round, and bright green citrus fruits. There are many species of limes, including the Key lime (Citrus aurantifolia), Persian lime (Citrus latifolia), desert lime (Citrus glauca), and makrut lime (Citrus hystrix).`
      },
      {
      "idCategory": "10",
      "strCategory": "Pear",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKSMrpMgpyncQM5HQAn-rAiuSehDFOBZJRA&s",
      "strCategoryDescription": `Pear fruits are generally sweeter and of softer texture than apples and are distinguished by the presence of hard cells in the flesh, the so-called grit, or stone cells. `
      },
      {
      "idCategory": "11",
      "strCategory": "Pineapple",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEVR9ZwnjOi34fzZ2NaGflTXfzuwi80dxCw&s",
      "strCategoryDescription": `The pineapple is a fruit. It is native to South America, Central America and the Caribbean. The word "pineapple" came from European explorers, who thought the fruit looked similar to a pine cone`
      },
      {
      "idCategory": "12",
      "strCategory": "Mango",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliQ-h55_bMU-pVbX2XvtJs_2T73Zp4pBcDA&s",
      "strCategoryDescription": `The fruit is a well known large drupe, but shows a great variation in shape and size. It contains a thick yellow pulp, single seed and thick yellowish – red skin when ripe.`
      },
      {
      "idCategory": "13",
      "strCategory": "Strawberry",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIUunF4fRrnHFyZ3_2EMAsjrBJjuGgM4gyQ&s",
      "strCategoryDescription": `A strawberry is both a low-growing, flowering plant and also the name of the fruit that it produces. Strawberries are soft, sweet, bright red berries. They're also delicious.`
      },
      {
      "idCategory": "14",
      "strCategory": "Olive",
      "strCategoryThumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuddenFNzV9O-ADQgaztjoiDbLrPXTINeMw&s",
      "strCategoryDescription": "The fruit (olive) is a drupe that is on average 0.8-1 inch (2-2.5 cm) long. A central pit encloses the seed. A mature seed is covered with a thin, oil-rich fruit that is a black or purplish color"
      }
  ];
  const [foodData,setfoodData] = useState(data);
  console.log(setfoodData);
  

  return (
    <div>
      <h1 style={{marginTop : "2rem", textAlign : "center"}}>Welcome To Food Page</h1>
        {
          foodData.map((database) => {
              return(
                  <div className='some_database'>
                    <div key={database.id}>
                      <h2 className='h2tag'>{database.strCategory}</h2>
                      <img className='img' style={{borderRadius : "20px"}} width={"280px"} height={"230px"} src= {database.strCategoryThumb} alt='pic'/>
                      <h5 className='h5tag'>{database.strCategoryDescription}</h5>
                    </div>
                  </div>
              )
          })
        }
    </div>
  )
}

export default MainPart
