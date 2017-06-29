import { BilletPage } from './app.po';

describe('billet App', () => {
  let page: BilletPage;

  beforeEach(() => {
    page = new BilletPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
