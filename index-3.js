// "NPM I inquirer" in terminal

// import promises, inquirer (export default so no need for curly braces), and questions
import { promises as fs } from "fs";
import inquirer from "inquirer";
import questions from "./questions.js";

const answers = await inquirer.prompt(questions);

// replaces spaces with dashes
const filename = `${answers.name.toLowerCase().split(" ").join("-")}.json`;

fs.writeFile(filename, JSON.stringify(answers, null, 2)).then(() => {
  console.log(`Saved to ${filename}`);
});
