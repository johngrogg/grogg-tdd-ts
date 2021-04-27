import ORM from '../../orm';

export default class Repository {
  constructor(private orm: ORM) {}

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
