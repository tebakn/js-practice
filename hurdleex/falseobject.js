function falseyobj(obj,test){
    retobj={}
    for (key of Object.keys(obj)){
            if(!test(obj[key]))
                retobj[key]=obj[key]
    }
    return retobj
}

console.log(falseyobj({a:2,b:"sdfsdf",c:77},(value)=>{return typeof(value)==="string"}))

