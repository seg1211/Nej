import React, {useState} from 'react'
import {FormStyle} from '../styled.components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate()
    const submutHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+ input)
    }
  return (
    <FormStyle onSubmit={submutHandler}>
        <div>
            <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)}type='text' value={input}/>
        </div>
    </FormStyle>
    
  )
}

export default Search