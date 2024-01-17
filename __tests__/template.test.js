import Template from '../src/js/template.js';

describe('Template', () => {
  let template;

  beforeEach(() => {
    template = new Template(temp1);
  });

  test('should correctly create a template object', () => {
    expect(template.temp1).toEqual(temp1);
  });
});
