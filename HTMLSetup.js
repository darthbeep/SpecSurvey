var view = "freshmen";

var selected = "gen";
var selectedSoc = "gen";
var selectedMid = "gen";
var selectedPar = "gen";
var selectedStudy = "gen";
var selectedMeth = "gen";
var selectedPress = "gen";
var selectedHw = "gen";
var selectedFav = "gen";
var selectedSleep = "gen";
var selectedWork = "gen";
var selectedAwr = "gen";
var selectedSocial = "gen";
var selectedTv = "gen";
var selectedFb = "gen";
var selectedDrug = "gen";
var selectedAlc = "gen";
var selectedCheat = "hc";
var selectedAcc = "gen";
var selectedGrade = "gen";
var selectedSpr = "gen";
var selectedSch = "gen";
var selectedExc = "gen";
var selectedGoal = "gen";
var frHTML = "";

var raceText = "We chose not to differentiate between students who selected Black, Hispanic, or Other on the question about ethnicity in this graph because there was not enough data about any one category for it to be statistically significant.";
var raceDiv = "<div  class='raceDiv'>" + raceText + "</div>";

function raceCaption() {
	frHTML += raceDiv;
}

function demobuttons() {
	frTop();
	document.getElementById("sr").innerHTML = "";
	document.getElementById("comp").innerHTML = "";
	frHTML = "";
	topbuttons();
	demogbuttons();
	appbuttons();
	midacbuttons();
	midlifebuttons();
	exButtons();
	document.getElementById("fr").innerHTML = frHTML;
	makeCharts();
}

function topbuttons() {
	if (view == "freshmen") frHTML += "<a class = 'selected large' onclick='demobuttons()'>Freshman Survey</a>";
	else frHTML += "<a onclick='view = \"freshmen\"; demobuttons();'  class='large'>Freshman Survey</a>";
	if (view == "seniors") frHTML += "<a class = 'selected' onclick='demobuttons()'  class='large'>Senior Survey</a>";
	else frHTML += "<a onclick='view = \"seniors\";allbuttons();'  class='large'>Senior Survey</a>";
	if (view == "compare") frHTML += "<a class = 'selected' onclick='call();' class='large'>Comparison Highlights</a>";
	else frHTML += "<a onclick='view = \"compare\";call();'  class='large'>Comparison Highlights</a>";
}

