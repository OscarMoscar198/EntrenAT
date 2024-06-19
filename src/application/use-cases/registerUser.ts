import { User } from '../../domain/User';
import { AuthService } from '../../infrastructure/services/AuthService';

export class RegisterUser {
  constructor(private authService: AuthService) {}

  async execute(email: string, password: string): Promise<User> {
    return await this.authService.register(email, password);
  }
}
