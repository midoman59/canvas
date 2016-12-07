/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var debutIdentite=true;
var debutAdresse=true;
var rejexNom = /^([a-zA-Z]{1})[-a-zA-Z]{1,}$/;
var rejexPrenom = /^([a-zA-Z]{1})[-a-zA-Z]{1,}$/;
var rejexTel = /^0[0-9]{9}$/;
var rejexVille = /^([a-zA-Z]{1})[-a-zA-Z]{3,}$/;
var rejexCp = /^[0-9]{5}$/;
var rejexPays = /^([a-zA-Z]{1})[-a-zA-Z]{3,}$/;

$( function() {
    $( "#datepicker" ).datepicker();
  } );
  
$(".bancaire .formulaire").hide();
$(".adresse .formulaire").hide();
$(".buttons").hide();

$(".valider .idtt").click(function(){
	$(".identite .formulaire").slideUp();
	$(".identite .buttons").show();
	if(debutIdentite==true)
	{
		$(".adresse .formulaire").slideDown();
		debutIdentite=false;
	}
});
$(".valider .Addrs").click(function(){
	$(".adresse .formulaire").slideUp();
	$(".adresse .buttons").show();
	if(debutAdresse==true)
	{
		$(".bancaire .formulaire").slideDown();
		debutAdresse=false;
	}
});

$(".identite .buttons").click(function(){
	$(".adresse .formulaire").slideUp();$(".bancaire .formulaire").slideUp();
	$(".identite .formulaire").slideDown();$(".bancaire .buttons").show();
});
$(".adresse .buttons").click(function(){
	$(".identite .formulaire").slideUp();$(".bancaire .formulaire").slideUp();
	$(".adresse .formulaire").slideDown();$(".bancaire .buttons").show();
});
$(".bancaire .buttons").click(function(){
	$(".bancaire .formulaire").slideDown();$(".identite .formulaire").slideUp();
	$(".adresse .formulaire").slideUp();
});
function rejex(rejex, input)
{
	input.blur( function () {
		if (rejex.test(input.val()) == false)
		{
			input.css("border","2px solid red");
			
		} else
		{
			input.css("border","2px solid green");
		}
	});
}
rejex(rejexNom,$(".nom"));
rejex(rejexPrenom,$(".prenom"));
rejex(rejex,$(".prenom"));
console.log($(".nom").val());
console.log(rejexNom.test($(".nom").value));


 
