window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);

    if(!audio) return;
    console.log(audio)
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
    //function remove transition
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    //fetch all keys
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})