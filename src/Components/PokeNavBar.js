import React , {useState, useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokeball from "../pokeball.png"
import {
  Button,
  Navbar,
  Form,
} from 'react-bootstrap';
import PokeGrid from './PokeGrid';
const searchbarstyle ={
  width: "32%",
  position: "sticky",
  display: "flex",
}

function PokeNavBar(){
    let [option, setOption]=useState(localStorage.getItem("habitat"));
    useEffect(()=>{
        localStorage.setItem("habitat",option)
    })
    return(
        <>
            <div>
                    <Navbar bg="primary">
                    <img
                    src={pokeball}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Pokemon logo"
                    />

                    <Navbar.Brand style={{color: "white",paddingLeft: "10px"}} > 
                    Welcome to PWA pokemon by habitad
                    </Navbar.Brand>
                </Navbar>
                <br/>
                <div style={{  paddingLeft: "25px"}}>
                <Form >
                <Form.Group controlId="PwaPokemon.ControlSelect1">
                    <Form.Label>
                    Choose one of the habitats and see what pokemon you can find in that habitat.
                    </Form.Label>
                    <div className="input-group mb-3" style={searchbarstyle}>
                    <Form.Control as="select" onChange={(e)=>{setOption(e.target.value)}} defaultValue={localStorage.getItem("habitat")}>
                    <option>cave</option>
                    <option>forest</option>
                    <option>grassland</option>
                    <option>mountain</option>
                    <option>rare</option>
                    <option>rough-terrain</option>
                    <option>sea</option>
                    <option>urban</option>
                    <option>waters-edge</option>
                    </Form.Control>
                    <Button variant="primary" type="submit" >
                    Submit
                    </Button>
                </div>
                </Form.Group>
                </Form>
                </div>
                <PokeGrid option={option}/>
            </div>
        </>
    );
}
export default PokeNavBar;