basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.B)) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