function demogbuttons() {
	//alert(selected);
	frHTML += "<h1 class='head' id='demohead'>Demographics</h1>";
	frDemoNar();
	//frHTML += "<h1>Demographics</h1>"

	if (selected == "gen") frHTML += "<a class='selected' id='frGender' onclick='selected=\"gen\"; demobuttons();' type='button'>Gender</a>";
	else frHTML += "<a id='frGender' onclick='selected=\"gen\"; demobuttons();' type='button'>Gender</a>";
	
	if (selected == "eth") frHTML += "<a class='selected' id='frEth' onclick='selected=\"eth\"; demobuttons();'>Race</a>";
	else frHTML += "<a id='frEth' onclick='selected=\"eth\"; demobuttons();'>Race</a>";
	
	if (selected == "leg") frHTML += "<a class='selected' id='frLeg' onclick='selected=\"leg\"; demobuttons();'>Legal Status</a>";
	else frHTML += "<a id='frLeg' onclick='selected=\"leg\"; demobuttons();'>Legal Status</a>";
	
	if (selected == "rel") frHTML += "<a class='selected' id='frRel' onclick='selected=\"rel\"; demobuttons();'>Religion</a>";
	else frHTML += "<a id='frRel' onclick='selected=\"rel\"; demobuttons();'>Religion</a>";

	if (selected == "soc") frHTML += "<a class='selected large' id='frRel' onclick='selected=\"soc\"; demobuttons();'>Socioeconomic Status</a>";
	else frHTML += "<a id='frRel' onclick='selected=\"soc\"; demobuttons();' class='large'>Socioeconomic Status</a>";
	
	if (selected == "ed") frHTML += "<a class='selected large' id='frEd' onclick='selected=\"ed\"; demobuttons();'> Parents' Level of Education</a>";
	else frHTML += "<a id='frEd' onclick='selected=\"ed\"; demobuttons();'class='large'>Parents' Level of Education</a>";
	
	if (selected == "seo") frHTML += "<a class='selected large' id='frSeo' onclick='selected=\"seo\"; demobuttons();'>Sexual Orientation</a>";
	else frHTML += "<a id='frSeo' onclick='selected=\"seo\"; demobuttons();'class='large'>Sexual Orientation</a>";

	frHTML += "<div id='frdemo' class='chart'></div>";

	if (selected == "soc") {
		if (selectedSoc == "gen") frHTML += "<a class='selected' id='frSoc' onclick='selectedSoc=\"gen\"; demobuttons();'>General</a>";
		else frHTML += "<a id='frSoc' onclick='selectedSoc=\"gen\"; demobuttons();'>General</a>";

		if (selectedSoc == "race") {frHTML += "<a class='selected' id='frSocRace' onclick='selectedSoc=\"race\"; demobuttons();'>By Race</a>"; raceCaption();}
		else frHTML += "<a id='frSocRace' onclick='selectedSoc=\"race\"; demobuttons();'>By Race</a>";
	}

	/*frHTML += "<h1>Socioeconomic Status</h1>";

	if (selectedSoc == "gen") frHTML += "<a class='selected' id='frSoc' onclick='selectedSoc=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a id='frSoc' onclick='selectedSoc=\"gen\"; demobuttons();'>General</a>";

	if (selectedSoc == "race") frHTML += "<a class='selected' id='frSocRace' onclick='selectedSoc=\"race\"; demobuttons();'>By Race</a>";
	else frHTML += "<a id='frSocRace' onclick='selectedSoc=\"race\"; demobuttons();'>By Race</a>";

	frHTML += "<div id='frsoc' class='chart'></div>";
	frHTML += "<h1>Middle School</h1>"

	if (selectedMid == "gen") frHTML += "<a class='selected' id='frMid' onclick='selectedMid=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a id='frMid' onclick='selectedMid=\"gen\"; demobuttons();'>General</a>";

	if (selectedMid == "race") frHTML += "<a class='selected' onclick='selectedMid=\"race\"; demobuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedMid=\"race\"; demobuttons();'>By Race</a>";
	
	frHTML += "<div id='frmid' class='chart'></div>";*/

}

