/////////////création des differents types de boisson////////////////////
var boisson = {
	nom: "",
	eau: 0,
	cafe: 0,
	the: 0,
	soupe: 0,
	lait:0,
	chocolat:0,
	cafeDeca:0,
	
	creer: function (a, b, c, d, e, f, g, h)
	{
		this.nom = a;
		this.eau = b;
		this.cafe = c;
		this.the = d;
		this.soupe = e;
		this.lait = f;
		this.chocolat =g;
		this.cafeDeca = h;
		
	},
	decrire: function ()
	{
		var description = this.nom + " a " + this.eau + " doses d'eau , " +this.cafe + " doses de café et ";
		return description;
	}

};
var long = Object.create(boisson);
var expresso = Object.create(boisson);
var latte = Object.create(boisson);
var cappuchino = Object.create(boisson);
var the = Object.create(boisson);
var soupe = Object.create(boisson);
var chocolat = Object.create(boisson);
var expressoDeca = Object.create(boisson);
var longDeca = Object.create(boisson);
long.creer("café long", 2, 2, 0, 0, 0, 0, 0);
expresso.creer("café expresso", 1, 3, 0, 0, 0, 0, 0);
latte.creer("café latté", 0, 2, 0, 0, 2, 0, 0);
cappuchino.creer("cappuchino", 0, 2, 0, 0, 2, 1, 0);
the.creer("thé", 2, 0, 1, 0, 0, 0, 0);
soupe.creer("soupe", 2, 0, 0, 1, 0, 0, 0);
chocolat.creer("chocolat", 0, 0, 0, 0, 2, 2, 0);
expressoDeca.creer("expresso décafiéné", 1, 0, 0, 0, 0, 0, 3);
longDeca.creer("long décafiéné", 2, 0, 0, 0, 0, 0, 2);
////////////////////////////////////////////////////////////////////////////
//////////////Ajout des variables des differents stocks/////////////////////
var stockSucre=100;
var stockCafe=100;
var stockLait=100;
var stockChocolat=100;
var stockThe=100;
var stockSoupe=100;
var stockCafeDeca=100;
var stockEau=100;
///////////////////////////////////////////////////////////////////////////
/////////////

function preparerLong()
{
	stockcafe=Number(stockCafe)-Number(long.cafe);
	stockcafe=Number(stockCafe)-Number(long.cafe);
	stockcafe=Number(stockCafe)-Number(long.cafe);
	}
	


function myFunction() {
 console.log("aminekhai");   
}



