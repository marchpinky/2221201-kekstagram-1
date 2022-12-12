import { createPhotos } from './mocks.js';
import { renderPictures } from './pictures.js';

const data = createPhotos();
renderPictures(data);
