const mongoose = require('mongoose')

function connectDB() {

    mongoose.connect(process.env.MONGO_URI)

        // Agar MongoDB successfully connect ho gaya
        .then(() => {
            console.log("Successfully Connected with Database!")
        })

        // Agar connection fail ho gaya
        .catch((error) => {
            console.log("MongoDB Connection Error:", error)
        })
}

module.exports = connectDB