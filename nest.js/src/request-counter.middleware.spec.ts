import { RequestCounterMiddleware } from './request-counter.middleware';

describe('RequestCounterMiddleware', () => {
  it('should be defined', () => {
    expect(new RequestCounterMiddleware()).toBeDefined();
  });
});
