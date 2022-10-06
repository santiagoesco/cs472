class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getCompound(){
        return this.name+" "+this.age;
    }
}

export.module='student'