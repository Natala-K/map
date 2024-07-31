import ErrorRepository from '../ErrorRepository';

test('should return error message for known error code', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(404)).toBe('Not Found');
  expect(repo.translate(500)).toBe('Internal Server Error');
  expect(repo.translate(401)).toBe('Unauthorized');
});

test('should return "Unknown error" for unknown error code', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(12345)).toBe('Unknown error');
});
