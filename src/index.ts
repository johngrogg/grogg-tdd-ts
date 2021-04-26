import saveSchema from './schema';
import Validator from './schema/validator';

const commandArgs = process.argv.slice(2);

const schemaString = commandArgs[0] || '{}';

const validator = new Validator();

saveSchema(schemaString, validator)
  .then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.error(err);
  });
