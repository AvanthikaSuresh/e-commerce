var person={name:"Avanthika",age:21,place:"Vadakara",display:function(){
    console.log(this.name)
}}
for(x in person)
{
    console.log(person[x])
}
console.log(person.display())