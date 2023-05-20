import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";
import Image from "../Image.jsx";

export default function PlacePage() {
  const {id} = useParams();
  const [place,setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data);
      
    });
  }, [id]);

  if (!place) return '';



  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
     <div>

      <PlaceGallery place={place} />
     </div>
     <div>
          <BookingWidget place={place} />
        </div>
      
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          StartBid: {place.startbid}<br />
          EndBid: {place.endbid}<br />
          Max number of Bids: {place.maxbid}
        </div>
        
        
      </div>
      {/* {place?.Photos?.length > 0 && place.Photos.map(photo => (
            <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
              <Image src={photo} />
            </div>
          ))} */}
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</div>
      </div>
    </div>
  );
}
