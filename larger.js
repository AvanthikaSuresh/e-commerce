var r=require('readline-sync')
n1=r.question('Enter a number\n')
n2=r.question('Enter another number\n')
if(n1>n2)
{
    console.log('Larger is\n'+n1)
}
else{
    console.log('Larger is\n'+n2)
}