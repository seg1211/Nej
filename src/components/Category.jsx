import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {List, Slink } from '../styled.components'

import {Splide, SplideSlide} from '@splidejs/react-splide'
import { NavLink} from 'react-router-dom'
function Category() {
  return (
    <List>
      
        <Slink to={'cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
        </Slink>
        <Slink to={'cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
        </Slink>
        <Slink to={'cuisine/Spanish'}>
        <GiNoodles/>
        <h4>Spanish</h4>
        </Slink>
        <Slink to={'cuisine/German'}>
        <GiChopsticks/>
        <h4>German</h4>
        </Slink>
    </List>
  )
}

export default Category