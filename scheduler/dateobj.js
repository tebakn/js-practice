class booked{

    constructor(from,to){
        this.from = new Date(Date.parse(from))
        this.to = new Date(Date.parse(to))
    }

    getDuration(){
       return this.to.getTime()-this.from.getTime()
    }
}

class Schedule{

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

    getFreeSlots(from,to){
        let slot=[new booked(from,to)];

        this.booking.forEach((book)=>{
            let free=slot.pop();

            if (free.from.getTime()>=book.from.getTime() && free.from.getTime()<=book.to.getTime()){
                free.from=book.to;
                slot.push(free);
            }

            else if (free.from.getTime()<book.from.getTime() && free.to.getTime()>book.to.getTime()){
                slot.push(new booked(free.from.toUTCString(),book.from.toUTCString()));
                slot.push(new booked(book.to.toUTCString(),free.to.toUTCString()));
            }

            else if (free.to.getTime()>=book.from.getTime() && free.to.getTime()<=book.to.getTime()){
                free.to=book.from;
                slot.push(free);
            }

            else
                slot.push(free);
        });
    return slot;
    } 
}
function scheduleFor(schedule1,schedule2){

    return function geMatchingSlots(from,to,duration){
        allslots1=schedule1.getFreeSlots(from,to)
        allslots2=schedule2.getFreeSlots(from,to)
        commonslots=[]

        for (i=0,j=0;i<allslots1.length && j<allslots2.length;){
            slot1=allslots1[i]
            slot2=allslots2[j]

            if (slot1.from.getTime()>=slot2.to.getTime())
                j+=1

            else if (slot2.from.getTime()>=slot1.to.getTime())
                i+=1

            else if (slot1.from.getTime()<=slot2.from.getTime()){

                if (slot1.to.getTime()<=slot2.to.getTime()){
                    commonslots.push((new booked(slot2.from.toUTCString(),slot1.to.toUTCString())))
                    i+=1;
                }

                else{
                    commonslots.push((new booked(slot2.from.toUTCString(),slot2.to.toUTCString())))
                    j+=1;
                }
            }

            else {

                if (slot1.to.getTime()<=slot2.to.getTime()){
                    commonslots.push((new booked(slot1.from.toUTCString(),slot1.to.toUTCString())))
                    i+=1;
                }

                else{
                    commonslots.push((new booked(slot1.from.toUTCString(),slot2.to.toUTCString())))
                    j+=1;
                }
            }
        }
        return commonslots.filter((value)=>value.getDuration()>=(duration*1000))
    }
}



candidateschedule=new Schedule("+0000",[" 25 Dec 1995 13:30:00 +0000"," 25 Dec 1995 14:30:00 +0000"]
,[" 25 Dec 1995 15:30:00 GMT"," 25 Dec 1995 17:30:00 GMT"])

recruiterschedule=new Schedule("+0000",[" 25 Dec 1995 9:30:00 +0000"," 25 Dec 1995 12:30:00 +0000"]
,[" 25 Dec 1995 13:30:00 +0000"," 25 Dec 1995 15:30:00 +0000"])

scheduler=scheduleFor(candidateschedule,recruiterschedule)
commontime=scheduler(" 25 Dec 1995 7:30:00 +0000"," 25 Dec 1995 23:30:00 +0000",3600)
console.log(commontime)