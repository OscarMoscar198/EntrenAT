import axios from 'axios';
import { User } from '../../domain/User';
import { IUserRepository } from '../adapters/UserRepository';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export class AuthService {
  private apiUrl: string;

  constructor(private userRepository: IUserRepository) {
    this.apiUrl = 'https://localhost:8082'; // Cambia esto a la URL de tu API
  }

  async register(email: string, password: string): Promise<User> {
    const response = await axios.post<AuthResponse>(`${this.apiUrl}/register`, { email, password });
    const user = new User(response.data.user.id, response.data.user.email, password);
    await this.userRepository.save(user);
    return user;
  }

  async login(email: string, password: string): Promise<User | null> {
    const response = await axios.post<AuthResponse>(`${this.apiUrl}/login`, { email, password });
    const user = new User(response.data.user.id, response.data.user.email, password);
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }
}
