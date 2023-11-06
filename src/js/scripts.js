import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";
import * as dat from "dat.gui";

// Instance of the WebGL renderer
const renderer = new THREE.WebGLRenderer();

// enable shows of the renderer (by default it's false)
renderer.shadowMap.enabled = true;

// Set size to actually set the size of the space that web gl will use
renderer.setSize(window.innerWidth, window.innerHeight);

// inject the size (a canvas element) into the html
document.body.appendChild(renderer.domElement);

// Create a Stats object to track performance
const stats = new Stats();
document.body.appendChild(stats.dom);

// create the scene
const scene = new THREE.Scene();

// create the camera
const camera = new THREE.PerspectiveCamera(
    45, // FOV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
);

// create an instance of the orbit controll class
const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(-10, 30, 30);
orbit.update();

// creating a box
const boxGeometry = new THREE.BoxGeometry();

// box material
const boxMaterial = new THREE.MeshBasicMaterial({
    color: 0x00FF00
});

// add the geometry and the material as the arguments
const box = new THREE.Mesh(boxGeometry, boxMaterial);

// add the box to the scene
scene.add(box);

// Adding a plane
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
// Adding a sphere
const sphereGeometry = new THREE.SphereGeometry(4); // 4 is the radius of the sphere
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x5550a2,
    wireframe: false
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(-10, 10, 0);
sphere.castShadow = true;

// adding ambient light
const ambientLight = new THREE.AmbientLight('#ffffff');
scene.add(ambientLight);


// // adding directional light
// const directionalLight = new THREE.DirectionalLight('#FFFFFF', 0.8);
// scene.add(directionalLight);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.bottom = -12;
// // adding dierctional light helper
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(directionalLightHelper);
// // directional light shadow helper
// const directionalLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(directionalLightShadowHelper);


const spotLight = new THREE.SpotLight('#ffffff');
scene.add(spotLight);
spotLight.position.set(-20, 20, 0);
spotLight.castShadow = true;
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

// Instantiating the GUI here
const gui = new dat.GUI();

// Definig options for out sphere object
const options = {
    sphereColor: '#ffea00',
    wireframe: false,
    speed: 0.01
};

// some fucntions that will allow us to toggle few properties
const changeColor = (event) => {
    sphere.material.color.set(event)
}
const changeWireFrame = (event) => {
    sphere.material.wireframe = event;
}
// using addColor to get a html color picker
gui.addColor(options, 'sphereColor').onChange(changeColor);
// adding wireframe toggling option 
gui.add(options, 'wireframe').onChange(changeWireFrame);
// adding bouncing feature
gui.add(options, 'speed', 0, 0.5);
// Adding a grid helper
const gridHelper = new THREE.GridHelper(30); // pass in values to change the surface of the grid
scene.add(gridHelper);

let step = 0;

// Animation function
function animate(time) {
    // geometric rotation on x and y axes
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;


    // make the sphere bounce
    step += options.speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step));

    // Render the scene at a consistent frame rate
    renderer.render(scene, camera);

    // Update the Stats object on every frame
    stats.update();

    // Call the animate function in a loop
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
