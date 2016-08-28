this project is a little template to start a project with React, Redux and Typescript (and optionally Electron). It uses Webpack to generate a single javascript file for output. The build is automated with gulp.

It is a simple up and down counter example.

# Build

You should have NPM installed.

First install gulp.
```bash
npm install --global gulp-cli
```

Then install dependencies.
```bash
npm install
```

To build :
```bash
gulp build
```
In the ```dist/``` folder the index.html file will be generated along the necessary file. It should work fine if you open the file in your web browser. 

# Run

To run in electron :
```bash
gulp run
# gulp buildAndRun (if you have skipped the build step)
```

 

