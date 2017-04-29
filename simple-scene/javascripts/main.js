requirejs.config({

	baseUrl: '/scripts',
	paths: {
		"three"	   		: "../libs/three.min",
		"orbitControls" : "../libs/OrbitControls2"
	},
	shim: {
		"three": {
			exports: 'THREE'
		},
		"orbitControls" : {
			deps: ['three']
		}
	}
});

requirejs(['three', 'orbitControls'], function(THREE, OrbitControls){
	console.log(OrbitControls);
});