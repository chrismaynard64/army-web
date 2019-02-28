import { NgMatModule } from './ngmat.module';

describe('NgmatModule', () => {
  let ngmatModule: NgMatModule;

  beforeEach(() => {
    ngmatModule = new NgMatModule();
  });

  it('should create an instance', () => {
    expect(ngmatModule).toBeTruthy();
  });
});
