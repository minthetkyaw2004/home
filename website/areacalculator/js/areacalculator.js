	//variable
	let width = document.getElementById('width');
	let height = document.getElementById('height');
	let reset = document.getElementById('reset');
	let calculate = document.getElementById('calculate');
	let result = document.getElementById('result');
	let save = document.getElementById('save');
	let memory = document.getElementById('memory');
	//function
	function calc(){
		if(width.value=="" && height.value==""){
			return false;
		}
		answer = width.value * height.value
		area = answer.toString() + ' ft<sup>2</sup>.' 
		result.innerHTML = area
	}
	function clear(){
		width.value = ""
		height.value = ""
		result.innerHTML = ""
	}
	function savememo(){
		memo = width.value+" ft * "+height.value+" ft = "+area
		memory.innerHTML += '<li>' + memo + '</li>'
	}
	//recall function
	calculate.addEventListener("click",function(){
		calc()
	})
	reset.addEventListener("click",function(){
		clear()
	})
	save.addEventListener("click",function(){
		savememo()
	})