const Pets = require("../models/pets")

module.exports = app => {
    app.get('/pets', (req, res) => {
        Pets.lista(res);
    })

    app.post('/pets', (req, res) => {

        const pet = req.body;

        Pets.adiciona(pet, res);
    })

    app.delete('/pets/:id', (req, res) => {
        const id = req.params.id;

        Pets.apaga(id, res);
    })
}