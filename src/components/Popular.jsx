import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Popular = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const check = localStorage.getItem('Popular')
        if (check) {
            const recipes = JSON.parse(check);
            setRecipes(recipes);
        }
        else {
            getPopular();
        }

    }, [])



    const getPopular = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await response.json();
        setRecipes(data.recipes);
        
        localStorage.setItem('Popular', JSON.stringify(data.recipes));


    }
    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={
                    {
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "4rem",
                    }

                }>
                    {recipes.map(recipe => {
                        return <SplideSlide key={recipe.id}>
                            <Link to={'/recipe/' + recipe.id}>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Card>
                            </Link>
                        </SplideSlide>
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}


const Wrapper = styled.div`
    grid-template-columns: repeat(3,1fr);
    margin:4rem 0rem; 
    ul{
        padding:0;
        list-style: none;
        display:flex;
        flex-direction:row;
        width: 100%;
        height: 100%;
     }


`;

const Card = styled.div`
     width:15rem;
     height:10rem;
     border-radius:2rem;
     overflow:hidden;
     position:relative;
     img{
        
        border-radius:2rem;
        width: inherit;
        height: inherit;
        object-fit: cover;

        
     }
     p{
        position:absolute;
        color:white;
        font-size:1.2rem;
        font-weight:700;
        left:50%;
        transform:translateX(-50%);
        bottom:10%;
        text-align:center;      
     }

`
const Gradient = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:3;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular