import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";

dotenv.config();

const mongoUri =
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ||
    process.env.DATABASE_URL;

if (!mongoUri) {
    console.error("❌ MongoDB connection string nahi mili.");
    console.error("Please check your .env file.");
    process.exit(1);
}

const seedProductionData = async () => {
    try {
        console.log("🔄 Connecting to MongoDB...");

        await mongoose.connect(mongoUri);

        console.log("✅ MongoDB connected");

        // Clear old seed data
        await Room.deleteMany({});
        await Hotel.deleteMany({});
        await User.deleteMany({
            _id: {
                $in: ["seed-user-001", "seed-user-002"]
            }
        });

        console.log("🧹 Old seed data cleared");

        // =========================
        // USERS
        // =========================

        const users = await User.insertMany([
            {
                _id: "seed-user-001",
                username: "HomeStay Admin",
                email: "admin@homestay.com",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                role: "hotelOwner",
                recentSearchedCities: ["Bangalore", "Mumbai", "Delhi"]
            },
            {
                _id: "seed-user-002",
                username: "Demo User",
                email: "user@homestay.com",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                role: "user",
                recentSearchedCities: ["Bangalore", "Goa", "Mumbai"]
            }
        ]);

        console.log(`✅ ${users.length} users created`);

        // =========================
        // HOTELS
        // =========================

        const hotels = await Hotel.insertMany([
            {
                name: "The Bangalore Homestay",
                address: "MG Road",
                contact: "+91 9876543210",
                owner: "seed-user-001",
                city: "Bangalore"
            },
            {
                name: "Green Valley Homestay",
                address: "Koramangala",
                contact: "+91 9876543211",
                owner: "seed-user-001",
                city: "Bangalore"
            },
            {
                name: "Sea View Homestay",
                address: "Calangute",
                contact: "+91 9876543212",
                owner: "seed-user-001",
                city: "Goa"
            },
            {
                name: "Mumbai Central Stay",
                address: "Andheri West",
                contact: "+91 9876543213",
                owner: "seed-user-001",
                city: "Mumbai"
            }
        ]);

        console.log(`✅ ${hotels.length} hotels created`);

        // =========================
        // ROOMS
        // =========================

        const rooms = [];

        for (const hotel of hotels) {
            rooms.push(
                {
                    hotel: hotel._id,
                    roomType: "Standard Room",
                    pricePerNight: 1499,
                    amenities: [
                        "Free WiFi",
                        "Air Conditioning",
                        "TV",
                        "Attached Bathroom"
                    ],
                    images: [
                        "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
                        "https://images.unsplash.com/photo-1590490360182-c33d57733427"
                    ],
                    isAvailable: true
                },
                {
                    hotel: hotel._id,
                    roomType: "Deluxe Room",
                    pricePerNight: 2499,
                    amenities: [
                        "Free WiFi",
                        "Air Conditioning",
                        "TV",
                        "Breakfast",
                        "Attached Bathroom"
                    ],
                    images: [
                        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
                        "https://images.unsplash.com/photo-1591088398332-8a7791972843"
                    ],
                    isAvailable: true
                },
                {
                    hotel: hotel._id,
                    roomType: "Premium Suite",
                    pricePerNight: 3999,
                    amenities: [
                        "Free WiFi",
                        "Air Conditioning",
                        "TV",
                        "Breakfast",
                        "Room Service",
                        "Private Balcony"
                    ],
                    images: [
                        "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
                        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
                    ],
                    isAvailable: true
                }
            );
        }

        const createdRooms = await Room.insertMany(rooms);

        console.log(`✅ ${createdRooms.length} rooms created`);

        console.log("");
        console.log("======================================");
        console.log("🎉 PRODUCTION SEED COMPLETED");
        console.log("======================================");
        console.log(`👤 Users  : ${users.length}`);
        console.log(`🏨 Hotels : ${hotels.length}`);
        console.log(`🛏️ Rooms  : ${createdRooms.length}`);
        console.log("======================================");

    } catch (error) {
        console.error("");
        console.error("❌ SEED FAILED");
        console.error(error.message);
        console.error("");
    } finally {
        await mongoose.connection.close();
        console.log("🔌 MongoDB connection closed");
    }
};

seedProductionData();
