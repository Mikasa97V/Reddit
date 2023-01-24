/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy"
  }
};


// preset: "ts-jest", - for tsx
// preset: "ts-jest/presets/js-with-ts", - for jsx/js
