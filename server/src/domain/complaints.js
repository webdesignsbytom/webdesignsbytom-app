import dbClient from '../utils/dbClient.js';

export const findAllComplaints = () => dbClient.complaint.findMany({});

export const findComplaintByName = (name) =>
  dbClient.complaint.findFirst({
    where: { name: name },
  });

export const findComplaintById = (complaintId) =>
  dbClient.complaint.findFirst({
    where: { id: complaintId },
  });

export const findUserComplaintsById = (userId) =>
  dbClient.complaint.findMany({
    where: { userId: userId },
  });

export const createComplaint = (email, userId, content) =>
  dbClient.complaint.create({
    data: {
      email: email,
      userId: userId,
      content: content
    },
  });

  export const updateComplaintToViewed = (complaintId) =>
  dbClient.notification.update({
    where: {
      id: complaintId,
    },
    data: {
      viewed: true,
    },
  });

export const deleteComplaintById = (complaintId) =>
  dbClient.complaint.delete({
    where: {
      id: complaintId,
    },
  });