function appbuttons() {
	frHTML += "<h1 class='head' id='apphead'>Applying to Stuyvesant</h1>";
	frAppNar();
	frHTML += "<h1>What type of middle school did you attend?</h1>"

	if (selectedMid == "gen") frHTML += "<a class='selected' id='frMid' onclick='selectedMid=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a id='frMid' onclick='selectedMid=\"gen\"; demobuttons();'>General</a>";

	if (selectedMid == "race") {frHTML += "<a class='selected' onclick='selectedMid=\"race\"; demobuttons();'>By Race</a>";}
	else frHTML += "<a onclick='selectedMid=\"race\"; demobuttons();'>By Race</a>";
	
	frHTML += "<div id='frmid' class='chart'></div>";

	if (selectedMid == "race") raceCaption();

	frHTML += "<h1>When did you start studying for the SHSAT?</h1>";

	if (selectedStudy == "gen") frHTML += "<a class='selected' onclick='selectedStudy=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a onclick='selectedStudy=\"gen\"; demobuttons();'>General</a>";
	if (selectedStudy == "race") frHTML += "<a class='selected' onclick='selectedStudy=\"race\"; demobuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedStudy=\"race\"; demobuttons();'>By Race</a>";
	if (selectedStudy == "soc") frHTML += "<a class='selected large' onclick='selectedStudy=\"soc\"; demobuttons();'>By Socioeconomic Status</a>";
	else frHTML += "<a onclick='selectedStudy=\"soc\"; demobuttons();' class='large'>By Socioeconomic Status</a>";
	if (selectedStudy == "mid") frHTML += "<a class='selected large' onclick='selectedStudy=\"mid\"; demobuttons();'>By Middle School</a>";
	else frHTML += "<a onclick='selectedStudy=\"mid\"; demobuttons();' class='large'>By Middle School</a>";

	frHTML += "<div id='frstudy' class='chart'></div>";
	if (selectedStudy=="race") {raceCaption();}
	frHTML += "<h1>Which best describes the method of studying you used for the SHSAT?</h1>";

	if (selectedMeth == "gen") frHTML += "<a class='selected' onclick='selectedMeth=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a onclick='selectedMeth=\"gen\"; demobuttons();'>General</a>";
	if (selectedMeth == "race") frHTML += "<a class='selected' onclick='selectedMeth=\"race\"; demobuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedMeth=\"race\"; demobuttons();'>By Race</a>";
	if (selectedMeth == "mid") frHTML += "<a class='selected large' onclick='selectedMeth=\"mid\"; demobuttons();'>By Middle School</a>";
	else frHTML += "<a onclick='selectedMeth=\"mid\"; demobuttons();' class='large'>By Middle School</a>";
	if (selectedMeth == "study") frHTML += "<a class='selected large' onclick='selectedMeth=\"study\"; demobuttons();'>By Study Timeframe</a>";
	else frHTML += "<a onclick='selectedMeth=\"study\"; demobuttons();' class='large'>By Study Timeframe</a>";

	frHTML += "<div id='frmeth' class='chart'></div>";
	if (selectedMeth == "race") raceCaption();
	frHTML += "<h1>To what extent did a parent/guardian pressure you to come to Stuyvesant?</h1>";

	if (selectedPress == "gen") frHTML += "<a class='selected' onclick='selectedPress=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a onclick='selectedPress=\"gen\"; demobuttons();'>General</a>";
	if (selectedPress == "race") frHTML += "<a class='selected' onclick='selectedPress=\"race\"; demobuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedPress=\"race\"; demobuttons();'>By Race</a>";
	if (selectedPress == "soc") frHTML += "<a class='selected large' onclick='selectedPress=\"soc\"; demobuttons();'>By Socioeconomic Status</a>";
	else frHTML += "<a onclick='selectedPress=\"soc\"; demobuttons();' class='large'>By Socioeconomic Status</a>";
	if (selectedPress == "par") frHTML += "<a class='selected large' onclick='selectedPress=\"par\"; demobuttons();'>By Parents' level of Education</a>";
	else frHTML += "<a onclick='selectedPress=\"par\"; demobuttons();' class='large'>By Parents' Level of Education</a>";

	frHTML += "<div id='frpress' class='chart'></div>";
	if (selectedPress == "race") raceCaption();
}

