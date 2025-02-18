## JavaScript Testing

## Introduction to Jest[https://jestjs.io/docs/getting-started]

    - What is Jest?
      - Jest is a Testing Framework
      - Jest is a Testing Framework for Testing JavaScript Code
      - Jest is a Testing Framework for Testing JavaScript Code with Assertions

    - Why Jest?
      - Jest with Test Suites
      - Jest with Test Cases
      - Jest with Test Assertions
      - Jest with Test Runners

jest is installed locally as a dev dependency.

```bash
npm install jest --save-dev
```

To run jest, run the following command:

```bash
npx jest
```

to write a test, create a file with the `.test.js` extension.

```javascript
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

jest can also be configured with a `jest.config.js` file.

```javascript
module.exports = {
  testEnvironment: "node",
};
```

jest has methods like
expect().toBe
expect().toEqual
expect().matchObject
expect().strictEquals
expect().toBeNull
expect().toBeUndefined
expect().toBeDefined
expect().toBeTruthy
expect().toBeFalsy
expect().toContain
expect().toHaveLength
expect().toBeGreaterThan
expect().toBeGreaterThanOrEqual
expect().toBeLessThan
expect().toBeLessThanOrEqual
expect().toBeCloseTo
expect().toThrow
expect().toThrowError
expect().toThrowErrorMatchingSnapshot
expect().toThrowErrorMatchingInlineSnapshot
expect().resolves
expect().rejects
expect().toBeInstanceOf
expect().toHaveProperty
