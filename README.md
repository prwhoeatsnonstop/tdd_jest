# Description

Understanding Test-Driven Development (TDD) using Jest

## Two common approaches to TDD (if done via pair-programming)

## Ping Pong
```
"Ping": Developer A writes a failing test
"Pong": Developer B writes the implementation to make it pass.
Developer B then starts the next "Ping", i.e. the next failing test.
Each "Pong" can also be followed by refactoring the code together, before you move on to the next failing test. This way you follow the "Red - Green - Refactor" approach: Write a failing test (red), make it pass with the minimum necessary means (green), and then refactor. 

```

## Driver and Navigator
```
Driver: person at the wheel, i.e. the keyboard. She is focussed on completing the tiny goal at hand, ignoring larger issues for the moment. A driver should always talk through what she is doing while doing it.

Navigator: acts as the observer, while the driver is typing. She reviews the code on-the-go, gives directions and shares thoughts. The navigator also has an eye on the larger issues, bugs, and makes notes of potential next steps or obstacles.

```

### Prerequisites

Install Jest using npm
```
npm install --save-dev jest

```

### Setup

A step by step series of setting up for testing (refer to [Jest Documentation](https://jestjs.io/docs/en/getting-started))

## Running the tests

```
npm test

```

## Acknowledgments

* Denise Lim for TDD session
