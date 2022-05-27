n=0;
y=0;
z=0;
a=0;
c=0;
d=0;
while(n<=999){
    x=n%2;
    b=n%3;
    if(x!=0){
       z+=n;
        }
    if(x!=0){
        y++;
    }
    if(x==0){
        a++;
    }

    if(b==0){
        c+=n;
     d++   
    }
    
     n++;
}
console.log(z)
console.log("temos "+y+" números impares")
console.log("temos "+a+" números pares")
console.log(c/d)