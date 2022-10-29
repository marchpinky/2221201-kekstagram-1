const NAMES = [
  'Андрей',
  'Мишель',
  'Мария',
  'Алиса',
  'Виктор',
];

const DESCRIPTIONS=[
  'На отдыхе',
  'Отличное место',
  'Люблю котов',
  'А в ответ тишина.'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const AMOUNT_OF_ELEMENTS = 25;

const countLike = {
  MIN: 15,
  MAX: 200
};

const commentsCount = {
  MIN: 1,
  MAX: 6
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const checkStringLength = (string, length) => string.length <= length;
checkStringLength();

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

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
