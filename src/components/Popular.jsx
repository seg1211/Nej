import axios from "axios"
import { useEffect, useState } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import {Wrapper, Card, Gradient} from '../styled.components'
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';
function Popular() {
    const [popular, setPopular] = useState([]);
    useEffect(()=>{
      fetchData()
        }, [])
     const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`;
     const fetchData = async () => {
     const check = JSON.parse(localStorage.getItem("popular"));
         if (check){
             setPopular(check.recipes) } else {
         try {
             const {data: {recipes}} = await axios.get(url)
             const recep = {recipes}
             localStorage.setItem('popular', JSON.stringify(recep))
             setPopular (recep)
             console.log(popular)
             return recep
            
         } catch (error) {    } }
     }
          ////////////
          const [windowDimenion, detectHW] = useState(
            window.innerWidth,
          )
        
          const detectSize = () => {
            detectHW(
             window.innerWidth,
            )
          }
        
          useEffect(() => {
            window.addEventListener('resize', detectSize)
        
            return () => {
              window.removeEventListener('resize', detectSize)
            }
          }, [windowDimenion])
      
  return (
    <div>
       {popular ? 
            (<Wrapper> 
            <h3> Popular Picks </h3>  
            <Splide options={{
                 perPage: (windowDimenion > 1800) ? 6 :
                          (windowDimenion > 1600) ? 5 :
                          (windowDimenion > 1300) ? 4 :
                          (windowDimenion > 1100) ? 3 : 
                          (windowDimenion > 900) ? 2 :
                          1
                 ,
                arrows: false,
                pagination: false, 
                drag: 'free',
                gap: '5rem',
            }}>
               { popular.map((x)=> {
                   return(
                       <SplideSlide key={x.id}>
                       <Card>
                         <Link to={'recepie/'+x.id}>
                        <p key={x.id}>{x.title} </p> 
                        <img src={x.image} alt={x.title}/>
                        <Gradient/>
                        </Link>
                       </Card>
                       </SplideSlide>
                         )
               })}</Splide>
           </Wrapper>
           )
      : null}
    </div>
  )
}

export default Popular