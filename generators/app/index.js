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
        this.fs.copy(
            this.templatePath("assets"),
            this.destinationPath("assets")
        );
    }

    end() {
        this.log(" Happy Coding  🧑‍💻 ");
        this.log(" ");
    }
};
