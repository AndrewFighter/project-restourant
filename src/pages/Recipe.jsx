import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Recipe = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("ingredients");
  console.log(recipe)
  
  useEffect(() => {
    getRecipe(params.id);
  }, [params.id])
  const getRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json();
    console.log(data);
    setRecipe(data);

    

  }
  return (
    <DetailWrapper>
      <div>
        <img src={recipe.image} alt={recipe.title} />
        <h2>{recipe.title}</h2>
      </div>
      <Info>
        <Button onClick={() => { setActive('ingredients') }} className={active === 'ingredients' ? 'active' : ''}>Ingridients</Button>
        <Button onClick={() => { setActive('instructions') }} className={active === 'instructions' ? 'active' : ''}>instructions</Button>
        {active === 'ingredients' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.details }}></h3>
          </div>
        )}
        {active === 'instructions' && (
          <ul>
            {recipe.extendedIngredients.map((item,index) => {
              return <li key={index}> {item.original}</li>
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    display:flex;
    margin-topL10rem;
    margin-bottom:5rem;
    img{
      border-radius:2rem;
    }
    .active{
        background:linear-gradient(35deg,#494949,#313131);
        color:white;
    }
    h2{
        margin-bottom:2rem;
        color:white;
        text-align:center;
    }
    h3{
      color:white;
      line-height:1.4rem;
    }
    li::marker{
      color:white;
      font-size:1.4rem;
    }
    li{
      line-height:1.9rem;
      font-size:1.2rem;
    }
    ul{
        margin-top:2rem;
    }

`

const Button = styled.button`
    background:white;
    border-radius:4rem;
    cursor:pointer;
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


export default Recipe