module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    '@vue/typescript/recommended',
    "prettier",
    "plugin:import/typescript"

  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'vue/no-deprecated-slot-attribute': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    "vue/attributes-order": [
      "warn",
      {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ]
      }
    ],
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/no-template-shadow": "off",
    "vue/return-in-computed-property": "off",
    "vue/require-render-return": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/custom-event-name-casing": "off",
    "vue/html-self-closing": [
      "warn",
      {
        "html": { "void": "always" }
      }
    ],
    "vue/max-attributes-per-line": [
      "warn",
      {
        "singleline": 10,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "vue/no-deprecated-slot-attribute": "off",
    "import/order": [
      "warn",
      {
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "groups": [
          ["builtin", "external"],
          ["sibling", "parent", "internal"]
        ],
        "pathGroups": [{ "pattern": "@/**", "group": "internal", "position": "before" }],
        "newlines-between": "always"
      }
    ],
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off"
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}

//   "parserOptions": {
//     "ecmaVersion": 12,
//     "parser": "@typescript-eslint/parser",
//     "sourceType": "module"
//   },
//   "ignorePatterns": ["node_modules/", "public/", "src/locales/"],
//   "plugins": ["vue", "@typescript-eslint", "import"],
  
// }
