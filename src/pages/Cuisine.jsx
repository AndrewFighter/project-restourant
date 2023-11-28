import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Cuisine = () => {
    const [recipes, setRecipes] = useState([]);
    const params = useParams();
    useEffect(() => {
        getCuisine(params.type);


    }, [params]);
    const getCuisine = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
        const data = await response.json();
        setRecipes(data.results);

    }
    return (
        <Grid>
            {recipes.map((item) => {
                return <SLink to={'/recipe/' + item.id} key={item.id}>
                    <Card>
                        <img src={item.image} alt={item.image} />
                        <h4>{item.title}</h4>
                    </Card>
                </SLink>

            })}
        </Grid>
    )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    column-gap: 3rem;
    
`

const Card = styled.div`
    min-height:20rem;
    img{
        width:100%;
        border-radius:2rem;

    }
    h4{
        padding:1rem;
        text-align:center;
        color:#fff;
        font-size:1.2rem;
    }

`

const SLink = styled(Link)`
   text-decoration:none;


`

const DetailWrapper = styled.div`
    display:flex;
    margin-topL10rem;
    margin-bottom:5rem;
    .active{
        background:linear-gradient(35deg,#494949,#313131);
        color:white;
    }
    h2{
        margin-bottom:2rem;
    }
    li{
        font-size:1.2rem;
    }
    ul{
        margin-top:2rem;
    }

`

const Button = styled.button`
    background:white;
    color:#313131;
    border:2px solid #313131;
    margin-right:2rem;
    font-weight:600;
    padding:1rem 2rem;
    .active{
        background:#313131;
        color:#313131;
    }

`
const Info = styled.div`
    margin-left:10rem;
`



export default Cuisine