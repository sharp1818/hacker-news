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

export function chunckArrayInGroups(arr: Array<number>, size: number) {
  const chunk = [];
  let i;
  for (i = 0; i < arr.length; i += size) chunk.push(arr.slice(i, i + size));
  return chunk;
}

export function AddFav(id: number | any, createAt: number | any, recover: any, write: any) {
  if (recover === null || recover === undefined) {
    const favs = [];
    const fav = { id, createAt };
    favs.push(fav);
    write(favs);
  } else if (Object.values(recover).length === 0) {
    const favs = [];
    const fav = { id, createAt };
    favs.push(fav);
    write(favs);
  } else if (recover.filter((favs: { id: any }) => favs.id === id).length === 1) {
    const newdata = recover.filter((favs: { id: any }) => favs.id !== id);
    write(newdata);
  } else {
    const data = recover;
    const fav = { id, createAt };
    data.push(fav);
    write(data);
  }
}

export function CheckFav(id: number | any, recover: any) {
  if (recover == null) {
    return false;
  }
  if (Object.values(recover).length === 0) {
    return false;
  }
  if (recover.filter((favs: { id: any }) => favs.id === id).length === 1) {
    return true;
  }
  return false;
}

export function TimeStamp(created: any) {
  const dt = new Date(created * 1000);
  const past = dt.getTime();
  const today = Date.now();
  const diff = today - past;
  const hours = Math.abs(diff / 36e5);
  const minutes = Math.abs(diff / (60 * 1000));
  if (hours < 1) {
    return minutes < 2 ? `${Math.round(minutes)} minute` : `${Math.round(minutes)} minutes`;
  }
  return hours < 2 ? `${Math.round(hours)} hour` : `${Math.round(hours)} hours`;
}
