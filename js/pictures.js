const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const сreatePictureElement = (obj) => {
  const userPicture = pictureTemplate.cloneNode(true);
  userPicture.querySelector('.picture__img').src = obj.url;
  userPicture.querySelector('.picture__comments').textContent = obj.comments.length;
  userPicture.querySelector('.picture__likes').textContent = obj.likes;
  return userPicture;
};

const renderPictures = (array) => {
  const fragment = document.createDocumentFragment();
  for (const obj of array) {
    fragment.appendChild(сreatePictureElement(obj));
  }
  picturesList.append(fragment);
};

export { renderPictures };
