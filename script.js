

let comprehension = {
    on: false,
    total: 0,
    book: 0,
    person: 0,
    comp: {
        ss: 0,
        nonss: 0,
    }
};

let vocabulary = {
    on: false,
    total: 0,
    book: 0,
    person: 0,
    comp: {
        ss: 0,
        nonss: 0,
    }
};

let fluency = {
    on: false,
    total: 0,
    book: 0,
    person: 0,
    comp: {
        ss: 0,
        nonss: 0,
    }
};

let backgroundknowledge = {
    on: false,
    total: 0,
    book: 0,
    person: 0,
    comp: {
        ss: 0,
        nonss: 0,
    }
};

let enjoyment = {
    on: false,
    total: 0,
    book: 0,
    person: 0,
    comp: {
        ss: 0,
        nonss: 0,
    }
};

let user = {
    bookon: false,
    compon: false,
    personon: false,
    sson: false,
};

// "reads" the inputs & turns strings into integers
function listen () {
    lexile = document.getElementById("lexileinput").value;
    pp30m = document.getElementById("pp30minput").value;
    time = document.getElementById("timeinput").value;
    lexile = parseInt(lexile);
    pp30m = parseInt(pp30m);
    time = parseInt(time);
    teachername = document.getElementById("teachernameinput").value;
}

// comprehension button
comprehensionbutton = document.getElementById("comprehensionbutton")
comprehensionbutton.addEventListener ("click", function() {
    if (comprehension.on == false) {
        comprehension.on = true
    }
    else {
        comprehension.on = false
    }
    console.log("comprehension " + comprehension.on)
  });

// vocabulary button
vocabularybutton = document.getElementById("vocabularybutton")
vocabularybutton.addEventListener ("click", function() {
    if (vocabulary.on == false) {
        vocabulary.on = true
    }
    else {
        vocabulary.on = false
    }
    console.log("vocabulary " + vocabulary.on)
  });

// fluency button
fluencybutton = document.getElementById("fluencybutton")
fluencybutton.addEventListener ("click", function() {
    if (fluency.on == false) {
        fluency.on = true
    }
    else {
        fluency.on = false
    }
    console.log("fluency " + fluency.on)
  });

// backgroundknowledge button
backgroundknowledgebutton = document.getElementById("backgroundknowledgebutton")
backgroundknowledgebutton.addEventListener ("click", function() {
    if (backgroundknowledge.on == false) {
        backgroundknowledge.on = true
    }
    else {
        backgroundknowledge.on = false
    }
    console.log("background k. " + backgroundknowledge.on)
  });

// enjoyment button
enjoymentbutton = document.getElementById("enjoymentbutton")
enjoymentbutton.addEventListener ("click", function() {
    if (enjoyment.on == false) {
        enjoyment.on = true
    }
    else {
        enjoyment.on = false
    }
    console.log("enjoyment " + enjoyment.on)
  });

// bookon button
bookbutton = document.getElementById("bookbutton")
bookbutton.addEventListener ("click", function() {
    if (user.bookon == false) {
        user.bookon = true
    }
    else {
        user.bookon = false
    }
    console.log("bookon " + user.bookon)
  });

// compon button
computerbutton = document.getElementById("computerbutton")
computerbutton.addEventListener ("click", function() {
    if (user.compon == false) {
        user.compon = true
    }
    else {
        user.compon = false
    }
    console.log("compon " + user.compon)
  });

// personon button
personbutton = document.getElementById("personbutton")
personbutton.addEventListener ("click", function() {
    if (user.personon == false) {
        user.personon = true
    }
    else {
        user.personon = false
    }
    console.log("personon " + user.personon)
  });

// ss button
ssbutton = document.getElementById("ssbutton")
ssbutton.addEventListener ("click", function() {
    if (user.sson == false) {
        user.sson = true
    }
    else {
        user.sson = false
    }
    console.log("sson " + user.sson)
  });

// turns time into number of events for every 40 minutes and rounds down
function timetototalevents () {
    let totaleventsunround = time / 40;
    totalevents = Math.floor(totaleventsunround);
    console.log(totalevents);
}

// adds one into the total of a muscle and reduces the total 'pool' if there is anything in the pool
function determinemusclessub (x) {
    if (x.on == true && totalevents > 0) {
        x.total++;
        totalevents--;
    };
};

// loops through each muscle distributing until out of total events
function determinemuscles () {
    while(totalevents > 0) {
        determinemusclessub (comprehension);
        determinemusclessub (vocabulary);
        determinemusclessub (fluency);
        determinemusclessub (backgroundknowledge);
        determinemusclessub (enjoyment);
        console.log(totalevents);
    };
};

