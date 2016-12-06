/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//$(document).ready(function(){ alert("page chargé");});
//$("body").css({
//	background:'red',
//	color:"#FFF"
//}).delay(5000).css({
//	background:'#0F0'
//})
//        
//$(".div").slideUp(1000).slideDown(1000).fadeOut(2000).delay(5000).fadeIn(2000);

//
//$("button").click(function(){
//	$("div").slideToggle(1000,function (){
//		alert("fini");
//	});
//});
//$("button").click(function(){
//	$(document.getElementById("anim")).animate({
//		width:"30px"
//	},5000,function(){
//		alert("fini");
//	});
//});
//
//
//////////////////////////////////////////////////////////////////
//////creer une boucle for en jquery pour 
//faire la meme action pour tout les elemens selectionné
////////////////////////////////////////////////////
//var div = document.getElementsByTagName("div");
//$(div).each(function ()
//{
//	$(this).animate({
//		width: "30px"
//	}, 5000, function () {
//		alert("fini");
//	});
//	
//});
//
//
//$(".div").each(function (index, elm) {
//	alert(
//			$(this).css("backgroundColor", "red")
//			.html("Mon texte")
//			.css("backgroundColor")
//			);
//});

/////////////////////////////////////
///ajouter et effacer un attribut //////

//$(".div").each(function (index, elm) {
//
//	$(elm).attr("monattribut", "texte");
//	alert(
//			$(this).attr("monattribut")
//			);
//	$(elm).removeAttr("monattribut");
//});

///////////////////////////////////////////////


//$(".div").each(function(index,elm)
//{
//	$(elm).hide(5000);
//	$(elm).show(5000);
//	$(elm).toggle(5000);
//});
//$(function () {
////Start animation
//	$("#go").click(function () {
//		$(".block").animate({left: "+=100px"}, 2500);
//	});
////Stop animation
//	$("#stop").click(function () {
//		$(".block").stop();
//	});
//	$("#back").click(function () {
//		$(".block").animate({left: "-=100px"}, 2500);
//	});
//});
//
//$("#go").addClass("maclass");
//$("#go").removeClass("maClass");
//$("#go").toggleClass("maClass");
//$("#go").hasClass("maClass");


//<!----------------------exo de menu accordeon---------------------------------->
//$(".ensemble").hide();
//$(".type").click(function () {
//	if($(this).next().css("display")=="none")
//	{
//		$(".type").next().slideUp();
//		$(this).next().slideDown();
//	}
//	else{$(".type").next().hide(); }
//});

//<!---------------------- fin exo de menu accordeon---------------------------------->
var start = 0;
img = document.getElementById("img");
var time = setInterval(function () {
	var s = start++;
	$("#image").attr("src", "style/" + (s < 10 ? "0" + s : s) + ".png");
	if (start == 28)
		clearInterval(time);

}, 200);

$("span").each(function (index, elm) {
	setInterval(function(){
		$(elm).css("display","inline-block");	
	},index*250);	
});