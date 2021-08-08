import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/Categories/CategoriesRepository";

const categoriesRepositories = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositories);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
