### Three js
- this is an open source library used for 3d modeling and rendering and this streamlines the process by abstracting the WebGL to 
    use it in a much easier way possible

### Get started

- Install a package bundler, in this case I am using parcel

- Make an HTML file and a js file.

- Render the js file inside the html file (`<script src="./js/scripts.js" type="module"></script>`). Use module to allow the
    use of keywords like import when trying to use the three js resources.

- Check the scripts.js to see how we get started

- To allow parcel to always watch the file after every saved change, type this command `parcel ./src/index.html`. Simply just
    use the keyword parcel and then the path to your root html file where the scripts are being loaded.