import axios from "axios"
import { useEffect, useState } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import {Wrapper, Card, Gradient} from '../styled.components'
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';
function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(()=>{
    fetchData()
      }, [])
     const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7&tags=vegetarian`;
     const fetchData = async () => {
     const check = JSON.parse(localStorage.getItem("veggie"));
         if (check){
          setVeggie(check.recipes) } else {
         try {
             const {data: {recipes}} = await axios.get(url)
             const recep = {recipes}
             localStorage.setItem('veggie', JSON.stringify(recep))
             setVeggie (recep)
             console.log(veggie)
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
       {veggie ? 
            (<Wrapper> 
            <h3> Our Vegetarian Picks </h3>  
            <Splide options={{
                perPage: (windowDimenion > 1500) ? 5 :
                          (windowDimenion > 1200) ? 4 :
                          (windowDimenion > 1000) ? 3 : 
                          (windowDimenion > 800) ? 2 :
                          1
                 ,
                arrows: false,
                pagination: false, 
                drag: 'free',
                gap: '5rem',
                waitForTransition: true,
                wheel: false,
                rewindByDrag: true,
            }}>
               { veggie.map((x)=> {
                   return(
                       <SplideSlide key={x.id}>
                       <Card>
                         <Link to={'/recepie/'+x.id}>
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

export default Veggie