import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Pokemon from '../Request/pokemon';
import PokeCard from './PokeCard';
function PokeGrid(props){
    const {option} = props;

    const [pokemons, setPokemon] = useState([]);

    let RequestPokemonByHabitat =async (option) =>{
        let pokemons = []
        await Pokemon.getPokemonByHabitat( option)
        .then((res)=>{ return res.data.pokemon_species})
        .then(async (data) => {
            for (let i = 0; i < data.length; i++) {
                let id = await Pokemon.getPokemonBySpecies(data[i].url).then(res =>{
                   // console.log(res.data.id)
                    return  res.data.id
                }) 
                
                let  flavorText = await Pokemon.getPokemonBySpecies(data[i].url).then(res =>{
                    return  res.data.flavor_text_entries[1].flavor_text
                }) 
                
                let obj = {
                    name: data[i].name,
                    text: flavorText,
                    src:id 
                    
                }
                pokemons.push(obj)
            }
            
        })
        return pokemons;
    }
    useEffect(() => {
        
        RequestPokemonByHabitat(localStorage.getItem("habitat")).then(array =>{
                setPokemon(array)
            }
        )

    },[option]);
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row',  flexWrap: "wrap"}}>

                {
                    pokemons && pokemons.map((pokemon, i)=>{
                        //console.log(pokemon.name)
                        return(

                            <PokeCard  
                            key={i+' Pokemon'}
                            id={pokemon.src}
                            name={pokemon.name}
                            text={pokemon.text}/>

                        );
                    })
                }
            </div>
        </>
    );
}
export default PokeGrid;