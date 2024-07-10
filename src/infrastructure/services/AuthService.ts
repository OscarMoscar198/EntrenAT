import axios from 'axios';
import { User } from '../../domain/User';
import { IUserRepository } from '../adapters/UserRepository';

interface AuthResponse {
  token: string;
  user: {
    email: string;
    name: string;
    heigth: number;
    weigth: number;
    gender: string;
  };
}

export class AuthService {
  private apiUrl: string;

  constructor(private userRepository: IUserRepository) {
    this.apiUrl = 'http://44.221.105.166:8081/'; // Cambia esto a la URL de tu API
  }

  async register(name: string, email: string, password: string, heigth: number, weigth: number, gender: string): Promise<User> {
    const response = await axios.post<AuthResponse>(`${this.apiUrl}/register`, { name, email, password, heigth, weigth, gender });
    const user = new User(response.data.user.name, response.data.user.email, password, response.data.user.heigth, response.data.user.weigth, response.data.user.gender);
    await this.userRepository.save(user);
    return user;
  }

  async login(email: string, password: string): Promise<User | null> {
    const response = await axios.post<AuthResponse>(`${this.apiUrl}/login`, { email, password });
    const user = new User(response.data.user.name, response.data.user.email, password, response.data.user.heigth, response.data.user.weigth, response.data.user.gender);
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }

  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(`${this.apiUrl}/list`);
    const users = response.data.map(user => new User(user.name, user.email, user.password, user.height, user.weight, user.gender));
    return users;
  }
}
