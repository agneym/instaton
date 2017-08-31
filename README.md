# React Configuration

My configuration for a react app.

## Quick Overview
* `git clone` this repository to get started.
* `yarn install` to install needed dependencies.
* `yarn start` to start the application on port 3002
* `yarn build` to build the application.

## Features
* ### [POSTCSS Plugins](http://postcss.org/)
  * [CSS Next](http://cssnext.io/)
    
    Write future CSS today. Better than using Preprocessors like SASS or LESS because it's pure CSS that you learn. 

    Comes with *autoprefixer* for your styles. 
  
  * [Stylelint](https://stylelint.io/)

    Get a whole lot better stylelinting than ESLint. 
    
    Follows https://github.com/stylelint/stylelint-config-standard for linting. 
    Turn rules on or off from `.stylelintrc.json` file.

* ### [ESLint](https://eslint.org)
  Follows [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript). You can turn rules on or off from `.eslintrc.json`. You can choose to ignore files on whole from `.eslintignore`

  Note: ESLint has it's style formatting options turned off by default, because it is handled by `Prettier` later on. 

* ### [Babel](https://babeljs.io/)
  Used to compile your modern javascript to es2015 compatible javascript. 
  You can change the configuration with .babelrc file. 

* ### [Prettier](https://github.com/prettier/prettier)
  Formats code in place, so you don't have to learn the styling rules. 

* ### [UglifyJS](https://github.com/mishoo/UglifyJS2)
  Used to minify, mangle and compress javascript code. 
  Used only during production.

## Other enhancements
1. Code split into `vendor.js` and hashed javascript filenames. 
This helps in pushing new code without worrying about caching issues.
2. Webpack automatically looks for and installs plugins that are not installed by default.  
Just import the required library and let wepack worry about installing it. 

    https://github.com/webpack-contrib/npm-install-webpack-plugin
3. Extracts CSS to a new file. 
    
    https://github.com/webpack-contrib/extract-text-webpack-plugin

4. Minifies react and react-dom packages.

    http://moduscreate.com/optimizing-react-es6-webpack-production-build/




_Feel free to throw in a pull request._ 



