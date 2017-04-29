"use strict";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
let renderer, camera, controls, scene, raycaster;
const sceneObjects = [];
const firstColor = new THREE.Color(1, 1, 0);
const secondColor = new THREE.Color(0, 1, 1);

let initializeEverything = () => {
  scene = new THREE.Scene();
  initializeRenderAndContainer();
  initializeCameraWithControls();
  initializeRaycaster();
  initializeSceneObjects();
  setupLogic();
}

let initializeRenderAndContainer = () => {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(WIDTH, HEIGHT);
  const container = document.querySelector('#container');
  container.appendChild(renderer.domElement);
}

let initializeCameraWithControls = () => {
  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 10000);
  camera.position.set(500.0, 500.0, 500.0);
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  scene.add(camera);
}

let initializeRaycaster = () => {
  raycaster = new THREE.Raycaster();
}

let initializeSceneObjects = () => {
  initializeLights();
  initializeGround(); 
  initializePickableObjects();  
}

let initializeLights = () => {
  const pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.y = 200;
  scene.add(pointLight);
}

let initializeGround = () => {
  let ground = new THREE.Mesh(new THREE.PlaneGeometry(1000.0, 1000.0), new THREE.MeshPhongMaterial({color: 0xDDDDDD}));
  ground.lookAt(new THREE.Vector3(0, 1, 0));
  scene.add(ground);
}

let randomChoice = (probability) => {
  let maxNumber = 1 / probability;
  return Math.floor(Math.random() * maxNumber) == 0;
}

let initializePickableObjects = () => {
  for (var i = 0; i < 9; i++) 
    for (var j = 0; j < 9; j++) {
        if (randomChoice(0.25)) {
           let randomGeomType = (randomChoice(0.5) ? "SPHERE" : "CUBE");
           let newMesh = Factory.makeMesh(randomGeomType);
           newMesh.position.x = i * 100 - 450;
           newMesh.position.z = j * 100 - 450;
           scene.add(newMesh);
           sceneObjects.push(newMesh);
        }
    }
}

let setupLogic = () => {

  let chosenObject = null;

  const colorChooserCont = document.querySelector("#colorChooser");
  const firstColorContainer = document.querySelector("#firstColor");
  const secondColorContainer = document.querySelector("#secondColor");

  colorChooserCont.style.width = WIDTH / 8;
  colorChooserCont.style.height = HEIGHT / 8;

  firstColorContainer.style.backgroundColor = "#" + firstColor.getHexString();
  firstColorContainer.addEventListener("click", (event) => {
    event.stopPropagation()
    chosenObject.material.color = firstColor;
    colorChooserCont.style.visibility = "hidden";
    controls.enabled = true;
  });

  secondColorContainer.style.backgroundColor = "#" + secondColor.getHexString();
  secondColorContainer.addEventListener("click", (event) => {
    event.stopPropagation()
    chosenObject.material.color = secondColor;
    colorChooserCont.style.visibility = "hidden";
    controls.enabled = true;
  });

  window.addEventListener('click', onCanvasClick, false);

  function onCanvasClick(event) {
    let mouse = new THREE.Vector2();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects( sceneObjects );
    if (intersects.length > 0) {
       chosenObject = intersects[0].object;
       colorChooserCont.style.top = event.clientY + "px";
       colorChooserCont.style.left = event.clientX + "px";
       colorChooserCont.style.visibility = "visible";
       controls.enabled = false;
    }
    else 
    {
      colorChooserCont.style.visibility = "hidden";
    }
  }
}

function update () {
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

//========== FIRE UP THE ENGINES =========
initializeEverything();
requestAnimationFrame(update);

