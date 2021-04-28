let year1 = [false, "year1"];
let year2 = [false, "year2"];
let black = [false, "black"];
let white = [false, "white"];
let tan = [false, "tan"];
let artist = [false, "artist"];
let jock = [false, "jock"];
let skater = [false, "skater"];
var categories = [year1, year2, black, white, tan, artist, jock, skater];

function filter() {
    /* summary:
    Goes through each hamster and decides whether or not to hide it based off of which categories
    are marked (true).
    */
    let hamsters = document.getElementsByClassName("hamster");
    /* hide all hamsters initially */
    for (let i = 0; i < hamsters.length; i++) {
        hamsters[i].classList.add("hidden");
    }
   /* create list of true (pink) categories */
    var trueCategories = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i][0]) {
            trueCategories.push(categories[i][1]);
        }
    }
    /* make visible the hamsters marked true */
    for (let i = 0; i < hamsters.length; i++) {
        for (let j = 0; j < trueCategories.length; j++) {
            if (hamsters[i].classList.contains(trueCategories[j])) {
                hamsters[i].classList.remove("hidden");
            }
        }
    }
    /* Shows all hamsters if there are none filtered */

    if (trueCategories.length == 0) {
        for (let i = 0; i < hamsters.length; i++) {
            hamsters[i].classList.remove("hidden");
        }
    }
}

/*
checkmarked makes clicks items pink (or undoes pink) 
*/
function checkmarked(buttonID) {
    let check = document.getElementById(buttonID);
    check.classList.toggle("pink");
}

document.getElementById("year1").onclick = function () {
    checkmarked("year1");
    /* if we made year1 pink, then we set year1 true, else we set false
    Then, we filter pics
    */
    year1[0] = !year1[0];
    filter();
}

document.getElementById("year2").onclick = function () {
    checkmarked("year2");
    year2[0] = !year2[0];
    filter();
}

document.getElementById("black").onclick = function () {
    checkmarked("black");
    black[0] = !black[0];
    filter();
}

document.getElementById("white").onclick = function () {
    checkmarked("white");
    white[0] = !white[0];
    filter();
}

document.getElementById("tan").onclick = function () {
    checkmarked("tan");
    tan[0] = !tan[0];
    filter();
}

document.getElementById("skater").onclick = function () {
    checkmarked("skater");
    skater[0] = !skater[0];
    filter();
}

document.getElementById("jock").onclick = function () {
    checkmarked("jock");
    jock[0] = !jock[0];
    filter();
}

document.getElementById("artist").onclick = function () {
    checkmarked("artist");
    artist[0] = !artist[0];
    filter();
}


/*
This next section is how we can tap on / zoom in & out of pictures, like Instagram.
*/

function zoom(hamsterNameId) {
    /*
    zoom in on pictures (unhides pictures)
    */
   document.getElementById('full-overlay').classList.remove('hidden');
   let hamster = document.getElementById(hamsterNameId);
   hamster.classList.remove('hidden');
}

document.getElementById("tyler").onclick = function () {
    zoom("full-tyler");
}

document.getElementById("chance").onclick = function () {
    zoom("full-chance");
}

document.getElementById("donald").onclick = function () {
    zoom("full-donald");
}

document.getElementById("earl").onclick = function () {
    zoom("full-earl");
}

document.getElementById("ellen").onclick = function () {
    zoom("full-ellen");
}

document.getElementById("frank").onclick = function () {
    zoom("full-frank");
}

document.getElementById("joe").onclick = function () {
    zoom("full-joe");
}

document.getElementById("brian").onclick = function () {
    zoom("full-brian");
}

function zoomout(hamsternameId) {
    let hamster = document.getElementById(hamsternameId);
    document.getElementById('full-overlay').classList.add('hidden');
    hamster.classList.add('hidden');
}

function zoomoutAll() {
	let hiddens = document.getElementsByClassName('full');

	for (let i = 0; i < hiddens.length; i++) {
		let name = hiddens[i].id;
		zoomout(name);
	}
}

document.getElementById("full-overlay").onclick = zoomoutAll;