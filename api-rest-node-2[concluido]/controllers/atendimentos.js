const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista()
            .then(listaAtendimentos => 
                res.status(200).json(listaAtendimentos))
            .catch(err => res.status(400).json(err));
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id)
            .then(atendimentoBuscado => {
                res.json(atendimentoBuscado)
            })
    })

    app.post('/atendimentos', (req, res) => {
       const rawAtendimento = req.body

        Atendimento.adiciona(rawAtendimento, res)
            .then(resultado => res.status(200).json(resultado))
            .catch(err => res.status(400).json(err))
    }) 

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}