/* var letters = document.querySelector('div .letters');
letters.innerHTML = letters.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
    .add({
        targets: 'div .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
    }) */

var letters = document.querySelector('.letters');
letters.innerHTML = letters.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.letters .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
    delay: (el, i) => 70*i
    }).add({
        targets: '.letters',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


const countdown = () => {
    const countDate = new Date('January 1, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    console.log(gap)

    //How the fuck does time work?
    const second = 1000;//1s=1000mls
    const minute = second * 60;//60000
    const hour = minute * 60;//3600000
    const day = hour * 24;//86400000

    //Calculate the shit 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
};

setInterval(countdown, 1000);


