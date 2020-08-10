function move(obj,name,target,fn){
				clearInterval(obj.timeA)
				obj.timeA=setInterval(function(){
					let nowStyle=parseInt(getComputedStyle(obj)[name])
					let speed=(target-nowStyle)/10
					// 速度取整,三元函数
					speed=(speed>0)? Math.ceil(speed):Math.floor(speed)
					
					
					
					
					if (nowStyle==target) {
						clearInterval(obj.timeA)
						// 链式结构
						if(fn){fn()}
					} else{
						obj.style[name]=nowStyle+speed+'px'
					}
				},30)
			}