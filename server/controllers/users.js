const User = require("../models/User");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/dev");

const signToken = (_id) => {
    return jwt.sign({ _id }, config.jwt_token, { expiresIn: '1D' })
}
module.exports = {

    signup: async function (req, res, next) {
        const schema = joi.object({
            admin: joi.boolean(),
            firstName: joi.string().required(),
            middleName: joi.string().optional().allow(""),
            lastName: joi.string().required(),
            phone: joi.string().required(),
            email: joi.string().max(150).required().email(),
            password: joi.string().required(),
            imageUrl: joi.string().optional().allow(""),
            imageAlt: joi.string().optional().allow(""),
            state: joi.string().optional().allow(""),
            country: joi.string().required(),
            city: joi.string().required(),
            street: joi.string().required(),
            houseNumber: joi.string().required(),
            zip: joi.string().optional().allow(""),
            biz: joi.boolean(),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const user = await User.findOne({ email: value.email });
            if (user) {
                return res.status(400).json({ error: "User already registered." });
            }

            const hash = await bcrypt.hash(value.password, 10);

            const newUser = new User({
                firstName: value.firstName,
                middleName: value.middleName,
                lastName: value.lastName,
                middleName: value.middleName,
                phone: value.phone,
                email: value.email,
                password: hash,
                imageUrl: value.imageUrl,
                imageAlt: value.imageAlt,
                state: value.state,
                country: value.country,
                city: value.city,
                street: value.street,
                houseNumber: value.houseNumber,
                zip: value.zip,
                biz: value.business,
            });

            await newUser.save();

            res.json({
                _id: newUser._id,
                admin: newUser.admin,
                firstName: newUser.firstName,
                middleName: newUser.middleName,
                lastName: newUser.lastName,
                phone: newUser.phone,
                email: newUser.email,
                imageUrl: newUser.imageUrl,
                state: newUser.state,
                country: newUser.country,
                city: newUser.city,
                street: newUser.street,
                houseNumber: newUser.houseNumber,
                zip: newUser.zip,
                biz: newUser.business,
                isBlocked: newUser.isBlocked,
            });
        } catch (err) {
            console.log(err.message);
            res
                .status(400)
                .json({ error: "error signing up new user" + err.message });
        }
    },
    login: async function (req, res, next) {
        const schema = joi.object({
            email: joi.string().required().email(),
            password: joi.string().required(),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(401).send("Unauthorized");
            return;
        }

        try {
            const user = await User.findOne({ email: value.email });
            if (!user) throw Error;

            //   if (user.loginAttempts >= 3) {
            //     user.isBlocked = true;
            //     user.blockReleaseTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
            //     await user.save();
            //   }

            //   if (user.isBlocked === true) {
            //     throw "Account blocked";
            //   }

            const validPassword = await bcrypt.compare(value.password, user.password);
            if (!validPassword) throw "Invalid login details";

            //   user.loginAttempts = 0;
            //   await user.save();

            const token = signToken(user._id);

            res.json({
                user: {
                    token: token,
                    _id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    admin: user.admin,
                    biz: user.biz,
                    isBlocked: user.isBlocked,
                    favorites: user.favorites,
                }
            });
        } catch (err) {
            //   const user = await User.findOne({ email: req.body.email });

            //   if (user == null) {
            //     res.status(400).json({ error: "User doesnt exist." });
            //   }

            //   if (user) {
            //     user.loginAttempts += 1;
            //     await user.save();
            //      res.status(400).json({ error: "Log in details do not match", err });
            //   }
            res.status(400).json({ error: "Log in details do not match", err });
        }
    },
}