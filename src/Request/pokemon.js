import axios from 'axios';

import URL_p from '../Configuration/enviroment';
class Pokemon{
    constructor(){
        this.URL = URL_p.base;
    }

    async getPokemonByHabitat(habitat){

        const opt = {
            method:'GET',
            url:this.URL + 'pokemon-habitat/'+habitat,
            headers:{
                'Content-Type':'application/json',
            },
        }
        
        return axios(
            opt 
        )
    }
    async getPokemonBySpecies(pokeUrl){

        const opt = {
            method:'GET',
            url:pokeUrl,
            headers:{
                'Content-Type':'application/json',
            },
        }
        
        return axios(
            opt 
        )
    }
}
export default new Pokemon();