class Sound {
    constructor(parent){
        this.parent = parent;
        this.sounds = [];
        this.muted = true;
    }

    create(src, id, loop = false){
        let audio = document.createElement("audio");
        audio.src = src;
        audio.id = id;
        audio.muted = true;
        this.sounds.push(audio);
        this.parent.append(audio);

        if(loop){
            audio.setAttribute("loop", "")
        }

        return audio;
    }
}

Sound.prototype.soundSetting = function(){
    let soundItems = document.querySelectorAll(".sound-item");
    for(let soundItem of soundItems){
        soundItem.addEventListener("click", (e)=>{
            this.muteToggle();
        });
    }
};

Sound.prototype.muteToggle = function(){
    if(!this.muted){
        for(let sound of this.sounds){
            sound.muted = true;
        }
        document.querySelector("#sound-speaker").innerHTML = `<img src="../lib/img/sound_off.svg">`;
        this.muted = true;
    }else{
      for(let sound of this.sounds){
          sound.muted = false;
      }
      document.querySelector("#sound-speaker").innerHTML = `<img src="../lib/img/sound_on.svg">`;
      this.muted = false;
    }
};

Sound.prototype.pause = function(){
    for(let sound of this.sounds){
        sound.pause();
    }
}

Sound.prototype.play = function(){
    for(let sound of this.sounds){
        sound.play();
    }
}

let sound = new Sound(document.querySelector("#control-container")),
    backgroundSound =  sound.create("../lib/sound/minetetrisTheme.mp3", "background_sound", true),
    colisionSound = sound.create("../lib/sound/colision.mp3", "colision_sound"),
    spinningSound = sound.create("../lib/sound/spinning.mp3", "spinning_sound"),
    clearLinesSound = sound.create("../lib/sound/clearLines.mp3", "clear_sound"),
    finishSound = sound.create("../lib/sound/finishSound.mp3", "finish_sound");
sound.muteToggle();
sound.soundSetting();