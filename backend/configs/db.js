import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        mongoose.connection.on('error', (err) => console.log("Database Connection Error:", err));
        
        // Ensure MONGODB_URI is properly formatted
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI environment variable is not set");
        }
        
        // Connect to MongoDB with proper error handling
        await mongoose.connect(mongoUri, {
            dbName: 'HomeStay' // Use dbName option instead of appending to URI
        });
        
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit process if database connection fails
    }
}

export default connectDB;