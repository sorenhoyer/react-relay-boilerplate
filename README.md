# Installation

Make sure you have installed the required VS Code extensions

If VS Code will not prompt you to install you might already have them installed

Alternatively run shell script install-or-update-required-vscode-extensions.sh by npm script command or directly

### graphql

- `npm i`
- copy .env.example to .env (.env is deliberately kept out of source control for security reasons
DO NOT put any secret keys in .env.example!)
- `npm start`

### client

- `npm i`
- `npm run fetch-schema` (requires that the graphql server is running)
- `npm run relay`
- `npm start`