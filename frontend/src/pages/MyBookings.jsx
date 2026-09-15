import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyBookings = () => {

  const { axios, getToken, user } = useAppContext();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  //Funtion to fetch the User Booking Data from database
  const fetchUserBookings = async () => {
    try {
      setLoading(true);
      
      if (!user) {
        setLoading(false);
        return;
      }
      
      const token = await getToken();
      if (!token) {
        setLoading(false);
        return;
      }
      
      const { data } = await axios.get('/api/bookings/user', { headers: { Authorization: `Bearer ${token}` } });

      if (data.success) {
        setBookings(data.bookings || []);
      } else {
        toast.error(data.message);
        setBookings([]);
      }

    } catch (error) {
      setBookings([]);
      if (error.response?.status === 401) {
        toast.error("Please log in to view your bookings");
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to load bookings. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  //Payemnt Handler Function
  const handlePayment = async (bookingId) => {
    try {

      const { data } = await axios.post('/api/bookings/stripe-payment', { bookingId }, {
        headers: { Authorization: `Bearer ${await getToken()}` }
      });

      if (data.success) {
        window.location.href = data.url;
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserBookings();
    }
  }, [user]);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="All your hotel reservations, perfectly organized. Access past escapes and plan future adventures seamlessly, all in one place, with just a few clicks."
        align="left" />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-lg text-gray-500">Loading your bookings...</div>
          </div>
        ) : bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-6xl mb-4">🏨</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookings Yet</h3>
            <p className="text-gray-500 mb-6">You haven't made any hotel bookings yet.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Explore Hotels
            </button>
          </div>
        ) : (
          <>
            <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
              <div className="w-1/3">Hotels</div>
              <div className="w-1/3">Date & Timings</div>
              <div className="w-1/3">Payment</div>
            </div>
            {bookings.filter(booking => booking && booking._id).map((booking) => (
          <div key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t">

            {/*-----Hotel details-----*/}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room?.images?.[0] || assets.roomImg1}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover" />

              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">{booking.hotel?.name || 'Hotel Name Not Available'}
                  <span className="font-inter text-sm"> ({booking.room?.roomType || 'Room Type Not Available'})</span>
                </p>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{booking.hotel?.address || 'Address Not Available'}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guest-icon" />
                  <span>Guests: {booking.guests || 'N/A'}</span>
                </div>
                <p className="text-base">Total: ${booking.totalPrice || 'N/A'}</p>
              </div>
            </div>

            {/*-----date & Timmings-----*/}

            {/*----Chek-In----*/}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check-In:</p>
                <p className="text-gray-500 text-sm">
                  {booking.checkInDate ? new Date(booking.checkInDate).toDateString() : 'Date Not Available'}
                </p>
              </div>
              {/*----Chek-Out----*/}
              <div>
                <p>Check-Out:</p>
                <p className="text-gray-500 text-sm">
                  {booking.checkOutDate ? new Date(booking.checkOutDate).toDateString() : 'Date Not Available'}
                </p>
              </div>
            </div>

            {/*-----Payment Status-----*/}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button onClick={() => handlePayment(booking._id)}
                  className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-100 transition-all cursor-pointer">Pay Now</button>
              )}
            </div>
          </div>
        ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
