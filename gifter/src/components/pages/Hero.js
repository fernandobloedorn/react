import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, InputGroup, FormControl, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      isLoading: false,
      termo: ""
    };
  }
 
  componentDidMount() {
    this.setState({ isLoading: true });
    // let url = "https://pedidofacil.dakota.com.br/api/v1/result-list.php";
    // fetch(url).
    // then(response => response.json())
    // .then(data => this.setState({ produtos: data, isLoading: false }));
    let prods = [
                 {'id': 1, 
                 'name': 'Almofada te amo alien do universo',
                 'price': 'R$ 169,90 | R$6x 28,31',
                 'img': 'http://imaginarium.vteximg.com.br/arquivos/ids/8997247/Almofada-te-amo-alien-do-universo.jpg?v=637473931292530000',
                 'description': 'Se você costuma ter momentos "espaciais" com o mozão, acaba de encontrar o presente mais incrível do planeta (se não do universo)! A almofada perfeita pro seu contatinho (de terceiro grau), pra fazer a maior declaração do mundo: Te amo - alien do universo!',
                  'link': 'https://loja.imaginarium.com.br/almofada-te-amo-alien-do-universo/p'
                 }, 
                 {'id': 2, 
                 'name': 'Caneca I\'ll Be There For You',
                 'price': 'R$ 25,20',
                 'img': 'https://images-na.ssl-images-amazon.com/images/I/41YTMbiIQRL._AC_.jpg',
                 'description': 'Caneca música I\'ll Be There For You',
                  'link': 'https://www.amazon.com.br/dp/B0797G13CS/ref=cm_gf_aAF_i10_d_p0_qd0_6s6vtuP6jhRSuOnEP9XQ'
                 },
                 {'id': 3, 
                 'name': 'Placa De Música Acrílica Com Código Scannable Spotify Personalizado',
                 'price': '58,41 R$ 63% OFF',
                 'img': 'https://ik.imagekit.io/soufeel/en/media/catalog/product/cache/0/image/500x/9df78eab33525d08d6e5fb8d27136e95/C/B/CBS107_3_1.jpg',
                 'description': 'Se você costuma ter momentos "espaciais" com o mozão, acaba de encontrar o presente mais incrível do planeta (se não do universo)! A almofada perfeita pro seu contatinho (de terceiro grau), pra fazer a maior declaração do mundo: Te amo - alien do universo!',
                  'link': 'https://www.soufeeljoias.com.br/custom-scannable-spotify-code-music-plaque-gifts-for-family.html?utm_source=Google&utm_medium=br&utm_content=pla&utm_term=CBS110&gclid=Cj0KCQjw3duCBhCAARIsAJeFyPWVQxxfji_lagWljE8-p22unPD4pgOTIz4vJ9l1tXNZSmaxktMG5l4aAo9PEALw_wcB'
                 }]
    this.setState({ produtos: prods, isLoading: false })
  }

  submitSearch(){
    this.setState({ isLoading: true });
    const { termo } = this.state;
    // this.props.fetchTermo(termo);
    // Router.push({ pathname: "/pesquisa", query: { termo } });
    console.log("busca " + termo)
    let prods = [{"id": 4, "name": "Produto 4"}, {"id": 5, "name": "Produto 5"}, {"id": 6, "name": "Produto 3"} ]
    this.setState({ produtos: prods, isLoading: false })
  }

  render() {
    const { produtos, isLoading } = this.state;

    if (isLoading) {
      return <div className="Carregando">
                {/* <img src={"./Loading_2.gif"} /> */}
                <br/>
                Carregando dados...
              </div>;
    }

    return (
      <div className="App">
          <br/>
          <Container>
            {/* <Jumbotron>
                <Row className="justify-content-md-center">
                    <h1>Hello, world!</h1>
                </Row>
            </Jumbotron> */}

            <InputGroup className="mb-3">
                <FormControl placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon2" value={this.state.termo} onChange={e => this.setState({ termo: e.target.value })}/>
                <InputGroup.Append>
                    <Button variant="primary" onClick={() => this.submitSearch()} ><FontAwesomeIcon icon={faSearch} /></Button>
                </InputGroup.Append>
            </InputGroup>

            {/* <br/>
            <div className="flex-3 flex flex-center">
                <input
                    name="pesquisa"
                    value={this.state.termo}
                    onChange={e => this.setState({ termo: e.target.value })}
                    placeholder="Digite aqui a sua pesquisa..."
                    className="input-pesquisa" />
                <button
                    onClick={() => this.submitPesquisa()} 
                    className="button-pesquisa">
                    <i className="fa fa-search"></i>
                </button>
            </div> */}

        <br/>

        <Row className="justify-content-md-center">

        {produtos.map(produto =>
        <a href={produto.link} style={{ textDecoration: 'none' }} target="_blank">
          <Card style={{ width: '18rem', margin: '0.5rem' }} key={produto.id}>
            <Card.Img variant="top" src={produto.img} />
            <Card.Body>
              <Card.Title style={{ color: '#222222'}}>{produto.name}</Card.Title>
              <Card.Text>
                {/* <span style={{ color: '#222222'}}>{produto.description}</span> */}
                <p style={{ fontWeight: 'bold', color: 'blue'}}>{produto.price}</p>
              </Card.Text>
              {/* <Button variant="primary" href={produto.link} target="_blank">Go!</Button> */}
            </Card.Body>
          </Card>
          </a>
        )}  

        </Row>

        {/* <div className="Content">
          <Table striped bordered hover>
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Produto</th>
              </tr>
            </thead>
            <tbody>

              {produtos.map(produto =>
                 <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.name}</td>
                </tr>
              )}             

            </tbody>
          </Table>
        
        </div> */}

        </Container>

      </div>
    )
  };
}

export default Hero;
