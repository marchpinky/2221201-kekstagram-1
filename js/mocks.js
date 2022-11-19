import { NAMES } from "./consts";
import { DESCRIPTIONS } from "./consts";
import { MESSAGES } from "./consts";
import { CommetCount } from "./consts";
import { LikeCount } from "./consts";
import { MAX_COUNT_PHOTO } from "./consts";

import { getRandomPositiveInteger } from "./utils";
import { getRandomArrayElement } from "./utils";

const createComments = (id) => ({
  id,
  avatar: `img/avatar-{{${getRandomPositiveInteger(1, MAX_COUNT_PHOTO)}}}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createDescriptions = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from({length: getRandomPositiveInteger(CommetCount.MIN, CommetCount.MAX)}).map((_, index) => createComments(getRandomPositiveInteger(index + 1))),
});

const createPhotos = () => Array.from({length: AMOUNT_OF_ELEMENTS}).map((_, index) => createDescriptions(index + 1));

export {createPhotos};
