require('dotenv').config();

const app = require('./app');
require('./database');

async function listening() {
  await app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
  );
}

listening();
