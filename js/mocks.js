import { NAMES, DESCRIPTIONS, MESSAGES, CommentCount, LikeCount, MAX_COUNT_PHOTOS, AvatarCount } from './consts.js';

import { getRandomPositiveInteger, getRandomArrayElement } from './utils.js';

const createComments = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(AvatarCount.MIN, AvatarCount.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createDescriptions = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from({length: getRandomPositiveInteger(CommentCount.MIN, CommentCount.MAX)}).map((_, index) => createComments(getRandomPositiveInteger(index + 1))),
});

const createPhotos = () => Array.from({length: MAX_COUNT_PHOTOS}).map((_, index) => createDescriptions(index + 1));

export { createPhotos };
