module.exports = {
  root: true,
  env: {
      "browser": true,
      "es2021": true,
      "node": true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    '@vue/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/interface-name-prefix": "off",
  },
}
