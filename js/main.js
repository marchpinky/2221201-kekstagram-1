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
const AMOUNT_OF_ELEMENTS=25;
let idNumber=0;
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger();
function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength();

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const commentFields=(element) => {
  const tempArray=[];
  for (let i=0; i< element; i+=1) {
    tempArray.push({
      id: i,
      avatar: `img/avatar-{{${getRandomPositiveInteger(1, 6)}}}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAMES)
  });
  return tempArray;
}
const createID= () => {
  idNumber+=1;
  return idNumber;
}
const createDescription = () => {
  return {
    id: createID(),
    url: `photos/{{{${getRandomPositiveInteger(1, 25)}}}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: commentFields(getRandomPositiveInteger(0, 2)),
  };
};

Array.from({length: AMOUNT_OF_ELEMENTS}, createDescription);
