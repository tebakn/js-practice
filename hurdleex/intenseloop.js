async function longRunningFunction(){
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 700; j++) {
        for (let k = 0; k < 300; k++) {
          result = result + i + j + k;
        }
      }
    }
    async function awaittimeout()
{   id=await new Promise((res)=>{id=setInterval(console.log,500,result);res(id)})
    setTimeout(clearInterval,5000,id)
    return
  }
  await awaittimeout()
  return result;
}
  longRunningFunction()