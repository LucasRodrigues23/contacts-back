import { AppError } from "../../errors"
import { Request } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities"
import { tContactReturn } from "../../interfaces/contact.interfaces"
import { returnContactSchema } from "../../schemas/contacts.schema"


export const updateContactService = async (req: Request): Promise<tContactReturn> => {
    const validateData = Object.keys(req.body)
    if (validateData.length === 0) {
        throw new AppError('requires one of the keys: nome, email, telefone ', 400)
    }
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContactData = await contactRepository.findOneBy({
        id: Number(req.params.id)
    })

    const contact = contactRepository.create({
        ...oldContactData,
        ...req.body
    })

    await contactRepository.save(contact)

    const updateContact = returnContactSchema.parse(contact)

    return updateContact

}
