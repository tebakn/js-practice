var w;
function startwork(){
    if (typeof(Worker) !== "undefined") {
        console.log("woohooo")
        if (typeof(w) == "undefined") {
            w=new Worker("intenseloop.js");
        }
        w.onmessage = function(event) {
          document.getElementsByTagName("h1").innerHTML = event.data;
        };
      } else {
        document.getElementsByTagName("h1").innerHTML = "Sorry! No Web Worker support.";
      }
    
}
startwork()
