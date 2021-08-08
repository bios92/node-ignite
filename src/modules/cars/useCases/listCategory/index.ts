import { CategoriesRepository } from "../../repositories/Categories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesControler = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesControler };