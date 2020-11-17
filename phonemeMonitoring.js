var shuffleSequence = seq("setcounter","consent","demo", startsWith("phoneme-"), "debrief", "exit");

var defaults = [
    "Message", {
        hideProgressBar: true
    },
    "AY_Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Form", {
        hideProgressBar: true,
    },
];

var items = [
      
    ["setcounter", "__SetCounter__", { }],
    ["welcome", "Form", {hideProgressBar: true, countsForProgressBar: false,  continueOnReturn: true, consentRequired: true, continueMessage:null, html: {include: "welcome.html"}} ],
    ["exit", "Form", {consentRequired: false, continueMessage:"Click here to submit your answers!", html: {include: "SONA_exit.html"}} ],
    ["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, consentRequired: true, html: {include: "MTurk_SONA_consent_2020.html"}} ],
    ["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, continueOnReturn: false, consentRequired: true, continueMessage:"Click here to get your study code!", html: {include: "MTurk_SONA_debrief.html"}} ],
    ["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "demographics.html"}} ],
    ["ready", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "ready_screen.html"}} ],

    
    // Play the beginning of the story to practice
    
    [["phoneme-beeps", 1], "Form", {hideProgressBar: true, countsForProgressBar: false,  continueOnReturn: true, consentRequired: true, continueMessage: null, html: {include: "welcome_beeps.html"}}, 
                           "AY_Form", {html: { include: "cocoPhonemeIntro_beeps.html" }}, 
                           "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "ready_screen_beeps.html"}},   
                           "AY_Form", {html: { include: "cocoPhonemeTest_beeps.html" }}],
    
    [["phoneme-pSound", 1],"Form", {hideProgressBar: true, countsForProgressBar: false,  continueOnReturn: true, consentRequired: true, continueMessage: null, html: {include: "welcome.html"}}, 
                           "AY_Form", {html: { include: "cocoPhonemeIntro.html" }}, 
                           "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "ready_screen.html"}},   
                           "AY_Form", {html: { include: "cocoPhonemeTest.html" }}],
    
];
