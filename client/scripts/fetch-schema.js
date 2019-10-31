/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const fetch = require('node-fetch');
const path = require('path');

const { buildClientSchema, printSchema, introspectionQuery } = require('graphql');
const fs = require('fs');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
  const res = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: introspectionQuery }),
  });
  const introspectionSchemaResult = await res.json();
  const clientSchema = buildClientSchema(introspectionSchemaResult.data);
  const sdl = printSchema(clientSchema);
  fs.writeFileSync(path.join(`${__dirname}/..`, 'schema.server.graphql'), sdl);
}

main().catch(e => {
  // eslint-disable-next-line no-console
  console.error('ERROR', e);
});

// "update-schema": "cross-env NODE_ENV=test babel-node tools/updateSchema.js",

// import fs from 'fs';
// import { printSchema } from 'graphql/utilities';
// import path from 'path';

// import schema from '../src/data/schema';

// fs.writeFileSync(
//   path.join(__dirname, '../src/data/schema.graphql'),
//   printSchema(schema),
// );
