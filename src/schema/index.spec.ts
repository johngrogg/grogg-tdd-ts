import saveSchema from './index';
import Validator from './validator';

describe('#saveSchema', () => {
  let mockValidator: Validator;

  beforeEach(() => {
    mockValidator = new Validator();
    mockValidator.validate = jest.fn().mockReturnValue(true);
  });

  it('should add a uuid when the schema string is valid', async () => {
    const output = await saveSchema('{}', mockValidator);

    expect(output.uuid).toBeDefined();
  });

  it('should call the Validator:validate method with the provided schema string', async () => {
    await saveSchema('input-string', mockValidator);

    expect(mockValidator.validate).toHaveBeenCalledWith('input-string');
  });

  describe('when the schema string is invalid', () => {
    beforeEach(() => {
      mockValidator.validate = jest.fn().mockImplementation(() => {
        throw new Error('mock validation error');
      });
    });

    it('should throw a validation error that wraps the Validator error', async () => {
      await expect(saveSchema('input-string', mockValidator)).rejects.toThrow(
        'Error validating input string: mock validation error'
      );
    });
  });
});
