import { inject, injectable } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';

import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';

import IUsersRepository from '../repositories/IUsersRepository';

interface Request {
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
 
  ) {}

  public async execute({
    email,
    password
  }: Request): Promise<User> {
     
    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      email,
      password: hashedPassword,
    });

    return user;
  }
}
