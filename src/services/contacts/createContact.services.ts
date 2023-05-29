import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact, User } from "../../entities"
import { tContactCreateData, tContactReturn } from "../../interfaces/contact.interfaces"
import { createContactSchema, returnContactSchema } from "../../schemas/contacts.schema"


export const createContactService = async (contactData: any): Promise<tContactReturn> => {
    const data: tContactCreateData = createContactSchema.parse(contactData)

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ id: contactData.userId })

    const contact = contactRepository.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        user: user!
    })

    await contactRepository.save(contact)

    const newContact = returnContactSchema.parse(contact)

    return newContact
}