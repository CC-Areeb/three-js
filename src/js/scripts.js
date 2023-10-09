import * as THREE from "three";

// Instance of the WebGL renderer
const renderer = new THREE.WebGLRenderer();

// Set size to actually set the size of the space that web gl will use
renderer.setSize(window.innerWidth, window.innerHeight);

// inject the size (a canvas element) into the html
document.body.appendChild(renderer.domElement);