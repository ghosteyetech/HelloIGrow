/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyC8sv3bEuHb45IQyXE1lxZj7ANsBjz4b5o",
    authDomain: "cloud-firestore-test-62d13.firebaseapp.com",
    databaseURL: "https://cloud-firestore-test-62d13.firebaseio.com",
    projectId: "cloud-firestore-test-62d13",
    storageBucket: "cloud-firestore-test-62d13.appspot.com",
    messagingSenderId: "545874068874"
  }
};
