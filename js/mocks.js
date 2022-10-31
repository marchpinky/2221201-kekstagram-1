import { NAMES } from "./consts";
import { DESCRIPTIONS } from "./consts";
import { MESSAGES } from "./consts";
import { CommetCount } from "./consts";
import { LikeCount } from "./consts";
import { MAX_COUNT_PHOTO } from "./consts";

import { getRandomPositiveInteger } from "./utils";
import { getRandomArrayElement } from "./utils";

const commentFields = (id) => ({
  id,
  avatar: `img/avatar-{{${getRandomPositiveInteger(1, MAX_COUNT_PHOTO)}}}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from({length: getRandomPositiveInteger(CommetCount.MIN, CommetCount.MAX)}).map((value, index) => commentFields(getRandomPositiveInteger(index + 1))),
});

let PHOTOS= Array.from({length: AMOUNT_OF_ELEMENTS}).map((value, index) => createDescription(index + 1));

export {PHOTOS};
