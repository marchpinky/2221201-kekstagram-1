import { NAMES } from './consts.js';
import { DESCRIPTIONS } from './consts.js';
import { MESSAGES } from './consts.js';
import { CommentCount } from './consts.js';
import { LikeCount } from './consts.js';
import { MAX_COUNT_PHOTOS } from './consts.js';
import { AvatarCount } from './consts.js';

import { getRandomPositiveInteger } from './utils.js';
import { getRandomArrayElement } from './utils.js';

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
