const messageVariations = [
    { "shift": 0, "cipher_text": "this message was not meant for you." },
    { "shift": 1, "cipher_text": "uijt nfttbhf xbt opu nfbou gps zpv" },
    { "shift": 2, "cipher_text": "vjku oguucig ycu pqv ogcpv hqt aqw" },
    { "shift": 3, "cipher_text": "wklv phvvdjh zdv qrw phdqw iru brx" },
    { "shift": 4, "cipher_text": "xlmw qiwweki aew rsx qierx jsv csy" },
    { "shift": 5, "cipher_text": "ymnx rjxxflj bfx sty rjfsy ktw dtz" },
    { "shift": 6, "cipher_text": "znoy skyygmk cgy tuz skgtz lux eua" },
    { "shift": 7, "cipher_text": "aopz tlzzhnl dhz uva tlhua mvy fvb" },
    { "shift": 8, "cipher_text": "bpqa umaaiom eia vwb umivb nwz gwc" },
    { "shift": 9, "cipher_text": "cqrb vnbbjpn fjb wxc vnjwc oxa hxd" },
    { "shift": 10, "cipher_text": "drsc wocckqo gkc xyd wokxd pyb iye" },
    { "shift": 11, "cipher_text": "estd xpddlrp hld yze xplye qzc jzf" },
    { "shift": 12, "cipher_text": "ftue yqeemsq ime zaf yqmzf rad kag" },
    { "shift": 13, "cipher_text": "guvf zrffntr jnf abg zrnag sbe lbh" },
    { "shift": 14, "cipher_text": "hvwg asggous kog bch asobh tcf mci" },
    { "shift": 15, "cipher_text": "iwxh bthhpvt lph cdi btpci udg ndj" },
    { "shift": 16, "cipher_text": "jxyi cuiiqwu mqi dej cuqdj veh oek" },
    { "shift": 17, "cipher_text": "kyzj dvjjrxv nrj efk dvrek wfi pfl" },
    { "shift": 18, "cipher_text": "lzak ewkksyw osk fgl ewsfl xgj qgm" },
    { "shift": 19, "cipher_text": "mabl fxlltzx ptl ghm fxtgm yhk rhn" },
    { "shift": 20, "cipher_text": "nbcm gymmuay qum hin gyuhn zil sio" },
    { "shift": 21, "cipher_text": "ocdn hznnvbz rvn ijo hzvio ajm tjp" },
    { "shift": 22, "cipher_text": "pdeo iaoowca swo jkp iawjp bkn ukq" },
    { "shift": 23, "cipher_text": "qefp jbppxdb txp klq jbxkq clo vlr" },
    { "shift": 24, "cipher_text": "rfgq kcqqyec uyq lmr kcylr dmp wms" },
    { "shift": 25, "cipher_text": "sghr ldrrzfd vzr mns ldzms enq xnt" }
];

let totalClicks = 0;
let solved = false;

const currMessageDisplay = document.getElementById('curr-message');

const randomShift = Math.floor(Math.random() * 25) + 1;
currMessageDisplay.textContent = messageVariations[randomShift].cipher_text;

document.addEventListener("mousedown", attempt);

function attempt(e) {
    if (solved) return;

    totalClicks += 1;

    currMessageDisplay.classList.remove('shake-animation');
    void currMessageDisplay.offsetWidth; 
    currMessageDisplay.classList.add('shake-animation');

    if (totalClicks >= randomShift) {
        currMessageDisplay.textContent = messageVariations[0].cipher_text;
        solved = true;
    }
}