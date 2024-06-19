import { User } from '../../domain/User';
import { AuthService } from '../../infrastructure/services/AuthService';

export class LoginUser {
  constructor(private authService: AuthService) {}

  async execute(email: string, password: string): Promise<User | null> {
    return await this.authService.login(email, password);
  }
}
