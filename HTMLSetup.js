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

var raceText = "We chose not to differentiate between students who selected Black, Hispanic, or Other on the question about ethnicity in this graph because there was not enough data about any one category for it to be statistically significant. It should be noted that even when the Black, Hispanic, and Other categories are combined, they are not statistically comparable to the other categories.";
var raceDiv = "<div  class='raceDiv'>" + raceText + "</div>";
var socText = "It should be noted that some subcategories under socioeconomic status, like upper class, are not statistically comparable to other, larger subcategories, like middle class. Furthermore, some students may hold inaccurate perceptions of their socioeconomic status, which could further alter these results.";
var socDiv = "<div class='raceDiv'>" + socText + "</div>";

function raceCaption() {
	frHTML += raceDiv;
}

function socCaption() {
	frHTML += socDiv;
}

function demobuttons() {
	divSetup();
	frTop();
	//document.getElementById("sr").innerHTML = "";
	//document.getElementById("comp").innerHTML = "";
	//frHTML = "";
	topbuttons();
	demogbuttons();
	appbuttons();
	midacbuttons();
	midlifebuttons();
	exButtons();
	//document.getElementById("fr").innerHTML = frHTML;
	//makeCharts();
}

function divSetup() {
	document.getElementById("sr").innerHTML = "";
	document.getElementById("comp").innerHTML = "";
	var divHTML = "";
	divHTML += "<div id='frtopbdiv'></div>";
	divHTML += "<div id='frtopdiv'></div>";
	divHTML += "<div id='frdemodiv'></div>";
	divHTML += "<div id='frappdiv'></div>";
	divHTML += "<div id='frmidacdiv'></div>";
	divHTML += "<div id='frmidlifediv'></div>";
	divHTML += "<div id='frexdiv'></div>";
	document.getElementById("fr").innerHTML = divHTML;
}

function topbuttons() {
	frHTML = "";
	if (view == "freshmen") frHTML += "<a class = 'selected large switchbutton' onclick='demobuttons()'>Freshman Survey</a>";
	else frHTML += "<a onclick='view = \"freshmen\"; demobuttons();'  class='large switchbutton'>Freshman Survey</a>";
	if (view == "seniors") frHTML += "<a class = 'selected switchbutton' onclick='demobuttons()'  class='large'>Senior Survey</a>";
	else frHTML += "<a onclick='view = \"seniors\";allbuttons();'  class='large switchbutton'>Senior Survey</a>";
	if (view == "compare") frHTML += "<a class = 'selected switchbutton' onclick='call();' class='large'>Comparison Highlights</a>";
	else frHTML += "<a onclick='view = \"compare\";call();'  class='larg switchbutton'>Comparison Highlights</a>";
	document.getElementById("frtopbdiv").innerHTML = frHTML;
}

function demogbuttons() {
	frHTML = "";
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

	if (selected == "soc") frHTML += "<a class='selected' style='width:170px' id='frRel' onclick='selected=\"soc\"; demobuttons();'>Socioeconomic Status</a>";
	else frHTML += "<a id='frRel' onclick='selected=\"soc\"; demobuttons();' style='width:170px'>Socioeconomic Status</a>";
	
	if (selected == "ed") frHTML += "<a class='selected' style='width:260px' id='frEd' onclick='selected=\"ed\"; demobuttons();'> Parents' Highest Level of Education</a>";
	else frHTML += "<a id='frEd' onclick='selected=\"ed\"; demobuttons();' style='width:260px'>Parents' Highest Level of Education</a>";
	
	if (selected == "seo") frHTML += "<a class='selected' style='width:150px' id='frSeo' onclick='selected=\"seo\"; demobuttons();'>Sexual Orientation</a>";
	else frHTML += "<a id='frSeo' onclick='selected=\"seo\"; demobuttons();' style='width:150px'>Sexual Orientation</a>";

	frHTML += "<div id='frdemo' class='chart'></div>";

	if (selected == "soc") {
		if (selectedSoc == "gen") frHTML += "<a class='selected' id='frSoc' onclick='selectedSoc=\"gen\"; demobuttons();'>General</a>";
		else frHTML += "<a id='frSoc' onclick='selectedSoc=\"gen\"; demobuttons();'>General</a>";

		if (selectedSoc == "race") {frHTML += "<a class='selected' id='frSocRace' onclick='selectedSoc=\"race\"; demobuttons();'>By Race</a>"; raceCaption();}
		else frHTML += "<a id='frSocRace' onclick='selectedSoc=\"race\"; demobuttons();'>By Race</a>";
	}
	document.getElementById("frdemodiv").innerHTML = frHTML;
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
	frMakeChartsDemo();

}

