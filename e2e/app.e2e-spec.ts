import { AtomicDesignPatternsPage } from './app.po';

describe('atomic-design-patterns App', () => {
  let page: AtomicDesignPatternsPage;

  beforeEach(() => {
    page = new AtomicDesignPatternsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
