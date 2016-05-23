angular.module('test').controller('cCtrl',cCtrl);

function cCtrl() {
		
		var vm = this;

		var list = 101;

		vm.names = [];

		vm.createList = function(){
			for(var i = 1; i < list; i++){

				if(i % 3 && i % 5){
					name = i;
				} else {
					if (i % 3 === 0){
					name ='Cameron';
					}
					if (i % 5 === 0){
					name='Sean';
					}
					if (i % 15 === 0) {
					name="Cameron's friend Sean"
					}
				}

				vm.names.push(name);
				
				}
			}

		vm.createList();
		console.log(vm.names);	

	};
