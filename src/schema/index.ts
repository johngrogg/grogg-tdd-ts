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

  const output = {
    schema: schemaStr,
  } as any;

  output.uuid = 'test';

  return new Promise((resolve, reject) => {
    resolve(output);
  });
};

export { saveSchema as default };
