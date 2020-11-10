import fetch from 'node-fetch';
import { IPokemon } from '../interfaces/models/IPokemon';
import { Pokemon } from '../models/Pokemon';

const pokemonLimitedUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';

class PokemonService {
  public async get50Pokemons(): Promise<Array<IPokemon>> {
    return new Promise((resolve: any, reject: any) => {
      fetch(pokemonLimitedUrl)
        .then((response) => response.json())
        .then((allpokemon) => {
          const promiseList: any[] = [];
          allpokemon.results.forEach((pokemon: any) => {
            const itemPromise = this.fetchPokemonData(pokemon);
            promiseList.push(itemPromise);
          });
          Promise.all(promiseList).then((values) => {
            return resolve(values);
          });
        })
        .catch((error) => {
          console.log(error);
          return reject(error);
        });
    });
  }

  private async fetchPokemonData(pokemon: any): Promise<IPokemon> {
    return new Promise((resolve: any, reject: any) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((item) => {
          return resolve(this.mapPokemon(item));
        })
        .catch((error: any) => {
          console.log(error);
          return reject(error);
        });
    });
  }

  private mapPokemon(item: any): IPokemon {
    console.log('...item', item);
    const pokemon = new Pokemon();
    const abilities = Array<String>();
    item.abilities.forEach((item: any) => {
      abilities.push(item.ability.name);
    });
    pokemon.id = item.id;
    pokemon.name = item.species.name;
    pokemon.abilities = abilities;
    pokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`;
    pokemon.url = item.species.url;
    return pokemon;
  }
}

export default PokemonService;
