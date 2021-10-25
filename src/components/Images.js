import React, {useEffect,useRef} from 'react'
import axios from 'axios'


function Images() {

    let img1 =  useRef(null);
    let img2 =  useRef(null);
    let img3 =  useRef(null);


  const link = (img) => {
    const api = "https://dog.ceo/api/breeds/image/random"

    axios.get(api).then((response) => {
        img.current.src = response.data.message
    })
  }

   useEffect(()=>{
    link(img1)
    link(img2)
    link(img3)
   })

   

    return (

        <div>

                <img ref={img1} alt="image 1" className="img1 img"/>
  
                <img ref={img2} alt="image 2" className="img2 img"/>
   
                <img ref={img3} alt="image 3" className="img3 img"/>
     

        </div>


    )
}

export default Images
