import dbClient from '../utils/dbClient.js';

export const findAllDesigns = () =>
  dbClient.design.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findDesignByName = (name) =>
  dbClient.design.findFirst({
    where: { name: name },
  });

export const findDesignById = (designId) =>
  dbClient.design.findFirst({
    where: { id: designId },
    include: {
      navDesign: true,
      colorPalette: true,
      userStories: true,
    },
  });

export const findUserDesignsById = (userId) =>
  dbClient.design.findMany({
    where: { userId: userId },
    include: {
      navDesign: true,
      colorPalette: true,
      userStories: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

export const checkFileDoesntExist = (name, userId) =>
  dbClient.design.findFirst({
    where: {
      AND: [
        {
          name: {
            equals: name,
          },
        },
        {
          userId: {
            equals: userId,
          },
        },
      ],
    },
  });

export const createDesign = (
  name,
  navDesign,
  colorPalette,
  userStories,
  userId
) =>
  dbClient.design.create({
    data: {
      userId: userId,
      name: name,
      userStories: {
        create: { content: 'I want my website to suit me perfectly' },
      },
    },
    include: {
      navDesign: true,
      colorPalette: true,
      userStories: true,
    },
  });

export const deleteDesignById = (designId) =>
  dbClient.design.delete({
    where: {
      id: designId,
    },
  });

export const createNewUserStory = (story) =>
  dbClient.userStory.create({
    data: {
      designId: story.designId,
      content: story.content,
    },
  });

// NAV
export const createEmptyNav = (designId) =>
  dbClient.navDesign.create({
    data: {
      designId: designId,
    },
  });

export const createEmptyStories = (designId) =>
  dbClient.userStory.create({
    data: {
      designId: designId,
    },
  });
