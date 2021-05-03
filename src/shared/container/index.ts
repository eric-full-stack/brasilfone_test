import { container } from 'tsyringe';

import './providers';

// users imports
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// users registrations
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
