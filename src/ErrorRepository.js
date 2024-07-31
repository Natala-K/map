class ErrorRepository {
    constructor() {
      this.errors = new Map([
        [404, 'Not Found'],
        [500, 'Internal Server Error'],
        [401, 'Unauthorized'],
        // Добавьте другие ошибки по необходимости
      ]);
    }
  
    translate(code) {
      return this.errors.get(code) || 'Unknown error';
    }
  }
  
  export default ErrorRepository;
  