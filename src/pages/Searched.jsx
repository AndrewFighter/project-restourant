import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


const Searched = () => {
    const [searched, setSearched] = useState([]);
    console.log(searched);
    const params = useParams();
    useEffect(() => {
        getSearched(params.search);


    }, [params.search]);
    const getSearched = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
        const data = await response.json();
        setSearched(data.results);

    }
    return (
        <Grid>
            {searched.map((search) => {
                return <SLink to={'/recipe/' + search.id}><Card key={search.id} >
                    <img src={search.image} alt={search.title} />
                    <h4>{search.title}</h4>
                </Card></SLink>
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    column-gap: 3rem;
    
`

const SLink = styled(Link)`
   text-decoration:none;


`

const Card = styled.div`
    
    min-height:20rem;
    img{
        width:100%;
        border-radius:2rem;

    }
    a{
    text-decoration:none;
    }
    h4{
        padding:1rem;
        text-align:center;
        color:#fff;
        font-size:1.2rem;
    }

`

export default Searched