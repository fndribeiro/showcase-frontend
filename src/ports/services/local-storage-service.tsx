class LocalStorageService {

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string {
      const token = localStorage.getItem('token')
      return token ? token : '';
    }
  
    removeToken(): void {
      localStorage.removeItem('token');
    }

    tokenIsNull(): boolean {
        return !localStorage.getItem('token')
    }

  }

  export default new LocalStorageService();