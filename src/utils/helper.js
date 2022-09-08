import SELECT_IMAGES from '../images/buttonComponent';

function GetSelectImage(image) {
  switch (image) {
    case 'ANGULAR':
      return SELECT_IMAGES.ICON_ANGULAR;
    case 'REACT':
      return SELECT_IMAGES.ICON_REACT;
    case 'VUE':
      return SELECT_IMAGES.ICON_VUE;
    default:
      break;
  }
}

export default GetSelectImage;
