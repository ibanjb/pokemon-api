import { Router } from 'express';
import HomeController from '../controllers/App/Home';
import PokemonController from '../controllers/App/PokemonController';
import PokeDeskController from '../controllers/App/PokeDesk';
import LoginController from '../controllers/Auth/Login';
import LogoutController from '../controllers/Auth/Logout';
import RegisterController from '../controllers/Auth/Register';

const router = Router();

router.get('/', HomeController.index);

router.get('/pokemon', PokemonController.get);

router.get('/pokedesk', PokemonController.get);
router.post('/pokedesk', PokeDeskController.add);
router.delete('/pokedesk', PokeDeskController.delete);

router.post('/auth/login', LoginController.index);
router.post('/auth/logout', LogoutController.index);
router.post('/auth/register', RegisterController.index);

export default router;
