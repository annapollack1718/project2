let text1;
let text2;
let text3;
let text4;
let text5;
let text6;
let text7;
let text8;
let text9;
let text0;

var l = 100;
 
function setup(){
    createCanvas(800, 400);
    text1 = new txt(50, 40, 800, 20, "<Now the whole world had one language and a common speech.>", 0.3, "blue");
    text2 = new txt(650, 80, 800, 20, "<As people moved eastward, they found a plain in Shinar and settled there.>", 0.3, "blue");
    text3 = new txt(720, 120, 800, 20, "<They said to each other, “Come, let’s make bricks and bake them thoroughly.” They used brick instead of stone, and tar for mortar.>", 0.3, "blue");
    text4 = new txt(600, 160, 800, 20, "<Then they said, Come, let us build ourselves a city, with a tower that reaches to the heavens, so that we may make a name for ourselves; otherwise we will be scattered over the face of the whole earth.>", 0.3, "blue");
    text5 = new txt(800, 200, 800, 20, "<But the LORD came down to see the city and the tower the people were building.>", 0.3, "blue");
    text6 = new txt(710, 240, 800, 20, "<The LORD said, “If as one people speaking the same language they have begun to do this, then nothing they plan to do will be impossible for them.>", 0.3, "blue");
    text7 = new txt(800, 280, 800, 20, "<Come, let us go down and confuse their language so they will not understand each other.>", 0.3, "blue");
    text8 = new txt(800, 320, 800, 20, "<So the LORD scattered them from there over all the earth, and they stopped building the city.>", 0.3, "blue");
    text9 = new txt(500, 360, 800, 20, "<That is why it was called Babel —because there the LORD confused the language of the whole world.>", 0.3, "blue");
    text0 = new txt(50, 400, 800, 20, "<From there the LORD scattered them over the face of the whole earth.>", 0.3, "blue");
}

function draw(){ 

    background('black');
    text1.display();
    text2.display();
    text3.display();
    text4.display();
    text5.display();
    text6.display();
    text7.display();
    text8.display();
    text9.display();
    text0.display();

    text1.move();
    text2.move();
    text3.move();
    text4.move();
    text5.move();
    text6.move();
    text7.move();
    text8.move();
    text9.move();
    text0.move();

    l = l - 1; 
    if (l < 0) { 
        l = height; 
    } 
    stroke("white");
    strokeWeight(15);
    line(0, l, 800, l); 
    fill(0);
    noStroke();
    text("THIS IS NOT A BIBLE", width/2, l-5, 800, l);

}

class txt{
    constructor(varX, varY, varX2, varY2, varWord, varAccel, varShade){
        this.w = varWord;
        this.accel = varAccel;
        this.shade = varShade;
        this.x = varX;
        this.y = varY;
        this.x2 = varX2;
        this.y2 = varY2;
    }

    display(){
        fill(this.shade);
        noStroke();
        textStyle(BOLD);
        textSize(13);
        text(this.w, this.x, this.y, this.x2, this.y2);
    }

    move(){
        this.x = this.x + this.accel;
        if (this.x > width){
            this.x = 0;
            this.accel++;
        }
    }
}