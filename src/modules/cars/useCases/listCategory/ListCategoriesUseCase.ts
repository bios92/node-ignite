import { CategoriesRepository } from "../../repositories/Categories/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepositories: CategoriesRepository) {}

  execute() {
    const categories = this.categoriesRepositories.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
