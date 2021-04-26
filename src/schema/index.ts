const saveSchema = async (schemaStr: string): Promise<Schema> => {
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
