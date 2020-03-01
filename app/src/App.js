import React, { useEffect, useState} from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Serviços
import api from './services/api';

function App() {

  const [receita, setReceita] = useState([]);

  useEffect(() => {
      async function getReceita(){
          const response = await api.get('/random.php');
          setReceita(response.data.meals);  
      }      
      getReceita();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function novaReceita(event){
    event.preventDefault();
    const response = await api.get('/random.php');
    setReceita(response.data.meals);  
  }

  function embed(valor){
    valor = valor.split('v=');
    return 'https://www.youtube.com/embed/' + valor[1];
  } 

  return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h3>Bem vindo(a) ao Gerador de receita 3000</h3>
              <p>
                <Button variant="primary" onClick={novaReceita}>GERAR NOVA RECEITA</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>        
        {receita.map(item => (
          <Row key={item.idMeal}>
            <Col>
              <Image src={item.strMealThumb} thumbnail fluid />
              <ResponsiveEmbed aspectRatio="16by9">
                <embed src={embed(item.strYoutube)} />
              </ResponsiveEmbed>
            </Col>
            <Col>
              <h4><strong>Ingredientes</strong></h4>
              <ul>
                {item.strIngredient1 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient1 }} /> }
                {item.strIngredient2 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient2 }} /> }
                {item.strIngredient3 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient3 }} /> }
                {item.strIngredient4 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient4 }} /> }
                {item.strIngredient5 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient5 }} /> }
                {item.strIngredient6 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient6 }} /> }
                {item.strIngredient7 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient7 }} /> }
                {item.strIngredient8 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient8 }} /> }
                {item.strIngredient9 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient9 }} /> }
                {item.strIngredient10 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient10 }} /> }
                {item.strIngredient11 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient11 }} /> }
                {item.strIngredient11 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient11 }} /> }
                {item.strIngredient12 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient12 }} /> }
                {item.strIngredient13 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient13 }} /> }
                {item.strIngredient14 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient14 }} /> }
                {item.strIngredient15 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient15 }} /> }
                {item.strIngredient16 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient16 }} /> }
                {item.strIngredient17 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient17 }} /> }
                {item.strIngredient18 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient18 }} /> }
                {item.strIngredient19 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient19 }} /> }
                {item.strIngredient20 && <li dangerouslySetInnerHTML={{ __html: item.strIngredient20 }} /> }
              </ul>
              <p>
                <a rel="noopener noreferrer" href={item.strSource} target="_blank">Receita Original</a>
              </p>
            </Col>
            <Col>
            <h2>{item.strMeal}</h2>
            
            {item.strInstructions}
            </Col>
          </Row>
          ))}        
      </Container>
  );
}

export default App;
