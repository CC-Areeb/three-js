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

### Getting started
- first to record something using three js, we need to first have a scene, a camera, components like objects in the scene.

### Perspective Camera
- First we need the vertical field of view (FOV), it is the maximum angle of what can be seen through the camera lens.
- Next is the aspect ratio which is basically the width and height of the image which has been captured by the camera.
    It is calculated by dividing the canvas width and canvas height.
- Near and Far clipping planes, The objects or images will only be rendered if that object is in between these planes.
- The size of the object varies depending on the placement of that object within the clipping planes.

### Orthographic Camera
- These are used for rendering 2D scenes as there is no use for depth (3rd axis).
- This type of camera has 6 values, first 4 are the **left, right, top, bottom** and the last 2 are the near and far clipping
    planes.
- The size of the object does not vary.