import { wkTitles, wkSubTitles } from '../../data/workingTitles.js';

export function workingPageOutline(pageID, type) {

   console.log(wkSubTitles);
   
   //set up wire frame for the working area
   if (type === 'rhythmPage') {
      $('.rhythmPage').hide();
   } else {
      $('.pitchPage').hide();
   }

   //working wraper
   $("<div>")
      .addClass('workingWrapper')    
      //.prepend('<img class="imgRhythmButtons imgRhythmQuarterNote" src="images/rhythm_quarter_note.png"/>')
      .appendTo(".content");

   //working area title
   $("<div>")
      .addClass('wkTitle')    
      .prepend(`<h1 class="wkTitleString">${wkTitles[pageID]}</h1>`)
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkSelectTitle workDiv')    
      .prepend(`<p class = strSelectTitle>${wkSubTitles.setPractice}</p>`)
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkPlayTitle workDiv')    
      //.prepend('<img class="imgRhythmButtons imgRhythmQuarterNote" src="images/rhythm_quarter_note.png"/>')
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkSelect workDiv')    
      //.prepend('<img class="imgRhythmButtons imgRhythmQuarterNote" src="images/rhythm_quarter_note.png"/>')
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkPlay workDiv')    
      //.prepend('<img class="imgRhythmButtons imgRhythmQuarterNote" src="images/rhythm_quarter_note.png"/>')
      .appendTo(".workingWrapper");


   console.log("this is what is passed", wkTitles[pageID], type);
}