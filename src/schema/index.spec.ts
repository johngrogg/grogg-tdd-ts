import saveSchema from './index';
import Validator from './validator';
import { default as Repository, Schema } from './repository';
import ORM from '../orm';

describe('#saveSchema', () => {
  let mockValidator: Validator;
  let mockRepository: Repository;

  beforeEach(() => {
    mockValidator = new Validator();
    mockValidator.validate = jest
      .fn<boolean, [string]>()
      .mockReturnValue(true)
      .mockName('validate');

    mockRepository = new Repository({} as ORM);
    mockRepository.save = jest
      .fn<Promise<Schema>, [string]>()
      .mockResolvedValue({
        uuid: 'nonsense-uuid',
        schema: 'whatever',
      })
      .mockName('save');
  });
  it('should return the saved Schema instance when the schema string is valid', async () => {
    const output = await saveSchema('{}', mockValidator, mockRepository);

    expect(output.uuid).toEqual('nonsense-uuid');
    expect(output.schema).toEqual('whatever');
  });

  it('should call the Validator:validate method with the provided schema string', async () => {
    await saveSchema('input-string', mockValidator, mockRepository);

    expect(mockValidator.validate).toHaveBeenCalledWith('input-string');
  });

  it('should call the Repository:save method with the provided schema string', async () => {
    await saveSchema('save-input-string', mockValidator, mockRepository);

    expect(mockRepository.save).toHaveBeenCalledWith('save-input-string');
  });

  describe('when the schema string is invalid', () => {
    beforeEach(() => {
      mockValidator.validate = jest
        .fn<boolean, [string]>()
        .mockImplementation(() => {
          throw new Error('mock validation error');
        })
        .mockName('validate');
    });

    it('should throw a validation error that wraps the Validator error', async () => {
      await expect(
        saveSchema('input-string', mockValidator, mockRepository)
      ).rejects.toThrow('Error validating input string: mock validation error');
    });
  });

  describe('when the Repository fails to save', () => {
    beforeEach(() => {
      mockRepository.save = jest
        .fn<Promise<Schema>, [string]>()
        .mockRejectedValue(new Error('mock repository error'))
        .mockName('save');
    });

    it('should throw a save error that wraps the Repository error', async () => {
      await expect(
        saveSchema('input-string', mockValidator, mockRepository)
      ).rejects.toThrow('Error saving input string: mock repository error');
    });
  });
});
