// ==========================================
// 1. DATA STRUCTURE: ARRAY OF OBJECTS
// ==========================================
// In Python, this would be a "list of dictionaries":
// message_variations = [{"shift": 0, "cipher_text": "..."}, ...]
// In JavaScript:
// - `const` declares a variable that cannot be reassigned (like a constant).
// - `[]` denotes an Array (ordered collection, 0-indexed, like a Python list).
// - `{}` denotes an Object (key-value pairs, like a Python dictionary).
const messageVariations = [
    { "shift": 0, "cipher_text": "this message was not meant for you." },
    { "shift": 1, "cipher_text": "uijt nfttbhf xbt opu nfbou gps zpv..." },
    { "shift": 2, "cipher_text": "vjku oguucig ycu pqv ogcpv hqt aqw..." },
    { "shift": 3, "cipher_text": "wklv phvvdjh zdv qrw phdqw iru brx..." },
    { "shift": 4, "cipher_text": "xlmw qiwweki aew rsx qierx jsv csy..." },
    { "shift": 5, "cipher_text": "ymnx rjxxflj bfx sty rjfsy ktw dtz..." },
    { "shift": 6, "cipher_text": "znoy skyygmk cgy tuz skgtz lux eua..." },
    { "shift": 7, "cipher_text": "aopz tlzzhnl dhz uva tlhua mvy fvb..." },
    { "shift": 8, "cipher_text": "bpqa umaaiom eia vwb umivb nwz gwc..." },
    { "shift": 9, "cipher_text": "cqrb vnbbjpn fjb wxc vnjwc oxa hxd..." },
    { "shift": 10, "cipher_text": "drsc wocckqo gkc xyd wokxd pyb iye..." },
    { "shift": 11, "cipher_text": "estd xpddlrp hld yze xplye qzc jzf..." },
    { "shift": 12, "cipher_text": "ftue yqeemsq ime zaf yqmzf rad kag..." },
    { "shift": 13, "cipher_text": "guvf zrffntr jnf abg zrnag sbe lbh..." },
    { "shift": 14, "cipher_text": "hvwg asggous kog bch asobh tcf mci..." },
    { "shift": 15, "cipher_text": "iwxh bthhpvt lph cdi btpci udg ndj..." },
    { "shift": 16, "cipher_text": "jxyi cuiiqwu mqi dej cuqdj veh oek..." },
    { "shift": 17, "cipher_text": "kyzj dvjjrxv nrj efk dvrek wfi pfl..." },
    { "shift": 18, "cipher_text": "lzak ewkksyw osk fgl ewsfl xgj qgm..." },
    { "shift": 19, "cipher_text": "mabl fxlltzx ptl ghm fxtgm yhk rhn..." },
    { "shift": 20, "cipher_text": "nbcm gymmuay qum hin gyuhn zil sio..." },
    { "shift": 21, "cipher_text": "ocdn hznnvbz rvn ijo hzvio ajm tjp..." },
    { "shift": 22, "cipher_text": "pdeo iaoowca swo jkp iawjp bkn ukq..." },
    { "shift": 23, "cipher_text": "qefp jbppxdb txp klq jbxkq clo vlr..." },
    { "shift": 24, "cipher_text": "rfgq kcqqyec uyq lmr kcylr dmp wms..." },
    { "shift": 25, "cipher_text": "sghr ldrrzfd vzr mns ldzms enq xnt..." }
];

// ==========================================
// 2. STATE VARIABLES
// ==========================================
// `let` is used for variables whose values will change over time.
// In Python: total_clicks = 0, solved = False
let totalClicks = 0;
let solved = false; // Booleans are lowercase in JS (`false`/`true`), unlike Python (`False`/`True`)

// ==========================================
// 3. DOM SELECTION
// ==========================================
// The DOM (Document Object Model) connects HTML to JavaScript.
// Here we find the HTML element with id="curr-message" (<span id="curr-message">)
// and store a reference to it so we can read and modify it.
const currMessageDisplay = document.getElementById('curr-message');

// ==========================================
// 4. RANDOM NUMBER GENERATION & SETUP
// ==========================================
// Math.random() returns a float between 0.0 (inclusive) and 1.0 (exclusive).
// Math.random() * 25 produces a float from 0 up to ~24.999.
// Math.floor() truncates/rounds down to an integer: 0 to 24.
// Adding 1 shifts the range to 1 through 25.
// Python equivalent: random_shift = random.randint(1, 25)
const randomShift = Math.floor(Math.random() * 25) + 1;

// Access the array at index `randomShift`, read its `cipher_text` property,
// and update the text displayed inside the HTML element.
// Python equivalent: currMessageDisplay.textContent = messageVariations[random_shift]["cipher_text"]
currMessageDisplay.textContent = messageVariations[randomShift].cipher_text;

// ==========================================
// 5. EVENT LISTENERS
// ==========================================
// JavaScript is event-driven: it waits for user actions.
// Here, we listen for a "mousedown" (mouse click down) anywhere on the document.
// When that event occurs, the browser automatically executes the `attempt` function.
document.addEventListener("mousedown", attempt);

// ==========================================
// 6. EVENT HANDLER FUNCTION
// ==========================================
// Defines the function called on each click.
// `e` represents the Event object provided by the browser (contains event details).
function attempt(e) {
    // Guard Clause: If the puzzle is already solved, exit immediately.
    // In Python: if solved: return
    if (solved) return;

    // Increment click count (equivalent to totalClicks = totalClicks + 1)
    totalClicks += 1;

    // --- RE-TRIGGERING CSS ANIMATIONS ---
    // In CSS, an animation only runs when a class is newly applied.
    // 1. Remove the animation class:
    currMessageDisplay.classList.remove('shake-animation');
    
    // 2. Reading `offsetWidth` forces the browser to recalculate the page layout
    //    (called a "DOM reflow"). Without this line, the browser optimizes away
    //    the remove/add cycle and skips replaying the animation.
    void currMessageDisplay.offsetWidth; 
    
    // 3. Re-add the class so the CSS shake animation triggers again:
    currMessageDisplay.classList.add('shake-animation');

    // --- CHECK WIN CONDITION ---
    // Once the user has clicked as many times as the secret shift count:
    if (totalClicks >= randomShift) {
        // Reveal the decrypted message (index 0 is shift 0, the original plaintext)
        currMessageDisplay.textContent = messageVariations[0].cipher_text;
        
        // Update the state flag to prevent further clicks from running logic
        solved = true;
    }
}