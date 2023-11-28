import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Veggie = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const check = localStorage.getItem('Veggie')
        if (check) {
            const recipes = JSON.parse(check);
            setRecipes(recipes);
        }
        else {
            getPopular();
        }

    }, [])



    const getPopular = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
        const data = await response.json();
        setRecipes(data.recipes);
        localStorage.setItem('Veggie', JSON.stringify(data.recipes));


    }
    return (
        <div>
            <Wrapper>
                <h3>Our Vegetables Picks</h3>
                <Splide options={
                    {
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap:'6.3rem'
                       
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
    margin:4rem 0rem; 
    ul{
        padding:0;
        list-style: none;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        
        width: 100%;
        height: 100%;
     }


`;

const Card = styled.div`
     width:20rem;
     height:15rem;
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
        font-size:1.3rem;
        font-weight:600;
        left:50%;
        transform:translateX(-50%);
        bottom:20%;
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
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
`

export default Veggie