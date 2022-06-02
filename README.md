# grogg-tdd-ts

A BDD demo repository that walks through the journey of practicing Behavior Driven Development from the Outside-In.

## Setup

Install the following dependencies:

- Node lts/fermium (if you have nvm simply run `nvm use`)
- [Yarn 1](https://classic.yarnpkg.com/en/docs/install)

Once Node and Yarn are installed, simply run `yarn` in a terminal and all dependencies will be installed.

## Using this Repository

Each commit of the main branch represents a step in time in the BDD process. Start from the first commit on main.

As you go forward in the commit history, this README will be updated with an explanation of the new code state added to the top of the Code State section below.

## Running the Tests and the Application

To run the tests for a given commit, simply run `yarn test` in a terminal.

To run the application run `yarn start '{"myAttribute": "string"}'`. However, broadly speaking in the commits within this repository the application will not actually do anything except echo out the input in a new data structure.

## JSON-Schema Registry Feature Acceptance Criteria

- A user should be able to create a new JSON Schema by providing a JSON string
- The schema is stored in our database only if it is a valid [JSON-Schema](https://json-schema.org) document

## Code State

- T6: Finish implementig Repository#Save. All tests passing, but swapping to a real ORM and JSON Schema validator is left as an assignment for the reader.
- T5: Add ORM abstraction to Repository, implemented first test for Repository#Save, but failing due to lack of implementation.
- T4: Finished implementing the saveSchema, using a stub of a data repository. All tests passing, but the buit app doesn't actually save anything because the data repository is not actually implemented.
- T3: Added a new test that introduces a mock of our data repository abstraction. At this point, the entire saveSchema behavior is now tested (but not yet implemented).
- T2: Used the stub of a Validator class, and used it to get the test passing.
- T1: Introduced the first test block related to JSON Schema validation. It is currently failing, but is ready for implementation.
- T0: Basic repo setup with just the framework of tests in place, but no real functionality.
