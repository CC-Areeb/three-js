### Three js

- this is an open source library used for 3d modeling and rendering and this streamlines the process by abstracting the WebGL to
    use it in a much easier way possible

### Get started

- Install a package bundler, in this case I am using parcel (npm install parcel)

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

### Creating a 3D model

- First we craete the geometry or the skeleton of the object.
- Creation of the material or the skin of the skeleton. Keep in mid that the more complex you choose the material, the more items
    it needs hence a more complex algorithm is needed for it.
- Third step is to cover the material over the skeleton.

### Example

```JavaScript
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({
    color: 0x00FF00
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
```

- The first line is called the creation of the object or the skeleton.
- The second line is the material or the skin that our geometry will be covered with
- The third line is the fusion between the skeleton and the skin to make a 3D object. Mesh in a 3D world is an object, It can be anything from shapes to a human character.
- The last line is used to add the mesh (object) to the scene or the canvas that we have.

### Types of mesh material

- Mesh Basic Material where you require no light source so as the color is already being shown and reflected
- Mesh Lambert Material and Mesh Standard Material where you will need to have a light source to show the color of the object.

### The Dat GUI package

- To get features that allow us to toggle things like wireframes, or change color or make the object move we can use this package.
- First install the dat.gui by using this command `npm install dat.gui`.
- Then import it on the top and the use its given methods to add features.

### Code Example

```JavsScript
const gui = new dat.GUI();
const options = {
    sphereColor: '#ccccff',
    wireframe: false,
    speed: 0.01
};
const changeColor = (event) => {
    sphere.material.color.set(event)
}
const changeWireFrame = (event) => {
    sphere.material.wireframe = event;
}
gui.addColor(options, 'sphereColor').onChange(changeColor); 
gui.add(options, 'wireframe').onChange(changeWireFrame);
gui.add(options, 'speed', 0, 0.5);
```
