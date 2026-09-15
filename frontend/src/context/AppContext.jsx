import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY || '$';
    const navigate = useNavigate();
    const { user } = useUser();
    const { getToken } = useAuth();

    const [isOwner, setIsOwner] = useState(false);
    const [showHotelRegistration, setShowHotelRegistration] = useState(false);
    const [searchedCities, setSearchedCities] = useState([]);
    const [rooms, setRooms] = useState([]);

    //function to fetch room details
    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms');

            if (data.success) {
                setRooms(data.rooms);
            } else {
                console.log('Rooms fetch failed:', data.message);
                toast.error(data.message);
            }

        } catch (error) {
            console.log('Rooms fetch error:', error.message);
            if (error.response?.status === 401) {
                console.log('Authentication required for rooms');
            } else {
                toast.error('Failed to load rooms: ' + error.message);
            }
        }
    };

    useEffect(() => { fetchRooms() }, []);

    //function to fetch user details
    const fetchUser = async () => {
        try {
            if (!user) {
                return; // Don't fetch if user is not authenticated
            }

            const token = await getToken();
            if (!token) {
                return; // Don't fetch if no token available
            }

            const { data } = await axios.get('/api/user',
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            if (data.success) {
                setIsOwner(data.role === "hotelOwner");
                setSearchedCities(data.recentSearchedCities);
            } else {
                console.log('User data fetch failed:', data.message);
            }
        } catch (error) {
            console.log('User fetch error:', error.message);
            // Don't show toast error for authentication issues
            if (error.response?.status !== 401) {
                toast.error(error.message);
            }
        }
    }

    useEffect(() => {
        if (user) {
            fetchUser();
        }
    }, [user]);

    const value = {
        currency, navigate, user, getToken, isOwner, setIsOwner, axios, showHotelRegistration, setShowHotelRegistration, searchedCities, setSearchedCities, rooms, setRooms
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);