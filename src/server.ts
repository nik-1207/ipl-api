import app from './app'
import config from 'dotenv'
import mongoose from "mongoose";

config.config()

const PORT = process.env.PORT || 3000;
const url = process.env.db || 'unknown';

app.listen(process.env.PORT, () => {
    mongoose.connect(url)
        .then(() => console.log("connected to db"))
        .catch((err) => console.log((err)));
    console.log(`Server is listening on http://localhost:${PORT}`);
});


