import { isEscape } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentCounter = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('.social__comment').cloneNode(true);

const alternateBigPictureData = (pictureData) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
  bigPicture.querySelector('.big-picture__img').querySelector('img').alt = pictureData.description;
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
};

const createComment = (comment, template) => {
  const newComment = template.cloneNode(true);
  const avatar = newComment.querySelector('.social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const renderComment = (picture, imageData) => {
  const comments = picture.querySelector('.social__comments');
  comments.innerHTML = '';
  imageData.comments.forEach((comment) => {
    comments.appendChild(createComment(comment, commentTemplate));
  });
  return comments;
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const onCloseBigPictureButtonClick = () => {
  closeBigPicture();
};

const onDocumentEscKeyDown = (evt) => {
  if(isEscape(evt)){
    closeBigPicture();
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

const addPictureClickHandler = (picture, pictureData) =>{
  picture.addEventListener('click', () => {
    openBigPicture();
    alternateBigPictureData(pictureData);
    renderComment(bigPicture, pictureData);
    commentCounter.classList.add('hidden');
    commentLoader.classList.add('hidden');
    closeButton.addEventListener('click', onCloseBigPictureButtonClick);
    document.addEventListener('keydown', onDocumentEscKeyDown);
  });
};

export { addPictureClickHandler };
