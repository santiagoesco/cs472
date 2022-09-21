
let student=(function(){
let name ="david";
let id=45323

return {
    name:name,
    id:id
}

}
)();

console.log("Inside studentfile "+student.name+" ,"+student.id);

module.exports=student