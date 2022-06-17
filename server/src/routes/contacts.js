import { Router } from "express";

//functions get data api
import { getContacts, getContact, createContact, deleteContact, updateContact } from "../controller/contacts";

const router = Router();

//get all contacts
router.get('/contacts', getContacts);

//get contact by id
router.get('/contacts/:id', getContact);

//create a new contact
router.post('/contacts', createContact);

//delete a contact
router.delete('/contacts/:id', deleteContact);

//update a contact
router.put('/contacts/:id', updateContact);

export default router;