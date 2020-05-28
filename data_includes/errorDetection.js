var shuffleSequence = seq("consent","Practice_Block.html","welcome", 
                          startsWith("Trial_Block.html"), "debrief", "exit");

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
      
    ["welcome", "Form", {hideProgressBar: true, countsForProgressBar: false,  continueOnReturn: true, consentRequired: true, continueMessage:null, html: {include: "welcome.html"}} ],
    ["exit", "Form", {consentRequired: false, continueMessage:"Click here to submit your HIT!", html: {include: "exit.html"}} ],
    ["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, consentRequired: true, html: {include: "consent_2019.html"}} ],
    ["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, continueOnReturn: true, consentRequired: true, continueMessage:null, html: {include: "debrief_harvard.html"}} ],
    ["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "demographics.html"}} ],

    // Play the beginning of the story that has no errors (serves as an example of the audio without errors)
    ["Practice_Block", "AY_Form", {html: { include: "Practice_Block.html" }} ],

    // Play either List 1 or List 2 with the errors from the original syntactic category violation study
    [["Trial_Block", 1], "AY_Form", {html: { include: "Trial_Block.html" }} ]

];
