import saveSchema from './schema';
import Repository from './schema/repository';
import Validator from './schema/validator';

const commandArgs = process.argv.slice(2);

const schemaString = commandArgs[0] || '{}';

const validator = new Validator();
const repository = new Repository();

saveSchema(schemaString, validator, repository)
  .then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.error(err);
  });
