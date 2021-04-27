export default class ORM {
  constructor() {}

  public async saveSchema(
    schemaStr: string,
    schemaMd5Hash: string
  ): Promise<ORMSchema> {
    const dbRequest: Promise<ORMSchema> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          uuid: 'ORM blah',
          schema: 'ORM did not actually saved',
          schemaMd5Hash: 'blah hash',
          createdAt: new Date(),
        });
      });
    });

    return dbRequest;
  }
}

export interface ORMSchema {
  uuid: string;
  schema: string;
  schemaMd5Hash: string;
  createdAt: Date;
}
