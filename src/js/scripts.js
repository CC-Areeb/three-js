import * as THREE from "three";

// Instance of the WebGL renderer
const renderer = new THREE.WebGLRenderer();

// Set size to actually set the size of the space that web gl will use
renderer.setSize(window.innerWidth, window.innerHeight);

// inject the size (a canvas element) into the html
document.body.appendChild(renderer.domElement);

// create the scene
const scene = new THREE.Scene();

// craete the camera
const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(0, 2, 5);


// creaeting a box
const boxGeometry = new THREE.BoxGeometry();

// box material
const boxMaterial = new THREE.MeshBasicMaterial(
    {
        color: 0x00FF00
    }
);

// add the geometry and the material as the arguments
const box = new THREE.Mesh(boxGeometry, boxMaterial);

// add the box to the scene
scene.add(box); 


renderer.render(scene, camera);