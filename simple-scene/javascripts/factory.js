"use strict";

let Factory = (function() {
	
	const defaultDimension = 100.0;

	let _makePhongMaterial = () => {
		return new THREE.MeshPhongMaterial ({color: 0xDDDDDD});
	}

	let _makeGeometry = (geometryType) => {
		switch(geometryType){ 
			case "CUBE" :  return new THREE.BoxGeometry(defaultDimension, defaultDimension, defaultDimension);
			case "SPHERE": return new THREE.SphereGeometry(defaultDimension / 2.0, 32, 32);
			default: throw `Error in _makeGeometry: ${geometryType} is invalid type`;
		}
	}

	let _makeMesh =  (geometryType) => {
		let mesh = new THREE.Mesh(_makeGeometry(geometryType), _makePhongMaterial());
		mesh.position.y += defaultDimension / 2.0;
		return mesh;
	}

	return {
		makeMesh: _makeMesh
	}
}());