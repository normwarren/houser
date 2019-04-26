module.exports = {
  getHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
      });
  },
  addHouse(req, res, next) {
    const db = req.app.get("db");
    const { name, address, city, state, zip } = req.body;

    db.add_house([name, address, city, state, zip, "", 0, 0])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  delete(req, res, next) {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_house([id])
      .then(house => {
        res.status(200).send(house);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
