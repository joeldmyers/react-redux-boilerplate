# React / Redux Boilerplate Setup 2020

## Introduction

The purpose of this repo is to create a baseline setup for React + Redux + Webpack.

Obviously there are other alternatives - Next.js, create-react-app, etc.

This is a baseline starting point with React and Redux to create new projects quickly with only the core configuration I want to have generally.

### Key features:

- React / React-DOM
- Redux
- Webpack
- Babel

#### Notes on Babel

Babel obviously transpiles ES6 code etc. Specifically, `@babel/core` is the main babel package, `@babel-cli` allows us to compile files from the command line, `@babel/preset-env` allows us to transpile ES6 etc., and `@babel/preset-react` allows us to transpile JSX.

## Getting started

Using node v12.16.2 (npm v6.14.4), type `npm install`.
