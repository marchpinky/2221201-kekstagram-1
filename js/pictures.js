import { showBigPicture } from './big-picture.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const userPicture = pictureTemplate.cloneNode(true);
  userPicture.querySelector('.picture__img').src = picture.url;
  userPicture.querySelector('.picture__likes').textContent = picture.likes;
  userPicture.querySelector('.picture__comments').textContent = picture.comments.length;
  userPicture.addEventListener('click', () => {
    showBigPicture(picture);
  });
  fragment.appendChild(userPicture);
};

const renderUserPhotos = (pictures) => {
  pictures.forEach((picture) => {
    renderPicture(picture);
  });
  return picturesList.appendChild(fragment);
};

export { renderUserPhotos };
