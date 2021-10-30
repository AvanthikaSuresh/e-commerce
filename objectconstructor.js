function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name: "+this.name,"Age: "+this.age,"Place: "+this.place)
    }
}
var Avanthika=new person("Avanthika",21,"Vadakara")
Avanthika.display()