var csvFilePath = "./files/products.csv";
var csvtojson = require("csvtojson");

module.exports = function (app) {
  app.get("/products", function (req, res) {
    csvtojson()
      .fromFile(csvFilePath)
      .then(function (jsonObj) {
        if (jsonObj.length === 0 || jsonObj === null) {
          res.status(500).send("Error");
        }
        res.status(200).send(jsonObj);
      });
  });

  app.get("/", function (req, res) {
    res.send("Products simple API!");
  });
};
