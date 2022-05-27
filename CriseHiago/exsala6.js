n = 1;
x=0;
z=0;
y=0;

for(n;n<500;n++){
    x=n%2;
    z=n%3;
        if(x!=0 && z==0){
            y+=n;
        }
}
console.log(y);