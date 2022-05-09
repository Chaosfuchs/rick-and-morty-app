import { readFile } from 'fs';

readFile('README.md', 'utf-8', (error_, data) => {
  if (error_) {
    throw error_;
  }

  console.log(data);
});

console.log('It works');

console.log(`
=================
=               =
=     Hello     =
=               =
=================
`);

console.log(`
Differences between Server and Browser:

* Executed in different environments
* Browser: document, window, navigator
* Server: file system, 


`);
