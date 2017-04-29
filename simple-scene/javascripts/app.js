 // Set the scene size.
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Set some camera attributes.
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const sceneObjects = [];
const firstColor = new THREE.Color(1, 0, 0);
const secondColor = new THREE.Color(0, 1, 1);
let chosenObject = null;

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


const raycaster = new THREE.Raycaster();


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
mesh1.name = "MESH_1";
mesh1.position.y = 50.0;
mesh1.position.x = 200.0;
mesh1.position.z = 200.0;
scene.add(mesh1);
sceneObjects.push(mesh1);

let mesh2 = new THREE.Mesh(new THREE.BoxGeometry(100.0, 100.0, 100.0), new THREE.MeshPhongMaterial ({color: 0xDDDDDD}));
mesh2.name = "MESH_2";
mesh2.position.y = 50.0;
mesh2.position.x = -200.0;
mesh2.position.z = -200.0;
scene.add(mesh2);
sceneObjects.push(mesh2);

let mesh3 = new THREE.Mesh(new THREE.BoxGeometry(100.0, 100.0, 100.0), new THREE.MeshPhongMaterial ({color: 0xDDDDDD}));
mesh3.name = "MESH_3";
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

window.addEventListener('click', onClick, false);

function onClick(event) {

  let mouse = new THREE.Vector2();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects( sceneObjects );
  if (intersects.length > 0) {
     chosenObject = intersects[0].object;
     document.querySelector("#colorChooser").style.top = event.clientY + "px";
     document.querySelector("#colorChooser").style.left = event.clientX + "px";
     document.querySelector("#colorChooser").style.visibility = "visible";
     controls.enabled = false;
  }
 
}

// Schedule the first frame.
requestAnimationFrame(update);

document.querySelector("#firstColor").style.backgroundColor = "#" + firstColor.getHexString();
document.querySelector("#firstColor").addEventListener("click", () => {
  chosenObject.material.color = firstColor;
  document.querySelector("#colorChooser").style.visibility = "hidden";
  controls.enabled = true;
});


document.querySelector("#secondColor").style.backgroundColor = "#" + secondColor.getHexString();
document.querySelector("#secondColor").addEventListener("click", () => {
  chosenObject.material.color = secondColor;
  document.querySelector("#colorChooser").style.visibility = "hidden";
  controls.enabled = true;
});