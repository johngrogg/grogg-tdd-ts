import saveSchema from './index';

describe('#saveSchema', () => {
  it('should add a uuid', async () => {
    const output = await saveSchema('{}');

    expect(output.uuid).toBeDefined();
  });
});
