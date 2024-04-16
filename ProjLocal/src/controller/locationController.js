const locationModel = require('../model/locationModel');

exports.getAllLocation = async (req, res) => {
    try {
        const location = await locationModel.getAllLocation();
        res.render("listLocation", { location: location });
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

exports.getContact = async (req, res) => {
    try {
        res.render("contact");
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
};
exports.getHome = async (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
};

exports.getForm = async (req, res) => {
    try {
        res.render("form");
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
};

exports.newContact = async (req, res) => {



    const data = req.body

    const locations = await this.getAllLocation();
    location.id = locations.length + 1;
    locations.push(data);

    locationModel.writeLocationToFile(data);

    res.render("form");


};






