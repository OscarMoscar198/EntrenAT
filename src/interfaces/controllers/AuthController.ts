import { RegisterUser } from '../../application/use-cases/registerUser';
import { LoginUser } from '../../application/use-cases/loginUser';
import { UserRepository } from '../../infrastructure/adapters/UserRepository';
import { AuthService } from '../../infrastructure/services/AuthService';

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

export const authController = {
  register: async (name: string,email: string, password: string, heigth: number, weigth: number, gender: string) => {
    const registerUser = new RegisterUser(authService);
    return await registerUser.execute(name, email, password, heigth, weigth, gender);
  },
  login: async (email: string, password: string) => {
    const loginUser = new LoginUser(authService);
    return await loginUser.execute(email, password);
  }
};
