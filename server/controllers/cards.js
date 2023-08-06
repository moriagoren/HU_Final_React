const Card = require("../models/Card");
const joi = require("joi");

module.exports = {
    allCards: async function (req, res, next) {
        try {
            const result = await Card.find();
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error getting cards" });
        }
    },
    add: async function (req, res, next) {
        try {
            console.log(req.body);
            const userId = req.user._id;
            const {
                title,
                subTitle,
                description,
                phone,
                email,
                web,
                imageUrl,
                country,
                state,
                city,
                street,
                imageAlt,
                houseNumber,
                zip,
            } = req.body;
            const newCard = await Card.create({
                title,
                subTitle,
                description,
                phone,
                email,
                web,
                imageUrl,
                imageAlt,
                state,
                country,
                city,
                street,
                houseNumber,
                zip,
                userId,
            });

            res.status(200).json({
                status: 'success',
                data: newCard
            });
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "Error adding card." + err });
        }
    },
    edit: async function (req, res, next) {
        try {
            const scheme = joi.object({
                title: joi.string().required().min(2).max(30),
                subtitle: joi.string().required().min(2).max(30),
                description: joi.string().required().min(5).max(3000),
                phone: joi.string().required().min(6).max(250),
                email: joi.string().max(150).required().email(),
                web: joi.string().optional().allow(""),
                imageUrl: joi.string().optional().allow(""),
                imageAlt: joi.string().optional().allow(""),
                state: joi.string().optional().allow(""),
                country: joi.string().required(),
                city: joi.string().required(),
                street: joi.string().required(),
                houseNumber: joi.string().required(),
                zip: joi.string().optional().allow(""),
            });

            const { error, value } = scheme.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const card = await Card.findOneAndUpdate(
                {
                    _id: req.params.id,
                },
                value
            );


            if (!card) return res.status(404).send("Given ID was not found.");

            const updated = await Card.findOne({ _id: req.params.id });
            res.json(updated);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "fail to update data" });
        }
    },
    delete: async function (req, res, next) {
        try {
            const scheme = joi.object({
                _id: joi.string().required(),
            });

            const { error, value } = scheme.validate({ _id: req.params.id });

            if (error) {
                console.log(error.details[0].message);
                res.status(400).json({ error: "invalid data" });
                return;
            }

            const deleted = await Card.findOne({ _id: value._id });

            await Card.deleteOne(value).exec();
            res.json(deleted);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: "error delete vacation" });
        }
    },

};