function midacbuttons() {
	frHTML += "<h1 class='head' id='midachead'>Middle School Academics</h1>";
	frMidacNar();
	frHTML += "<h1>How many hours do you spend on homework or studying each night?</h1>"

	if (selectedHw == "gen") frHTML += "<a class='selected' id='frMid' onclick='selectedHw=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a id='frMid' onclick='selectedHw=\"gen\"; demobuttons();'>General</a>";
	if (selectedHw == "gender") frHTML += "<a class='selected' id='frMid' onclick='selectedHw=\"gender\"; demobuttons();'>By Gender</a>";
	else frHTML += "<a id='frMid' onclick='selectedHw=\"gender\"; demobuttons();'>By Gender</a>";
	if (selectedHw == "race") frHTML += "<a class='selected' onclick='selectedHw=\"race\"; demobuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedHw=\"race\"; demobuttons();'>By Race</a>";
	if (selectedHw == "mid") frHTML += "<a class='selected large' onclick='selectedHw=\"mid\"; demobuttons();'>By Middle School</a>";
	else frHTML += "<a onclick='selectedHw=\"mid\"; demobuttons();' class='large'>By Middle School</a>";

	frHTML += "<div id='frhw' class='chart'></div>";
	if (selectedHw == "race") raceCaption();
	frHTML += "<h1>What is your favorite subject?</h1>";
	if (selectedFav=='gen') frHTML+="<a class='selected' onclick='selectedFav=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedFav=\"gen\"; demobuttons(); '>General</a>";
	if (selectedFav=='gender') frHTML+="<a class='selected' onclick='selectedFav=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML +="<a onclick='selectedFav=\"gender\"; demobuttons();'>By Gender</a>";
	if (selectedFav=='race') frHTML+="<a class='selected' onclick='selectedFav=\"race\"; demobuttons(); ''>By Race</a>";
	else frHTML+="<a onclick='selectedFav=\"race\"; demobuttons(); '>By Race</a>";
	frHTML += "<div id='frfav' class='chart'></div>";
	if (selectedFav == 'race') raceCaption();

	frHTML+='<h1>How many hours of sleep do you get each night?</h1>';
	if (selectedSleep=='gen') frHTML+="<a class='selected' onclick='selectedSleep=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedSleep=\"gen\"; demobuttons(); '>General</a>";
	if (selectedSleep=='gender') frHTML+="<a class='selected' onclick='selectedSleep=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSleep=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedSleep=='race') frHTML+="<a class='selected' onclick='selectedSleep=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSleep=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedSleep=='mid') frHTML+="<a class='selected large' onclick='selectedSleep=\"mid\"; demobuttons(); '>By Middle School</a>";
	else frHTML+="<a onclick='selectedSleep=\"mid\"; demobuttons(); ' class='large'>By Middle School</a>";
	frHTML+="<div id='frsleep' class='chart'></div>";
	if (selectedSleep == "race") raceCaption();

	frHTML+='<h1>\“I have a strong work ethic\”</h1>';
	if (selectedWork=='gen') frHTML+="<a class='selected' onclick='selectedWork=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedWork=\"gen\"; demobuttons(); '>General</a>";
	if (selectedWork=='gender') frHTML+="<a class='selected' onclick='selectedWork=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedWork=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedWork=='race') frHTML+="<a class='selected' onclick='selectedWork=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedWork=\"race\"; demobuttons(); '>By Race</a>";
	frHTML+="<div id='frwork' class='chart'></div>";
	if (selectedWork == "race") raceCaption();

	frHTML += "<h1>\“I participate in my classes frequently\”</h1>";

	if (selectedPar == "gen") frHTML += "<a class='selected' id='frMid' onclick='selectedPar=\"gen\"; demobuttons();'>General</a>";
	else frHTML += "<a id='frMid' onclick='selectedPar=\"gen\"; demobuttons();'>General</a>";
	if (selectedPar == "gender") frHTML += "<a class='selected' id='frMid' onclick='selectedPar=\"gender\"; demobuttons();'>By Gender</a>";
	else frHTML += "<a id='frMid' onclick='selectedPar=\"gender\"; demobuttons();'>By Gender</a>";
	if (selectedPar == "race") frHTML += "<a class='selected' onclick='selectedPar=\"race\"; demobuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedPar=\"race\"; demobuttons();'>By Race</a>";
	frHTML += "<div id='frpar' class='chart'></div>";
	if (selectedPar == "race") raceCaption();

	frHTML+='<h1>“I consider myself aware of current events”</h1>';
	if (selectedAwr=='gen') frHTML+="<a class='selected' onclick='selectedAwr=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedAwr=\"gen\"; demobuttons(); '>General</a>";
	if (selectedAwr=='gender') frHTML+="<a class='selected' onclick='selectedAwr=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedAwr=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedAwr=='race') frHTML+="<a class='selected' onclick='selectedAwr=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedAwr=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedAwr=='mid') frHTML+="<a class='selected large' onclick='selectedAwr=\"mid\"; demobuttons(); '>By Middle School</a>";
	else frHTML+="<a onclick='selectedAwr=\"mid\"; demobuttons(); ' class='large'>By Middle School</a>";
	frHTML+="<div id='frawr' class='chart'></div>";
	if (selectedAwr == "race") raceCaption();

}

