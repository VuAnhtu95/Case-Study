function clickstart(){
    var character = document.getElementById('charactertus');
    var gamee = document.getElementById('gametus');
    var interval;
    var both = 0;
    var counter = 0;
    var currentBlock = []
    function moveLeft(){
        var left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
        if (left>0){
            character.style.left = left - 5 + "px";
        }
    }
    function moveRight() {
        var left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
        if(left<680){
            character.style.left = left + 5 + "px";
        }

    }
    document.addEventListener("keydown",event =>{
        if (both==0){
            both++
            if (event.key==="a"){
                interval = setInterval(moveLeft,10);
            }
            if (event.key==="d"){
                interval = setInterval(moveRight,10);
            }
        }
    })
    document.addEventListener("keyup",event =>{
        clearInterval(interval);
        both = 0;
    })
    var blocks = setInterval(function (){
        var blocklast = document.getElementById("block"+(counter-1));
        var holelast = document.getElementById("hole"+(counter-1));
        if (counter>0){
            var blocklasttop = parseInt(window.getComputedStyle(blocklast).getPropertyValue('top'));
            var holelasttop = parseInt(window.getComputedStyle(holelast).getPropertyValue('top'));
        }
        if (blocklasttop < 400 || counter==0){
            var block = document.createElement("div");
            var hole = document.createElement("div");
            block.setAttribute("class","block");
            hole.setAttribute("class","hole");
            block.setAttribute("id","block"+counter);
            hole.setAttribute("id","hole"+counter);
            block.style.top = blocklasttop + 100 + "px"
            hole.style.top = holelasttop + 100 + "px"
            var random = Math.floor(Math.random() * 660);
            hole.style.left = random + "px";
            gamee.appendChild(block)
            gamee.appendChild(hole)
            currentBlock.push(counter)
            counter++
        }
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
        var drop = 0
        if (characterTop<=0){
            alert("Tắt unikey rồi chơi lại nhé");
            clearInterval(blocks);
            location.reload();
        }
        for (let i = 0; i < currentBlock.length; i++) {
            let current = currentBlock[i];
            let iblock = document.getElementById("block"+ current)
            let ihole = document.getElementById("hole"+ current)
            let iblocktop = parseFloat(window.getComputedStyle(iblock).getPropertyValue('top'));
            let iholeleft = parseFloat(window.getComputedStyle(ihole).getPropertyValue('left'));
            if((counter-5) < 10){
                iblock.style.top = iblocktop - 0.5 + "px"
                ihole.style.top = iblocktop - 0.5 + "px"
            }
            else if ((counter-5) >= 10 && (counter-5)<20){
                iblock.style.top = iblocktop - 0.6 + "px"
                ihole.style.top = iblocktop - 0.6 + "px"
            }
            else if ((counter-5) >= 20 && (counter-5)<30){
                iblock.style.top = iblocktop - 0.7 + "px"
                ihole.style.top = iblocktop - 0.7 + "px"
            }
            else if ((counter-5) >= 30 && (counter-5)<40){
                iblock.style.top = iblocktop - 0.8 + "px"
                ihole.style.top = iblocktop - 0.8 + "px"
            }
            else if ((counter-5) >= 40 && (counter-5)<50){
                iblock.style.top = iblocktop - 0.9 + "px"
                ihole.style.top = iblocktop - 0.9 + "px"
            }
            else if((counter-5)==50){
                alert("Bạn thắng rồi đấy")
                window.location.reload()
            }
            // biến mất div block nếu top < 10
            if (iblocktop < 10){
                currentBlock.shift(); //cắt khỏi mảng
                iblock.remove() // xóa div block
                ihole.remove() // xóa div hole
            }
            if (iblocktop-20<characterTop && iblocktop>characterTop){
                drop++;
                if (iholeleft<= characterLeft && iholeleft + 20>=characterLeft){
                    drop = 0;
                }
            }
            if (drop==0){
                if (characterTop<480){
                    character.style.top = characterTop + 2 +"px"
                }
            }else {
                character.style.top = characterTop -0.5 +"px"
            }
        }

        document.getElementById('yourpoint').innerText = "Điểm của bạn là " + (counter-5)
    },1)
}
function huongdan(){
    alert("Cứ chơi là hiểu cần mẹ gì hướng dẫn")
}