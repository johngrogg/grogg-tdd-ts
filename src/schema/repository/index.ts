import ORM from '../../orm';
import { createHash } from 'crypto';

export default class Repository {
  constructor(private orm: ORM) {}

  public async save(schemaString: string): Promise<Schema> {
    const md5Hash = createHash('md5').update(schemaString).digest('hex');

    try {
      const persistedSchema = await this.orm.saveSchema(schemaString, md5Hash);

      return {
        uuid: persistedSchema.uuid,
        schema: persistedSchema.schema,
      };
    } catch (error) {
      throw new Error('Error persiting with ORM: ' + error.message);
    }
  }
}

export interface Schema {
  uuid: string;
  schema: string;
}