function midlifebuttons() {
	frHTML += "<h1 class='head' id='midlifehead'>Middle School Life and Identity</h1>";
	frMidlifeNar();
	frHTML+='<h1>“I consider myself a sociable person”</h1>';
	if (selectedSocial=='gen') frHTML+="<a class='selected' onclick='selectedSocial=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedSocial=\"gen\"; demobuttons(); '>General</a>";
	if (selectedSocial=='gender') frHTML+="<a class='selected' onclick='selectedSocial=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSocial=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedSocial=='race') frHTML+="<a class='selected' onclick='selectedSocial=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSocial=\"race\"; demobuttons(); '>By Race</a>";
	frHTML+="<div id='frsocial' class='chart'></div>";
	if (selectedSocial == "race") raceCaption();

	frHTML+='<h1>How many hours a week do you spend watching television?</h1>';
	if (selectedTv=='gen') frHTML+="<a class='selected' onclick='selectedTv=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedTv=\"gen\"; demobuttons(); '>General</a>";
	if (selectedTv=='gender') frHTML+="<a class='selected' onclick='selectedTv=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedTv=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedTv=='race') frHTML+="<a class='selected' onclick='selectedTv=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedTv=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedTv=='sleep') frHTML+="<a class='selected' onclick='selectedTv=\"sleep\"; demobuttons(); '>By Hrs of Sleep</a>";
	else frHTML+="<a onclick='selectedTv=\"sleep\"; demobuttons(); '>By Hrs of Sleep</a>";
	frHTML+="<div id='frtv' class='chart'></div>";
	if (selectedTv == "race") raceCaption();

	frHTML+='<h1>How many hours a week do you spend on Facebook?</h1>';
	if (selectedFb=='gen') frHTML+="<a class='selected' onclick='selectedFb=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedFb=\"gen\"; demobuttons(); '>General</a>";
	if (selectedFb=='gender') frHTML+="<a class='selected' onclick='selectedFb=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedFb=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedFb=='race') frHTML+="<a class='selected' onclick='selectedFb=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedFb=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedFb=='sleep') frHTML+="<a class='selected' onclick='selectedFb=\"sleep\"; demobuttons(); '>By Hrs of Sleep</a>";
	else frHTML+="<a onclick='selectedFb=\"sleep\"; demobuttons(); '>By Hrs of Sleep</a>";
	frHTML+="<div id='frfb' class='chart'></div>";
	if (selectedFb == "race") raceCaption();

	frHTML+='<h1>“I am opposed to the use of recreational drugs, like marijuana, by high school students.”</h1>';
	if (selectedDrug=='gen') frHTML+="<a class='selected' onclick='selectedDrug=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedDrug=\"gen\"; demobuttons(); '>General</a>";
	if (selectedDrug=='gender') frHTML+="<a class='selected' onclick='selectedDrug=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedDrug=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedDrug=='race') frHTML+="<a class='selected' onclick='selectedDrug=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedDrug=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedDrug=='rel') frHTML+="<a class='selected' onclick='selectedDrug=\"rel\"; demobuttons(); '>By Religion</a>";
	else frHTML+="<a onclick='selectedDrug=\"rel\"; demobuttons(); '>By Religion</a>";
	if (selectedDrug=='ed') frHTML+="<a class='selected large' onclick='selectedDrug=\"ed\"; demobuttons(); '>By Parents' Level of Education</a>";
	else frHTML+="<a onclick='selectedDrug=\"ed\"; demobuttons(); ' class='large'>By Parents' Level of Education</a>";
	frHTML+="<div id='frdrug' class='chart'></div>";
	if (selectedDrug == "race") raceCaption();

	frHTML+='<h1>“I am opposed to the use of alcohol by high school students.”</h1>';
	if (selectedAlc=='gen') frHTML+="<a class='selected' onclick='selectedAlc=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedAlc=\"gen\"; demobuttons(); '>General</a>";
	if (selectedAlc=='drug') frHTML+="<a class='selected large' onclick='selectedAlc=\"drug\"; demobuttons(); '>By Position on Drugs</a>";
	else frHTML+="<a onclick='selectedAlc=\"drug\"; demobuttons(); ' class='large'>By Position on Drugs</a>";
	frHTML+="<div id='fralc' class='chart'></div>";

	frHTML+='<h1>“I partook in academic dishonesty”</h1>';
	/*if (selectedCheat=='hc') frHTML+="<a class='selected' onclick='selectedCheat=\"hc\"; demobuttons(); '>Frequency of cheating in middle school.</a>";
	else frHTML+="<a onclick='selectedCheat=\"hc\"; demobuttons(); '>Frequency of cheating in middle school.</a>";
	if (selectedCheat=='wc') frHTML+="<a class='selected' onclick='selectedCheat=\"wc\"; demobuttons(); '>\"I would rather have a bad grade than cheat\"</a>";
	else frHTML+="<a onclick='selectedCheat=\"wc\"; demobuttons(); '>\"I would rather have a bad grade than cheat\"</a>";*/
	frHTML+="<div id='frcheat' class='chart'></div>";
	frHTML+= '<h1>“I would sacrifice a good grade rather than cheat”</h1>';
	frHTML += "<div id ='frcheat2' class='chart'></div>";
}

