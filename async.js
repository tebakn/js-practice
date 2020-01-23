function calledinpromise(attempt,callback){
    setTimeout(callback,500)
    console.log(attempt)
}
class Timeout extends Error{}

function request(something){
    return prom=new Promise((resolve,reject)=>{
        done=false;
        function attempt(n){
            console.log(`this is attempt ${n} with ${something.message}`);
            something.func(n,()=>{
            //resolve(`resolve value ${done}`)
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
req=request({func:calledinpromise,message:"Hi this is request"}).then(thenval=>console.log("this"+thenval))
.catch(err=>{if (err instanceof Timeout) console.log(err)
            else throw err})
console.log(req)
setTimeout(console.log,2000,req)
