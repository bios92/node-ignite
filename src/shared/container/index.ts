import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/cars/repositories/categories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/categories/ICategoriesRepository";

import { ISpecificationsRepository } from "../../modules/cars/repositories/specification/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/specification/SpecificationsRepository";

import { IUsersRepository } from "../../modules/accounts/repositories/users/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/users/UsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