function exButtons() {
	frHTML += "<h1 class='head' id='exhead'>Expectations of Stuyvesant and Future Plans</h1>";
	frExNar();
	frHTML+='<h1>“I feel prepared for the academics at Stuyvesant”</h1>';
	if (selectedAcc=='gen') frHTML+="<a class='selected' onclick='selectedAcc=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedAcc=\"gen\"; demobuttons(); '>General</a>";
	if (selectedAcc=='gender') frHTML+="<a class='selected' onclick='selectedAcc=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedAcc=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedAcc=='race') frHTML+="<a class='selected' onclick='selectedAcc=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedAcc=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedAcc=='mid') frHTML+="<a class='selected large' onclick='selectedAcc=\"mid\"; demobuttons(); '>By Middle School</a>";
	else frHTML+="<a onclick='selectedAcc=\"mid\"; demobuttons(); ' class='large'>By Middle School</a>";
	if (selectedAcc=='par') frHTML+="<a class='selected large' onclick='selectedAcc=\"par\"; demobuttons(); '>By Parental Pressure</a>";
	else frHTML+="<a onclick='selectedAcc=\"par\"; demobuttons(); ' class='large'>By Parental Pressure</a>";
	frHTML+="<div id='fracc' class='chart'></div>";
	if (selectedAcc == "race") raceCaption();

	frHTML+='<h1>What do you predict as your class rank?</h1>';
	if (selectedGrade=='gen') frHTML+="<a class='selected' onclick='selectedGrade=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedGrade=\"gen\"; demobuttons(); '>General</a>";
	if (selectedGrade=='gender') frHTML+="<a class='selected' onclick='selectedGrade=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedGrade=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedGrade=='race') frHTML+="<a class='selected' onclick='selectedGrade=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedGrade=\"race\"; demobuttons(); '>By Race</a>";
	frHTML+="<div id='frgrade' class='chart'></div>";
	if (selectedGrade == "race") raceCaption();

	frHTML+='<h1>How many hours of sleep do you expect to get per night?</h1>';
	if (selectedSpr=='gen') frHTML+="<a class='selected' onclick='selectedSpr=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedSpr=\"gen\"; demobuttons(); '>General</a>";
	if (selectedSpr=='gender') frHTML+="<a class='selected' onclick='selectedSpr=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSpr=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedSpr=='race') frHTML+="<a class='selected' onclick='selectedSpr=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSpr=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedSpr=='cs') frHTML+="<a class='selected large' onclick='selectedSpr=\"cs\"; demobuttons(); '>By Current Sleep</a>";
	else frHTML+="<a onclick='selectedSpr=\"cs\"; demobuttons(); ' class='large'>By Current Sleep</a>";
	if (selectedSpr=='grade') frHTML+="<a class='selected large' onclick='selectedSpr=\"grade\"; demobuttons(); '>By Expected Grade Rank</a>";
	else frHTML+="<a onclick='selectedSpr=\"grade\"; demobuttons(); ' class='large'>By Expected Grade Rank</a>";
	frHTML+="<div id='frspr' class='chart'></div>";
	if (selectedSpr == "race") raceCaption();

	frHTML+='<h1>“After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT.”</h1>';
	if (selectedSch=='gen') frHTML+="<a class='selected' onclick='selectedSch=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedSch=\"gen\"; demobuttons(); '>General</a>";
	if (selectedSch=='gender') frHTML+="<a class='selected' onclick='selectedSch=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSch=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedSch=='race') frHTML+="<a class='selected' onclick='selectedSch=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSch=\"race\"; demobuttons(); '>By Race</a>";
	if (selectedSch=='soc') frHTML+="<a class='selected large' onclick='selectedSch=\"soc\"; demobuttons(); '>By Socioeconomic Status</a>";
	else frHTML+="<a onclick='selectedSch=\"soc\"; demobuttons(); ' class='large'>By Socioeconomic Status</a>";
	if (selectedSch=='par') frHTML+="<a class='selected large' onclick='selectedSch=\"par\"; demobuttons(); '>By Parent Education</a>";
	else frHTML+="<a onclick='selectedSch=\"par\"; demobuttons(); ' class='large'>By Parent Education</a>";
	frHTML+="<div id='frsch' class='chart'></div>";
	if (selectedSch == "race") raceCaption();

	frHTML+='<h1>Which extracurricular activity do you think you will most likely take part in at Stuyvesant?</h1>';
	if (selectedExc=='gen') frHTML+="<a class='selected' onclick='selectedExc=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedExc=\"gen\"; demobuttons(); '>General</a>";
	if (selectedExc=='gender') frHTML+="<a class='selected' onclick='selectedExc=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedExc=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedExc=='race') frHTML+="<a class='selected' onclick='selectedExc=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedExc=\"race\"; demobuttons(); '>By Race</a>";
	frHTML+="<div id='frexc' class='chart'></div>";
	if (selectedExc == "race") raceCaption();

	frHTML+='<h1>What field do you hope to go into when you are older?</h1>';
	if (selectedGoal=='gen') frHTML+="<a class='selected' onclick='selectedGoal=\"gen\"; demobuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedGoal=\"gen\"; demobuttons(); '>General</a>";
	if (selectedGoal=='gender') frHTML+="<a class='selected' onclick='selectedGoal=\"gender\"; demobuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedGoal=\"gender\"; demobuttons(); '>By Gender</a>";
	if (selectedGoal=='race') frHTML+="<a class='selected' onclick='selectedGoal=\"race\"; demobuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedGoal=\"race\"; demobuttons(); '>By Race</a>";
	frHTML+="<div id='frgoal' class='chart'></div>";
	if (selectedGoal == "race") raceCaption();

	frHTML += "<div class=\"ending\">The Spectator would like to thank Assistant Principal of Chemistry and Physics Scott Thomas for taking time after the school year ended to allow us to use his Scantron machine. Without his help and patience, the Freshman Survey would have been impossible. We would also like to thank the Big Sib Chairs, as well as all the Big Sibs for helping us distribute the Freshman Survey during Camp Stuy.</div>";

}

