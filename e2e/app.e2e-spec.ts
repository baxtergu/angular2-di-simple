import { Angular2DiSimplePage } from './app.po';

describe('angular2-di-simple App', () => {
  let page: Angular2DiSimplePage;

  beforeEach(() => {
    page = new Angular2DiSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
