import { UnitsModule } from './unit.module';

describe('UnitModule', () => {
  let wizardsModule: UnitsModule;

  beforeEach(() => {
    wizardsModule = new UnitsModule();
  });

  it('should create an instance', () => {
    expect(wizardsModule).toBeTruthy();
  });
});
