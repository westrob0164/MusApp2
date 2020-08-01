import { wkTitles, 
         wkSubTitles, 
         pitchSelections, 
         btnsQuarterNotes, 
         btnsHalfNotes
      } from '../../data/workingTitles.js';

export function workingPageOutline(pageID, type) {
  
   if (type === 'rhythmPage') {
      $('.rhythmPage').hide();
   } else {
      $('.pitchPage').hide();
   }

   //set up wire frame for the working area
   //working wraper
   $("<div>")
      .addClass('workingWrapper')  
      .appendTo(".content");

   //working area title
   $("<div>")
      .addClass('wkTitle')    
      .prepend(`<h1 class="wkTitleString">${wkTitles[pageID]}</h1>`)
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkSelectTitle workDiv')    
      .prepend(`<h2 class = "strSelectTitle">${wkSubTitles.setPractice}</h2>`)
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkPlayTitle workDiv')    
      .prepend(`<h2 class = "strSelectTitle">${wkSubTitles[type]}</h2>`)
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass(`wkSelect workDiv ${type}Wraper`)    
      .prepend(setupMusic(pageID, type))
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkPlay workDiv')    
      .prepend(playMusicBox(pageID, type))
      .appendTo(".workingWrapper");

}

function setupMusic(pageID, type) {

   if (type ==='pitchPage') {
      var keyGrid = '<div class="keysTitle">select key</div><div class="selectionContainer">';
      
     pitchSelections.forEach(element => {
         keyGrid += `<div class = "keyButton ${element.type}" id="btn${element.id}"> ${element.title} </div>`;
     });
     keyGrid += `</div>`
     return keyGrid;
   } else {

      var rhythmGrid = `<div class="rhythmCellsTitle">select rhythmCells</div>
                        ${rhythmButtons(pageID)}`;

      rhythmGrid += `<div class="setTimeSignature">set time signature <button class = "btnSetTimeSignature">@</button> <button class = "btnSetTimeSignature">#</button> <button class = "btnSetTimeSignature">$</button>
                     </div>
                    <div class="setMeasureNumber">set number of measures <button class = "btnSetMeasure">4</button><button class = "btnSetMeasure">8</button><button class = "btnSetMeasure">16</button></div>`;
      return rhythmGrid;
   }


   
}

function playMusicBox(pageID, type) {

   return `<div class = "musicBoxButtons">
               <button class= "playbutton ${type === 'pitchPage' ? 'tonic' : 'tonicHidden' }">tonic</button>
               <button class= "playbutton ${type === 'pitchPage' ? 'play' : 'play2' }">play</button>
               <button class= "playbutton ${type === 'pitchPage' ? 'stop' : 'stop2' }">stop</button>
               <button class= "playbutton update">update</button>
           </div>
           <div class = "musicScore">
           ${musicScoreCreate(pageID, type)}
           </div>
           <div class = "musicControls">
               <div class = "musicbuffer"></div>
               <div class = "tempoTitle">tempo</div>
               <div class = "tempoSlider"><input id="input" type="range" min="0" value="4" max="7" step="1" class="myslider2"></div>
               <div class = "volumeTitle">volume</div>
               <div class = "volumeSlider"><input id="input" type="range" min="0" value="4" max="7" step="1" class="myslider2"></div>
               <div class = "solfegeButton">${type === 'pitchPage' ? '<button class= "playbutton solfege">solfege</button>' : '' }</div>
               <div class = "instrumentList">${type === 'pitchPage' ? '<button class= "playbutton instrument">Instrument</button>' : '' }</div>
           </div>
   `;
}

function rhythmButtons(pageID) {

   var btnRhythm = `<div class="rhythmSelectionContainer">`;

   switch (pageID) {
      case 'quarterNote':
         btnsQuarterNotes.forEach(element => {
            btnRhythm += `<div class = "btnRhy id="btn${element.id}"> ${element.title} </div>`;
         });         
      break;
      case 'halfNote':
         btnsHalfNotes.forEach(element => {
            btnRhythm += `<div class = "btnRhy id="btn${element.id}"> ${element.title} </div>`;
         });         
      break;
   
      default:
         break;
   }
   

  btnRhythm += `</div>`;
  return btnRhythm
}


function musicScoreCreate(pageID, type) {

   if (type ==='pitchPage') {
      console.log("stuff");
      return `<p class = "musicScore2">'&=y=!=x=y=!=w=x=y=!=v=w=x=y=!=z=y=!={=z=y=!=|={=z=y.</p>`;
   } else{
     
      
   }

}