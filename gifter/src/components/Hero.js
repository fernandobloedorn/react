import React from 'react'
import { Jumbotron, Button, Container, Row, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return (
        <Container>
            {/* <Jumbotron>
                <Row className="justify-content-md-center">
                    <h1>Hello, world!</h1>
                </Row>
            </Jumbotron> */}

            <InputGroup className="mb-3">
                <FormControl placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon2"/>
                <InputGroup.Append>
                    <Button variant="primary"><FontAwesomeIcon icon={faSearch} /></Button>
                </InputGroup.Append>
            </InputGroup>

        </Container>
    )
}

export default Hero
