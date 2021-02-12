module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        res.send("você está na rota de atendimentos");
    })

    app.post("/atendimentos", (req, res) => {
        console.log(req.body);
        res.send("post em atendimentos");
    })
}