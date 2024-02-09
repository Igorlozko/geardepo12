import {Router} from 'express'

import {createGear, deleteGear, getGears} from '../controllers/gear.js'
import auth from '../middleware/auth.js';


const gearRouter = Router()
gearRouter.post('/',auth, createGear);
gearRouter.get('/', getGears);
gearRouter.delete('/:gearId', deleteGear);

export default gearRouter;