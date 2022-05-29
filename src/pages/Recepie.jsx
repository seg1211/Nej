import React from 'react'
import {useEffect, useState} from 'react'
import { DetailWrapper, Button, Info,Block } from '../styled.components'
import {useParams} from 'react-router-dom'
import {motion} from 'framer-motion'
function Recepie() {
    let params = useParams();
    const [details, setDetails] = useState([])
    const [activeTab, setActiveTab] = useState('instructions')
    const fetchDetails = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        console.log(data, 'fdfd')
        const detailsData = await data.json()   
        setDetails(detailsData)
    }
    useEffect(()=>{
        fetchDetails()
    },[params.id])
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
    console.log(details, 'fdfds  ')
  return (
    <DetailWrapper
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity:0}}
    transition={{duration: 1.5}}>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=''/>
        </div>
        <Info>
            <Block>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>setActiveTab('ingredients')}>Ingredients</Button>
            </Block>
            {activeTab === 'instructions' && (
                 <div>
                 <motion.h3 
                     animate={{opacity: 1}}
                     initial={{opacity: 0}}
                     exit={{opacity:0}}
                     transition={{duration: 1.5}}
                 dangerouslySetInnerHTML={{__html: details.summary}}></motion.h3>
                 <motion.h3
                 animate={{opacity: 1}}
                 initial={{opacity: 0}}
                 exit={{opacity:0}}
                 transition={{duration: 1.5}} dangerouslySetInnerHTML={{__html: details.instructions}}></motion.h3>
             </div>
            )}
          
            {activeTab === 'ingredients' &&
        <ul>
            {details.length ==undefined ? details.extendedIngredients.map((x)=>{
                 return (<motion.li 
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity:0}}
                    transition={{duration: 1.5}}
                    key={x.id}>{x.original}</motion.li>)
            }): null}
        </ul> }
        </Info>
    </DetailWrapper>
  )
}

export default Recepie