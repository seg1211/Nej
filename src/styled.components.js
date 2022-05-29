import { NavLink, Link } from 'react-router-dom'
import styled, {createGlobalStyle} from 'styled-components'
import {motion} from 'framer-motion'
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    margin: 0%, 20%;
    body {
        margin-left: 10%;
        margin-right: 10%;
    }
    h4 {
        font-size: 1rem;
        color: rgb(56,56,56);
    }
    h3{
        font-size: 1.5rem;
        color: rgb(56,56,56);
        line-height: 2.5rem;
    }
    a{
        color: rgb(56,56,56);
        text-decoration: none;
    }
}`
export default GlobalStyle
export const Wrapper = styled.div`
margin: 4rem, 0rem;
h3{margin: 2rem 0;
    text-align: center;}`
export const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow:hidden;
position: relative;
img {
    border-radius: 2rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
}
p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
export const Gradient = styled.div`
z-index: 3;
position:absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`
export const List = styled.div`
display:flex;
justify-content: center;
margin: 2rem 0rem;
@media (max-width: 65rem) {
    justify-content: space-between;
    transform: translate(15px);
}
flex-wrap: wrap
`
export const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
margin-top: 2rem;
`
export const Carda =styled(motion.div)`
img{
    width: 94%;
    border-radius: 2rem;   
}
a {
    text-decoration: none;
}
h4 {
    text-align: center;
    padding: 1rem;
}
`
export const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
margin-top: 0.5rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 5rem !important;
height: 5rem !important;
padding: 1rem;
cursor: pointer;

h4{
    color: white;
    font-size: 0.8rem;
}
svg{
    color: white;
    font-size: 1.5rem;
}
&.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg{
        color:white;
    }
    h4{
        color: white;
    }
}
`
export const FormStyle = styled.form`
position: relative;
margin-bottom: 2vh;
width: 80%;
margin: auto;
@media (max-width: 65rem) {
    width: 100%;
}
input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    
}
svg {
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translate(100%, -50%);
    color: white;

}
`
export const DetailWrapper = styled(motion.div)`
margin-top: 10rem;
margin-bottom: 2rem;
display:flex;
flex-direction:row;
img{
    width:30vw;
}
@media (max-width: 65em) {
     {
        flex-direction:column;
        margin-top: 2rem;
    }
    img {
        width:80vw;
        margin: auto;
    }
}
.active{
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
}
h2{margin-bottom:2rem;
}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}
ul{
    margin-top:2rem;
}
`
export const Block = styled.div`

@media (max-width: 65em) {
    flex-direction: row;
justify-content: space-evenly;
display:flex;
}
`
export const Button= styled.button`
padding: 1rem 2rem;
color:#313131;
background:white;
border: 2px solid black;
margin-right:2rem;
font-weight:600;
@media (max-width: 65rem) {
margin: auto;}
`
export const Info = styled.div`
margin-left:5rem;

@media (max-width: 65em) {
    margin-left:0rem;  
}
h3{ 
    font-weight:400;
    margin: 2rem 0rem;
    font-size:1rem;
}
li{
    font-weight:400;
    font-size:1rem;
}
`
export const Logo = styled(Link)`
text-decoration:none;
font-size: 1.5rem;
font-weight:400;
`
export const Navv = styled.div`
padding: 4rem 0rem;
display:flex;
justify-content: flex-start;
align-items:center;
svg{
    font-size:2rem; 
}
`
