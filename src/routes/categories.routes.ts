import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/services/category/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/cars/services/category/listCategory/ListCategoriesController";
import { ImportCategoryController } from "../modules/cars/services/category/importCategory/ImportCategoryController";

//Não é responsabilidade da rota conhecer o modelo do dominio
const categoriesRoutes = Router();

//receber arquivos e armazenar em uma pasta temporária
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
