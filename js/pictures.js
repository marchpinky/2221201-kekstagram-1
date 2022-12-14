import { addPictureClickHandler } from './big-pictures.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const userPicture = pictureTemplate.cloneNode(true);
  userPicture.querySelector('.picture__img').src = picture.url;
  userPicture.querySelector('.picture__likes').textContent = picture.likes;
  userPicture.querySelector('.picture__comments').textContent = picture.comments.length;

  addPictureClickHandler(userPicture, picture);
  return userPicture;
};

const renderPictures = (pictures) => {
  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });
  picturesList.appendChild(fragment);
};

export { renderPictures };
