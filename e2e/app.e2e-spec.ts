import { Ng2CourseTheoryPage } from './app.po';

describe('ng2-course-theory App', () => {
  let page: Ng2CourseTheoryPage;

  beforeEach(() => {
    page = new Ng2CourseTheoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
