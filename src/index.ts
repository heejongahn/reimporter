import prompts from "prompts";

interface Config {
  root: string;
  fromModule: string;
  fromIdentifiers: string[];
  toModule: string;
}

async function getConfig(): Promise<Config> {
  const questions = [
    {
      type: "text" as const,
      name: "root",
      message: "Target source files root: ",
    },
    {
      type: "text" as const,
      name: "fromModule",
      message: "Change import(s) from this module: ",
    },
    {
      type: "list" as const,
      name: "fromIdentifiers",
      message: "With these names: (comma-sepearated)",
    },
    {
      type: "text" as const,
      name: "toModule",
      message: "To this modules: ",
    },
  ];

  const response = await prompts(questions);
  return response as Config;
}

async function main() {
  const response = await getConfig();
  console.log(response);
}

main();
