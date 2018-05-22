import { PowPipe } from './pow.pipe';

describe('PowPipe', () => {
  let pipe: PowPipe;

  beforeEach(() => {
    pipe = new PowPipe(); // перед каждым it будет создаваться новый pipe
  });

  it(`should create instance`, () => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform).toBeDefined(); // проверка на наличие метода transform
  });

  it(`should return 8 if called with 2 and 3`, () => {
    const result = pipe.transform(2, 3);
    expect(result).toBe(8);
  });
});