import fs from "fs";
import csvParse from "csv-parse";
import { CategoriesRepository } from "../../repositories/Categories/CategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];

      //criando um stream de leitura
      const stream = fs.createReadStream(file.path);

      //fazendo o parse pra cs
      const parseFile = csvParse();

      //Ele pega um chunk e direciona pra algum lugar, no nosso caso, para parseFile
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map((category) => {
      const { name } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create(category);
      }
    });
  }
}

export { ImportCategoryUseCase };
