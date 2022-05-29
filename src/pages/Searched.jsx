import React from 'react'
import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import { Grid, Carda } from '../styled.components'
function Searched() {
    const [searchedfor, setSearched] = useState([])
    let params = useParams()
    console.log(params, 'params')
    const GetCuisine = async (name) => {
        const data = await (fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`))
        const recepies = await data.json()
        setSearched(recepies.results)
    }
    useEffect(() => {
        GetCuisine(params.searched)
    }, [params])
  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity:0}}
    transition={{duration: 1.5}}>
        {searchedfor.map((x)=>{
            return (
                <Carda key={x.id}>
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

export default Searched