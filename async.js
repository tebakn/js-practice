function calledinpromise(attempt,callback){
    setTimeout(callback,500)
    console.log(attempt)
}
class Timeout extends Error{}

function request(something){
    return prom=new Promise((resolve,reject)=>{
        done=false;
        function attempt(n){
            something.func(n,()=>{
            done=true
            resolve(`resolve value ${done}`)
            })
                setTimeout(()=>{
                if (done) return;
                else if(n<3)attempt(n+1)
                else reject(new Timeout("Timed out"))
            },250)
        }
        attempt(1);
    });
}

//normal
req=request({func:calledinpromise,message:"Hi this is request"}).then(thenval=>console.log("then "+thenval))
.catch(err=>{if (err instanceof Timeout) console.log(err)
            else throw err})
console.log(req)
setTimeout(console.log,2000,req)

// Async and await

// async function waitforrequest(){
//         req= await request({func:calledinpromise,message:"Hi this is request"}).then(thenval=>console.log("then "+thenval))
//          .catch(err=>{if (err instanceof Timeout) console.log(err)
//                      else throw err})
//         console.log(req)    
// }
// waitforrequest()