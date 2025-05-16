// .eslintrc.js
module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // Disable specific rules
    "@typescript-eslint/no-explicit-any": "off",
    "@next/next/no-img-element": "off",
    
    // Add other rules as needed
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-key": "error"
  },
  settings: {
    next: {
      rootDir: "./src"
    }
  }
};