import React, { useMemo, useState } from "react";
import { assets, facilityIcons } from "../assets/assets";
import { useSearchParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useAppContext } from "../context/AppContext";

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
      <input 
        type="checkbox" 
        checked={selected} 
        onChange={(e) => onChange(e.target.checked, label)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <span className="font-medium select-none text-gray-700">{label}</span>
    </label>
  )
}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
      <input 
        type="radio" 
        name="sortOption" 
        checked={selected} 
        onChange={() => onChange(label)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <span className="font-medium select-none text-gray-700">{label}</span>
    </label>
  )
}

const AllRooms = () => {
  const { rooms, navigate, currency } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openFilters, setOpenFilters] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    roomType: [],
    priceRange: [],
  });

  const [selectedSort, setSelectedSort] = useState('');

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite"
  ];
  const priceRanges = [
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',
  ];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

  //Handle Changes for Filter & Sorting...
  const handleFilterChange = (checked, value, type) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (checked) {
        updatedFilters[type].push(value);
      } else {
        updatedFilters[type] = updatedFilters[type].filter(item => item !== value);
      }
      return updatedFilters;
    })
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  //Function to check if a Room Matches the Selectd Room Type
  const matchesRoomType = (room) => {
    return selectedFilters.roomType.length === 0 || selectedFilters.roomType.includes(room.roomType);
  };

  //Function to check if a Room Matches the Selectd Price-Range
  const matchesPriceRange = (room) => {
    return selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some(range => {
      const [min, max] = range.split(' to ').map(Number);
      return room.pricePerNight >= min && room.pricePerNight <= max;
    })
  };

  //Functio to Sort Rooms based on Selected Sort Options
  const sortRooms = (a, b) => {
    if (selectedSort === 'Price: Low to High') {
      return a.pricePerNight - b.pricePerNight;
    }
    if (selectedSort === 'Price: High to Low') {
      return b.pricePerNight - a.pricePerNight;
    }
    if (selectedSort === 'Newest First') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  };

  //Filter Destination
  const filterDestination = (room) => {
    const destination = searchParams.get('destination');

    if (!destination) return true;

    return room.hotel.city.toLowerCase().includes(destination.toLowerCase());
  };

  //Filter & Sort Rooms based on Selected Filter Sort Optios
  const filteredRooms = useMemo(() => {
    return rooms.filter(room => matchesRoomType(room) && matchesPriceRange(room) && filterDestination(room)).sort(sortRooms);
  }, [rooms, selectedFilters, selectedSort, searchParams]);

  //Clear All Filters
  const clearFilters = () => {

    setSelectedFilters({
      roomType: [],
      priceRange: [],
    });

    setSelectedSort('');
    setSearchParams({});
  };

  // This component displays all the rooms available in the hotel
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="relative pt-32 pb-16 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-block mb-8">
            <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <span>🏨</span>
              <span>Discover Hotels</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-gray-900">Luxury</span> <span className="text-gray-600">Accommodations</span>
            </h1>
            <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
          </div>
          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
              <span className="font-semibold text-gray-900">
                Make Your Trip Extraordinary – With Exclusive Savings!
              </span>
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our carefully curated selection of premium hotels offers exceptional value and 
              unforgettable experiences. From luxury resorts to boutique properties, find your 
              perfect stay with our limited-time offers and special packages.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between px-4 md:px-16 lg:px-24 xl:px-32 pb-20">
        <div className="w-full lg:w-2/3">
          {/* display rooms data */}
          {filteredRooms.map((room, index) => (
            <div
              key={room._id}
              className="group bg-white rounded-2xl p-8 mb-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 hover:border-gray-300"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-1/2 relative overflow-hidden rounded-2xl">
                  <img
                    onClick={() => {
                      navigate(`/rooms/${room._id}`), scrollTo(0, 0);
                    }}
                    src={room.images[0]}
                    alt="hotel-images"
                    title="View room Details"
                    className="w-full h-80 lg:h-96 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 shadow-lg border border-gray-200">
                    {room.roomType}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="lg:w-1/2 flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{room.hotel.city}</p>
                    </div>
                    <p
                      onClick={() => {
                        navigate(`/rooms/${room._id}`), scrollTo(0, 0);
                      }}
                      className="text-gray-900 text-3xl lg:text-4xl font-playfair cursor-pointer hover:text-gray-700 transition-colors duration-300 mb-2"
                    >
                      {room.hotel.name}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <StarRating />
                    <p className="text-gray-500 text-sm">200+ verified reviews</p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <img src={assets.locationIcon} alt="location-icon" className="w-5 h-5" />
                    <span className="leading-relaxed">{room.hotel.address}</span>
                  </div>
                  
                  {/* Room Amenities */}
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    {room.amenities.map((item, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-200 hover:border-gray-300">
                        <img src={facilityIcons[item]} alt={item} className="w-4 h-4" />
                        <p className="text-xs font-semibold text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Room Price and Book Button */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">${room.pricePerNight}</p>
                      <p className="text-sm text-gray-500">per night</p>
                    </div>
                    <button
                      onClick={() => {
                        navigate(`/rooms/${room._id}`), scrollTo(0, 0);
                      }}
                      className="group/btn flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Filters */}
        <div className="bg-white w-80 rounded-2xl shadow-lg border border-gray-200 text-gray-600 max-lg:mb-8 min-lg:mt-16">
          <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
            <p className="text-base font-medium text-gray-800">FILTERS</p>
            <div className="text-xs cursor-pointer">
              <span onClick={() => setOpenFilters(!openFilters)}
                className="lg:hidden">{openFilters ? 'HIDE' : 'SHOW'}</span>
              <span className="hidden lg:block">CLEAR</span>
            </div>
          </div>

          <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
            <div className="px-5 pt-5">
              <p className="font-medium text-gray-800 pb-3">Room Types</p>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {roomTypes.map((room, index) => (
                  <CheckBox key={index} label={room}
                    selected={selectedFilters.roomType.includes(room)}
                    onChange={(checked) => handleFilterChange(checked, room, 'roomType')} />
                ))}
              </div>
            </div>

            <div className="px-5 pt-5">
              <p className="font-medium text-gray-800 pb-2">Price range</p>
              {priceRanges.map((range, index) => (
                <CheckBox key={index} label={`${currency} ${range}`}
                  selected={selectedFilters.priceRange.includes(range)}
                  onChange={(checked) => handleFilterChange(checked, range, 'priceRange')} />
              ))}
            </div>

            <div className="px-5 pt-5 pb-7">
              <p className="font-medium text-gray-800 pb-2">Sort By</p>
              {sortOptions.map((option, index) => (
                <RadioButton key={index} label={option}
                  selected={selectedSort === option}
                  onChange={() => handleSortChange(option)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
