import { createPhotos } from './mocks.js';
import { renderPictures } from './pictures.js';
import { uploadForm } from './upload-form.js';

const data = createPhotos();
renderPictures(data);
uploadForm();
