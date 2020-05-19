const countdown = document.querySelector('.countdown');

//set the even date
const eventDate = new Date('June 12, 2020 14:00:00').getTime();

//update the time every 1s

const x = setInterval(() => {
  
  //get todays date
const now = new Date().getTime();

//get the distance between evenDate and now
const distance = eventDate - now;

//time calcualtion for days,hours, minut and seconds

const days = Math.floor(distance / (24 * 60 * 60 * 1000));
const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 100));
const minutes = Math.floor((distance % ( 60 * 60 * 1000)) / ( 60 * 100));
const seconds = Math.floor((distance % (60 * 1000 )) / 1000);

//output the text of the countdown

countdown.innerHTML = `

<div>${days}<span>Days</span></div>
<div>${hours}<span>hours</span></div>
<div>${minutes}<span>minutes</span></div>
<div>${seconds}<span>seconds</span></div>
`;

//out put some text @ the end of the count

if(distance < 0){
  clearInterval(x)
  document.getElementsByClassName('countdown').innerHTML = "CONGRATULATION"
}

}, 1000);

// END OF COUNTER


var typed = new Typed('.type', {
  strings: [
            'Hard', 
            'Fun',
            'a Journey',
            'Life'
            
          ],
         typeSpeed: 60,
         backSpeed: 60,
         loop: true,
});

