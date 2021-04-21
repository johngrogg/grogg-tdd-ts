import Validator from './validator';

const saveSchema = async (
  schemaStr: string,
  validator: Validator
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
export interface Schema {
  uuid: string;
  schema: string;
}

export { saveSchema as default };
