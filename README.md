# Covalent Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/covalent)](https://www.npmjs.com/package/@fern-api/covalent)

The Covalent Node.js library provides access to the {Company} API from JavaScript/TypeScript.

## Documentation

API documentation is available [here](https://www.covalenthq.com/docs/api/#/0/0/USD/1).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](TODO)

```typescript
import { CovalentApiClient } from '@fern-api/covalent';

const client = new CovalentApiClient({
  credentials: {
    username: 'apiKey',
    password: '',
  },
});

// This will fail in the browser due to CORS
const response = await client.classA.balances.getTokenBalances(
  '1',
  'demo.eth'
);

console.log('Received response from Covalent', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-{company}/{company}-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
