import saveSchema from './schema';

const commandArgs = process.argv.slice(2);

const schemaString = commandArgs[0] || '{}';

saveSchema(schemaString)
  .then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.error(err);
  });
