const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodb = require("./mongodb");
const bcrypt = require("bcryptjs");

dotenv.config();
const app = express();
const Schema = mongoose.Schema;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

mongoose
    .connect("mongodb://localhost:27017/nacencomm")
    .then((result) => {
        console.log("Connection Established");
    })
    .catch((err) => {
        console.log(err);
    });

const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
});
const login = mongoose.model("logins", userSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post("/api/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Encryption of the string password
    bcrypt.genSalt(10, async function (err, Salt) {
        // The bcrypt is used for encrypting password.
        bcrypt.hash(password, Salt, async function (err, hash) {
            if (err) {
                return console.log("Cannot encrypt");
            }

            const data = {
                username: username,
                password: hash,
            };

            const mess = await mongodb.insert(login, data);

            if (!mess) {
                res.status(500).json({
                    message: "Error inserting",
                });
            } else {
                res.status(201).json({
                    message: mess,
                });
            }
        });
    });
});

app.delete("/api/delete/:id", (req, res) => {
    mongodb.del(login, req.params.id);
    res.status(201).json({
        message: "User deleted successfully",
    });
});

app.post("/api/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const data = {
        username: username,
        password: password,
    };
    const mess = await mongodb.findOne(login, {
        username: username,
    });

    if (mess && mess.length > 0) {
    }

    try {
        if (mess && mess.length > 0) {
            const hashedPassword = mess[0].password;
            bcrypt.genSalt(10, function (err, Salt) {
                // The bcrypt is used for encrypting password.
                bcrypt.hash(password, Salt, function (err, hash) {
                    bcrypt.compare(
                        password,
                        hashedPassword,
                        async function (err, isMatch) {
                            if (isMatch) {
                                const accessToken = jwt.sign(
                                    data,
                                    process.env.ACCESS_TOKEN_SECRET,
                                    {
                                        expiresIn: "10m",
                                    }
                                );
                                const refreshToken = jwt.sign(
                                    data,
                                    process.env.REFRESH_TOKEN_SECRET,
                                    {
                                        expiresIn: "1d",
                                    }
                                );

                                res.cookie("jwt", refreshToken, {
                                    httpOnly: true,
                                    sameSite: "None",
                                    secure: true,
                                    maxAge: 24 * 60 * 60 * 1000,
                                });

                                res.json({
                                    accessToken: accessToken,
                                    refreshToken: refreshToken,
                                });
                            }
                            if (!isMatch) {
                                return res.status(401).json({
                                    message: "Invalid password",
                                });
                            }
                        }
                    );
                });
            });
        } else {
            res.status(401).json({
                message: "Invalid username",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Invalid credentials",
        });
    }
});

app.get("/api/validateToken", (req, res) => {
    let token = req.headers.authorization.split(" ")[1];
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});

app.post("api/refresh", (req, res) => {
    if (req.cookies?.jwt) {
        // Destructuring refreshToken from cookie
        const refreshToken = req.cookies.jwt;

        // Verifying refresh token
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err) {
                    // Wrong Refesh Token
                    return res.status(406).json({
                        message: "Unauthorized",
                    });
                } else {
                    // Correct token we send a new access token
                    const accessToken = jwt.sign(
                        {
                            username: userCredentials.username,
                            email: userCredentials.email,
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        {
                            expiresIn: "10m",
                        }
                    );
                    return res.json({
                        accessToken,
                    });
                }
            }
        );
    } else {
        return res.status(406).json({ message: "Unauthorized" });
    }
});

app.post("/api/signout", (req, res) => {});
