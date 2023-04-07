// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterContacts } from '../event/contactEvents.js';
// Domains
import { findUsersByRole } from '../domain/users.js';
import {
  findAllContacts,
  findContactByQuery,
  findContactByEmail,
  createContact,
  findContactById,
  deleteContactById,
} from '../domain/contacts.js';
// Response messages
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  BadRequestEvent,
} from '../event/utils/errorUtils.js';
import { createMessage } from '../domain/messages.js';
import { createNewNotification } from '../domain/notifications.js';

export const getAllContacts = async (req, res) => {
  console.log('get all contacts');
  try {
    const foundContacts = await findAllContacts();

    if (!foundContacts) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.contactTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    foundContacts.forEach((contact) => {
      const createdDate = contact.createdAt.toLocaleString();
      const updatedDate = contact.updatedAt.toLocaleString();
      contact.createdAt = createdDate;
      contact.updatedAt = updatedDate;
    });

    // myEmitterContacts.emit('get-all-contacts', req.user);
    return sendDataResponse(res, 200, { contacts: foundContacts });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all contacts`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getContactsByQuery = async (req, res) => {
  console.log('getContactsByQuery');
  const query = req.params.query;

  try {
    const foundContact = await findContactByQuery(query);

    if (!foundContact) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.contactTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    foundContact.forEach((contact) => {
      const createdDate = contact.createdAt.toLocaleString();
      const updatedDate = contact.updatedAt.toLocaleString();
      contact.createdAt = createdDate;
      contact.updatedAt = updatedDate;
    });

    // myEmitterContacts.emit('find-contact-by-query', req.user);
    return sendDataResponse(res, 200, { contact: foundContact });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Find contact by query`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewContact = async (req, res) => {
  console.log('createNewContact');
  const { email, phone, firstName, lastName, country, message } = req.body;

  try {
    if (!email || !firstName || !lastName || !country || !message) {
      //
      const missingField = new MissingFieldEvent(
        'Visitor contact form',
        'Contact creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundContact = await findContactByEmail(email);
    if (foundContact) {
      return sendDataResponse(res, 400, {
        contact: 'Contact email already exists',
      });
    }

    const createdContact = await createContact(
      email,
      phone,
      firstName,
      lastName,
      country,
      message
    );

    if (!createdContact) {
      const notCreated = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.createContactFail,
        'Cant create contact'
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    myEmitterContacts.emit('create-contact', createdContact);

    const foundUsers = await findUsersByRole('ADMIN');
    foundUsers.forEach(async (admin) => {
      const message = {
        subject: 'New Contact Message',
        content: `New contact form submittion form ${email}. Check messages at link http://...`,
        userId: admin.id,
      };
      const notification = {
        type: 'MESSAGE',
        content: `New contact form submittion form ${email}`,
        userId: admin.id,
      };

      const newMessage = await createMessage(
        message.subject,
        message.content,
        'System',
        'System',
        message.userId
      );

      if (!newMessage) {
        const notCreated = new BadRequestEvent(
          req.user,
          EVENT_MESSAGES.createMessageFail,
          'Cant create message for admin - contact form'
        );
        myEmitterErrors.emit('error', notCreated);
        return sendMessageResponse(res, notCreated.code, notCreated.message);
      }

      const newNotification = await createNewNotification(
        notification.type,
        notification.content,
        notification.userId
      );

      if (!newNotification) {
        const notCreated = new BadRequestEvent(
          req.user,
          EVENT_MESSAGES.createNotificationFail,
          'Cant create notification for admin - contact form'
        );
        myEmitterErrors.emit('error', notCreated);
        return sendMessageResponse(res, notCreated.code, notCreated.message);
      }
    });

    return sendDataResponse(res, 201, { createdContact });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new contact`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteContact = async (req, res) => {
  console.log('deleteContact');
  const contactId = req.params.contactId;

  try {
    const foundContact = await findContactById(contactId);

    if (!foundContact) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.contactTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteContactById(contactId);
    myEmitterContacts.emit('deleted-contact', req.user);
    return sendDataResponse(res, 200, {
      contact: foundContact,
      message: `Contact ${foundContact.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete contact`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
