class booked{
    constructor(from,to){
        console.log(from,to)
        this.from = new Date(Date.parse(from))
        this.to = new Date(Date.parse(to))
    }
}

class schedule{
    constructor(tz,...args){
        this.booking=[]
        this.deftimezone=tz
        args.forEach((value)=>{
           if (value.length!==2){
               console.log("value error")
           } 
           else{
                this.booking.push(new booked(value[0],value[1]))
           }
        })
    
    }
}

candidateschedule=new schedule("+0000",[" 25 12 1995 13:30:00 +0000"," 25 Dec 1995 14:30:00 +0430"],[" 26 Dec 1995 13:30:00 GMT"," 26 Dec 1995 14:30:00 GMT"])
console.log(candidateschedule)

recruiterschedule=new schedule("+0430",[" 25 Dec 1995 13:30:00 +0430"," 25 Dec 1995 14:30:00 +0430"],[" 26 Dec 1995 13:30:00 GMT"," 26 Dec 1995 14:30:00 GMT"])
console.log(recruiterschedule)