/* eslint-disable no-undef */
module.exports = (plop) => {
  // COMPONENT GENERATOR
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Type of component?",
        choices: () => ["atoms", "molecules", "organisms", "templates"],
      },
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
    ],

    actions() {
      const actions = [];

      actions.push(
        {
          type: "add",
          path: "src/components/{{type}}/{{pascalCase name}}/index.tsx",
          templateFile: "src/plop-templates/component/index.tsx.hbs",
        },
        {
          type: "add",
          path: "src/components/{{type}}/{{pascalCase name}}/index.stories.tsx",
          templateFile: "src/plop-templates/component/index.stories.tsx.hbs",
        },
        {
          type: "add",
          path: "src/components/{{type}}/{{pascalCase name}}/styles.ts",
          templateFile: "src/plop-templates/component/styled.ts.hbs",
        },
      );
      return actions;
    },
  });

  // CONTAINER & PAGE
  plop.setGenerator("Container", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Container name?",
      },
    ],
    actions() {
      const actions = [];

      actions.push(
        {
          type: "add",
          path: "src/containers/{{pascalCase name}}/index.tsx",
          templateFile: "src/plop-templates/container/index.tsx.hbs",
        },
        {
          type: "add",
          path: "src/containers/{{pascalCase name}}/types.ts",
          templateFile: "src/plop-templates/container/types.ts.hbs",
        },
      );
      return actions;
    },
  });

  plop.setGenerator("Page", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Pages name?",
      },
    ],
    actions() {
      const actions = [];

      actions.push(
        {
          type: "add",
          path: "src/pages/{{pascalCase name}}/index.tsx",
          templateFile: "src/plop-templates/page/index.tsx.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{pascalCase name}}/styled.ts",
          templateFile: "src/plop-templates/page/styled.ts.hbs",
        },
      );
      return actions;
    },
  });
  
  plop.setHelper("classNameComponent", (type) => {
    if (type === "atoms") {
      return "a-";
    }
    if (type === "molecules") {
      return "m-";
    }
    if (type === "organisms") {
      return "o-";
    }
    return "";
  });
};
