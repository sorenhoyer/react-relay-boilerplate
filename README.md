# Installation

Make sure you have installed the required VS Code extensions

If VS Code will not prompt you to install you might already have them installed

Alternatively run shell script install-or-update-required-vscode-extensions.sh by npm script command or directly

### graphql

- `yarn`
- `yarn copy-env` to copy .env.example to .env (.env is deliberately kept out of source control for security reasons
DO NOT put any secret keys in .env.example!)
- `yarn start`

### client

- `yarn`
- `yarn fetch-schema` (requires that the graphql server is running)
- `yarn relay`
- `yarn start`
