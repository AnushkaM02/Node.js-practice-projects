// const add = require("./utils.js");
// const sum = add(4, 2);
// console.log(sum);

// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// const msg = getNotes();
// console.log(msg);

// console.log(validator.isEmail("abc@example.com"));
// console.log(validator.isURL("abc.com"));

// console.log(chalk.green("Success"));
// console.log(chalk.green.inverse.bold("Bold and inverted"));

// console.log(process.argv[2]);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note");
// } else if (command === '"remove') {
//   console.log("Removing note");
// }

// Customise yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);
