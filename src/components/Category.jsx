import React from 'react';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';


const Category = () => {
    return (
        <List>
            <SLink to={'/cuisine/italian'}>
                <FaPizzaSlice></FaPizzaSlice>
                Italian
            </SLink>
            <SLink to={'/cuisine/american'}>
                <FaHamburger></FaHamburger>
                American
            </SLink>
            <SLink to={'/cuisine/thai'}>
                <GiNoodles></GiNoodles>
                Thai
            </SLink>
            <SLink to={'/cuisine/japanese'}>
                <GiChopsticks></GiChopsticks>
                Japanese
            </SLink>
        </List>
    )
}

const List = styled.div`
   display:flex;
   min-height:5rem;
   justify-content:center;
   align-items:center;
   gap:2rem;
   margin:2rem 0;
`

const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:.5rem;
    background:linear-gradient(35deg,#494949,#313131);
    border-radius:100%;
    width:5rem;
    height:5rem;
    color:#fff;
    text-decoration:none;
    font-size:0.9rem;
    cursor:pointer;
    transition:all .5s ease-in-out;
    
    svg{
        font-size:1.4rem;
        
    }
    &.active{
        transform:scale(0.8);
        background:linear-gradient(to right,#f27121,#e93057);
    }


`

export default Category