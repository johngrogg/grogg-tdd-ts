import { default as Repository, Schema } from './repository';
import Validator from './validator';

const saveSchema = async (
  schemaStr: string,
  validator: Validator,
  repository: Repository
): Promise<Schema> => {
  try {
    validator.validate(schemaStr);
  } catch (error) {
    throw new Error('Error validating input string: ' + error.message);
  }

  try {
    return await repository.save(schemaStr);
  } catch (error) {
    throw new Error('Error saving input string: ' + error.message);
  }
};

export { saveSchema as default };
