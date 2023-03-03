import dbClient from '../utils/dbClient.js';

export const findAllComplaints = () => dbClient.complaint.findMany({});

export const findComplaintByName = (name) =>
  dbClient.complaint.findFirst({
    where: { name: name },
  });

export const findComplaintById = (id) =>
  dbClient.complaint.findFirst({
    where: { id: id },
  });

export const findUserComplaintsById = (id) =>
  dbClient.complaint.findMany({
    where: { userId: id },
  });

export const createComplaint = (email, userId, content) =>
  dbClient.complaint.create({
    data: {
      email: email,
      userId: userId,
      content: content
    },
  });

export const deleteComplaintById = (id) =>
  dbClient.complaint.delete({
    where: {
      id: id,
    },
  });
