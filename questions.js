export default [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["Red", "Green", "Blue"],
  },
  {
    type: "confirm",
    name: "confirmed",
    message: "Are you sure?",
  },
  {
    type: "password",
    name: "password",
    message: "Enter your password",
  },
  {
    type: "password",
    name: "confirmPassword",
    message: "Confirm your password",
    validate(currentAnswer, prevAnswers) {
      if (currentAnswer === prevAnswers.password) {
        return true;
      }

      return "Passwords don't match";
    },
  },
];
