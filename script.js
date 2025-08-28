let maingame = document.querySelectorAll(".box");

let getpval = document.querySelector("#show");

let upcon = document.querySelector(".upcontainer");

let newbtn = document.querySelector("#newbtn");

let resetbtn = document.querySelector("#reset");

let listofp = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

let currval = "O";

for(let b of maingame){
    b.addEventListener("click",()=>{
        if(currval==="O"){
            b.innerText = "O";
            currval = "X";
        }
        else{
            b.innerText = "X";
            currval = "O";
        }
        checkfunc();
    })
}

let checkfunc = ()=>{
    for(let p of listofp){
        let pos1 = maingame[p[0]].innerText;
        let pos2 = maingame[p[1]].innerText;
        let pos3 = maingame[p[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1===pos2 && pos2===pos3){
                    getpval.innerText = `Congrats! Winner is ${pos1}`;
                    upcon.classList.remove("hide");
                    for(let b of maingame){
                        b.disabled = true;
                    }   
                }
            }
        }
    btnclick();
}

let btnclick = ()=>{
    let count = 0;
    for(let b of maingame){
        if(b.innerText !== ""){
            count=count+1;
        };
    }
    if(count===9){
        getpval.innerText = "Game Drawn!";
    }
}


let resetgame = ()=>{
    currval = "O";
    for(let b of maingame){
        b.disabled = false;
        b.innerText = "";
    }
    upcon.classList.add("hide");
}


resetbtn.addEventListener("click",resetgame);

newbtn.addEventListener("click",resetgame);