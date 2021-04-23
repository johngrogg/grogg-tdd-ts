// TODO: implement this using some third party JSON schema validation package

export default class Repository {
  constructor() {}

  public async save(schemaString: string): Promise<Schema> {
    const dbRequest: Promise<Schema> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          uuid: 'blah',
          schema: 'not actually saved',
        });
      });
    });

    return dbRequest;
  }
}

export interface Schema {
  uuid: string;
  schema: string;
}
