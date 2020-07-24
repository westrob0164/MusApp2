

//the Index wraper
$("<div>")
    .addClass('indexWraper') 
    .attr('id', "stuff")
    .appendTo(".content");

$("<div>")
    .addClass('rhythmImage')    
    .prepend('<img class="indexRhythm imgRhythm" src="images/rhythm.png"/>')
    .appendTo(".indexWraper");
   
$("<div>")
    .addClass('pitchImage')    
    .prepend('<img class="indexRhythm imgPitch" src="images/pitch.png"/>')
    .appendTo(".indexWraper");
   


$('.imgRhythm').on('click', function(){secondLevelIndex('rhythmPage')});

$('.imgPitch').on('click', function(){secondLevelIndex('pitchPage')});


function secondLevelIndex(type) {

    $('.indexWraper').hide();
    backHomeImages();

    $("<div>")
      .addClass(type) 
    //   .prepend(secondLevel(type))
      .appendTo(".content");   

    secondLevel(type);
}

// function to display the back and home images
function backHomeImages() {
    $('.topLeftCell').html('<img class="imgHome" src="images/home.png"/>');
    $('.bottomLeftCell').html('<img class="imgBack" src="images/back.png"/>');
    
    //link to home page
    $('.imgHome').on('click', function(){homepage()});

    //link to the previous page
}

function homepage() {
    $('.indexWraper').show();
    $('.topLeftCell').hide();
    $('.bottomLeftCell').hide();
}


//function to display the rhythm Page
function secondLevel(type) {

    $('.topLeftCell').show();
    $('.bottomLeftCell').show();
    
    console.log(type);

    if (type === 'rhythmPage') {

        $("<div>")
            .addClass('wrapQuarterNote')    
            .prepend('<img class="imgRhythmButtons imgRhythmQuarterNote" src="images/rhythm_quarter_note.png"/>')
            .appendTo(".rhythmPage");

        $("<div>")
            .addClass('wrapHalfNote')    
            .prepend('<img class="imgRhythmButtons imgRhythmHalfNote" src="images/rhythm_half_note.png"/>')
            .appendTo(".rhythmPage");

        $("<div>")
            .addClass('wrapDotQuarterNote')    
            .prepend('<img class="imgRhythmButtons imgRhythmDottedQuarterNote" src="images/rhythm_dotted_quarter_note.png"/>')
            .appendTo(".rhythmPage");

        $("<div>")
            .addClass('wrapDotHalfNote')    
            .prepend('<img class="imgRhythmButtons imgRhythmDottedHalfNote" src="images/rhythm_dotted_half_note.png"/>')
            .appendTo(".rhythmPage");

        $("<div>")
            .addClass('wrapSimple')    
            .prepend('<img class="imgRhythmTitles imgRhythmSimple" src="images/rhythm_simple.png"/>')
            .appendTo(".rhythmPage");
        
        $("<div>")
            .addClass('wrapCompound')    
            .prepend('<img class="imgRhythmTitles imgRhythmCompound" src="images/rhythm_compound.png"/>')
            .appendTo(".rhythmPage");
        
    } else {
        
    }
}

// $("<div>")
//     .addClass('floatingDisplay') 
//     .prepend('<h2 class = "textInstrument">How can we sing a melody without an instrument?</h2>')
//     .appendTo(".contentWraper");

// $("<div>")
//     .addClass('prev') 
//     .prepend('<p class = "linksTrans">previous</p>')
//     .appendTo(".floatingDisplay");

// $("<div>")
//     .addClass('skip') 
//     .prepend('<p class = "linksTrans">skip</p>')
//     .appendTo(".floatingDisplay");

// $("<div>")
//     .addClass('next') 
//     .prepend('<p class = "linksTrans" id="nextTag">next</p>')
//     .appendTo(".floatingDisplay");