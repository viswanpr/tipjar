import { TipjarPage } from './app.po';

describe('tipjar App', function() {
  let page: TipjarPage;

  beforeEach(() => {
    page = new TipjarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
