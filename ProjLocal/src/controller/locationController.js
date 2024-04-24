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

exports.getForm = async (req, res) => {
    try {
        res.render("form");
    } catch (err) {
        res.status(500).json({ error: err.toString() })
    }
};

exports.newContact = async (req, res) => {

    // pegar os dados inseridos no form e guardar na const data
    const data = req.body

    try {

        // como verifica é assincrona é necessário tratar a promessa utilizando await para retornar de maneira correta
        const num = await locationModel.verifica(data);

        // verifica o retorno e salva ou retorna erro
        if (num === 0) {
            locationModel.createLocation(data);
            res.render("form");
        } else if (num === 1) {
            res.render("home");
        }
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).send('Erro interno no servidor');
    }

};






