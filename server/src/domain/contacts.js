import dbClient from '../utils/dbClient.js';

export const findAllContacts = () => dbClient.contact.findMany({});

export const findContactByName = (name) =>
  dbClient.contact.findFirst({
    where: { name: name },
  });

export const findContactById = (contactId) =>
  dbClient.contact.findFirst({
    where: { id: contactId },
  });

export const findContactByQuery = (query) =>
  dbClient.contact.findFirst({
    where: {
      OR: [
        {
          id: {
            equals: query,
          },
        },
        {
          name: {
            equals: query,
          },
        },
      ],
    },
  });

export const createContact = (
  email,
  phone,
  firstName,
  lastName,
  country,
  message
) =>
  dbClient.contact.create({
    data: {
      email: email,
      phone: phone,
      firstName: firstName,
      lastName: lastName,
      country: country,
      message: message,
    },
  });

export const deleteContactById = (contactId) =>
  dbClient.contact.delete({
    where: {
      id: contactId,
    },
  });
