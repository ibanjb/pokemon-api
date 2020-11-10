import { IPokemon } from '../interfaces/models/IPokemon';

export class Pokemon implements IPokemon {
  id!: string;
  url!: string;
  name!: string;
  abilities!: Array<String>;
  image!: string;
}
