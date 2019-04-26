module.exports = {
  getHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(dbInstance.read_houses());
    dbInstance
      .read_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  }
  // create(req, res, next) {
  //   const db = req.app.get("db"); //client sends in param, query, or body (how do I pass params for creating new? <input> ?
  //   const { name, price, image_url } = req.body;

  //   db.create_product([name, price, image_url])
  //     .then(response => {
  //       res.status(200).send(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).send(err);
  //     });
  // }
};
