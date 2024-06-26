import { User } from '../../domain/User';
import { AuthService } from '../../infrastructure/services/AuthService';

export class RegisterUser {
  constructor(private authService: AuthService) {}

  async execute(name: string,email: string, password: string, heigth: number, weigth: number, gender: string): Promise<User> {
    return await this.authService.register(name, email, password, heigth, weigth, gender);
  }
}
