import { RealWindowGateway } from '@adapters/secondary/window-gateway/realWindowGateway';

describe('Real window gateway', () => {
  let windowGateway: RealWindowGateway;
  beforeEach(() => {
    // @ts-ignore
    delete window.location;

    // @ts-ignore
    window.location = {
      href: 'an url',
    };
    windowGateway = new RealWindowGateway();
  });
  it('should allow to redirect to an url', () => {
    windowGateway.redirectTo('a-random-url');
    expect(window.location.href).toBe('a-random-url');
  });
  it('should allow to redirect to another url', () => {
    windowGateway.redirectTo('another-random-url');
    expect(window.location.href).toBe('another-random-url');
  });
});
