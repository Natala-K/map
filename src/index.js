import ErrorRepository from './ErrorRepository';

const repo = new ErrorRepository();
console.log(repo.translate(404)); // 'Not Found'
console.log(repo.translate(12345)); // 'Unknown error'
