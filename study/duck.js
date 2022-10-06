class duck{
constructor(flying,quacking,xPos,yPos){

}

duckStatus(){
    let status="";
    if(this.flying){
        status+="Duck is flying";
    }
    else{
        status+="Duck is swimming";
    }

    console.log(status);
    return status;
}
}

module.exports=duck;