var turn='X';
var isgameover=false;
if(!isgameover){
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
}
//change turn
const changeturn=()=>{
    return turn==='X'?'0':'X';
}

//function to check for win
const checkwin=()=>{
    let boxtext = document.getElementsByClassName('box-text');
    
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if(!isgameover && (boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
            isgameover=true;
        }
    })
}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.box-text');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.box-text');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
    turn='X';
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
});