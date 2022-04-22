const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/users")
const favoriteRoute = require("./Routes/favorites")
const cors = require('cors')
const whitelist = ["http://localhost:3000"]
const app = express();
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
app.use(express.json());

mongoose.connect("mongodb+srv://partik03:partiksingh13508@partik.wvecw.mongodb.net/Debug_It2?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to mongo");
    })
    .catch((err) => {
        console.log(err);
    });


app.use("/api/user", userRoute);
app.use("/api/favorite", favoriteRoute);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(7000, () => {
    console.log("The backend is running fine");
});