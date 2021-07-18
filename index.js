// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = require("./utils/generateMarkdown");

const promptUser = () => {
  return inquirer.prompt([
    {
      //USer Name
      type: "input",
      message: "Enter your FULL name",
      name: "userName",
      validate: function (name) {
        let check = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
        if (check) {
          return true;
        }

        return "Please enter a valid FULL name.";
      },
    },
    {
      //User Email
      type: "input",
      message: "Enter your email",
      name: "email",
      validate: function (email) {
        let check = email.match(/\S+@\S+\.\S+/g);
        if (check) {
          return true;
        }

        return "Please enter a valid email.";
      },
    },
    {
      //Github Username
      type: "input",
      message: "Enter your github username",
      name: "gitHubName",
      validate: function (gitHubName) {
        if (gitHubName) {
          return true;
        }

        return "You must enter your Github username.";
      },
    },
    {
      // Github REPO name
      type: "input",
      message: "Enter your Project Github Repo name",
      name: "repoName",
      validate: function (repo) {
        if (repo) {
          return true;
        }

        return "It is required to enter your Github Project Repo name.";
      },
    },

    {
      //  Project Title
      type: "input",
      message: "Enter your project title",
      name: "title",
      validate: function (title) {
        if (title) {
          return true;
        }

        return "Your README requires a project title.";
      },
    },
    //  Project Title
    {
      type: "input",
      message: "Enter your project Description",
      name: "description",
      validate: function (description) {
        if (description) {
          return true;
        }

        return "Your README requires a project Description.";
      },
    },
    {
      //Installation
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
      validate: function (install) {
        if (install) {
          return true;
        }

        return "A professional README provides steps on how to install the project.";
      },
    },

    {
      // Usage
      type: "input",
      message: "Provide instructions on how to use your project",
      name: "usage",
      validate: function (use) {
        if (use) {
          return true;
        }

        return "A professional README provides instructions on how to use the project.";
      },
    },
    {
      //check on links
      type: "confirm",
      name: "links",
      message: "Would you like to add any links to your README Usage section?",
      default: false,
    },
    {
      //  image path
      type: "input",
      name: "message",
      message: "Provide the message to acompany your links.",
      when: function (answers) {
        return answers.message !== false;
      },
      validate: function (message) {
        if (message) {
          return true;
        }

        return "Provide the message for links. ";
      },
    },
    {
      //   link
      type: "input",
      name: "linksUrl",
      message:
        'Provide the url(s) for your links.  Multiple entries must be seperated with a COMMA  "," ',
      when: function (answers) {
        return answers.links !== false;
      },
      validate: function (linkURL) {
        if (linkURL) {
          return true;
        }

        return "Provide the urls of the links. ";
      },
    },

    {
      //check on screenshots
      type: "confirm",
      name: "screenshots",
      message:
        "Would you like to add screenshots to your README Usage section?",
      default: false,
    },

    {
      //  image path
      type: "input",
      name: "image",
      message:
        'Provide the path(s)/url(s) for your screenshots.  Multiple entries must be seperated with a COMMA  "," ',
      when: function (answers) {
        return answers.screenshots !== false;
      },
      validate: function (image) {
        if (image) {
          return true;
        }

        return "Provide the image paths or urls of screenshots. ";
      },
    },

    {
      //Credits
      type: "input",
      message: "Provide contributing members",
      name: "credits",
      validate: function (credits) {
        if (credits) {
          return true;
        }

        return "Someone must of cotributed";
      },
    },
    {
      //Contributing
      type: "input",
      message: "Enter your contribution policy",
      name: "contribution",
      validate: function (contribution) {
        if (contribution) {
          return true;
        }

        return "Please let people know how/if they can contribute";
      },
    },

    {
      // Tests
      type: "input",
      message: "How to test your project?",
      name: "test",
    },
    {
      // License
      type: "list",
      message: "Please select a license for your project.",
      name: "license",
      choices: [
        {
          name: "MIT",
          value: "mit",
        },

        {
          name: "APACHE 2.0",
          value: "apache-2.0",
        },

        {
          name: "Boost Software 1.0 ",
          value: "bsl-1.0",
        },
        {
          name: "GNU AGPLv3",
          value: "agpl-3.0",
        },
        {
          name: "GNU GPLv3",
          value: "gpl-3.0",
        },
        {
          name: "Mozilla Public 2.0",
          value: "mpl-2.0",
        },
      ],
    },
  ]);
};
// TODO: Create a function to write README file
const writeFile = (answers) => {
  const readme = generateReadme(answers);

  fs.writeFile("README.md", readme, (err) => {
    if (err) {
      reject(err);
      return;
    } else {
      console.log(
        "Page created! Check out readme.md in this directory to see it!"
      );
    }
  });
};

// TODO: Create a function to initialize app

function init() {
  promptUser().then((answers) => {
    writeFile(answers);
  });
}

// Function call to initialize app
init();
