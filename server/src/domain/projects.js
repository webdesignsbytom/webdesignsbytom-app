import dbClient from '../utils/dbClient.js';

export const findAllProjects = () =>
  dbClient.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findProjectByName = (name) =>
  dbClient.project.findFirst({
    where: { name: name },
  });

export const findProjectById = (projectId) =>
  dbClient.project.findFirst({
    where: { id: projectId },
  });

export const findUserProjectsById = (userId) =>
  dbClient.project.findMany({
    where: { userId: userId },
  });

export const createProject = (type, name, userId, domainName) =>
  dbClient.project.create({
    data: {
      type: type,
      name: name,
      userId: userId,
      domainName: domainName,
    },
  });

export const deleteProjectById = (projectId) =>
  dbClient.project.delete({
    where: {
      id: projectId,
    },
  });
