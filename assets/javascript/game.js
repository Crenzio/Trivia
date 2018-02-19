$(document).ready(function () {

    // picks a question (from a list of 25)
    var switchboard = Math.floor(Math.random() * 25);

    // Tracks how many questions the user has answered (quiz ends after 5 questions)
    var answered = 0;
    var qa = 1;

    // Tracks how many questions the user has answered correctly 
    var correct = 0;
    // Converts "# correct" value into a "% correct" value
    var calc = correct / 10;
    var percent = calc * 100;

    // Tracks which questions the user has already answered (prevents duplicate questions)
    var log = [];
    // upon restarting the game, if log.length = quiz.length then log.length = 0 

    // Stores questions
    var quiz = [
        // books
        "In the book 'Pride and Prejudice' (by Jane Austin), what adjective does Darcy first use to Describe Elizabeth?",
        "In the book 'Alice and Wonderland' (by Lewis Caroll), Alice takes the Dutchess' baby outside, only to dsicover that it's a...",
        "In the book 'Dracula' (by Brian Stoker), which of the following is NOT one of Dracula's powers?",
        "In the book 'Animal Farm' (by George Orwell), the pigs' final procolomation states that 'All Animals are Equal but...",
        "Which of these famous movie monsters was adapted from a book written by a female author?",
        "Which of these famous sci-fi movie villains was adapted from a book written by a male author?",
        // poems
        "In the poem 'The Raven' (by Edgar Allan Poe), the raven perches upon the bust of the god(dess) of...",
        "In the poem 'The Jabberwocky' (by Lewis Caroll), the hero is warned to shun what creature?",
        "In the poem 'Rime of the Ancient Mariner' (by Samuel Taylor Coolridge), who is the mariner telling his story to?",
        "In the poem 'Kubla Kahn' (by Samuel Taylor Coolridge), Kubla Kahn's Pleasure Dome with many natural wonders. Including...",
        "Which poem is also the title of a movie about its author?",
        "Which poem inspired the name of an elementary particle?",
        // graphic novels
        "In the graphic novel series 'Locke and Key' (by Joe Hill), Lucas wins a fencing competition using what objects?",
        "In the graphic novel series 'Scott Pilgrim' (by Brian Lee O'Maley), what is the name of Ramona's cat?",
        "In the graphic novel 'Watchmen' (by Allan Moore), the phrase 'who watches the watchmen?' is a reference to...",
        // film
        "In the film 'The Martian,' Mark Watney (Matt Damon) vows to make Mars fear his...",
        "In the film 'Young Frankenstein,' after shaking the Monster's hand, Inspector Kemp (Kenneth Mars) suggests everyone go to his house for...",
        "In the film 'Mad Max: Fury Road,' Nux (Nicholas Hoult) has 2 growths on his neck. What are their names?",
        "In the film 'The Shape of Water,' Elisa (Sally Hawkins) signs a series of letters to Colonel Strickland. What is the 3rd letter?",
        "In the film 'The Disaster Artist,' what book do Tommy and Greg act out at a diner?",
        // TV
        "In the TV series 'Dilbert,' Jerry Seinfeld provides the voice of what character?",
        "In the TV series 'Avatar: the Last Airbender,' what is the name of the creature that steals faces?",
        "In the TV series 'Seinfeld,' Jerry claims that a comedian dating a woman who never laughts is like...",
        "In the TV series 'Archer,' what are the names of the two hitmen who attackm Archer and Ramon, on behalf of Cuba?",
        "In the TV series 'Futurama,' what 'Twilight Zone' episode is NOT referenced in a 'Scary Door' episode?"
    ];

    // Stores explanations (listed in order to matchquestions; explanation for quiz.1 is answer.1)
    var answer = [
        // books        
        "Darcy says that Elizabeth is 'TOLERABLE, but not handsome enough to tempt me.'",
        "Alice discovers that the baby is a pig after taking it outside.",
        "Dracula did not have the power to animate corpses.",
        "'All Animals are Equal, but Some Animals are More Equal Than Others.'",
        "The book 'Frankenstein' was originally written by Marry Shelley.",
        "The book '2001: A Space Odyssey,' which intorduced the HAL-9000, was written by Arthur C. Clarke.",
        // poems
        "The raven purches upon a bust of Pallas Athena, the Greek/Roman goddess of wisdom, handicraft, and war.",
        "The hero is warned to 'shun the frumious Bandersnatch.'",
        "The mariner is telling his story to a wedding guest.",
        "'It was a miracle of rare device / a sunny Pleasure Dome with caves of ice.'",
        "'Bright Star' is the title of a poem by John Keats, and the title of a movie about John Keats.",
        "'Quark' is a nonsense word in 'Finnegans Wake,' and the name of an elementary particle in real life.",
        // graphic novels
        "Lucas is able to gain instant, absolute knowledge of fencing by opening his head with the Head Key and dropping a Fencing Instructional Handbook into his mind.",
        "Strangely, Ramona named her cat after her worst ex-boyfriend: Gideon.",
        "The phrase is a translation of the Latin 'quis custodiet ipsos custodes?', made famous by the ancient 'Satires' of Juvenal.'",
        // film
        "Mark confidently states that 'Mars will come to fear my botany powers.'",
        "After acknowledging the monster's humanity, Kemp invites everyone to his place 'for a little sponge cake und a little wine.'",
        "Nux affectionately refers to his two tumors as 'Larry & Berry.'",
        "Elisa repeatedly signs 'f*** you' to Strickland, one letter at a time. Letter #3 is 'C.'",
        "Tommy and Greg read aloud a section of Herman Melville's 'The Lightning-Rod Man.'",
        // TV
        "Seinfeld lends his voice to Comp-U-Comp, a sentient computer in charge of a shipping company.",
        "Koh is a creature in the spirit world who steals faces that a showing emotion.",
        "Jerry tells Elaine that 'it's like...well, it's like something.'",
        "Charles and Rudy are the hitman who Archer and Ramon run accross.",
        "'It's a Good Life' (arguably the most well-known 'Twilgiht Zone' episode) is not referneced by the 'Scary Door.'"
    ];

    // Stores correct answers (listed in order to match questions; correct answer for quiz.1 is key.1)
    var key = [
        // books
        "a",
        "c",
        "c",
        "a",
        "a",
        "b",
        // poems
        "c",
        "c",
        "b",
        "c",
        "d",
        "b",
        // graphic novels
        "d",
        "a",
        "d",
        // film
        "b",
        "b",
        "a",
        "d",
        "c",
        // TV
        "c",
        "d",
        "a",
        "a",
        "b",
    ];

    // A category choices; A for quiz.1 is A.1)
    var a = [
        // books
        "Tolerable",
        "Doll",
        "Teleportation",
        "...Some Animals are More Equal than Others.'",
        "Frankenstein",
        "Doc Brown",
        // poems
        "Death",
        "Jubjub Bird",
        "Navigator",
        "Fields of Amber",
        "'Eve of St. Agnes'",
        "'Ode to a Grecian Urn'",
        // graphic novels
        "The Music Key, a Music Box, and Earplugs",
        "Gideon",
        "'Essay Concerning Human Understanding' by John Locke",
        // film
        "Engineering Savvy",
        "Champagne and Cigars",
        "Larry & Berry",
        "L",
        "'Do Androids Dream of Electric Sheep?'",
        // TV
        "Bob Bastard",
        "Raava",
        "Something",
        "Charles & Rudy",
        "'Nightmare at 20,000 Feet'",
    ];

    // B category choices; B for quiz.1 is B.1)
    var b = [
        // books
        "Ravishing",
        "Tiny Adult",
        "Controlling the Weather",
        "...All Must Live in Service to Pigs.'",
        "Dracula",
        "HAL-9000",
        // poems
        "Saddness",
        "Jabberwock",
        "Wedding Guest",
        "Forests of Yew",
        "'Ode to Psyche'",
        "'Finnegans Wake'",
        // graphic novels
        "The Timeshift Key and a Stopwatch",
        "Lobo",
        "'Also sprach Zarathustra' by Friedrich Nietzsche",
        // film
        "Botany Powers",
        "Sponge Cake and Wine",
        "Jerry & Merry",
        "S",
        "'Moby Dick'",
        // TV
        "Catbert",
        "Wan Shi Tong",
        "Newman Dating a Dog",
        "La Madrina & Juliana",
        "'It's a Good Life'",
    ];

    // C category choices; C for quiz.1 is C.1)
    var c = [
        // books
        "Talkative",
        "Pig",
        "Animating Corpses",
        "...Equality Must be Earned.'",
        "Xenomorph Queen",
        "Xenomorph Queen",
        // poems
        "War",
        "Bandersnatch",
        "Fisherman",
        "Caves of Ice",
        "'Fall of Hyperion'",
        "'The Eolian Harp'",
        // graphic novels
        "The Hercules Key and Winged Boots",
        "Frank",
        "'Julias Ceaser' by William Shakespeare",
        // film
        "Cosmic Stubbornness",
        "Poker and Coffe",
        "Mella & Gnoma",
        "N",
        "'The Lightning-Rod Man'",
        // TV
        "Comp-U-Comp",
        "Tui",
        "A Chef Dating an Anorexic",
        "Manfred & Uta",
        "'The Man in the Bottle'",
    ];

    // D category choices; D for quiz.1 is D.1)
    var d = [
        // books
        "Aggrevating",
        "Jabberwock",
        "Shapeshifting",
        "...Must Still Serve the Greater Society.'",
        "Wolf-Man",
        "The Terminator",
        // poems
        "Night",
        "Tumtum Tree",
        "Writer",
        "Walls of Pure Sunlight",
        "'Bright Star'",
        "'The Phoenix and the Turtle'",
        // graphic novels
        "The Head Key and a Book",
        "Germaine",
        "'Satires of Juvenal' by Juvenal",
        // film
        "Astrophysics Mastery",
        "Beer and Skeet Shooting",
        "Harry & Sally",
        "C",
        "'The Sound and the Fury'",
        // TV
        "Toby",
        "Koh",
        "A Dentist Dating an Anti-Dentite",
        "Spelvin & Keiko",
        "'Time Enough to Last'",
    ];

    // grabs random question, ensures no repeats
    function tracker() {
        if ($.inArray(switchboard, log) > -1) {
            switchboard = Math.floor(Math.random() * 25);
            tracker();
        }
        else {
            log.push(switchboard);
        }
    };

    // resets stored questions (repeats are possible over the course of multiple games, but not during the same game)
    function reset() {
        log.length = 0;
    }
    ;

    // populates divs with relevant info, appends choice list, remoes 'start' button
    function question() {
        $("#question").html(
            quiz[switchboard]
        )
        $("#choice").html(
            ""
        )
        $("#timer").html(
            "10"
        )
    };

    // clears divs when user answers, makes divs inactive
    function progress() {
        $("#question").html(answer[switchboard]);
        $("#1, #2, #3, #4, #1a, #2b, #3c, #4d").html("");
        $("#a, #b, #c, #d").removeClass("option");
    };

    // ten second timer (for questions)
    function timer1() {
        var timer = 10;
        setInterval(function () {
            timer--;
            if (timer >= 0) {
                span = document.getElementById("timer");
                span.innerHTML = timer;
            }
            if (timer === 0) {
                clearInterval(timer);
                $("#banner").addClass("blue").removeClass("red", "green");
                $("#banner").html("Time Up!");
                answered++;
                span = document.getElementById("timer");
                span.innerHTML = "5";
                progress();
                timer2();
            }
        }, 1000);

    };

    // 5 second timer (for answers)
    function timer2() {
        var timer2 = 5;
        setInterval(function () {
            timer2--;
            if (timer2 >= 0) {
                span = document.getElementById("timer");
                span.innerHTML = timer2;
            }
            if (timer2 === 0) {
                qa++;
                tracker();
                options();
                question();
                timer1();
                $("#banner").addClass("blue").removeClass("red", "green");
                $("#banner").html("Question #" + qa);
            }
        }, 1000);

    };

    // populate answer divs, add class to make devs active and visible
    // initially, I tried created divs from scratch with jquery, but the clicks would only accept the 'choice' div that contained the created divs
    // also tried appending the created divs to the 'choice' div, but the problem persisted
    // I don't want to alarm you, but this is clearly the work of vengeful spirits...and my friend Sam
    function options() {
        $("#1a").html(a[switchboard])
        $("#2b").html(b[switchboard])
        $("#3c").html(c[switchboard])
        $("#4d").html(d[switchboard])
        $("#1").html("A: ")
        $("#2").html("B: ")
        $("#3").html("C: ")
        $("#4").html("D: ")
        $("#a, #b, #c, #d").addClass("option");
    }

    // begins game when 'start' button is clicked
    $("#start").click(function () {
        options();
        tracker();
        question();
        timer1();
        $("#banner").addClass("blue").removeClass("red", "green");
        $("#banner").html("Question #" + qa);
    });

    // progresses game when anything with the "option" class is clicked (question is correct if clicked value = key[switchboard])
    // I tried going by class instead, but the game wouldn't behave
    // it was all like 'WWWAAAAAHHH! I CAN'T DO THAT BECAUSE I'M A CLASSLESS HARLOT! WWWAAAAAHHH!' 
    // true story...no, I'm serious, that's what the console error actually said. prove otherwise 
    $("#a, #b, #c, #d").click(function () {
        progress();
        if ($(this).attr('value') == key[switchboard]) {
            answered++;
            qa++;
            correct++;
            $("#banner").addClass("green").removeClass("red", "blue");
            $("#banner").html("Correct!");
            clearInterval(timer);
            timer2();
        }
        else {
            answered++;
            qa++;
            $("#banner").addClass("red").removeClass("green", "blue");
            $("#banner").html("Incorrect!");
            clearInterval(timer);
            timer2();
        }
    });

});