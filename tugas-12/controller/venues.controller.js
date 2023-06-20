const { Venues } = require("../models");

class VenuesController {
  static async CreateVenues(req, res) {
    try {
      const { name, address, phone } = req.body;
      const createdData = await Venues.create(req.body);
      console.log(createdData);

      return res.status(200).json({
        status: "success",
        message: "Berhasil Menambahkan Venues",
        data: createdData,
      });
    } catch (error) {
      console.error("Error creating venue:", error);
      res.status(500).json({
        error: error,
        message: "failed to create venues",
      });
    }
  }

  static async GetAllVenues(req, res) {
    try {
      const data = await Venues.findAll();
      res.status(200).json({
        status: "success",
        message: "Berhasil Mendapatkan Data Venues",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
        message: "failed to Get venues",
      });
    }
  }

  static GetOneVenues(req, res) {
    const id = parseInt(req.params.id);
    Venues.findOne({
      where: {
        id: id,
      },
    })
      .then((venues) => {
        if (venues) {
          return res.status(200).json({
            message: "Berhasil Mendapatkan data Venues",
            data: venues,
          });
        }
        return res.status(404).json({
          message: "Data Venues Tidak Ada",
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error Server",
          error: err,
        });
      });
  }

  static async DeleteVenues(req, res) {
    try {
      const id = parseInt(req.params.id);

      const venuesData = await Venues.findOne({
        where: {
          id: id,
        },
      });
      if (!venuesData) {
        return res.status(404).json({
          message: "Data Venues Tidak Ada",
        });
      }
      Venues.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Berhasil Menghapus Data",
        data: venuesData,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error Server",
        error: err,
      });
    }
  }

  static async UpdateVenues(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { name, address, phone } = req.body;
      let data = await Venues.findOne({
        where: {
          id,
        },
      });
      if (!data) {
        return res.status(404).json({
          status: "Not Found",
          message: "Data Venues Tidak Ada",
        });
      }

      if (name != null) {
        data.name = name;
      }
      if (address != null) {
        data.address = address;
      }
      if (phone != null) {
        data.phone = phone;
      }

      const date = new Date();

      data.updatedAt = date.getTime();

      await Venues.update(data, {
        where: {
          id,
        },
      });

      return res.status(200).json({
        status: "success",
        message: `Update Venues id: ${id} success`,
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
        message: "Server Error",
      });
    }
  }
}

module.exports = VenuesController;
