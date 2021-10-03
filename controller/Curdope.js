"use strict";
const axios = require("axios");

const ModelFlowerSchema = require("../module/SchemaModel");
const postMethod = async (req, res) => {
  const { photo, name, instructions } = req.body;

  const slug = name.toLowerCase().split(" ").join("-");
  ModelFlowerSchema.find({ slug: slug }, (error, data) => {
    if (data.length) {
      res.send("data eaxist");
    } else {
      const newModel = new ModelFlowerSchema({
        instructions: instructions,
        photo: photo,
        name: name,
        slug: slug,
      });
      newModel.save();
      res.send(newModel);
    }
  });
};

const getPost = async (req, res) => {
  ModelFlowerSchema.find({}, (error, data) => {
    res.send(data);
  });
};

const deleteData = async (req, res) => {
  const slug = req.params.slug;
  ModelFlowerSchema.remove({ slug: slug }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      ModelFlowerSchema.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};
const updateData = async (req, res) => {
  const { instructions, photo } = req.body;
  const slug = req.params.slug;
  ModelFlowerSchema.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].instructions = instructions;
      data[0].photo = photo;
      data[0].save();
      res.send(data);
    }
  });
};
module.exports = { postMethod, getPost, deleteData, updateData };
