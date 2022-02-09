const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    welcome() {
        this.log("Welcome to the HTML Project Boilerplate Generator!");
    }

    writing() {
        this.fs.copy(
            this.templatePath("index.html"),
            this.destinationPath("index.html")
        );
        this.fs.copy(this.templatePath("app"), this.destinationPath("app"));
    }

    end() {
        this.log(" ");
        this.log(
            "Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally."
        );
        this.log(" ");
        this.log(
            "Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp!"
        );
        this.log(" ");
    }
};
