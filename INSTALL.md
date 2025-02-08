# Installing Requirements for Tango with Django
**Author**: Kaito Sekiya  

## Table of Contents
* **[Visual Studio Code](#visual-studio-code)**
* **[GitHub account with an SSH key](#github)**
* **[Git](#git)**
* **[Node.js 22](#nodejs)**
* **[Pyenv](#pyenv)**

## Visual Studio Code
For this demo project, it's recommended to use Visual Studio Code (VS Code). You can use other IDEs but we won't be able to provide any help for them.

### Install VS Code
Download VS Code and install it following the guide for your operating system:
- **[Linux](https://code.visualstudio.com/docs/setup/linux)**
- **[macOS](https://code.visualstudio.com/docs/setup/mac)**
- **[Windows](https://code.visualstudio.com/docs/setup/windows)**
     
Then, optionally, install following extensions:
- **[Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)**
- **[npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)**
- **[ES7+ React/Redux/React-Native Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)**
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)**
- **[Python Debugger](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy)**
- **[Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)**
- **[Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django)**

If you’re using WSL, also install:
- **[WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)**

## GitHub
`GitHub` is a platform to host `Git` repositories, allowing developers to store, manage, and collaborate on code. For this workshop, you don’t need a `GitHub` account to clone the demo project public repository. However, having one is expected for a developer and will also allow you to work with private repositories and collaborate with others.

### GitHub Setup
First, create an account on the [website](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github). 

If you're `Linux` or `macOS` user, generate an `SSH` key using this [guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) (make sure to add it to the `ssh-agent`, otherwise it will prompt for a passphrase every single time you need to `clone` or `push`) and then add it to your `GitHub` account by following this [guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

## Git
`Git` is a powerful version control system that helps developers track and manage changes in their code. For this workshop, you will use `Git` solely to clone the demo project repository to your local machine. Once cloned, you can follow along to run the code and make changes to it. 

### Install Git
Download and install `Git` from the [official website](https://git-scm.com/downloads).

After installation, open a terminal and confirm the installation by running a command below.
```bash
git --version
```

Lastly, set your global username and email with the following commands.
```bash
git config --global user.name "Your GitHub username"
git config --global user.email "your.email@example.com"
```

## Node.js
`Node.js` is a `JavaScript` runtime environment built on Chrome's `V8` engine that allows `JavaScript` to run outside the browser. It’s widely used to build web applications and APIs, and to simplify development with `npm` for managing dependencies.

In this demo project, `Node.js` is required to run both `React` and `Vite` since both of them are `JavaScript`-based. It enables the development server, allowing fast hot-reloading with, and manages dependencies through `npm`. Additionally, `Node.js` handles the build process, including bundling and transpiling, and many more things.

### Install Node.js 22
First, open a terminal and verify if you already have `Node.js` installed by running a command below.

```bash
node -v
```

Then, based on the output, do the following: 

- #### `Node.js` version is 22
    Skip to the next section.

- #### `Node.js` version is not 22
    Use Node version manager (like `nvm` or `n`) to install `Node.js` 22. Please refer to this [guide](https://phoenixnap.com/kb/update-node-js-version).

- #### `Node.js` is not installed
    Download and install `Node.js` from the [nodejs.org](https://nodejs.org/en/download/). You can install it with:
    - Node version manager (like `nvm` or `n`) (recommended).
    - Prebuilt installer for your OS (recommended).
    - Third-party package managers (like `Homebrew` or `Chocolatey`).

## Pyenv
`pyenv` is a tool that allows to easily install and manage multiple versions of `Python` on your system without modifying the system `Python`. It also can switch between `Python` versions per individual project or globally, allowing working with multiple projects on different `Python` versions.

For this demo project, it's important that everyone uses the same `Python` version as the one it was developed with. This is easy to achieve with `pyenv`, unlike other tools, which can be more complex to start with or require additional dependencies.

Note that you don’t need to have `Python` installed on your system to use `pyenv`. It will independently manage and store its own `Python` versions, separate from the system's `Python` installation or other `Python` version managers.

### Install Pyenv

- #### macOS/Linux/WSL
    Download and install `pyenv` by **thoroughly** following the instructions from [its official GitHub repository](https://github.com/pyenv/pyenv?tab=readme-ov-file#uninstalling-pyenv). 

    Please make sure to complete all three installations steps for your respective OS: 
    - **[Getting Pyenv](https://github.com/pyenv/pyenv?tab=readme-ov-file#a-getting-pyenv)**
    - **[Set up your shell environment for Pyenv](https://github.com/pyenv/pyenv?tab=readme-ov-file#b-set-up-your-shell-environment-for-pyenv)**
    - **[Restart your shell](https://github.com/pyenv/pyenv?tab=readme-ov-file#c-restart-your-shell)**

- #### Windows
    Download and install `pyenv` fork for Windows by following the instructions from [its GitHub repository](https://github.com/pyenv-win/pyenv-win).