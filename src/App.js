import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to='/'>Delicius</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  position:absolute;
  top:2.5rem;
  left:12rem;
  display:flex;
  justify-content:center;
  align-items:center;
  svg{
    font-size:1.5rem;
  }
`

const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.7rem;
  font-family:'Lobster Two';
  font-weight:400;

`

export default App;
