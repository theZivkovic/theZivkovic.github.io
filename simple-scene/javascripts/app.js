 // Set the scene size.
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Set some camera attributes.
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const sceneObjects = [];

// Get the DOM element to attach to
const container = document.querySelector('#container');

// Create a WebGL renderer, camera
// and a scene
const renderer = new THREE.WebGLRenderer();
const camera =
    new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
    );
camera.position.z = 500;
camera.position.y = 500;
camera.position.x = 500;

const controls = new THREE.OrbitControls( camera, renderer.domElement );

const scene = new THREE.Scene();

// Add the camera to the scene.
scene.add(camera);

// Start the renderer.
renderer.setSize(WIDTH, HEIGHT);

// Attach the renderer-supplied
// DOM element.
container.appendChild(renderer.domElement);

// create a point light
const pointLight = new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.y = 200;

let ground = new THREE.Mesh(new THREE.PlaneGeometry(1000.0, 1000.0), new THREE.MeshPhongMaterial({color: 0xDDDDDD}));
ground.lookAt(new THREE.Vector3(0, 1, 0));
scene.add(ground);

let mesh1 = new THREE.Mesh(new THREE.BoxGeometry(100.0, 100.0, 100.0), new THREE.MeshPhongMaterial ({color: 0xDDDDDD}));
mesh1.position.y = 50.0;
mesh1.position.x = 200.0;
mesh1.position.z = 200.0;
scene.add(mesh1);
sceneObjects.push(mesh1);

let mesh2 = new THREE.Mesh(new THREE.BoxGeometry(100.0, 100.0, 100.0), new THREE.MeshPhongMaterial ({color: 0xDDDDDD}));
mesh2.position.y = 50.0;
mesh2.position.x = -200.0;
mesh2.position.z = -200.0;
scene.add(mesh2);
sceneObjects.push(mesh2);

let mesh3 = new THREE.Mesh(new THREE.BoxGeometry(100.0, 100.0, 100.0), new THREE.MeshPhongMaterial ({color: 0xDDDDDD}));
mesh3.position.y = 50.0;
mesh3.position.x = -200.0;
mesh3.position.z = 200.0;
scene.add(mesh3);
sceneObjects.push(mesh3);

// add to the scene
scene.add(pointLight);

function update () {
  // Draw!
  renderer.render(scene, camera);

  // Schedule the next frame.
  requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);