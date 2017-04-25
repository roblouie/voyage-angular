import { VoyageAngularPage } from './app.po';

describe('voyage-angular App', () => {
  let page: VoyageAngularPage;

  beforeEach(() => {
    page = new VoyageAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