function appbuttons() {
	frHTML = "";
	frHTML += "<br><br><hr><h1 class='head' id='apphead'>Applying to Stuyvesant</h1>";
	frAppNar();
	frHTML += "<h1>What type of middle school did you attend?</h1>"

	if (selectedMid == "gen") frHTML += "<a class='selected' id='frMid' onclick='selectedMid=\"gen\"; appbuttons();'>General</a>";
	else frHTML += "<a id='frMid' onclick='selectedMid=\"gen\"; appbuttons();'>General</a>";

	if (selectedMid == "race") {frHTML += "<a class='selected' onclick='selectedMid=\"race\"; appbuttons();'>By Race</a>";}
	else frHTML += "<a onclick='selectedMid=\"race\"; appbuttons();'>By Race</a>";
	
	frHTML += "<div id='frmid' class='chart'></div>";

	if (selectedMid == "race") raceCaption();

	frHTML += "<h1>When did you start studying for the SHSAT?</h1>";

	if (selectedStudy == "gen") frHTML += "<a class='selected' onclick='selectedStudy=\"gen\"; appbuttons();'>General</a>";
	else frHTML += "<a onclick='selectedStudy=\"gen\"; appbuttons();'>General</a>";
	if (selectedStudy == "race") frHTML += "<a class='selected' onclick='selectedStudy=\"race\"; appbuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedStudy=\"race\"; appbuttons();'>By Race</a>";
	if (selectedStudy == "soc") frHTML += "<a class='selected large' onclick='selectedStudy=\"soc\"; appbuttons();'>By Socioeconomic Status</a>";
	else frHTML += "<a onclick='selectedStudy=\"soc\"; appbuttons();' class='large'>By Socioeconomic Status</a>";
	if (selectedStudy == "mid") frHTML += "<a class='selected' style='width:150px' onclick='selectedStudy=\"mid\"; appbuttons();'>By Middle School</a>";
	else frHTML += "<a onclick='selectedStudy=\"mid\"; appbuttons();' style='width:150px'>By Middle School</a>";

	frHTML += "<div id='frstudy' class='chart' style='width:700px'></div>";
	if (selectedStudy=="race") {raceCaption();}
	if (selectedStudy=="soc") {socCaption();}
	frHTML += "<h1>Which best describes the method of studying you used for the SHSAT?</h1>";

	if (selectedMeth == "gen") frHTML += "<a class='selected' onclick='selectedMeth=\"gen\"; appbuttons();'>General</a>";
	else frHTML += "<a onclick='selectedMeth=\"gen\"; appbuttons();'>General</a>";
	if (selectedMeth == "race") frHTML += "<a class='selected' onclick='selectedMeth=\"race\"; appbuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedMeth=\"race\"; appbuttons();'>By Race</a>";
	if (selectedMeth == "mid") frHTML += "<a class='selected' style='width:150px' onclick='selectedMeth=\"mid\"; appbuttons();'>By Middle School</a>";
	else frHTML += "<a onclick='selectedMeth=\"mid\"; appbuttons();' style='width:150px'>By Middle School</a>";
	if (selectedMeth == "study") frHTML += "<a class='selected large' onclick='selectedMeth=\"study\"; appbuttons();'>By Study Timeframe</a>";
	else frHTML += "<a onclick='selectedMeth=\"study\"; appbuttons();' class='large'>By Study Timeframe</a>";

	frHTML += "<div id='frmeth' class='chart' style='width: 700px'></div>";
	if (selectedMeth == "race") raceCaption();
	frHTML += "<h1>To what extent did a parent/guardian pressure you to come to Stuyvesant?</h1>";

	if (selectedPress == "gen") frHTML += "<a class='selected' onclick='selectedPress=\"gen\"; appbuttons();'>General</a>";
	else frHTML += "<a onclick='selectedPress=\"gen\"; appbuttons();'>General</a>";
	if (selectedPress == "race") frHTML += "<a class='selected' onclick='selectedPress=\"race\"; appbuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedPress=\"race\"; appbuttons();'>By Race</a>";
	if (selectedPress == "soc") frHTML += "<a class='selected large' onclick='selectedPress=\"soc\"; appbuttons();'>By Socioeconomic Status</a>";
	else frHTML += "<a onclick='selectedPress=\"soc\"; appbuttons();' class='large'>By Socioeconomic Status</a>";
	if (selectedPress == "par") frHTML += "<a class='selected' style='width:280px' onclick='selectedPress=\"par\"; appbuttons();'>By Parents' Highest Level of Education</a>";
	else frHTML += "<a onclick='selectedPress=\"par\"; appbuttons();' style='width:280px'>By Parents' Highest Level of Education</a>";

	frHTML += "<div id='frpress' class='chart'></div>";
	if (selectedPress == "race") raceCaption();
	if (selectedPress == "soc") socCaption();
	document.getElementById("frappdiv").innerHTML = frHTML;
	frMakeChartsApp();
}

