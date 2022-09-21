const User = require("../../models/User");

const updateUser = async (req, res) => {
    const query = { _id: req.params.id };
    const update = { ...req.body };
    const options = { new: true };

    User.findOneAndUpdate(query, update, options, (err, doc) => {
        if (err) {
            res.status(500).json(err.message);
        }
        res.json(doc);
    });
};

module.exports = updateUser;
