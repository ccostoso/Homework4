// Create character array
let charArr = [];
let userChar;

// Create character objects
class Character {
    constructor(name, HP, AP, CAP, imageSrc) {
        this._name = name;
        this._HP = HP;
        this._baseHP = HP;
        this._AP = AP;
        this._baseAP = AP;
        this._CAP = CAP;
        this._baseCAP = CAP;
        this._imageSrc = imageSrc;
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

    get baseHP() {
        return this._baseHP;
    }

    get AP() {
        return this._AP;
    }

    set AP(newAP) {
        this._AP = newAP;
    }

    get baseAP() {
        return this._baseAP;
    }

    get CAP() {
        return this._CAP;
    }

    set CAP(newCAP) {
        this._CAP = newCAP;
    }

    get baseCAP() {
        return this._baseCAP;
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
        this.AP = Math.floor(this.AP * 1.5);
        console.log("this.AP after boost", this.AP);
    }

    loseHP(opp) {
        if (this === userChar) {
            this.HP -= opp.CAP;
        } else {
            this.HP -= opp.AP;
        }
    }

    reset() {
        this.HP = this.baseHP;
        this.AP = this.baseAP;
        this.CAP = this.baseCAP;
    }
}

export { charArr, userChar, Character };