function midacbuttons() {
	frHTML = "";
	frHTML += "<br><br><hr><h1 class='head' id='midachead'>Middle School Academics</h1>";
	frMidacNar();
	frHTML += "<h1>How many hours do you spend on homework or studying each night?</h1>"

	if (selectedHw == "gen") frHTML += "<a class='selected' id='frMid' onclick='selectedHw=\"gen\"; midacbuttons();'>General</a>";
	else frHTML += "<a id='frMid' onclick='selectedHw=\"gen\"; midacbuttons();'>General</a>";
	if (selectedHw == "gender") frHTML += "<a class='selected' id='frMid' onclick='selectedHw=\"gender\"; midacbuttons();'>By Gender</a>";
	else frHTML += "<a id='frMid' onclick='selectedHw=\"gender\"; midacbuttons();'>By Gender</a>";
	if (selectedHw == "race") frHTML += "<a class='selected' onclick='selectedHw=\"race\"; midacbuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedHw=\"race\"; midacbuttons();'>By Race</a>";
	if (selectedHw == "mid") frHTML += "<a class='selected' style='width:150px' onclick='selectedHw=\"mid\"; midacbuttons();'>By Middle School</a>";
	else frHTML += "<a onclick='selectedHw=\"mid\"; midacbuttons();' style='width:150px'>By Middle School</a>";

	frHTML += "<div id='frhw' class='chart'></div>";
	if (selectedHw == "race") raceCaption();
	frHTML += "<h1>What is your favorite subject?</h1>";
	if (selectedFav=='gen') frHTML+="<a class='selected' onclick='selectedFav=\"gen\"; midacbuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedFav=\"gen\"; midacbuttons(); '>General</a>";
	if (selectedFav=='gender') frHTML+="<a class='selected' onclick='selectedFav=\"gender\"; midacbuttons(); '>By Gender</a>";
	else frHTML +="<a onclick='selectedFav=\"gender\"; midacbuttons();'>By Gender</a>";
	if (selectedFav=='race') frHTML+="<a class='selected' onclick='selectedFav=\"race\"; midacbuttons(); ''>By Race</a>";
	else frHTML+="<a onclick='selectedFav=\"race\"; midacbuttons(); '>By Race</a>";
	frHTML += "<div id='frfav' class='chart'></div>";
	if (selectedFav == 'race') raceCaption();

	frHTML+='<h1>How many hours of sleep do you get each night?</h1>';
	if (selectedSleep=='gen') frHTML+="<a class='selected' onclick='selectedSleep=\"gen\"; midacbuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedSleep=\"gen\"; midacbuttons(); '>General</a>";
	if (selectedSleep=='gender') frHTML+="<a class='selected' onclick='selectedSleep=\"gender\"; midacbuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSleep=\"gender\"; midacbuttons(); '>By Gender</a>";
	if (selectedSleep=='race') frHTML+="<a class='selected' onclick='selectedSleep=\"race\"; midacbuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSleep=\"race\"; midacbuttons(); '>By Race</a>";
	if (selectedSleep=='mid') frHTML+="<a class='selected' style='width:150px' onclick='selectedSleep=\"mid\"; midacbuttons(); '>By Middle School</a>";
	else frHTML+="<a onclick='selectedSleep=\"mid\"; midacbuttons(); ' style='width:150px' >By Middle School</a>";
	frHTML+="<div id='frsleep' class='chart'></div>";
	if (selectedSleep == "race") raceCaption();

	frHTML+='<h1>\“I have a strong work ethic.\”</h1>';
	if (selectedWork=='gen') frHTML+="<a class='selected' onclick='selectedWork=\"gen\"; midacbuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedWork=\"gen\"; midacbuttons(); '>General</a>";
	if (selectedWork=='gender') frHTML+="<a class='selected' onclick='selectedWork=\"gender\"; midacbuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedWork=\"gender\"; midacbuttons(); '>By Gender</a>";
	if (selectedWork=='race') frHTML+="<a class='selected' onclick='selectedWork=\"race\"; midacbuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedWork=\"race\"; midacbuttons(); '>By Race</a>";
	frHTML+="<div id='frwork' class='chart'></div>";
	if (selectedWork == "race") raceCaption();

	frHTML += "<h1>\“I participate in my classes frequently.\”</h1>";

	if (selectedPar == "gen") frHTML += "<a class='selected' id='frMid' onclick='selectedPar=\"gen\"; midacbuttons();'>General</a>";
	else frHTML += "<a id='frMid' onclick='selectedPar=\"gen\"; midacbuttons();'>General</a>";
	if (selectedPar == "gender") frHTML += "<a class='selected' id='frMid' onclick='selectedPar=\"gender\"; midacbuttons();'>By Gender</a>";
	else frHTML += "<a id='frMid' onclick='selectedPar=\"gender\"; midacbuttons();'>By Gender</a>";
	if (selectedPar == "race") frHTML += "<a class='selected' onclick='selectedPar=\"race\"; midacbuttons();'>By Race</a>";
	else frHTML += "<a onclick='selectedPar=\"race\"; midacbuttons();'>By Race</a>";
	frHTML += "<div id='frpar' class='chart'></div>";
	if (selectedPar == "race") raceCaption();

	frHTML+='<h1>“I consider myself aware of current events.”</h1>';
	if (selectedAwr=='gen') frHTML+="<a class='selected' onclick='selectedAwr=\"gen\"; midacbuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedAwr=\"gen\"; midacbuttons(); '>General</a>";
	if (selectedAwr=='gender') frHTML+="<a class='selected' onclick='selectedAwr=\"gender\"; midacbuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedAwr=\"gender\"; midacbuttons(); '>By Gender</a>";
	if (selectedAwr=='race') frHTML+="<a class='selected' onclick='selectedAwr=\"race\"; midacbuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedAwr=\"race\"; midacbuttons(); '>By Race</a>";
	if (selectedAwr=='mid') frHTML+="<a class='selected' style='width:150px' onclick='selectedAwr=\"mid\"; midacbuttons(); '>By Middle School</a>";
	else frHTML+="<a onclick='selectedAwr=\"mid\"; midacbuttons(); ' style='width:150px'>By Middle School</a>";
	frHTML+="<div id='frawr' class='chart'></div>";
	if (selectedAwr == "race") raceCaption();
	document.getElementById("frmidacdiv").innerHTML = frHTML;
	frMakeChartsMidac();
}

