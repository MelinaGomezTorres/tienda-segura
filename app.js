const express = require("express");
const app = express();
const total = (precio, cant, desc) =>
  precio * cant * (1 - desc);
app.get("/total", (req, res) => {
 const { p, c } = req.query;
 res.json({ total: total(p, c, 0) });
});
app.get("/calcular", (req, res) => {
    const resultado = Number(req.query.a) + Number(req.query.b);
    res.json({ resultado });
  });

  if (process.env.NODE_ENV !== 'test') {
    app.listen(3000, () => {
      console.log("Servidor corriendo en puerto 3000");
    });
  }
  
module.exports = { app, total };