import React from 'react'
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('searched/' + input);
    }


  return (
    <Form onSubmit={(e) => {onSubmitHandler(e)}}><input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" placeholder="Search Your Favourite" />
    <FaSearch/></Form>
   
  )
}


const Form = styled.form`
    margin:4rem 0;
    display:flex;
    justify-content:center;
    position:relative;
    input{
        
        width:25rem;
        padding:1rem;
        border-radius:1rem;
        border:none;
        outline:none;
        color:white;
        font-size:1.1rem;
        background:linear-gradient(35deg,#494949,#313131);
        text-indent:10%;       
    }
    svg{
        position:absolute;
        top:1.2rem;
        left:37%;
        
        color:white;
    }
    

`

export default Search