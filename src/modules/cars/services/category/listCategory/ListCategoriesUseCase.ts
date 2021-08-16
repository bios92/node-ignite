import { inject, injectable } from "tsyringe";
import { Category } from "../../../entities/Category";
import { CategoriesRepository } from "../../../repositories/categories/CategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepositories: CategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepositories.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
