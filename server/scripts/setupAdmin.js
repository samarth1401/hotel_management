import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Auth from '../models/auth.js';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const setupAdmin = async (username, password) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Check if admin user exists
        const existingAdmin = await Auth.findOne({ username });

        if (existingAdmin) {
            // Update existing admin's password
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            console.log('Admin password updated successfully');
        } else {
            // Create new admin user
            await Auth.create({
                username,
                password: hashedPassword
            });
            console.log('Admin user created successfully');
        }

    } catch (error) {
        console.error('Error setting up admin:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
};

// Get username and password from command line arguments
const username = process.argv[2];
const password = process.argv[3];

if (!username || !password) {
    console.error('Please provide both username and password');
    process.exit(1);
}

// Run the setup
setupAdmin(username, password);