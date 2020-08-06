function move(obj,name,target){
				clearInterval(obj.timeA)
				obj.timeA=setInterval(function(){
					let nowStyle=parseInt(getComputedStyle(obj)[name])
					let speed=(target-obj.opa)/10
					if (nowStyle==target) {
						clearInterval(obj.timeA)
					} else{
						obj.style[name]=nowStyle+speed+'px'
					}
				},30)
			}