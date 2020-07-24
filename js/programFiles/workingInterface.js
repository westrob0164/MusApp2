

export function workingPageOutline(pageID, type) {

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
      //.prepend('<img class="imgRhythmButtons imgRhythmQuarterNote" src="images/rhythm_quarter_note.png"/>')
      .appendTo(".workingWrapper");

   $("<div>")
      .addClass('wkSelectTitle workDiv')    
      //.prepend('<img class="imgRhythmButtons imgRhythmQuarterNote" src="images/rhythm_quarter_note.png"/>')
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


   console.log("this is what is passed", pageID, type);
}