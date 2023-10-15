import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";

// Instance of the WebGL renderer
const renderer = new THREE.WebGLRenderer();

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
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
);

// create an instance of the orbit controll class
const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0, 2, 5);
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

// Animation function
function animate(time) {
    // geometric rotation on x and y axes
    box.rotation.x = time/ 1000;
    box.rotation.y = time/ 1000;

    // Render the scene at a consistent frame rate
    renderer.render(scene, camera);

    // Update the Stats object on every frame
    stats.update();

    // Call the animate function in a loop
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
