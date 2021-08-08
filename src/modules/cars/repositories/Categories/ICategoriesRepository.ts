interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({}: ICreateCategoryDTO);
  findByName(name: string);
  list();
}

export { ICategoriesRepository, ICreateCategoryDTO };
