let s='';
num=12;

for(let i=0;i<num;i++){
    for(let j=0;j<num;j++){
        if((i+j)%2==0)
            s=s+'#';
        else
            s=s+' ';
    }
    s=s+"\n"
} 
console.log(s)