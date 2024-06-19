import { User } from '../../domain/User';

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }
}
