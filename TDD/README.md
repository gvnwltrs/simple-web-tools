# karma-kata-seed
JavaScript + [Karma](http://karma-runner.github.io/) (with [Jasmine](http://jasmine.github.io/))

## Getting Started

Clone this repo with `git`:

    git clone https://github.com/tddbuddy/karma-kata-seed
    cd karma-kata-seed

Install dependencies:

	npm install
	
Run test:

	npm test

You should eventually see 1 test ran and 0 failures.

Now you can start your kata! May we suggest the [FizzBuzz](http://www.tddbuddy.com/katas/Fizz%20Buzz%20Whiz.pdf)?

## Setting up Any Workspace for TDD

1. create your remote repo
2. initialize the workspace for TDD with `npm init -y' and 'npm install --save-dev jest' 
3. set 'gitignore' to ignore node_modules
4. run tests with 'npm test' or 'npm run test'

## Setting up Vitest
npm install -D vitest
npm install -D happy-dom

### package.json
"scripts": {

"test": "vitest --globals"

},
