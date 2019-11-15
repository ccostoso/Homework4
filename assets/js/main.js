// Create game variables
var isPlaying;
var charSelected;
var charArr = [];

// Create character objects
class Character {
    constructor(name, HP, AP, CAP, imageSrc) {
        this._name = name;
        this._HP = HP;
        this._AP = AP;
        this._CAP = CAP;
        this._imageSrc = imageSrc
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get HP() {
        return this._HP;
    }

    set HP(newHP) {
        this._HP = newHP;
    }

    get AP() {
        return this._AP;
    }

    set AP(newAP) {
        this._AP = newAP;
    }

    get CAP() {
        return this._CAP;
    }

    set CAP(newCAP) {
        this._CAP = newCAP;
    }

    get imageSrc() {
        return this._imageSrc;
    }

    set imageSrc(newImageSrc) {
        this._imageSrc = newImageSrc;
    }

    pushInCharArr() {
        charArr.push(this);
    }

    boostAP() {
        this.AP = Math.round(this.AP *= 1.5);
        console.log("this.AP", this.AP);
    }

    loseHP(opp) {
        if (this === userChar) {
            this.HP -= opp.CAP;
        } else {
            this.HP -= opp.AP;
        }
    }
}

var slime = new Character("Slime", 10, 2, 3, "assets/media/images/slime.gif");
slime.pushInCharArr();
var tongueRat = new Character("TongueRat", 12, 3, 2, "assets/media/images/tonguerat.gif");
tongueRat.pushInCharArr();
var florajay = new Character("Florajay", 12, 4, 2, "assets/media/images/florajay.gif");
florajay.pushInCharArr();
var lipsy = new Character("Lipsy", 10, 2, 4, "assets/media/images/lipsy.gif")
lipsy.pushInCharArr();

console.log(charArr)

var userChar;
var opponentChar;
var opponentsArr = [];

// Create onclick function for selecting character

$("#start-game").on("click", function() {
    isPlaying = true;
    $("#start-window").hide();
    $("footer").hide();

    $("#character-select").show();

    for (var i = 0; i < charArr.length; i++) {
        var charCard = $("<div>");
        var charCardHeader = $("<div>");
        var charCardStats = $("<div>");
        var charCardImageSrc = charArr[i].imageSrc;
        
        // Create a character card for #char-row display.
        charCard.addClass("char-card card col-md-2 col-xs-6");

        // Provide names to display in card header.
        charCardHeader.attr("id", "name-display");
        charCardHeader.addClass("card-header");
        charCardHeader.text(charArr[i].name);

        // Add attributes to charCardImageTag.
        var charCardImageTag = $("<img />").attr({
            "src": charCardImageSrc,
            "class": "char-sprite"
        });

        // Pull stats from objects in charArr array to post in in #character-display.
        charCardStats.attr("id", "stats-display");
        charCardStats.addClass("card-body");
        charCardStats.append(charCardImageTag);
        charCardStats.append("<br><br>");
        charCardStats.append("HP: " + charArr[i].HP + "<br>");
        charCardStats.append("AP: " + charArr[i].AP + "<br>");
        charCardStats.append("CAP: " + charArr[i].CAP + "<br>");

        // Provide data-name and data-index attribute for each card.
        charCard.attr({
            "id": charArr[i].name[0].toLowerCase() + charArr[i].name.slice(1) + "Card",
            "data-name": charArr[i].name,
            "data-index": i,
        });
        // charCard.attr("id", charArr[i].name[0].toLowerCase() + charArr[i].name.slice(1) + "Card");
        console.log(charCard);

        // Append charCardHeader, charCardStats and unique ID to each card.
        charCard.append(charCardHeader);
        charCard.append(charCardStats);
        
        // Append charCard to #char-row in page.
        $("#char-row").append(charCard);
    }

    // User selects character, select first opponent automatically
    $(".char-card").on("click", function() {

        // Execute following code only if character is not yet selected.
        if (!charSelected) {
            // Hide character select window and show battle window.
            $("#character-select").hide();
            $("#battle-window").show();
            
            // userChar is assigned user's selected character.
            userChar = charArr[$(this).attr("data-index")];
            console.log("userChar", userChar);

            // Create array of opponents...
            opponentsArr = charArr.filter(char => char !== userChar);
            console.log("opponentsArr", opponentsArr);

            // ...and selected first opponent to combat user.
            opponentChar = opponentsArr[0];

            // Display opponent in #opponent display.
            console.log("opponentChar", opponentChar);
            // $("#opponent").html(this);

            // Display battle "draws near" message in #battle-message display.
            $("#battle-message").append("A " + opponentChar.name + " draws near!");
            console.log(charSelected, $("#battle-message"));

            // Populate #opponent-image display with opponent sprite.
            $("#opponent-image").html("<img />").attr("src", opponentChar.imageSrc);

            // Populate #opponent-name display with opponent's name.
            $("#opponent-name").append(opponentChar.name);
            $("#opponent-name").append("'s");

            // Populate #opponent-hp display with opponent's remaining HP.
            $("#opponent-hp").append(opponentChar.HP);
            console.log("opponentChar.HP", opponentChar.HP);

            // Populate #user-name display with user's name.
            $("#user-name").append(userChar.name);
            console.log("userChar.name", userChar.name);

            // Populate #user-HP display with user's remaining HP.
            $("#user-hp").append(userChar.HP);
            console.log("userChar.HP", userChar.HP);

            // Switch charSelected to true to prevent repetition of previous code.
            charSelected = true;
        }

        $("#attack-button").on("click", function() {
            userChar.loseHP(opponentChar);
            $("#user-hp").html(userChar.HP);
            console.log("userChar.HP", userChar.HP);

            opponentChar.loseHP(userChar);
            console.log("opponentChar.HP", opponentChar.HP);
            $("#opponent-hp").html(opponentChar.HP);

            userChar.boostAP();
            console.log("userChar.AP", userChar.AP);
        })
    })
})



    // One other character is send to defender area

// On attack click, opponent HP drops

    // Once opponent HP drops to 0, opponent loses and next character becomes opponent

    // If player character HP drops to 0, player loses

//