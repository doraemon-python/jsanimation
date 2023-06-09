function noscroll() {
    document.body.style.overflow = "hidden";
}

function yesScroll() {
    document.body.style.overflow = "";
}

let movingNow = false;

const animation = (me) => {
    if (!movingNow) {
        movingNow = true;
        if (me.style.transform === "") {
            noscroll();
            myInfo = me.getBoundingClientRect();
            myWidth = myInfo.width;
            myHeight = myInfo.height;
            myLeft = myInfo.left;
            myTop = myInfo.top;
            tX = window.innerWidth / 2 - myLeft - myWidth / 2;
            tY = window.innerHeight / 2 - myTop - myHeight / 2;
            cX = window.innerWidth / myWidth;
            cY = window.innerHeight / myHeight;
            me.style.transform = `translate(${tX}px, ${tY}px) scale(${cX}, ${cY})`;
            me.classList.add('not-radius');
        } else {
            yesScroll();
            me.style.transform = "";
            me.classList.remove('not-radius');
        }
        setTimeout(() => {
            movingNow = false
        }, 350)
    }
}

const container = document.querySelector('.container');

for (let i = 0; i < 70; i++) {
    let new_elm = document.createElement('div');
    new_elm.textContent = i;
    new_elm.classList.add('block');
    new_elm.addEventListener('click', () => animation(new_elm));
    container.appendChild(new_elm);
}