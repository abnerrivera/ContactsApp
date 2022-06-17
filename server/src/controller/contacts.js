//db connection
import { connect } from "../database";

//get all contacts
export const getContacts = async (req, res) => {
  const connection = await connect();
  const [data] = await connection.query('SELECT * FROM contact');
  res.json(data);
}

//get contact by id
export const getContact = async (req, res) => {
  const connection = await connect();
  const [data] = await connection.query('SELECT * FROM contact WHERE id = ?', 
  [req.params.id]);

  res.json(data[0]);
}

//create a new contact
export const createContact = async (req, res) => {
  const connection = await connect();
  const [data] = await connection.query('INSERT INTO contact (name, phone, date_birth, address, email) VALUES(?,?,?,?,?)',
  [
    req.body.name,
    req.body.phone,
    req.body.date_birth,
    req.body.address,
    req.body.email
  ]);
  res.json({
    message: 'sucess',
    id: data.insertId,
    ...req.body,
  })
}

//delete contact
export const deleteContact = async (req, res) => {
  const connection = await connect();
  await connection.query('DELETE FROM contact WHERE id = ?',
  [req.params.id]);
  res.send('sucess');
}

//update contact
export const updateContact = async (req, res) => {
  const connection = await connect();
  const [data] = await connection.query('UPDATE contact SET ? WHERE id = ?',  [req.body, req.params.id]);
  res.send('sucess');
}