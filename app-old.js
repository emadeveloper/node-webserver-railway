const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-type": "application/csv" });

    // res.write("1, Emanuel\n");
    // res.write("2, David\n");
    // res.write("3, Guillermo\n");
    // res.write("4, Santiago\n");

    // res.write("id, nombre\n");
    res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Esuchando el puerto", 8080);
