import { Category } from "../../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

//DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

//Singleton - Criar apenas uma instância de uma classe, ou seja, uma instância global que pegamos pelo método getInstance
class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  //deixar o construtor privado bloqua o desenvolvedor a dar um NEW para criar uma nova instância
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    //Função que serve pra atribuir os dados em um objeto
    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);
  }

  list() {
    return this.categories;
  }

  findByName(name: string) {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };

/**
 * Regras de negócio
 *  1 - Categoria é um dado que não pode ter o mesmo nome
 */
