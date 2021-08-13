import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/Categories/CategoriesRepository";

export default (): CreateCategoryController => {
  const categoriesRepositories = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(
    categoriesRepositories
  );

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
};
