import { TAG_REGEX, MAX_TAGS_NUMBER } from './consts.js';

const splitHashtags = (value) => value.toLowerCase().split(' ');

const checkIfHashtagsRepeated = (value) => {
  if (value !== '') {
    const hashTagsArray = splitHashtags(value);
    const hashTagsSet = new Set(hashTagsArray);

    if (hashTagsSet.size !== hashTagsArray.length) {
      return false;
    }
  }
  return true;
};

const checkMaxHashtagsCount = (value) => {
  if (value !== '') {
    const hashTagsArray = splitHashtags(value);

    if (hashTagsArray.length > MAX_TAGS_NUMBER) {
      return false;
    }
  }
  return true;
};

const checkIfHashtagCorrect = (value) => {
  if (value === '') {
    return true;
  }

  const hashTagsArray = splitHashtags(value);
  return hashTagsArray.every((hashtag) => TAG_REGEX.test(hashtag));
};

export { checkIfHashtagsRepeated, checkMaxHashtagsCount, checkIfHashtagCorrect, MAX_TAGS_NUMBER};
