import { SCALE_STEP, MAX_SCALE_VALUE, MIN_SCALE_VALUE } from './consts.js';

const scaleImage = (scaleControlValue, imgPreview) => {
  let scaleValue;

  const applyChanges = () => {
    scaleControlValue.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / MAX_SCALE_VALUE})`;
  };

  const init = () => {
    scaleValue = MAX_SCALE_VALUE;
    applyChanges();
  };

  init();

  const increaseValue = () => {
    if (scaleValue !== MAX_SCALE_VALUE) {
      scaleValue += SCALE_STEP;
      applyChanges();
    }
  };

  const decreaseValue = () => {
    if (scaleValue !== MIN_SCALE_VALUE) {
      scaleValue -= SCALE_STEP;
      applyChanges();
    }
  };

  return { init, increaseValue, decreaseValue };
};

export { scaleImage };
