function move(obj,name,target,fn){
				clearInterval(obj.timeA)
				obj.timeA=setInterval(function(){
					// let nowStyle=parseInt(getComputedStyle(obj)[name])
					// 可兼容一般结构
					if (name=='opacity') {
						nowStyle=parseInt(getComputedStyle(obj)[name])*100
					} else if(name=='width'||name=='height'||name=='font-size'||name=='border-width'||name=='border-radius'){
						nowStyle=parseInt(getComputedStyle(obj)[name])
					}else{
						nowStyle=getComputedStyle(obj)[name]
					}
					
					let speed=(target-nowStyle)/10
					// 速度取整,三元函数
					speed=(speed>0)? Math.ceil(speed):Math.floor(speed)
					
					
					
					if (nowStyle==target) {
						clearInterval(obj.timeA)
						// 链式结构
						if(fn){fn()}
					} else{
						if (name=='opacity') {
							obj.style[name]=(nowStyle+speed)/100          //适用于特殊结构//
						} else if(name=='width'||name=='height'||name=='font-size'||name=='border-width'||name=='border-radius'){
							obj.style[name]=nowStyle+speed+'px'
						}else{
							obj.style[name]=target
						}
					}
				},30)
			}