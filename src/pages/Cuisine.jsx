import React, { useEffect, useState } from 'react'
import { Grid, Carda } from '../styled.components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()
    const GetCuisine = async (name) => {
        const data = await (fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`))
        const recepies = await data.json()
        setCuisine(recepies.results)
    }
    useEffect(() => {
        GetCuisine(params.type)
        console.log(params.type)
    }, [params.type])
    console.log(cuisine)
  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity:0}}
    transition={{duration: 1.5}}>
        {cuisine.map((x)=>{
            return (
               
                <Carda key={x.id}
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity:0}}
                transition={{duration: 1.5}}>
                    <Link to={'/recepie/'+x.id}>
                    <img src={x.image} alt=''/>
                    
                    <h4>{x.title}</h4>
                    </Link>
                </Carda>
                
            )
        })}
    </Grid>
  )
}

export default Cuisine