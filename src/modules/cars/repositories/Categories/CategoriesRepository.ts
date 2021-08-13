import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

//DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

//Singleton - Criar apenas uma instância de uma classe, ou seja, uma instância global que pegamos pelo método getInstance
class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // private static INSTANCE: CategoriesRepository;

  //deixar o construtor privado bloqua o desenvolvedor a dar um NEW para criar uma nova instância
  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }

  //   return CategoriesRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };

/**
 * Regras de negócio
 *  1 - Categoria é um dado que não pode ter o mesmo nome
 */
