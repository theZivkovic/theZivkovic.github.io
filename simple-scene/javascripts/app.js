"use strict";

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var colorChooserWidth = WIDTH / 8.0;
var colorChooserHeight = HEIGHT / 8.0;

var renderer = void 0,
    camera = void 0,
    controls = void 0,
    scene = void 0,
    raycaster = void 0;
var sceneObjects = [];
var firstColor = new THREE.Color(1, 1, 0);
var secondColor = new THREE.Color(0, 1, 1);

function initializeEverything() {
  scene = new THREE.Scene();
  initializeRenderAndContainer();
  initializeCameraWithControls();
  initializeRaycaster();
  initializeSceneObjects();
  setupLogic();
};

function initializeRenderAndContainer() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(WIDTH, HEIGHT);
  var container = document.getElementById('container');
  container.appendChild(renderer.domElement);
};

function initializeCameraWithControls() {
  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 10000);
  camera.position.set(500.0, 500.0, 500.0);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  scene.add(camera);
};

function initializeRaycaster() {
  raycaster = new THREE.Raycaster();
};

 function initializeSceneObjects() {
  initializeLights();
  initializeGround();
  initializePickableObjects();
};

function initializeLights() {
  var pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.y = 200;
  scene.add(pointLight);
};

function initializeGround() {
  var ground = new THREE.Mesh(new THREE.PlaneGeometry(1000.0, 1000.0), new THREE.MeshPhongMaterial({ color: 0xDDDDDD }));
  ground.lookAt(new THREE.Vector3(0, 1, 0));
  scene.add(ground);
};

function randomChoice(probability) {
  var maxNumber = 1 / probability;
  return Math.floor(Math.random() * maxNumber) == 0;
};

function initializePickableObjects() {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (randomChoice(0.25)) {
        var randomGeomType;
        switch(Math.floor(Math.random() * 3)){
          case 0: randomGeomType = "SPHERE"; break;
          case 1: randomGeomType = "CUBE"; break;
          case 2: randomGeomType = "CYLINDER"; break;
        }
        var newMesh = Factory.makeMesh(randomGeomType);
        newMesh.position.x = i * 100 - 450;
        newMesh.position.z = j * 100 - 450;
        scene.add(newMesh);
        sceneObjects.push(newMesh);
      }
    }
  }
};

function setupLogic() {

  var chosenObject = null;

  var colorChooserCont = document.querySelector("#colorChooser");
  var firstColorContainer = document.querySelector("#firstColor");
  var secondColorContainer = document.querySelector("#secondColor");

  colorChooserCont.style.width = WIDTH / 8;
  colorChooserCont.style.height = HEIGHT / 8;

  firstColorContainer.style.backgroundColor = "#" + firstColor.getHexString();
  firstColorContainer.addEventListener("click", function (event) {
    event.stopPropagation();
    chosenObject.material.color = firstColor;
    colorChooserCont.style.visibility = "hidden";
    controls.enabled = true;
  });

  secondColorContainer.style.backgroundColor = "#" + secondColor.getHexString();
  secondColorContainer.addEventListener("click", function (event) {
    event.stopPropagation();
    chosenObject.material.color = secondColor;
    colorChooserCont.style.visibility = "hidden";
    controls.enabled = true;
  });

  window.addEventListener('click', onCanvasClick, false);

  function onCanvasClick(event) {

    var mouse = new THREE.Vector2();
    mouse.x = event.clientX / window.innerWidth * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(sceneObjects);
    if (intersects.length > 0) {
      chosenObject = intersects[0].object;
      var newColorChooserPosition = new THREE.Vector2();
      if (event.clientX + colorChooserWidth > WIDTH) newColorChooserPosition.x = WIDTH - colorChooserWidth;else newColorChooserPosition.x = event.clientX;
      if (event.clientX - colorChooserWidth < 0) newColorChooserPosition.x = 0;
      if (event.clientY + colorChooserHeight > HEIGHT) newColorChooserPosition.y = HEIGHT - colorChooserHeight;else newColorChooserPosition.y = event.clientY;
      if (event.clientY - colorChooserHeight < 0) newColorChooserPosition.y = 0;
      colorChooserCont.style.top = newColorChooserPosition.y + "px";
      colorChooserCont.style.left = newColorChooserPosition.x + "px";
      colorChooserCont.style.visibility = "visible";
      controls.enabled = false;
    } else {
      colorChooserCont.style.visibility = "hidden";
    }
  }
};

function update() {
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

//========== FIRE UP THE ENGINES =========
initializeEverything();
requestAnimationFrame(update);