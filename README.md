## Configuration for apply Jest

### project configuration

```
pnpm create vite@latest
```

```json
{
  "react": "^18.2.0",
  "vite": "^5.1.4",
  "typescript": "^5.3.3"
}
```

```zsh
pnpm install
```

### Install devDependencies

```zsh
pnpm add -D jest @types/jest ts-jest @testing-library/jest-dom @testing-library/react jest-environment-jsdom @babel/preset-env babel-jest
```

### Add script for test application

```json
"scripts": {
    "test": "jest"
  },
```

### Add files

> root directory of project

- `jest.setup.cjs`

  ```zsh
  touch jest.setup.cjs
  ```

  ```typescript
  import '@testing-library/jest-dom';
  ```

- `tsconfig.jest.json`

  ```json
  {
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "jsx": "react-jsx"
    }
  }
  ```

- `jest.config.js`

  ```zsh
  pnpm ts-jest config:init
  ```

  > Change file extension to cjs

  ```typescript
  /** @type {import('ts-jest').JestConfigWithTsJest} */
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
    transform: {
      '^.+\\.(ts|tsx)$': [
        'ts-jest',
        {
          tsconfig: '<rootDir>/tsconfig.jest.json',
        },
      ],
      '^.+\\.(js|cjs|jsx)$': 'babel-jest',
    },
  };
  ```

- `babel.config.cjs`
  ```zsh
  touch babel.config.cjs
  ```
  ```typescript
  module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  };
  ```

### Run test

```zsh
pnpm test
```
