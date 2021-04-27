import Repository from './';
import { default as ORM, ORMSchema } from '../../orm';
import { createHash } from 'crypto';

describe('Repository', () => {
  let repoUnderTest: Repository;
  let mockOrm: ORM;

  beforeEach(() => {
    mockOrm = new ORM();
    repoUnderTest = new Repository(mockOrm);
  });

  describe('#save', () => {
    beforeEach(() => {
      mockOrm.saveSchema = jest
        .fn<Promise<ORMSchema>, [string]>()
        .mockResolvedValue({
          uuid: 'nonsense-uuid',
          schema: 'whatever',
          schemaMd5Hash: 'ha',
          createdAt: new Date('2020-12-12'),
        })
        .mockName('saveSchema');
    });
    it('should return the persisted object by the ORM', async () => {
      const output = await repoUnderTest.save('{}');

      expect(output).toEqual({
        uuid: 'nonsense-uuid',
        schema: 'whatever',
      });
    });

    it('should calculate the md5 hash of the schema string and pass it into the ORM for persistence', async () => {
      await repoUnderTest.save('{}');

      expect(mockOrm.saveSchema).toHaveBeenCalledWith(
        '{}',
        createHash('md5').update('{}').digest('hex')
      );
    });

    describe('when the ORM encounters an error while saving', () => {
      beforeEach(() => {
        mockOrm.saveSchema = jest
          .fn<Promise<ORMSchema>, [string]>()
          .mockRejectedValue(new Error('mock orm error'))
          .mockName('saveSchema');
      });

      it('should throw an error that includes the error message from the ORM', async () => {
        await expect(repoUnderTest.save('{}')).rejects.toThrow(
          'Error persiting with ORM: mock orm error'
        );
      });
    });
  });
});
