import SELECT_IMAGES from '../images/buttonComponent';

export function GetSelectImage(image: string) {
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

export function AddFav(id: number | any) {
  const recover = localStorage.getItem('favs');
  if (recover === null || JSON.parse(recover).length === 0) {
    const favs = [];
    const fav = { id };
    favs.push(fav);
    localStorage.setItem('favs', JSON.stringify(favs));
  } else if (JSON.parse(recover).filter((favs: { id: any }) => favs.id === id).length === 1) {
    const newdata = JSON.parse(recover).filter((favs: { id: any }) => favs.id !== id);
    localStorage.setItem('favs', JSON.stringify(newdata));
  } else {
    const data = JSON.parse(recover);
    const fav = { id };
    data.push(fav);
    localStorage.setItem('favs', JSON.stringify(data));
  }
}

export function SelectQuery(query: string) {
  localStorage.setItem('query', query);
}

export function CurrentPage(page: number) {
  sessionStorage.setItem('page', JSON.stringify(page));
}
