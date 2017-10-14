import { JokeChallengePage } from './app.po';

describe('joke-challenge App', () => {
  let page: JokeChallengePage;

  beforeEach(() => {
    page = new JokeChallengePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
