import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.services";
import { listContactsService } from "../services/contacts/listContacts.services";
import { deleteContactService } from "../services/contacts/deleteContact.services";
import { updateContactService } from "../services/contacts/updateContact.services";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const newwCategory = await createContactService(req.body)

    return res.status(201).json(newwCategory)
}

export const listContactsController = async (req: Request, res: Response): Promise<Response> => {

    const listContacts = await listContactsService(req)

    return res.status(200).json(listContacts)
}

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {

    const updateContact = await updateContactService(req)

    return res.status(200).json(updateContact)
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {

    await deleteContactService(Number(req.params.id))

    return res.status(204).send()
}