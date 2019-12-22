# tails 🦊

`tails` enables you to view, edit, and organize all your programming projects in one place

**are you tried of**

- creating the same boilerplate when creating spas, mpas, or just apps in your programming language of choice
- having to search for your project on your hard drive, and find out how to run it or access it or deploy it
- setting up hmr and and nodemon _every single time_, or similar utilities
- and having to use sites like jsfiddle, codesandbox, replit, etc. which
  - use some normie editor rather than an ide that you are used to
  - does not let you directly access your projects / download them (and have them easily work even after downloading them)
  - has the code output in a tiny iframe
  - does not use a vcs, or use some downgraded vcs

**don't you want**

- to create, view, edit, and launch, your programming projects all in one place
- to create managed presets removes nearly all boilerplate code so you can just experiment with what you want to
- to automatically setup babel, postcss, stylelint, editorconfig, typescript configs, and manage them in a unified interface, non-repetative for your projects
- a framework, utility, and ide agnostic tool
- a super extensible, allowing you to plugin whatever drivers and modules you need to extend the feature set
- a automated, kubernetes-based one-click deploy solution, for *exactly* the proejcts you want to make public
- a super cute fully e2e customizable paas for *all* of your personal projects

it may sound like a pipedream, but thats what this project is trying to do

what it looks like (so far)
![tails preview](./tails.png)

## goals

- main idea: paas for running *trusted* code (small-medium-sized codebases)
- use your standard ide tools to edit these projects
- view projects directly in browser
- browse through, label, sort, and manage all your projects within the web interface
- start projects on demand, *quickly*
- have nice urls during development (no localhost and port crap, all managed for you)

## details

- proposed project types (more generic languages will come later)
  - web (static files)
  - spa (parcel, webpack, or rollup bundlers)
  - node
  - node + spa (parcel, webpack, or rollup bundlers)
- ability to 'upgrade' web projects
  - ex. 'upgrade' web (static files) to node (importing `express` or `server-static`, etc.)
    - this copies rather than edits to prevent mistakes in upgrade process
  - ex. 'upgrade' (we w/ webpack bundler) + node to out-of-tails-project (since projects shouldn't inherently be tightly coupled to tails)
- the `projects` directory
  - flat tree structure of projects
- showing stdout / stderr
  - maybe have cli so we can just output crap in an existing pty
    - only for running it for testing it out (not for during development, since we have vscode console for that)
- linting / style formatting
  - option to have no linting or style formatting (meaning, the editor does everything)
  - or option to have prettier, eslint configs symlinked to project directory and have watch optiosn for auto update
  - or have combo wombo or something
- show generated metadata
  - how much browser support your website has
  - size of codebase gzipped, minified, etc.
- development
  - open any mount of subprojecs at once without conflicts
  - containerization of non web (static) sites (idk maybe not actually)
  - nice domains during development
  - cli?
- production
  - choose which projects to deploy
  - web page lists projects
  - even those most of these are (probably) going to be throwaway test projects, would be cool to select and choose which ones go to prod and only have those deployed and visible in some sort of listing

## usage

not really streamlined yet; project still in early development (pre-alpha)
mostly focusing on fully managed javascript solutions

## contributing

```sh
git clone --recurse-submodules https://github.com/eankeen/tails
yarn install
yarn lerna bootstrap
make start
```
