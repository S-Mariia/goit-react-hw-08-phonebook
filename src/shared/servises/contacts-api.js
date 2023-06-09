import { instance } from './auth-api';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const addContact = async ({ name, number }) => {
  const { data } = await instance.post('/contacts', { name, number });
  console.log(data);
  return data;
};
