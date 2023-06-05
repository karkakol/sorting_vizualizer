import axios, {AxiosError} from 'axios';

interface ApiResponse<T> {
    message?: string;
    error?: string;
    data?: T;
}

interface User{
    username: string,
    password: string,
}

const API_BASE_URL = 'http://127.0.0.1:4000/auth';

export const login = async (user: User): Promise<ApiResponse<any>> => {
    try {
        const response = await axios.post<ApiResponse<any>>(`${API_BASE_URL}/login`, user);
        return response.data;
    } catch (error) {
        console.error('Failed to login:', error);
        throw error;
    }
};

export const register = async (user: User): Promise<ApiResponse<null>> => {
    try {
        const response = await axios.post<ApiResponse<null>>(`${API_BASE_URL}/register`, user);
        return response.data;
    } catch (error) {
        console.error('Failed to register', error);
        throw error;
    }
};