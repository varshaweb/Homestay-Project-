import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res) => {
    try {
        // Check if user is authenticated
        if (!req.user) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        const { name, address, contact, city } = req.body;
        const owner = req.user._id;

        // Validate required fields
        if (!name || !address || !contact || !city) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        //Check if the user is already registered
        const existingHotel = await Hotel.findOne({ owner });

        if (existingHotel) {
            return res.json({ success: false, message: "Hotel Already Registered" });
        }

        // Create new hotel
        await Hotel.create({ name, address, contact, city, owner });

        // Update user role to hotelOwner
        await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

        res.json({ success: true, message: "Hotel Registered Successfully" });

    } catch (error) {
        console.error("Hotel registration error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}