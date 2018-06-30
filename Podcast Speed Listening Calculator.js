// If you have ever listened to an audiobook or podcast, you may have had the option to change the play speed of the audio. This allows you to increase or decrease the speed that you listen to your content.

// I want you to calculate the time it takes to listen to the audio when the play speed is varied. The time should be rounded down to whole seconds.

// The inputs will be:

// audioLength /* a string of the total time of the audio, "hh:mm:ss" */

// playSpeed /* a float between 0.5 and 3.0, only to 1 decimal point */
// Examples:

// // The results of calculations on the time units are expected to be truncated/floored

// speedListen("00:00:55", 2) => "00:00:27" // NOT "00:00:28"

// speedListen("01:20:00", 1.5) => "00:53:20"

// My first answer

function speedListen(audioLength, playSpeed) {

    const audioLengthArray = audioLength.split(':')  ;

    const audioLengthArrayNumbers = audioLengthArray.map(number => parseInt(number, 10));

    const totalSecondsOriginal = (audioLengthArrayNumbers[0] * 3600) + (audioLengthArrayNumbers[1] * 60) + (audioLengthArrayNumbers[2]);
    
    const newAudioLengthSeconds = Math.floor(totalSecondsOriginal / playSpeed);

    let finalHours;

    const hours = Math.floor(newAudioLengthSeconds / 3600);
    if (hours < 10) {
        finalHours = `0${hours}`
    }
    else {
        finalHours = hours;
    }

    let finalMinutes;

    const minutes = Math.floor((newAudioLengthSeconds - (hours * 3600)) / 60);
    if (minutes < 10) {
        finalMinutes = `0${minutes}`;
    }
    else {
        finalMinutes = minutes;
    }

    let finalSeconds;

    const seconds = Math.floor(newAudioLengthSeconds - (hours * 3600) - (minutes * 60));
    if (seconds < 10) {
        finalSeconds = `0${seconds}`;
    }
    else {
        finalSeconds = seconds;
    }

    const newAudioLength = `${finalHours}:${finalMinutes}:${finalSeconds}`;
    
    return newAudioLength;
  }

  console.log(speedListen("01:02:55", 2));

  // answer should be "00:31:27"


  //Best answer on site
  function speedListen2(audioLength, playSpeed) {
    var t=audioLength.split(':').reduce((s,t)=>+t+s*60,0)/playSpeed;
    return [t/3600|0,(t/60|0)%60,t%60|0].map(c=>c.toString().padStart(2,'0')).join(':');
  }
