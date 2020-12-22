document.addEventListener('DOMContentLoaded',() =>{
    const board=document.querySelector('.board'); 
    const width= 5;


const layout = [
    0,0,2,0,0,
    0,0,0,0,0,
    1,0,5,0,3,
    0,0,0,0,0,
    0,0,4,0,0
]
// 0- normal blocks;
// 1 - blue home
// 2 - green
// 3 - red
// 4 - yellow

const squares=[];
console.log(layout.length)
function createBoard() {
    for(let i=0;i<layout.length;i++){
        const square = document.createElement('div');
        board.appendChild(square);
        squares.push(square);
        // console.log(1);
        if(layout[i]===0){
            squares[i].classList.add('block');  
            squares[i].innerText=i;  
        }
        else if(layout[i]===1){
            squares[i].classList.add('block');
            squares[i].classList.add('blue-home');
            squares[i].classList.add('home');
            squares[i].innerText=i;  


        } else if(layout[i]===2){
            squares[i].classList.add('block');
            squares[i].classList.add('green-home');
            squares[i].classList.add('home');
            squares[i].innerText=i;  
        } else if(layout[i]===3){
            squares[i].classList.add('block');
            squares[i].classList.add('red-home');
            squares[i].classList.add('home');
            squares[i].innerText=i;  
        } else if(layout[i]===4){
            squares[i].classList.add('block');
            squares[i].classList.add('home');
            squares[i].classList.add('yellow-home');
            squares[i].innerText=i;  
        }  else if(layout[i]===5){
            squares[i].classList.add('block');
            squares[i].classList.add('home');
            squares[i].classList.add('home-home');
            squares[i].innerText=i;  
        }
    }
}



createBoard();


const blue_init_index=10;
const green_init_index=2;
const red_init_index=14;
const yellow_init_index=22;

    ind=[[10,10,10,10],[2,2,2,2],[14,14,14,14],[22,22,22,22]];
    console.log(ind[0]);
    var token=[];
    var tokens =[];
    console.log(tokens);
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
        const t = document.createElement('button');
        
        if(i==0){
        squares[blue_init_index].appendChild(t);
        token.push(t);
        token[j].classList.add("token");
            token[j].classList.add('blue');
            token[j].classList.add(j);  
        // console.log(tokens);
        }

        if(i==1){
            squares[green_init_index].appendChild(t);
            token.push(t);
            token[j].classList.add("token");
                token[j].classList.add('green');  
                token[j].classList.add(j);  
            }

        else if(i==2){
                squares[red_init_index].appendChild(t);
                token.push(t);
                token[j].classList.add("token");
                    token[j].classList.add('red');  
                    token[j].classList.add(j);  
                }

        else   if(i==3){
                squares[yellow_init_index].appendChild(t);
                token.push(t);
                token[j].classList.add("token");
                    token[j].classList.add('yellow');  
                    token[j].classList.add(j);  
                }
            
            if(j==3){
                tokens.push(token);
                token=[];
            } 
        }
    }
    console.log(tokens);
steps=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
function myLoop(x,count,ind,index,tokens,steps) {
    steps++;
    // console.log(steps);
    count++;
  setTimeout(function() {
    console.log(ind);      
    console.log(tokens[index]);   
    squares[ind[index]].removeChild(tokens[index]);
    // squares[ind[index]].classList.remove("active");


    if(index==0 && (ind[index]==5 || ind[index]==11)){
        
        ind[index]=ind[index]+1;
    }

    else if(index==1 &&( ind[index]==3 || ind[index]==7))
        ind[index]=ind[index]+5;

    else if(index==2 && (ind[index]==19 || ind[index]==13))
    ind[index]=ind[index]-1;

    else if(index==3 && (ind[index]==21 || ind[index]==17))
    ind[index]=ind[index]-5;

    else if(Math.floor(ind[index]/5)==1 && ind[index]!=9 && ind[index]!=5){
        if(ind[index]==8)
        ind[index]=ind[index]+5;
        else
        ind[index]+=1;
    }
    
    else if(ind[index]%5==3 && ind[index]!=3 && ind[index]!=23){
        if(ind[index]==18){
            ind[index]-=1;
        }
        else
        ind[index]+=5;
    }

    else if(Math.floor(ind[index]/5)==3 && ind[index]!=19 && ind[index]!=15){
        if(ind[index]==16){
            ind[index]-=5;
        }
        else{
            ind[index]-=1;
        }
    }

    else if(ind[index]%5==1 && ind[index]!=1 && ind[index]!=21){
        ind[index]-=5;

    }

    else if(ind[index]%5==0){
        if(ind[index]==20){
            ind[index]=ind[index]+1;
        }
        else
        ind[index]=ind[index]+5;
    }
    else if(Math.floor(ind[index]/5)==4){
        if(ind[index]==24){
            ind[index]=ind[index]-5;
        }
        else
        ind[index]=ind[index]+1;
    }
    else if(ind[index]%5==4){
        if(ind[index]==4){
            ind[index]=ind[index]-1;
        }
        else{
            ind[index]=ind[index]-5;
        }
    }
    else if(Math.floor(ind[index]/5)==0){
        ind[index]=ind[index]-1;
    }
    

    squares[ind[index]].appendChild(tokens[index]);
    // console.log(tokens[index]);
    // squares[ind[index]].classList.add("active");

    console.log(count);

    if (count<x) {
      myLoop(x,count,ind,index,tokens,steps);
    } 

},200)

};

token=Array.from(document.querySelectorAll(".token"));
let i;
token.forEach(t => {
    t.addEventListener("click",()=>{
        i=t.classList.item(2);
        console.log(i);
    })
});



document.querySelector(".bluedice").addEventListener("click",()=>
{
    count=0;
    let dice=Math.floor(Math.random()*4+1);
    document.querySelector(".bluedice").innerText=dice;
    
    const blueTokens= Array.from(document.querySelectorAll(".blue"));
    console.log(blueTokens);



    if(steps[0][i]+dice<=24)
    myLoop(dice,0,ind[0],0,tokens,steps[0][i]);


});

// squares[ind[0]].classList.

document.querySelector(".greendice").addEventListener("click",()=>
{
    count=0;
    squares[ind[0]].classList.remove("active");
    squares[ind[1]].classList.add("active");
    i=parseInt(document.querySelector(".active").innerText);
    let dice=Math.floor(Math.random()*4+1);
    document.querySelector(".greendice").innerText=dice;
    if(steps[1]+dice<=24)
    myLoop(dice,0,ind,1,tokens,steps);
    i=i+dice;
});    

document.querySelector(".reddice").addEventListener("click",()=>
{
    count=0;
    squares[ind[1]].classList.remove("active");
    squares[ind[2]].classList.add("active");
    i=parseInt(document.querySelector(".active").innerText);
    let dice=Math.floor(Math.random()*4+1);
    document.querySelector(".reddice").innerText=dice;
    if(steps[2]+dice<=24)
    myLoop(dice,0,ind,2,tokens,steps);
    i=i+dice;
});    

document.querySelector(".yellowdice").addEventListener("click",()=>
{
    count=0;
    squares[ind[2]].classList.remove("active");
    squares[ind[3]].classList.add("active");
    i=parseInt(document.querySelector(".active").innerText);
    let dice=Math.floor(Math.random()*4+1);
    document.querySelector(".yellowdice").innerText=dice;
    if(steps[3]+dice<=24)
    myLoop(dice,0,ind,3,tokens,steps);
    i=i+dice;
});    

})