const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ mensagem: "Lista de produtos" });
});

router.get("/:id", (req, res) => {
    res.json({
        mensagem: `Produto ${req.params.id}`
    });
});

router.post("/", (req, res) => {
    res.json({ mensagem: "Produto criado" });
});

router.put("/:id", (req, res) => {
    res.json({
        mensagem: `Produto ${req.params.id} atualizado`
    });
});

router.delete("/:id", (req, res) => {
    res.json({
        mensagem: `Produto ${req.params.id} deletado`
    });
});

module.exports = router;