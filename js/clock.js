const clock = document.querySelector('#clock');


    function getClock (){
      const date = new Date(),
            hours = String(date.getHours()).padStart(2,"0"),
            minutes = String(date.getMinutes()).padStart(2,"0"),
            seconds = String(date.getSeconds()).padStart(2,"0");

            clock.innerHTML = `<span>${hours}</span><i>:</i><span>${minutes}</span><i>:</i><span>${seconds}</span>`
    }
    getClock()
    setInterval(getClock,1000)
