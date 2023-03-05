function noscroll(){
    document.addEventListener('touchmove', (e) => {e.preventDefault();}, {passive: false});
    document.addEventListener('wheel', (e) => {e.preventDefault();}, {passive: false});
}

let movingNow = false;

const animation = (me) => {
    if (!movingNow) {
        movingNow = true;
        noscroll();
        myInfo = me.getBoundingClientRect();
        myWidth = myInfo.width;
        myHeight = myInfo.height;
        myLeft = myInfo.left;
        myTop = myInfo.top;
        tX = window.innerWidth/2 - myLeft - myWidth/2;
        tY = window.innerHeight/2 - myTop - myHeight/2;
        cX = window.innerWidth/myWidth;
        cY = window.innerHeight/myHeight;
        me.style.transform = `translate(${tX}px, ${tY}px) scale(${cX}, ${cY})`;
        me.classList.toggle('not-radius');
        setTimeout(() => {
            movingNow = false
        }, 350)
    } 
}