function midlifebuttons() {
	frHTML = "";
	frHTML += "<br><br><hr><h1 class='head' id='midlifehead'>Middle School Life and Identity</h1>";
	frMidlifeNar();
	frHTML+='<h1>“I consider myself a sociable person.”</h1>';
	if (selectedSocial=='gen') frHTML+="<a class='selected' onclick='selectedSocial=\"gen\"; midlifebuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedSocial=\"gen\"; midlifebuttons(); '>General</a>";
	if (selectedSocial=='gender') frHTML+="<a class='selected' onclick='selectedSocial=\"gender\"; midlifebuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSocial=\"gender\"; midlifebuttons(); '>By Gender</a>";
	if (selectedSocial=='race') frHTML+="<a class='selected' onclick='selectedSocial=\"race\"; midlifebuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSocial=\"race\"; midlifebuttons(); '>By Race</a>";
	frHTML+="<div id='frsocial' class='chart'></div>";
	if (selectedSocial == "race") raceCaption();

	frHTML+='<h1>How many hours a week do you spend watching television?</h1>';
	if (selectedTv=='gen') frHTML+="<a class='selected' onclick='selectedTv=\"gen\"; midlifebuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedTv=\"gen\"; midlifebuttons(); '>General</a>";
	if (selectedTv=='gender') frHTML+="<a class='selected' onclick='selectedTv=\"gender\"; midlifebuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedTv=\"gender\"; midlifebuttons(); '>By Gender</a>";
	if (selectedTv=='race') frHTML+="<a class='selected' onclick='selectedTv=\"race\"; midlifebuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedTv=\"race\"; midlifebuttons(); '>By Race</a>";
	if (selectedTv=='sleep') frHTML+="<a class='selected' onclick='selectedTv=\"sleep\"; midlifebuttons(); ' style='width:150px'>By Hours of Sleep</a>";
	else frHTML+="<a onclick='selectedTv=\"sleep\"; midlifebuttons(); 'style='width:150px'>By Hours of Sleep</a>";
	frHTML+="<div id='frtv' class='chart'></div>";
	if (selectedTv == "race") raceCaption();

	frHTML+='<h1>How many hours a week do you spend on Facebook?</h1>';
	if (selectedFb=='gen') frHTML+="<a class='selected' onclick='selectedFb=\"gen\"; midlifebuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedFb=\"gen\"; midlifebuttons(); '>General</a>";
	if (selectedFb=='race') frHTML+="<a class='selected' onclick='selectedFb=\"race\"; midlifebuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedFb=\"race\"; midlifebuttons(); '>By Race</a>";
	if (selectedFb=='sleep') frHTML+="<a class='selected' onclick='selectedFb=\"sleep\"; midlifebuttons(); ' style='width:150px'>By Hours of Sleep</a>";
	else frHTML+="<a onclick='selectedFb=\"sleep\"; midlifebuttons();' style='width:150px'>By Hours of Sleep</a>";
	frHTML+="<div id='frfb' class='chart' style='width: 700px'></div>";
	if (selectedFb == "race") raceCaption();

	frHTML+='<h1>“I am opposed to the use of recreational drugs, like marijuana, by high school students.”</h1>';
	if (selectedDrug=='gen') frHTML+="<a class='selected' onclick='selectedDrug=\"gen\"; midlifebuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedDrug=\"gen\"; midlifebuttons(); '>General</a>";
	if (selectedDrug=='gender') frHTML+="<a class='selected' onclick='selectedDrug=\"gender\"; midlifebuttons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedDrug=\"gender\"; midlifebuttons(); '>By Gender</a>";
	if (selectedDrug=='race') frHTML+="<a class='selected' onclick='selectedDrug=\"race\"; midlifebuttons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedDrug=\"race\"; midlifebuttons(); '>By Race</a>";
	if (selectedDrug=='rel') frHTML+="<a class='selected' onclick='selectedDrug=\"rel\"; midlifebuttons(); '>By Religion</a>";
	else frHTML+="<a onclick='selectedDrug=\"rel\"; midlifebuttons(); '>By Religion</a>";
	if (selectedDrug=='ed') frHTML+="<a class='selected' style='width:280px' onclick='selectedDrug=\"ed\"; midlifebuttons(); '>By Parents' Highest Level of Education</a>";
	else frHTML+="<a onclick='selectedDrug=\"ed\"; midlifebuttons(); ' style='width:280px'>By Parents' Highest Level of Education</a>";
	frHTML+="<div id='frdrug' class='chart'></div>";
	if (selectedDrug == "race") raceCaption();

	frHTML+='<h1>“I am opposed to the use of alcohol by high school students.”</h1>';
	if (selectedAlc=='gen') frHTML+="<a class='selected' onclick='selectedAlc=\"gen\"; midlifebuttons(); '>General</a>";
	else frHTML+="<a onclick='selectedAlc=\"gen\"; midlifebuttons(); '>General</a>";
	if (selectedAlc=='drug') frHTML+="<a class='selected large' onclick='selectedAlc=\"drug\"; midlifebuttons(); '>By Position on Drugs</a>";
	else frHTML+="<a onclick='selectedAlc=\"drug\"; midlifebuttons(); ' class='large'>By Position on Drugs</a>";
	frHTML+="<div id='fralc' class='chart'></div>";

	frHTML+='<h1>“I partook in academic dishonesty.”</h1>';
	/*if (selectedCheat=='hc') frHTML+="<a class='selected' onclick='selectedCheat=\"hc\"; midlifebuttons(); '>Frequency of cheating in middle school.</a>";
	else frHTML+="<a onclick='selectedCheat=\"hc\"; midlifebuttons(); '>Frequency of cheating in middle school.</a>";
	if (selectedCheat=='wc') frHTML+="<a class='selected' onclick='selectedCheat=\"wc\"; midlifebuttons(); '>\"I would rather have a bad grade than cheat\"</a>";
	else frHTML+="<a onclick='selectedCheat=\"wc\"; midlifebuttons(); '>\"I would rather have a bad grade than cheat\"</a>";*/
	frHTML+="<div id='frcheat' class='chart'></div>";
	frHTML+= '<h1>“I would sacrifice a good grade rather than cheat.”</h1>';
	frHTML += "<div id ='frcheat2' class='chart'></div>";
	document.getElementById("frmidlifediv").innerHTML = frHTML;
	frMakeChartsMidlife();
}