// distributes total for each muscle into exercises type counter for each muscle; not broken up to allow for ss and non ss
function muscledistribution (muscle) {
    while(muscle.total > 0) {
        if (user.bookon == true && muscle.total > 0) {
            muscle.book++;
            muscle.total--;
        };
        if (user.compon == true && muscle.total > 0) {
            if (user.sson == true) {
                muscle.comp.ss++
            }
            else {
                muscle.comp.nonss++
            }
            muscle.total--;
        };
        if (user.personon == true && muscle.total > 0) {
            muscle.person++;
            muscle.total--;
        };
    };
    console.log(muscle)
}

// repeats action above for each muscle
function distribute () {
    muscledistribution (comprehension)
    muscledistribution (vocabulary)
    muscledistribution (fluency)
    muscledistribution (backgroundknowledge)
    muscledistribution (enjoyment)
}

// takes on/off input and time available and determines how many exercises of each type should be done
function compute () {
    timetototalevents ();
    determinemuscles ();
    distribute ();
}

// figures out lexile range from number and converts into string
function calclexilerange () {
    lexilebottom = lexile - 100;
    lexiletop = lexile + 50;
    lexilerange = `${lexilebottom} - ${lexiletop}`;
}

// for each exercise, "write" the instructions and say how many times it needs to be completed, other variables, and reset counter for each exercise
function write () {
    //exercise printouts
    if (comprehension.book > 0) {
        cb1.textContent = `Do the following ${comprehension.book} time(s): read a book with a lexile score between ${lexilerange} for ${pp30m} pages, a short story, or an article and complete four annotations in a double-entry journal or sticky notes.`;
        comprehension.book = 0;
    }
        else {
            cb1.textContent = ''
        };
    if (comprehension.comp.ss > 0) {
        ccs1.textContent = `Do the following ${comprehension.comp.ss} time(s): complete a StudySync item online labeled "Comprehension Option." On Canvas, list the name of the item and when you completed it.`;
        comprehension.comp.ss = 0;
    }
        else {
            ccs1.textContent = ''
        };
    if (comprehension.comp.nonss > 0) {
        ccn1.textContent = ``;
        comprehension.comp.nonss = 0;
    }
        else {
            ccn1.textContent = ''
        };
    if (comprehension.person > 0) {
        cp1.textContent = `Do the following ${comprehension.person} time(s): read a book with a lexile score between ${lexilerange} for ${pp30m} pages, a short story, or an article and have a discussion with ${teachername} over what you read. Submit this by listing that "${teachername} & I discussed..."`;
        comprehension.person = 0;
    }
        else {
            cp1.textContent = ''
        };
    if (vocabulary.book > 0) {
        vb1.textContent = `Do the following ${vocabulary.book} time(s): read a book with a lexile score between ${lexilerange} for ${pp30m} pages, a short story, or an article. As you go, write down each word you don't know. For each, write the definition, a synonym, and draw a picture.`;
        vocabulary.book = 0;
    }
        else {
            vb1.textContent = ''
        };
    if (vocabulary.comp.ss > 0) {
        vcs1.textContent = `Do the following ${vocabulary.comp.ss} time(s): complete a StudySync item online labeled "Vocab Option." Submit this by listing the name of the item and when you completed it.`;
        vocabulary.comp.ss = 0;
    }
        else {
            vcs1.textContent = ''
        };
    if (vocabulary.comp.nonss > 0) {
        vcn1.textContent = ``;
        vocabulary.comp.nonss = 0;
    }
        else {
            vcn1.textContent = ''
        };
    if (vocabulary.person > 0) {
        vp1.textContent = `Do the following ${vocabulary.person} time(s): Find a vocab board game in Licht's room. Play the game with at least one other classmate for 30 min. Submit this by listing when you played it & with whom.`;
        vocabulary.person = 0;
    }
        else {
            vp1.textContent = ''
        };
    if (fluency.book > 0) {
        fb1.textContent = `Do the following ${fluency.book} time(s): read a book with a lexile score between ${lexilerange} for ${pp30m} pages, a short story, or an article. As you read, follow along with a see-through bookmark. After, write a summary of what you read.`;
        fluency.book = 0;
    }
        else {
            fb1.textContent = ''
        };
    if (fluency.comp.ss > 0) {
        fcs1.textContent = ``;
        fluency.comp.ss = 0;
    }
        else {
            fcs1.textContent = ''
        };
    if (fluency.comp.nonss > 0) {
        fcn1.textContent = `Do the following ${fluency.comp.nonss} time(s): find an article or short story online and copy it into the SwiftRead program. Read it at 200, 250, or 300 wpm. Write a summary of what you remember from it.`;
        fluency.comp.nonss = 0;
    }
        else {
            fcn1.textContent = ''
        };
    if (fluency.person > 0) {
        fp1.textContent = `Do the following ${fluency.person} time(s): With someone else, take turns reading a play or book for ${pp30m/2} pages, an article, or short story out loud. Submit this by listing when & with whom.`;
        fluency.person = 0;
    }
        else {
            fp1.textContent = ''
        };
    if (backgroundknowledge.book > 0) {
        bb1.textContent = `Do the following ${backgroundknowledge.book} time(s): read a book with a lexile score between ${lexilerange} for ${pp30m} pages, a short story, or an article. Before or after reading, research a topic related to the text or the author. Write a paragraph about how it relates to what you read.`;
        backgroundknowledge.book = 0;
    }
        else {
            bb1.textContent = ''
        };
    if (backgroundknowledge.comp.ss > 0) {
        bcs1.textContent = `Do the following ${backgroundknowledge.comp.ss} time(s): complete a StudySync item online labeled "Background Knowledge Option." Submit this by listing the name of the item and when you completed it.`;
        backgroundknowledge.comp.ss = 0;
    }
        else {
            bcs1.textContent = ''
        };
    if (backgroundknowledge.comp.nonss > 0) {
        bcn1.textContent = ``;
        backgroundknowledge.comp.nonss = 0;
    }
        else {
            bcn1.textContent = ''
        };
    if (backgroundknowledge.person > 0) {
        bp1.textContent = `Do the following ${backgroundknowledge.person} time(s): read a with book a lexile score between ${lexilerange} for ${pp30m} pages, a short story, or an article. Talk to other students about what you read. Together, come up with at least three connections (text, world, or self) to what you read.`;
        backgroundknowledge.person = 0;
    }
        else {
            bp1.textContent = ''
        };
    if (enjoyment.book > 0) {
        eb1.textContent = `Do the following ${enjoyment.book} time(s): read a book with a lexile score between ${lexilerange} for ${pp30m} pages, a short story, or an article. Pick out one thing that you liked or found interesting in it & write a paragraph explaining why.`;
        enjoyment.book = 0;
    }
        else {
            eb1.textContent = ''
        };
    if (enjoyment.comp.ss > 0) {
        ecs1.textContent = ``;
        enjoyment.comp.ss = 0;
    }
        else {
            ecs1.textContent = ''
        };
    if (enjoyment.comp.nonss > 0) {
        ecn1.textContent = `Do the following ${enjoyment.comp.nonss} time(s): use Goodreads, Likewise, Libby, or Novellist (public library) to find at least three books you would be interested in reading. Write a paragraph on what interests you.`;
        enjoyment.comp.nonss = 0;
    }
        else {
            ecn1.textContent = ''
        };
    if (enjoyment.person > 0) {
        ep1.textContent = `Do the following ${enjoyment.person} time(s): ask someone for a book recommendation. Summarize what the book is about, how they found it, and whether or not you think you would like it.`;
        enjoyment.person = 0;
    }
        else {
            ep1.textContent = ''
        };
    // studysync notification
    if (user.sson == true && user.compon == true) {
        sswarning.textContent = 'IMPORTANT: In order to complete items through StudySync, speak with your teacher. Your teacher may require you to submit the assignment in a way different than these instructions. Teachers will need to set up the exercises and label them. StudySync texts can be set up to focus on Comprehension. Blasts can be set up for Background Knowledge exercises by including research links. Academic Vocabulary skill lessons can work for Vocabulary exercises.'
    }
    else {
        sswarning.textContent = ''
    };
}

//click to run after data in entered
runbutton = document.getElementById("runbutton")
runbutton.onclick = function run () {
    listen ();
    if (comprehension.on == false && vocabulary.on == false && fluency.on == false && backgroundknowledge.on == false && enjoyment.on == false) {
        console.log("no muscle")
    }
    else if (user.bookon == false && user.compon == false && user.personon == false) {
        console.log("no learning style")
    }
    else {
        compute ();
        calclexilerange ();
        write ();
    };
    // print ();
}

// printbutton = document.getElementById("printbutton")
// printbutton.onlick = function print () {
//     print ();
// }
