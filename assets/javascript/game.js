$(document).ready(function () {

    // on.click enable/disable switch
    var click = 0;

    // timer variables
    var stopwatch;
    var stopwatch2;

    // Tracks how many questions the user has answered (quiz ends after 5 questions)
    var answered = 0;
    var qa = 1;

    // Tracks how many questions the user has answered correctly 
    var correct = 0;
    // Converts "# correct" value into a "% correct" value
    var calc = 0;

    // Tracks which questions the user has already answered (prevents duplicate questions)
    var log = [];
    // upon restarting the game, if log.length = quiz.length then log.length = 0 

    // Stores questions
    var quiz = [
        // books
        "In the book <strong>Pride and Prejudice</strong> (by Jane Austin), what adjective does Darcy first use to describe Elizabeth?",
        "In the book <strong>Alice and Wonderland</strong> (by Lewis Carroll), Alice takes the Duchess' baby outside, only to discover that it's a...",
        "In the book <strong>Dracula</strong> (by Brian Stoker), which of the following is <strong>not</strong> one of Dracula's powers?",
        "In the book <strong>Animal Farm</strong> (by George Orwell), the pigs' final proclamation states that &quot;All Animals are Equal but...",
        "Which of these famous movie monsters was adapted from a book written by a female author?",
        "Which of these famous sci-fi movie villains was adapted from a book written by a male author?",
        // poems
        "In the poem <strong>The Raven</strong> (by Edgar Allan Poe), the raven perches upon the bust of the god(dess) of...",
        "In the poem <strong>The Jabberwocky</strong> (by Lewis Carroll), the hero is warned to shun what creature?",
        "In the poem <strong>Rime of the Ancient Mariner</strong> (by Samuel Taylor Coleridge), to whom is the mariner telling his story?",
        "In the poem <strong>Kubla Kahn</strong> (by Samuel Taylor Coleridge), Kubla Kahn's Pleasure Dome contains many wonders. Including...",
        "Which poem is also the title of a movie about its author?",
        "Which poem inspired the name of an elementary particle?",
        // graphic novels
        "In the graphic novel series <strong>Locke and Key</strong> (by Joe Hill), Lucas wins a fencing competition using what objects?",
        "In the graphic novel series <strong>Scott Pilgrim</strong> (by Brian Lee O’Malley), what is the name of Ramona's cat?",
        "In the graphic novel <strong>Watchmen</strong> (by Allan Moore), the phrase &quot;who watches the watchmen?&quot; is a reference to...",
        // film
        "In the film <strong>The Martian</strong>, Mark Watney (Matt Damon) vows to make Mars fear his...",
        "In the film <strong>Young Frankenstein</strong>, after shaking the Monster's hand, Inspector Kemp (Kenneth Mars) suggests everyone go to his house for...",
        "In the film <strong>Mad Max: Fury Road</strong>, Nux (Nicholas Hoult) has 2 growths on his neck. What are their names?",
        "In the film <strong>The Shape of Water</strong>, Elisa (Sally Hawkins) repeatedly signs a series of letters to Colonel Strickland. What is the 3rd letter?",
        "In the film <strong>The Disaster Artist</strong>, what book do Tommy and Greg act out at a diner?",
        // TV
        "In the TV series <strong>Dilbert</strong>, Jerry Seinfeld provides the voice of what character?",
        "In the TV series <strong>Avatar: The Last Airbender</strong>, what is the name of the creature that steals faces?",
        "In the TV series <strong>Seinfeld</strong>, Jerry claims that a comedian dating a woman who never laughs is like...",
        "In the TV series <strong>Archer</strong>, what are the names of the two hitmen who attack Archer and Ramon, on behalf of Cuba?",
        "In the TV series <strong>Futurama</strong>, what <strong>Twilight Zone</strong> episode is <strong>not</strong> referenced in a <strong>Scary Door</strong> episode?"
    ];

    // Stores explanations (listed to match questions; explanation for quiz.1 is answer.1)
    var answer = [
        // books        
        "Darcy says that Elizabeth is &quot;<strong>tolerable</strong>, but not handsome enough to tempt me.&quot;",
        "Alice takes the baby outside, only to realize it has become a <strong>pig</strong>.",
        "Dracula did <strong>not</strong> have the power to <strong>raise zombies</strong>.",
        "&quot;All Animals are Equal, <strong>but Some Animals are More Equal Than Others</strong>.&quot;",
        "The book <strong>Frankenstein</strong> was originally written by Marry Shelley.",
        "The book <strong>2001: A Space Odyssey</strong>, which introduced <strong>the HAL-9000</strong>, was written by Arthur C. Clarke.",
        // poems
        "The raven perches upon a bust of Pallas Athena, the Greek/Roman goddess of wisdom, handicraft, and <strong>war</strong>.",
        "The hero is warned to &quot;shun the frumious <strong>Bandersnatch</strong>.&quot;",
        "The mariner is telling his story to <strong>a wedding guest</strong>.",
        "&quot;It was a miracle of rare device / a sunny Pleasure Dome with <strong>caves of ice</strong>.&quot;",
        "<strong>Bright Star</strong> is the title of a poem by John Keats, and the title of a movie about John Keats.",
        "<strong>&quot;Quark&quot;</strong> is a nonsense word in <strong>Finnegan’s Wake</strong>, and the name of an elementary particle in real life.",
        // graphic novels
        "To master fencing, simply open your head with the <strong>Head Key</strong> and drop a <strong>Fencing Handbook</strong> into your brian.",        
        "Strangely, Ramona named her cat after her worst ex-boyfriend: <strong>Gideon</strong>.",
        "The phrase is a translation of the Latin &quot;quis custodiet ipsos custodes?&quot; The phrase was made famous by the ancient <strong>Satires of Juvenal.</strong>",
        // film
        "&quot;Mars will come to fear my <strong>botany powers</strong>.&quot;",
        "After acknowledging the monster's humanity, Kemp invites everyone to his place &quot;for a little <strong>sponge cake</strong> und a little <strong>wine</strong>.&quot;",
        "Nux affectionately refers to his two tumors as <strong>&quot;Larry & Berry.&quot;</strong>",
        "Elisa repeatedly signs <strong>&quot;F*** you&quot;</strong> to Strickland, one letter at a time. Making letter #3 <strong>&quot;C.&quot;</strong>",
        "Tommy and Greg read aloud a section of Herman Melville's <strong>The Lightning-Rod Man</strong>.",
        // TV
        "Jerry Seinfeld lends his voice to <strong>Comp-U-Comp</strong>, a sentient computer in charge of a shipping company.",
        "Never show emotion to <strong>Koh</strong>. If you do, he'll steal your face.",
        "&quot;It's like...well, it's like <strong>something</strong>.&quot;",
        "<strong>Charles and Rudy</strong> are the hitmen who Archer and Ramon run across.",
        "<strong>It's a Good Life</strong> (arguably the most well-known <strong>Twilight Zone</strong> episode) is not referenced by the <strong>Scary Door.</strong>"
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
        "...Some Animals are More Equal than Others.&quot;",
        "Frankenstein's Monster",
        "Doc Brown",
        // poems
        "Death",
        "Jubjub Bird",
        "A Navigator",
        "Fields of Amber",
        "<strong>Eve of St. Agnes</strong>",
        "<strong>Ode to a Grecian Urn</strong>",
        // graphic novels
        "The Music Key, a Music Box, and Earplugs",
        "Gideon",
        "<strong>Essay Concerning Human Understanding</strong> by John Locke",
        // film
        "Engineering Savvy",
        "Champagne and Cigars",
        "Larry & Berry",
        "L",
        "<strong>Do Androids Dream of Electric Sheep?</strong>",
        // TV
        "Bob Bastard",
        "Raava",
        "Something",
        "Charles & Rudy",
        "<strong>Nightmare at 20,000 Feet</strong>",
    ];

    // B category choices; B for quiz.1 is B.1)
    var b = [
        // books
        "Ravishing",
        "Tiny Adult",
        "Controlling the Weather",
        "...All Must Live in Service to Pigs.&quot;",
        "Dracula",
        "HAL-9000",
        // poems
        "Sadness",
        "Jabberwock",
        "A Wedding Guest",
        "Forests of Yew",
        "<strong>Ode to Psyche</strong>",
        "<strong>Finnegan’s Wake</strong>",
        // graphic novels
        "The Timeshift Key and a Stopwatch",
        "Lobo",
        "<strong>Also sprach Zarathustra</strong> by Friedrich Nietzsche",
        // film
        "Botany Powers",
        "Sponge Cake and Wine",
        "Jerry & Merry",
        "S",
        "<strong>Moby Dick</strong>",
        // TV
        "Catbert",
        "Wan Shi Tong",
        "Newman Dating a Dog",
        "La Madrina & Juliana",
        "<strong>It's a Good Life</strong>",
    ];

    // C category choices; C for quiz.1 is C.1)
    var c = [
        // books
        "Talkative",
        "Pig",
        "Animating Zombies",
        "...Equality Must be Earned.&quot;",
        "Xenomorph Queen",
        "Xenomorph Queen",
        // poems
        "War",
        "Bandersnatch",
        "A Fisherman",
        "Caves of Ice",
        "<strong>Fall of Hyperion</strong>",
        "<strong>The Eolian Harp</strong>",
        // graphic novels
        "The Hercules Key and Winged Boots",
        "Frank",
        "<strong>Julius Ceaser</strong> by William Shakespeare",
        // film
        "Cosmic Stubbornness",
        "Poker and Coffee",
        "Mella & Gnoma",
        "N",
        "<strong>The Lightning-Rod Man</strong>",
        // TV
        "Comp-U-Comp",
        "Tui",
        "A Chef Dating an Anorexic",
        "Manfred & Uta",
        "<strong>The Man in the Bottle</strong>",
    ];

    // D category choices; D for quiz.1 is D.1)
    var d = [
        // books
        "Aggravating",
        "Jabberwock",
        "Shapeshifting",
        "...Must Still Serve the Greater Society.&quot;",
        "Wolf-Man",
        "The Terminator",
        // poems
        "Night",
        "Tumtum Tree",
        "A Writer",
        "Walls of Pure Sunlight",
        "<strong>Bright Star</strong>",
        "<strong>The Phoenix and the Turtle</strong>",
        // graphic novels
        "The Head Key and a Book",
        "Germaine",
        "<strong>Satires of Juvenal</strong> by Juvenal",
        // film
        "Astrophysics Mastery",
        "Beer and Skeet Shooting",
        "Harry & Sally",
        "C",
        "<strong>The Sound and the Fury</strong>",
        // TV
        "Toby",
        "Koh",
        "A Dentist Dating an Anti-Dentite",
        "Spelvin & Keiko",
        "<strong>Time Enough to Last</strong>",
    ];

    // picks a question (from the list in the quiz variable)
    var switchboard = Math.floor(Math.random() * quiz.length);

    // grabs random question, ensures no repeats
    function tracker() {
        if ($.inArray(switchboard, log) > -1) {
            switchboard = Math.floor(Math.random() * quiz.length);
            tracker();
        }
        else {
            log.push(switchboard);
        }
    };

    // resets stored questions (repeats are possible over the course of multiple games, but not during the same game)
    // NOTE: for this to work, quiz.length must always be divisible by 5 (without decimals) 
    function reset() {
        log = [];
    };

    // populates divs with relevant info, appends choice list, removes 'start' button
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
        $("#flavor").html("Time Remaining:");
        stopwatch = setInterval(function () {
            timer--;
            if (timer >= 0) {
                span = document.getElementById("timer");
                span.innerHTML = timer;
            }
            if (timer === 0) {
                click = 1;
                clearInterval(stopwatch);
                $("#banner").addClass("blue").removeClass("red").removeClass("green");
                $("#banner").html("Time Up!");
                span = document.getElementById("timer");
                span.innerHTML = "5";
                progress();
                timer2();
            }
        }, 1000);
    };

    // minor change to the flavor text after the user answers question #5
    function flavorize() {
        if (qa === 5) {
            $("#flavor").html("We'll Have Your Results In...");
        }
        else {
            $("#flavor").html("Next Question In...");
        }
    };

    // 5 second timer (for answers)
    function timer2() {
        flavorize ();
        var timer2 = 10;
        stopwatch2 = setInterval(function () {
            timer2--;
            if (timer2 >= 0) {
                span = document.getElementById("timer");
                span.innerHTML = timer2;
            }
            if (timer2 === 0) {
                click = 0;
                clearInterval(stopwatch2);
                answered++;
                qa++;

                if (answered === 5) {
                    end();
                }
                else {
                    tracker();
                    options();
                    question();
                    timer1();
                    $("#banner").addClass("blue").removeClass("red").removeClass("green");
                    $("#banner").html("Question #" + qa);
                }
            }
        }, 1000);

    };

    function end() {
        calc = correct * 20;
        $("#banner").addClass("blue").removeClass("red").removeClass("green");
        $("#banner").html("Quiz Complete!")
        $("#flavor").html("");
        $("#timer").html("");
        $("#question").html("");
        $("#choice2").html("You've completed the quiz! You got <strong>" + calc + "%</strong> of the questions correct!"
            + "<br /> <br /> Click the button below to play again!"
            + "<br /> <br /> <button type='button' id='reset'>Play Again!</button>");
    }

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
        $("#banner").addClass("blue").removeClass("red").removeClass("green");
        $("#banner").html("Question #" + qa);
    });

    // resets stored questions 
    function rewind() {
        if (log.length === quiz.length) {
            log.length = 0;
        };
    }

    // starts a new game
    $("#choice2").click(function () {

        if (click === 1) {
            null;
        }

        else {

            if (answered === 5) {
                $("#choice2").html(" ");
                correct = 0;
                answered = 0;
                qa = 1;
                rewind();
                tracker();
                options();
                question();
                timer1();
                $("#banner").addClass("blue").removeClass("red").removeClass("green");
                $("#banner").html("Question #" + qa);
            }
        }

    });

    // progresses game when anything with the "option" class is clicked (question is correct if clicked value = key[switchboard])
    // I tried going by class instead, but the game wouldn't behave
    // it was all like 'WWWAAAAAHHH! I CAN'T DO THAT BECAUSE I'M A CLASSLESS HARLOT! WWWAAAAAHHH!' 
    // true story...no, I'm serious, that's what the console error actually said. prove otherwise 
    $("#a, #b, #c, #d").click(function () {

        if (click === 1 || answered === 5) {
            null;
        }

        else {

            progress();
            if ($(this).attr('value') == key[switchboard]) {
                click = 1;
                correct++;
                calc = correct * 10;
                $("#banner").addClass("green").removeClass("red").removeClass("blue");
                $("#banner").html("Correct!");
                span = document.getElementById("timer");
                span.innerHTML = "10";
                clearInterval(stopwatch);
                timer2();
            }
            else {
                click = 1;
                $("#banner").addClass("red").removeClass("blue").removeClass("green");
                $("#banner").html("Incorrect!");
                span = document.getElementById("timer");
                span.innerHTML = "10";
                clearInterval(stopwatch);
                timer2();
            }
        }
    });

});