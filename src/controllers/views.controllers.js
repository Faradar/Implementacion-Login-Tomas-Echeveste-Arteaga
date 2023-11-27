import * as service from "../services/views.services.js";

export const home = async (req, res, next) => {
  try {
    const products = await service.getProducts();
    res.render("home", { style: "product.css", products });
  } catch (error) {
    next(error);
  }
};

export const realTimeProducts = (req, res) => {
  res.render("realTimeProducts", { style: "product.css" });
};

export const chat = (req, res) => {
  res.render("chat", { style: "chat.css" });
};
