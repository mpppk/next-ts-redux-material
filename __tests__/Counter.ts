import { Counter } from '../services/Counter';

describe('woolf job', () => {
  const counter = new Counter();
  afterAll(async () => {
    counter.count = 0;
  });

  it('can increment', async () => {
    counter.increment();
    expect(counter.count).toBe(1);
  });
});
