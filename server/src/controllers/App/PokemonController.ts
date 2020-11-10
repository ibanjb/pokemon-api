import { IRequest, IResponse, INext } from '../../interfaces/vendors';
import { IPokemon } from '../../interfaces/models/IPokemon';
import PokemonService from '../../services/PokemonService';

const pokemonService = new PokemonService();

class PokemonController {
  public static async get(req: IRequest, res: IResponse, next: INext) {
    const result = await pokemonService.get50Pokemons();
    res.send(result);
  }
}

export default PokemonController;
