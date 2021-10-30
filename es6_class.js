class hello{
    constructor(num1,num2)
    {
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log("The result of given number is: "+(this.num1+this.num2))
    }
}
let hey=new hello(20,30)
hey.hello()