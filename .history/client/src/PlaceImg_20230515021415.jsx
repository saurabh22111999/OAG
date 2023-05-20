import Image from "./Image.jsx";

export default function PlaceImg({place,index=0,className=null}) {
  if (!place.Photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <Image className={className} src={place.Photos[index]} alt=""/>
  );
}