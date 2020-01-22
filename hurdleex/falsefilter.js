function falsefilt(predicate,array){
    return array.filter((value)=>{ return !(predicate(value))})
}
console.log(falsefilt((value)=>/abc/.test(value),["abc","asasfbc","aaccbbabcdd"]))