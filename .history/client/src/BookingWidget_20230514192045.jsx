import {useContext, useEffect, useState} from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "./UserContext.jsx";


export default function BookingWidget({place}) {
  const [startbid,setStartbid] = useState('');
  const [endbid,setEndbid] = useState('');
  const [maxbid,setMaxbid] = useState(1);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (startbid && endbid) {
    numberOfNights = startbid;
  }

  async function bookThisPlace() {
    const response = await axios.post('/bookings', {
      startbid,maxbid,name,phone,
      place:place._id,
      price:numberOfNights * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ₹{place.price}
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Start Bid</label>
            <input type="Number"
                   value={startbid}
                   onChange={ev => setStartbid(ev.target.value)}/>
          </div>
          
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of bids</label>
          <input type="number"
                 value={maxbid}
                 onChange={ev => setMaxbid(ev.target.value)}/>
        </div>
      
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <label>Phone number:</label>
            <input type="tel"
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
          </div>
      
      </div>
      <button onClick={bookThisPlace} className="primary mt-4">
        Bid this Art
        {numberOfNights > 0 && (
          <span> ${numberOfNights * place.price}</span>
        )}
      </button>
    </div>
  );
}
