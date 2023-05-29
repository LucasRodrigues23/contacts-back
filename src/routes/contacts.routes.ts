import { Router } from "express";
import {
    createContactController,
    listContactsController,
    updateContactController,
    deleteContactController,
} from "../controllers";
import { validateToken } from "../middlewares/validateToken.middlware";

export const contactsRoutes: Router = Router()

contactsRoutes.post('', validateToken, createContactController)
contactsRoutes.get('/:userId', listContactsController)
contactsRoutes.patch('/:id', updateContactController)
contactsRoutes.delete('/:id', deleteContactController)