$(document).ready(function() {
    // drawLines();
    var playing = false,
        artistname = $(".artist-name"),
        musicName = $(".music-name"),
        time = $(".time"),
        fillBar = $(".fillBar");

    let audioData = [];

    var song = new Audio();
    var CurrentSong = 0;
    window.onload = load();

    function load() {
        audioData = [{
                name: "Eternal Loop",
                artist: "Saber Tiger",
                src: "assets/Eternal-loop-saber-tiger.mp3"
            },
            {
                name: "DIE4U",
                artist: "BMTH",
                src: "assets/DIE4U.mp3?raw=true"
            },
            {
                name: "Hard times",
                artist: "Paramore",
                src: "assets/hard-times.mp3?raw=true"
            },
        ];

        artistname.html(audioData[CurrentSong].artist);
        musicName.html(audioData[CurrentSong].name);
        song.src = audioData[CurrentSong].src;
    }

    function playSong() {
        var curSong = audioData[CurrentSong];
        artistname.html(curSong.artist);
        musicName.html(curSong.name);
        song.src = curSong.src;
        console.log(curSong.name);
        song.play();
        $("#play").addClass("fa-pause");
        $("#play").removeClass("fa-play");
        $("img").addClass("active");
        $(".player-track").addClass("active");
    }

    song.addEventListener("timeupdate", function() {
        var position = (100 / song.duration) * song.currentTime;
        var current = song.currentTime;
        var duration = song.duration;
        var durationMinute = Math.floor(duration / 60);
        var durationSecond = Math.floor(duration - durationMinute * 60);
        var durationLabel = durationMinute + ":" + durationSecond;
        currentSecond = Math.floor(current);
        currentMinute = Math.floor(currentSecond / 60);
        currentSecond = currentSecond - currentMinute * 60;
        // currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
        if (currentSecond < 10) {
            currentSecond = "0" + currentSecond;
        }
        var currentLabel = currentMinute + ":" + currentSecond;

        var indicatorLabel = currentLabel + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + durationLabel;
        fillBar.css("width", position + "%");

        $(".time").html(indicatorLabel);
    });
    //////
    $("#play").click(function playOrPause() {
        if (song.paused) {
            song.play();
            playing = true;
            $("#play").addClass("fa-pause");
            $("#play").removeClass("fa-play");
            $("img").addClass("active");
            /* $("#bar1").addClass("br1");*/
            // document.getElementById("bcx").style.opacity = "1";
            // document.getElementById("bcx2").style.opacity = "1";
            document.getElementById("bcx3").style.opacity = "1";
            document.getElementById("bcx4").style.opacity = "1";
            document.getElementById("bcx5").style.opacity = "1";
            document.getElementById("bcx6").style.opacity = "1";
            document.getElementById("bcx7").style.opacity = "1";
            document.getElementById("bcx8").style.opacity = "1";
            document.getElementById("bcx9").style.opacity = "1";
            document.getElementById("bcx10").style.opacity = "1";
            document.getElementById("bcx11").style.opacity = "1";
            document.getElementById("bcx12").style.opacity = "1";
            document.getElementById("bcx13").style.opacity = "1";
            document.getElementById("bcx14").style.opacity = "1";
            document.getElementById("bcx15").style.opacity = "1";
            document.getElementById("bcx16").style.opacity = "1";
            document.getElementById("bcx17").style.opacity = "1";
            document.getElementById("bcx18").style.opacity = "1";
            document.getElementById("bcx19").style.opacity = "1";
            document.getElementById("bcx20").style.opacity = "1";
            document.getElementById("bcx20-1").style.opacity = "1";
            document.getElementById("bcx21").style.opacity = "1";
            document.getElementById("bcx22").style.opacity = "1";
            document.getElementById("bcx23").style.opacity = "1";
            document.getElementById("bcx24").style.opacity = "1";
            document.getElementById("bcx25").style.opacity = "1";
            document.getElementById("bcx26").style.opacity = "1";
            document.getElementById("bcx27").style.opacity = "1";
            document.getElementById("bcx28").style.opacity = "1";
            document.getElementById("bcx29").style.opacity = "1";
            document.getElementById("bcx30").style.opacity = "1";
            document.getElementById("bcx31").style.opacity = "1";
            document.getElementById("bcx32").style.opacity = "1";
            document.getElementById("bcx33").style.opacity = "1";
            document.getElementById("bcx34").style.opacity = "1";
            document.getElementById("bcx35").style.opacity = "1";
            document.getElementById("bcx36").style.opacity = "1";
            document.getElementById("bcx37").style.opacity = "1";
            document.getElementById("bcx38").style.opacity = "1";
            document.getElementById("bcx39").style.opacity = "1";
            // document.getElementById("bcx40").style.opacity = "1";
            // document.getElementById("bcx40-1").style.opacity = "1";





            // document.getElementById("bcx").style.animation = "sound 474ms linear infinite alternate";
            // document.getElementById("bcx2").style.animation = "sound 433ms linear infinite alternate";
            document.getElementById("bcx3").style.animation = "sound 407ms linear infinite alternate";
            document.getElementById("bcx4").style.animation = "sound 457ms linear infinite alternate";
            document.getElementById("bcx5").style.animation = "sound 400ms linear infinite alternate";
            document.getElementById("bcx6").style.animation = "sound 427ms linear infinite alternate";
            document.getElementById("bcx7").style.animation = "sound 441ms linear infinite alternate";
            document.getElementById("bcx8").style.animation = "sound 419ms linear infinite alternate";
            document.getElementById("bcx9").style.animation = "sound 487ms linear infinite alternate";
            document.getElementById("bcx10").style.animation = "sound 442ms linear infinite alternate";
            document.getElementById("bcx11").style.animation = "sound 474ms linear infinite alternate";
            document.getElementById("bcx12").style.animation = "sound 433ms linear infinite alternate";
            document.getElementById("bcx13").style.animation = "sound 407ms linear infinite alternate";
            document.getElementById("bcx14").style.animation = "sound 457ms linear infinite alternate";
            document.getElementById("bcx15").style.animation = "sound 400ms linear infinite alternate";
            document.getElementById("bcx16").style.animation = "sound 427ms linear infinite alternate";
            document.getElementById("bcx17").style.animation = "sound 441ms linear infinite alternate";
            document.getElementById("bcx18").style.animation = "sound 419ms linear infinite alternate";
            document.getElementById("bcx19").style.animation = "sound 487ms linear infinite alternate";
            document.getElementById("bcx20").style.animation = "sound 442ms linear infinite alternate";
            document.getElementById("bcx20-1").style.animation = "sound 400ms linear infinite alternate";
            document.getElementById("bcx21").style.animation = "sound 474ms linear infinite alternate";
            document.getElementById("bcx22").style.animation = "sound 433ms linear infinite alternate";
            document.getElementById("bcx23").style.animation = "sound 407ms linear infinite alternate";
            document.getElementById("bcx24").style.animation = "sound 457ms linear infinite alternate";
            document.getElementById("bcx25").style.animation = "sound 400ms linear infinite alternate";
            document.getElementById("bcx26").style.animation = "sound 427ms linear infinite alternate";
            document.getElementById("bcx27").style.animation = "sound 441ms linear infinite alternate";
            document.getElementById("bcx28").style.animation = "sound 419ms linear infinite alternate";
            document.getElementById("bcx29").style.animation = "sound 487ms linear infinite alternate";
            document.getElementById("bcx30").style.animation = "sound 442ms linear infinite alternate";
            document.getElementById("bcx31").style.animation = "sound 474ms linear infinite alternate";
            document.getElementById("bcx32").style.animation = "sound 433ms linear infinite alternate";
            document.getElementById("bcx33").style.animation = "sound 407ms linear infinite alternate";
            document.getElementById("bcx34").style.animation = "sound 457ms linear infinite alternate";
            document.getElementById("bcx35").style.animation = "sound 400ms linear infinite alternate";
            document.getElementById("bcx36").style.animation = "sound 427ms linear infinite alternate";
            document.getElementById("bcx37").style.animation = "sound 441ms linear infinite alternate";
            document.getElementById("bcx38").style.animation = "sound 419ms linear infinite alternate";
            document.getElementById("bcx39").style.animation = "sound 487ms linear infinite alternate";
            // document.getElementById("bcx40").style.animation = "sound 442ms linear infinite alternate";
            // document.getElementById("bcx40-1").style.animation = "sound 400ms linear infinite alternate";
        } else {
            song.pause();
            playing = false;
            $("#play").removeClass("fa-pause");
            $("#play").addClass("fa-play");
            $("img").removeClass("active");


            document.getElementById("bcx").style.animation = "to0 .5s 1";
            document.getElementById("bcx").style.animationFillMode = "forwards";
            document.getElementById("bcx2").style.animation = "to0 .5s 1";
            document.getElementById("bcx2").style.animationFillMode = "forwards";
            document.getElementById("bcx3").style.animation = "to0 .5s 1";
            document.getElementById("bcx3").style.animationFillMode = "forwards";
            document.getElementById("bcx4").style.animation = "to0 .5s 1";
            document.getElementById("bcx4").style.animationFillMode = "forwards";
            document.getElementById("bcx5").style.animation = "to0 .5s 1";
            document.getElementById("bcx5").style.animationFillMode = "forwards";
            document.getElementById("bcx6").style.animation = "to0 .5s 1";
            document.getElementById("bcx6").style.animationFillMode = "forwards";
            document.getElementById("bcx7").style.animation = "to0 .5s 1";
            document.getElementById("bcx7").style.animationFillMode = "forwards";
            document.getElementById("bcx8").style.animation = "to0 .5s 1";
            document.getElementById("bcx8").style.animationFillMode = "forwards";
            document.getElementById("bcx9").style.animation = "to0 .5s 1";
            document.getElementById("bcx9").style.animationFillMode = "forwards";
            document.getElementById("bcx10").style.animation = "to0 .5s 1";
            document.getElementById("bcx10").style.animationFillMode = "forwards";
            document.getElementById("bcx11").style.animation = "to0 .5s 1";
            document.getElementById("bcx11").style.animationFillMode = "forwards";
            document.getElementById("bcx12").style.animation = "to0 .5s 1";
            document.getElementById("bcx12").style.animationFillMode = "forwards";
            document.getElementById("bcx13").style.animation = "to0 .5s 1";
            document.getElementById("bcx13").style.animationFillMode = "forwards";
            document.getElementById("bcx14").style.animation = "to0 .5s 1";
            document.getElementById("bcx14").style.animationFillMode = "forwards";
            document.getElementById("bcx15").style.animation = "to0 .5s 1";
            document.getElementById("bcx15").style.animationFillMode = "forwards";
            document.getElementById("bcx16").style.animation = "to0 .5s 1";
            document.getElementById("bcx16").style.animationFillMode = "forwards";
            document.getElementById("bcx17").style.animation = "to0 .5s 1";
            document.getElementById("bcx17").style.animationFillMode = "forwards";
            document.getElementById("bcx18").style.animation = "to0 .5s 1";
            document.getElementById("bcx18").style.animationFillMode = "forwards";
            document.getElementById("bcx19").style.animation = "to0 .5s 1";
            document.getElementById("bcx19").style.animationFillMode = "forwards";
            document.getElementById("bcx20").style.animation = "to0 .5s 1";
            document.getElementById("bcx20").style.animationFillMode = "forwards";
            document.getElementById("bcx20-1").style.animation = "to0 .5s 1";
            document.getElementById("bcx20-1").style.animationFillMode = "forwards";
            document.getElementById("bcx21").style.animation = "to0 .5s 1";
            document.getElementById("bcx21").style.animationFillMode = "forwards";
            document.getElementById("bcx22").style.animation = "to0 .5s 1";
            document.getElementById("bcx22").style.animationFillMode = "forwards";
            document.getElementById("bcx23").style.animation = "to0 .5s 1";
            document.getElementById("bcx23").style.animationFillMode = "forwards";
            document.getElementById("bcx24").style.animation = "to0 .5s 1";
            document.getElementById("bcx24").style.animationFillMode = "forwards";
            document.getElementById("bcx25").style.animation = "to0 .5s 1";
            document.getElementById("bcx25").style.animationFillMode = "forwards";
            document.getElementById("bcx26").style.animation = "to0 .5s 1";
            document.getElementById("bcx26").style.animationFillMode = "forwards";
            document.getElementById("bcx27").style.animation = "to0 .5s 1";
            document.getElementById("bcx27").style.animationFillMode = "forwards";
            document.getElementById("bcx28").style.animation = "to0 .5s 1";
            document.getElementById("bcx28").style.animationFillMode = "forwards";
            document.getElementById("bcx29").style.animation = "to0 .5s 1";
            document.getElementById("bcx29").style.animationFillMode = "forwards";
            document.getElementById("bcx30").style.animation = "to0 .5s 1";
            document.getElementById("bcx30").style.animationFillMode = "forwards";
            document.getElementById("bcx31").style.animation = "to0 .5s 1";
            document.getElementById("bcx31").style.animationFillMode = "forwards";
            document.getElementById("bcx32").style.animation = "to0 .5s 1";
            document.getElementById("bcx32").style.animationFillMode = "forwards";
            document.getElementById("bcx33").style.animation = "to0 .5s 1";
            document.getElementById("bcx33").style.animationFillMode = "forwards";
            document.getElementById("bcx34").style.animation = "to0 .5s 1";
            document.getElementById("bcx34").style.animationFillMode = "forwards";
            document.getElementById("bcx35").style.animation = "to0 .5s 1";
            document.getElementById("bcx35").style.animationFillMode = "forwards";
            document.getElementById("bcx36").style.animation = "to0 .5s 1";
            document.getElementById("bcx36").style.animationFillMode = "forwards";
            document.getElementById("bcx37").style.animation = "to0 .5s 1";
            document.getElementById("bcx37").style.animationFillMode = "forwards";
            document.getElementById("bcx38").style.animation = "to0 .5s 1";
            document.getElementById("bcx38").style.animationFillMode = "forwards";
            document.getElementById("bcx39").style.animation = "to0 .5s 1";
            document.getElementById("bcx39").style.animationFillMode = "forwards";
            // document.getElementById("bcx40").style.animation = "to0 .5s 1";
            // document.getElementById("bcx40").style.animationFillMode = "forwards";
            // document.getElementById("bcx40-1").style.animation = "to0 .5s 1";
            // document.getElementById("bcx40-1").style.animationFillMode = "forwards";
            //$("#bar1").removeClass("br1");
            //document.getElementById("bar1").style.height = "0";
        }
    });

    $("#prev").click(function prev() {
        CurrentSong--;
        if (CurrentSong < 0) {
            CurrentSong = 2;
        }
        playSong();
    });

    $("#next").click(function next() {
        CurrentSong++;
        if (CurrentSong > 2) {
            CurrentSong = 0;
        }
        playSong();
    });



    function getHeight() {
        return window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
    }

    function drawLines() {
        const lines = document.getElementsByClassName('line');
        if (lines.length) {
            for (let i = 0; i < lines.length; i++) {
                document.body.removeChild(lines[i]);
            }
        }

        for (i = 0; i < getHeight() / 10; i++) {
            const line = document.createElement("div");
            line.className = `line line-${i}`;
            line.style.top = `${i * 10}px`;
            const time = Math.random() * 5;
            line.style.animation = `lines ${time}s infinite`;
            document.body.appendChild(line);
        }
    }

    window.onresize = function(event) {
        drawLines();
    };
});