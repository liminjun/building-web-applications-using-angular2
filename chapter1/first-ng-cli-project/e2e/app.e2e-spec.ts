import { FirstNgCliProjectPage } from './app.po';

describe('first-ng-cli-project App', function() {
  let page: FirstNgCliProjectPage;

  beforeEach(() => {
    page = new FirstNgCliProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
