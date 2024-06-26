import { User } from '../../domain/User';
import { AuthService } from '../../infrastructure/services/AuthService';

export class GetUsers {
  constructor(private authService: AuthService) {}

  async execute(): Promise<User[]> {
    return await this.authService.getUsers();
  }
}