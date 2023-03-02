import dbClient from '../utils/dbClient.js';

export const findAllProjects = () => dbClient.project.findMany({});

export const findProjectByName = (name) =>
  dbClient.project.findFirst({
    where: { name: name },
  });

export const findProjectById = (id) =>
  dbClient.project.findFirst({
    where: { id: id },
  });

export const findUserProjectsById = (id) =>
  dbClient.project.findMany({
    where: { userId: id },
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

export const deleteProjectById = (id) =>
  dbClient.project.delete({
    where: {
      id: id,
    },
  });
