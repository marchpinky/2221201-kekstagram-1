import { NAMES } from "./consts";
import { DESCRIPTIONS } from "./consts";
import { MESSAGE } from "./consts";
import { commentsCount } from "./consts";
import { countLike } from "./consts";
import { AMOUNT_OF_ELEMENTS } from "./consts";

import { getRandomPositiveInteger } from "./utils";
import { getRandomArrayElement } from "./utils";

const commentFields = (id) => ({
  id,
  avatar: `img/avatar-{{${getRandomPositiveInteger(1, AMOUNT_OF_ELEMENTS)}}}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES)
});

const createDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(countLike.MIN, countLike.MAX),
  comments: Array.from({length: getRandomPositiveInteger(commentsCount.MIN, commentsCount.MAX)}).map((value, index) => commentFields(getRandomPositiveInteger(index + 1))),
});

const PHOTOS= Array.from({length: AMOUNT_OF_ELEMENTS}).map((value, index) => createDescription(index + 1));

export {PHOTOS};
