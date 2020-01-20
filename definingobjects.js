class Firstclass{
    constructor(...args){
        this['1']=args[0]
        this.one=args[1]
        this['2']=args[2]
        this.three=args[3]
        this.length=args.length
    }
    displaykeys(){
        console.log(Object.keys(this))
    }
    display(){
        console.log(this)
    }
}

obj=new Firstclass('sad','qw',2,'edfw','e',3243,'sf','f',)
obj.displaykeys()
obj.display()

let newobj= new class {constructor(type){this['a']=12,this.type=type}disp(){console.log(this)}}("unnamed")
newobj.disp()
console.log(Object.getPrototypeOf(Firstclass))