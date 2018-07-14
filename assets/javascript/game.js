$(document).ready(function () {

    // Ordinarily, I would use a SQL database here
    // SQL Table: 
    // Question | Answer / Explanation | Image Keyword | Correct Letter Answer | A Answer | B Answer | C Answer | D Answer |

    // However, since this is meant to be hosted on a static HTML page (which makes NODE JS and SQL Tables problematic), I opted for Arrays instead
    // An Object would have also worked (and, admittedly, been more readable). I opeted for multiple arrays, however, as those allow for easier editing

    // Jump to line XX to skip over the arrays and get to the good stuff

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
        "In the poem <strong>The Raven</strong> (by Edgar Allan Poe), the Raven perches upon the bust of the god(dess) of...",
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
        "In the TV series <strong>Futurama</strong>, what <strong>Twilight Zone</strong> episode is <strong>not</strong> referenced in a <strong>Scary Door</strong> episode?",
        // Film (2.0)
        // "Bruce Campbell has a cameo in each of Sam Raimi's <strong>Spiderman</strong> movies. What are his roles?",
        // "Who is the first character in the <strong>Terminator</strong> franchise to say &quot;Come with me if you want ot live&quot;?",
        // "Many kids are turned into donkeys during Disney's animated classic, <strong>Pinocchio</strong>. Who saves them?",
        // "What is the name of the car that Wayne (Mike Myers) and Garth (Dana Carvey) drive in the movie <strong>Wayne's World</strong>?",
        // "At the beginning of <strong>The Matrix</strong>, what convinces Neo (Keanu Reeves) to go clubbing with Choi (Marc Aden Gray)?",
        // "In the movie <strong>Blazing Saddles</strong>, Bart (Cleavon Little) is threatened by a gun-toting mob upon arriving in Rockridge. He escapes by...",
        // "During the final lightsaber duel in <strong>Empire Strikes Back</strong>, Luke (Mark Hamill) manages to land one lightsaber strike. He strikes Vader's...",
        // "Which song is <strong>not</strong> played/sung at the <strong>Enchantment Under the Sea</strong> dance, during the first <strong>Back to the Future</strong> movie?",
        // "Which <strong>Marvel</strong> movie does <strong>not</strong> have a Stan Lee cameo?",
        // "In <strong>It's a Wonderful Life</strong>, George is shown a reality where he was never born. In this reality, the town of <strong>Beford Falls</strong> is named...?",
    ];

    // Stores explanations (listed to match questions; explanation for quiz.1 is answer.1)
    var answer = [
        // books        
        "Darcy says that Elizabeth is &quot;<strong>tolerable</strong>, I suppose. but not handsome enough to tempt me.&quot;",
        "Alice takes the baby outside, only to realize it has become a <strong>pig</strong>.",
        "Dracula did <strong>not</strong> have the power to <strong>raise zombies</strong>.",
        "&quot;All Animals are Equal, <strong>but Some Animals are More Equal Than Others</strong>.&quot;",
        "The book <strong>Frankenstein</strong> was originally written by Marry Shelley.",
        "The book <strong>2001: A Space Odyssey</strong>, which introduced <strong>the HAL-9000</strong>, was written by Arthur C. Clarke.",
        // poems
        "The Raven perches upon a bust of <strong>Pallas Athena</strong>, the Greek/Roman goddess of wisdom, handicraft, strategy, and <strong>war</strong>.",
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
        "Nux affectionately refers to his two tumors as <strong>&quot;Larry & Barry.&quot;</strong>",
        "Elisa repeatedly signs <strong>&quot;F*** you&quot;</strong> to Strickland, one letter at a time. Making letter #3 <strong>&quot;C.&quot;</strong>",
        "Tommy and Greg read aloud a section of Herman Melville's <strong>The Lightning-Rod Man</strong>.",
        // TV
        "Jerry Seinfeld lends his voice to <strong>Comp-U-Comp</strong>, a sentient computer in charge of a shipping company.",
        "Never show emotion to <strong>Koh</strong>. If you do, he'll steal your face.",
        "&quot;It's like...well, it's like <strong>something</strong>.&quot;",
        "<strong>Charles and Rudy</strong> are the hitmen who Archer and Ramon run across.",
        "<strong>It's a Good Life</strong> (arguably the most well-known <strong>Twilight Zone</strong> episode) is not referenced by the <strong>Scary Door.</strong>",
        // Film (2.0)
        // "Bruce Campbell makes cameo appearances as a <strong>ring announcer</strong>, a snooty <strong> theater usher</strong>, and a <strong>French maître d’</strong>.",
        // "In the 1984 movie <strong>Terminator</strong>, <strong>Kyle Reese</strong> (Michael Biehn) first utters franchise's iconic tagline.",
        // "<strong>Pinocchio</strong> is one of the darker Disney aniated movies. Partially because <strong>we never see anyone save the transformed boys</strong>.",
        // "&quot;To the <strong>Mirth Mobile</strong>!&quot;",
        // "Neo spots a <strong>tattoo of a white rabbit</strong> on Dujour (Ada Nicodemou), one of the women with Choi.",
        // "Bart <strong>threatens to shoot himself</strong> if the mob trys to shoot him. This inexplicably convinces the mob not to shoot him.",
        // "Just before losing his hand, Luke earns a grunt of pain from Vader (David Prowse / James Earl Jones) by striking his <strong>neck/shoulder</strong>.",
        // "<strong>Power of Love</strong> plays duirng the first act of <strong>Back to the Future</strong>, but does not play during the <strong>Enchantment Under the Sea</strong> dance.",
        // "Stan Lee does <strong>not</strong> make an appearance during <strong>Days of Future Past</strong>.",
        // "With George retroactively out of the way, Mr. Potter reigns supreme. He has renamed the town <strong>Pottersville</strong>."
    ];

    // Stores correct answers (listed in order to match questions; correct answer for quiz.1 is key.1)
    var pic = [
        // books
        "lizzy",
        "pig",
        "zombie",
        "animal",
        "frankenstein",
        "hal",
        // poems
        "athena",
        "bandersnatch",
        "mariner",
        "ice",
        "star",
        "quark",
        // graphic novels
        "key",
        "gideon",
        "juvenal",
        // film
        "botany",
        "kemp",
        "nux",
        "elisa",
        "lightning",
        // TV
        "comp",
        "koh",
        "sandy",
        "cr",
        "kid",
        // film 2.0
        // "",
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
        // film 2.0
        // "b",
        // "c",
        // "b",
        // "a",
        // "a",
        // "b",
        // "c",
        // "a",
        // "d",
        // "d",
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
        // film 2.0
        // "A Cop, a Fireman, and a Newspaper Editor",
        // "The T-800",
        // "Jiminy",
        // "The Mirth Mobile",
        // "A Tattoo of a White Rabbit",
        // "Whistling for the Wako Kid",
        // "Leg",
        // "<strong>Power of Love</strong>",
        // "<strong>Iron Man 3</strong>",
        // "Haddonfield",
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
        // film 2.0
        // "A Wrestling Announcer, a Theater Usher, and a French Maître D’",
        // "John Connor",
        // "No One",
        // "The Party Wagon",
        // "A Flicker of Matrix Code",
        // "Threatening to Shoot Himself",
        // "Torso",
        // "<strong>Earth Angel</strong>",
        // "<strong>Dr. Strange</strong>",
        // "Basin City",
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
        // film 2.0
        // "A News Interviewee, a Banker, and a Cook",
        // "Kyle Reese",
        // "The Fox and the Cat",
        // "The Rhapsody",
        // "A Woman Resembling Trinity",
        // "Threatening to Shoot the Town's Only Bartender",
        // "Neck/Shoulder",
        // "<strong>The Wallflower (Dance With Me Henry)</strong>",
        // "<strong>Spiderman 3</strong>",
        // "New Bedford",
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
        // film 2.0
        // "A Hotel Clerk, a Pizza Shop Owner, and a Chef",
        // "Sarah Connor",
        // "Geppetto",
        // "The Roadster to Heaven",
        // "Choi Offers Him Mescaline",
        // "Throwing Dynamite",
        // "Hand",
        // "<strong>Johnny B. Goode</strong>",
        // "<strong>X-Men: Days of Future Past</strong>",
        // "Pottersville",
    ];

    // on.click enable/disable switch
    var click = 1;

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
    // upon restarting the game, if log.length = quiz.length then quiz = [] 


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
                $("#banner").html("Time's Up!");
                span = document.getElementById("timer");
                span.innerHTML = "10";
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
        flavorize();
        $("#skip").html("<br /> <button>Next Question!</button>");
        $("#pic").html("<br /><br /> <img src='assets/images/" + pic[switchboard] + ".png'>");

        if (qa === 5) {
            $("#skip").html("<br /> <button>Score Me Now!</button>");
        }
        var timer2 = 10;
        stopwatch2 = setInterval(function () {
            timer2--;
            if (timer2 > 0) {
                span = document.getElementById("timer");
                span.innerHTML = timer2;
            }
            if (timer2 === 0) {
                $("#skip").html("");
                $("#pic").html("");
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
            + "<br /> <br /> Click the button below to play again!");
        $("#next").html("<br /> <button>Play Again!</button>");
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
        click = 0;
        options();
        tracker();
        question();
        timer1();
        $("#banner").addClass("blue").removeClass("red").removeClass("green");
        $("#banner").html("Question #" + qa);
    });

    // resets stored questions (repeats are possible over the course of multiple games, but not during the same game)
    function rewind() {
        if (log.length === quiz.length) {
            log.length = [];
        };
    }

    // starts a new game
    $("#next").click(function () {

        if (click === 1) {
            null;
        }

        else {

            if (answered === 5) {
                $("#choice2").html(" ");
                $("#next").html(" ");
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

    $("#skip").click(function () {
        $("#skip").html("");
        $("#pic").html("");

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