function exButtons() {
	frHTML = "";
	frHTML += "<br><br><hr><h1 class='head' id='exhead'>Expectations of Stuyvesant and Future Plans</h1>";
	frExNar();
	frHTML+='<h1>“I feel prepared for the academics at Stuyvesant.”</h1>';
	if (selectedAcc=='gen') frHTML+="<a class='selected' onclick='selectedAcc=\"gen\"; exButtons(); '>General</a>";
	else frHTML+="<a onclick='selectedAcc=\"gen\"; exButtons(); '>General</a>";
	if (selectedAcc=='gender') frHTML+="<a class='selected' onclick='selectedAcc=\"gender\"; exButtons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedAcc=\"gender\"; exButtons(); '>By Gender</a>";
	if (selectedAcc=='race') frHTML+="<a class='selected' onclick='selectedAcc=\"race\"; exButtons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedAcc=\"race\"; exButtons(); '>By Race</a>";
	if (selectedAcc=='mid') frHTML+="<a class='selected' style='width:150px' onclick='selectedAcc=\"mid\"; exButtons(); '>By Middle School</a>";
	else frHTML+="<a onclick='selectedAcc=\"mid\"; exButtons(); ' style='width:150px'>By Middle School</a>";
	if (selectedAcc=='par') frHTML+="<a class='selected large' onclick='selectedAcc=\"par\"; exButtons(); '>By Parental Pressure</a>";
	else frHTML+="<a onclick='selectedAcc=\"par\"; exButtons(); ' class='large'>By Parental Pressure</a>";
	frHTML+="<div id='fracc' class='chart'></div>";
	if (selectedAcc == "race") raceCaption();

	frHTML+='<h1>What do you predict as your class rank?</h1>';
	if (selectedGrade=='gen') frHTML+="<a class='selected' onclick='selectedGrade=\"gen\"; exButtons(); '>General</a>";
	else frHTML+="<a onclick='selectedGrade=\"gen\"; exButtons(); '>General</a>";
	if (selectedGrade=='gender') frHTML+="<a class='selected' onclick='selectedGrade=\"gender\"; exButtons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedGrade=\"gender\"; exButtons(); '>By Gender</a>";
	if (selectedGrade=='race') frHTML+="<a class='selected' onclick='selectedGrade=\"race\"; exButtons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedGrade=\"race\"; exButtons(); '>By Race</a>";
	frHTML+="<div id='frgrade' class='chart'></div>";
	if (selectedGrade == "race") raceCaption();

	frHTML+='<h1>How many hours of sleep do you expect to get per night?</h1>';
	if (selectedSpr=='gen') frHTML+="<a class='selected' onclick='selectedSpr=\"gen\"; exButtons(); '>General</a>";
	else frHTML+="<a onclick='selectedSpr=\"gen\"; exButtons(); '>General</a>";
	if (selectedSpr=='gender') frHTML+="<a class='selected' onclick='selectedSpr=\"gender\"; exButtons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSpr=\"gender\"; exButtons(); '>By Gender</a>";
	if (selectedSpr=='race') frHTML+="<a class='selected' onclick='selectedSpr=\"race\"; exButtons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSpr=\"race\"; exButtons(); '>By Race</a>";
	if (selectedSpr=='cs') frHTML+="<a class='selected large' onclick='selectedSpr=\"cs\"; exButtons(); '>By Current Sleep</a>";
	else frHTML+="<a onclick='selectedSpr=\"cs\"; exButtons(); ' class='large'>By Current Sleep</a>";
	if (selectedSpr=='grade') frHTML+="<a class='selected large' onclick='selectedSpr=\"grade\"; exButtons(); '>By Expected Grade Rank</a>";
	else frHTML+="<a onclick='selectedSpr=\"grade\"; exButtons(); ' class='large'>By Expected Grade Rank</a>";
	frHTML+="<div id='frspr' class='chart'></div>";
	if (selectedSpr == "race") raceCaption();

	frHTML+='<h1>“After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT.”</h1>';
	if (selectedSch=='gen') frHTML+="<a class='selected' onclick='selectedSch=\"gen\"; exButtons(); '>General</a>";
	else frHTML+="<a onclick='selectedSch=\"gen\"; exButtons(); '>General</a>";
	if (selectedSch=='gender') frHTML+="<a class='selected' onclick='selectedSch=\"gender\"; exButtons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedSch=\"gender\"; exButtons(); '>By Gender</a>";
	if (selectedSch=='race') frHTML+="<a class='selected' onclick='selectedSch=\"race\"; exButtons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedSch=\"race\"; exButtons(); '>By Race</a>";
	if (selectedSch=='soc') frHTML+="<a class='selected large' onclick='selectedSch=\"soc\"; exButtons(); '>By Socioeconomic Status</a>";
	else frHTML+="<a onclick='selectedSch=\"soc\"; exButtons(); ' class='large'>By Socioeconomic Status</a>";
	if (selectedSch=='par') frHTML+="<a class='selected' style='width:280px' onclick='selectedSch=\"par\"; exButtons(); '>By Parents' Highest Level of Education</a>";
	else frHTML+="<a onclick='selectedSch=\"par\"; exButtons(); ' style='width:280px'>By Parents' Highest Level of Education</a>";
	frHTML+="<div id='frsch' class='chart'></div>";
	if (selectedSch == "race") raceCaption();
	if (selectedSch == "soc") socCaption();

	frHTML+='<h1>Which extracurricular activity do you think you will most likely take part in at Stuyvesant?</h1>';
	if (selectedExc=='gen') frHTML+="<a class='selected' onclick='selectedExc=\"gen\"; exButtons(); '>General</a>";
	else frHTML+="<a onclick='selectedExc=\"gen\"; exButtons(); '>General</a>";
	if (selectedExc=='gender') frHTML+="<a class='selected' onclick='selectedExc=\"gender\"; exButtons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedExc=\"gender\"; exButtons(); '>By Gender</a>";
	if (selectedExc=='race') frHTML+="<a class='selected' onclick='selectedExc=\"race\"; exButtons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedExc=\"race\"; exButtons(); '>By Race</a>";
	frHTML+="<div id='frexc' class='chart'></div>";
	if (selectedExc == "race") raceCaption();

	frHTML+='<h1>What field do you hope to go into when you are older?</h1>';
	if (selectedGoal=='gen') frHTML+="<a class='selected' onclick='selectedGoal=\"gen\"; exButtons(); '>General</a>";
	else frHTML+="<a onclick='selectedGoal=\"gen\"; exButtons(); '>General</a>";
	if (selectedGoal=='gender') frHTML+="<a class='selected' onclick='selectedGoal=\"gender\"; exButtons(); '>By Gender</a>";
	else frHTML+="<a onclick='selectedGoal=\"gender\"; exButtons(); '>By Gender</a>";
	if (selectedGoal=='race') frHTML+="<a class='selected' onclick='selectedGoal=\"race\"; exButtons(); '>By Race</a>";
	else frHTML+="<a onclick='selectedGoal=\"race\"; exButtons(); '>By Race</a>";
	frHTML+="<div id='frgoal' class='chart' ></div>";
	if (selectedGoal == "race") raceCaption();
	frHTML += "<br><br><br>";
	frHTML += "<div class=\"ending\">The Spectator would like to thank Assistant Principal of Chemistry and Physics Scott Thomas for taking time after the school year ended to allow us to use his Scantron machine. Without his help and patience, the Freshman Survey would have been impossible. We would also like to thank the Big Sib Chairs, as well as all the Big Sibs for helping us distribute the Freshman Survey during Camp Stuy.</div><br>";
	document.getElementById("frexdiv").innerHTML = frHTML;
	frMakeChartsEx();
}

function frMakeChartsDemo() {
	if (selected == "gen") frGender();
	else if (selected == "eth") frEth();
	else if (selected == "leg") frLeg();
	else if (selected == "rel") frRel();
	else if (selected == "ed") frEd();
	else if (selected == "seo") frSeo();
}

function frMakeChartsApp() {
	if (selected == "soc") {
		if (selectedSoc == "gen") frSoc();
		else if (selectedSoc == "race") frSocRace();
	}
	if (selectedMid == "gen") frMid();
	else if (selectedMid == "race") frMidRace();

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
}

function frMakeChartsMidac() {
	if (selectedPar == "gen") frPar();
	else if (selectedPar == "gender") frParGen();
	else if (selectedPar == "race") frParRace();

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
}

function frMakeChartsMidlife() {
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
}

function frMakeChartsEx() {
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