function makeCharts() {
	if (selected == "gen") frGender();
	else if (selected == "eth") frEth();
	else if (selected == "leg") frLeg();
	else if (selected == "rel") frRel();
	else if (selected == "ed") frEd();
	else if (selected == "seo") frSeo();

	if (selected == "soc") {
		if (selectedSoc == "gen") frSoc();
		else if (selectedSoc == "race") frSocRace();
	}
	if (selectedMid == "gen") frMid();
	else if (selectedMid == "race") frMidRace();

	if (selectedPar == "gen") frPar();
	else if (selectedPar == "gender") frParGen();
	else if (selectedPar == "race") frParRace();

	if (selectedStudy == "gen") frStudy();
	else if (selectedStudy == "race") frStudyRace();
	else if (selectedStudy == "soc") frStudySoc();
	else if (selectedStudy == "mid") frStudyMid();

	if (selectedMeth == "gen") frMeth();
	else if (selectedMeth == "race") frMethRace();
	else if (selectedMeth == "study") frMethStudy();
	else if (selectedMeth == "mid") frMethMid();

	if (selectedPress == "gen") frPress();
	else if (selectedPress == "race") frPressRace();
	else if (selectedPress == "soc") frPressSoc();
	else if (selectedPress == "par") frPressPar();

	if (selectedHw == "gen") frHw();
	else if (selectedHw == "gender") frHwGen();
	else if (selectedHw == "race") frHwRace();
	else if (selectedHw == "mid") frHwMid();

	if (selectedFav=='gen') frFav();
	else if (selectedFav=='gender') frFavGender();
	else if (selectedFav=='race') frFavRace();

	if (selectedSleep=='gen') frSleep();
	if (selectedSleep=='gender') frSleepGender();
	if (selectedSleep=='race') frSleepRace();
	if (selectedSleep=='mid') frSleepMid();

	if (selectedWork=='gen') frWork();
	if (selectedWork=='gender') frWorkGender();
	if (selectedWork=='race') frWorkRace();

	if (selectedAwr=='gen') frAwr();
	if (selectedAwr=='gender') frAwrGender();
	if (selectedAwr=='race') frAwrRace();
	if (selectedAwr=='mid') frAwrMid();

	if (selectedSocial=='gen') frSocial();
	if (selectedSocial=='gender') frSocialGender();
	if (selectedSocial=='race') frSocialRace();

	if (selectedTv=='gen') frTv();
	if (selectedTv=='gender') frTvGender();
	if (selectedTv=='race') frTvRace();
	if (selectedTv=='sleep') frTvSleep();

	if (selectedFb=='gen') frFb();
	if (selectedFb=='gender') frFbGender();
	if (selectedFb=='race') frFbRace();
	if (selectedFb=='sleep') frFbSleep();

	if (selectedDrug=='gen') frDrug();
	if (selectedDrug=='gender') frDrugGender();
	if (selectedDrug=='race') frDrugRace();
	if (selectedDrug=='rel') frDrugRel();
	if (selectedDrug=='ed') frDrugEd();

	if (selectedAlc=='gen') frAlc();
	if (selectedAlc=='drug') frAlcDrug();

	frCheatHc();
	frCheatWc();

	if (selectedAcc=='gen') frAcc();
	if (selectedAcc=='gender') frAccGender();
	if (selectedAcc=='race') frAccRace();
	if (selectedAcc=='mid') frAccMid();
	if (selectedAcc=='par') frAccPar();

	if (selectedGrade=='gen') frGrade();
	if (selectedGrade=='gender') frGradeGender();
	if (selectedGrade=='race') frGradeRace();

	if (selectedSpr=='gen') frSpr();
	if (selectedSpr=='gender') frSprGender();
	if (selectedSpr=='race') frSprRace();
	if (selectedSpr=='cs') frSprCs();
	if (selectedSpr=='grade') frSprGrade();

	if (selectedSch=='gen') frSch();
	if (selectedSch=='gender') frSchGender();
	if (selectedSch=='race') frSchRace();
	if (selectedSch=='soc') frSchSoc();
	if (selectedSch=='par') frSchPar();

	if (selectedExc=='gen') frExc();
	if (selectedExc=='gender') frExcGender();
	if (selectedExc=='race') frExcRace();

	if (selectedGoal=='gen') frGoal();
	if (selectedGoal=='gender') frGoalGender();
	if (selectedGoal=='race') frGoalRace();
}
