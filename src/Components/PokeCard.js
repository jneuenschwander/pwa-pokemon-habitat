import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Card,

} from 'react-bootstrap';
//import pokeball from "../pokeball.png"


function PokeCard(props){
    
    const {
        id,
        name,
        text,
    } = props


    return(
        <div>
            <Container>
            <Row>
                <Col className="col-lg-4 col-md-12 mb-4 mb-lg-0"   >
                        <Card style={{ width: '18rem' ,flex: 1}}>
                            <Card.Img variant="top" src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
            </Container>
        </div>
    );

}
export default PokeCard;