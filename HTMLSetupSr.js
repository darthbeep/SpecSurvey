var srSelectedDemo = "gender";
var srSelectedDemo2 = "seo";
var srSelectedGpa = "gpa";
var srSelectedCol = "gen";
var srSelectedMpr = "gen";
var srSelectedFch = "gen";
var srSelectedSco = "gen";
var srSelectedSleep = "und";
var srSelectedAcd = "gen";
var srSelectedDrug = "alc";
var srSelectedAgain = "gen";

function allbuttons() {
	document.getElementById("fr").innerHTML = "";
	document.getElementById("comp").innerHTML = "";
	srTop();
	srHTML = "";
	srtopbuttons();
	srdemobuttons();
	srlifebuttons();
	document.getElementById("sr").innerHTML = srHTML;
	srMakeCharts();
}

function srtopbuttons() {
	if (view == "freshmen") srHTML += "<a class = 'selected' onclick='demobuttons()'>Freshman Survey</a>";
	else srHTML += "<a onclick='view = \"freshmen\"; demobuttons();' class='large'>Freshman Survey</a>";
	if (view == "seniors") srHTML += "<a class = 'selected large' onclick='demobuttons()'>Senior Survey</a>";
	else srHTML += "<a onclick='view = \"seniors\";allbuttons();'>Senior Survey</a>";
	if (view == "compare") srHTML += "<a class = 'selected' onclick='call()'>Comparison Highlights</a>";
	else srHTML += "<a onclick='view = \"compare\";call();' class='large'>Comparison Highlights</a>";
}


function srdemobuttons() {
	srHTML += "<h1 class='head' id='srdemohead'>Demographics</h1>";
	srDemoNar();
	//srHTML+='<h1>Demographics</h1>';
	if (srSelectedDemo=='gender') srHTML+="<a class='selected' onclick='srSelectedDemo=\"gender\"; allbuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"gender\"; allbuttons(); '>Gender</a>";
	if (srSelectedDemo=='race') srHTML+="<a class='selected' onclick='srSelectedDemo=\"race\"; allbuttons(); '>Race</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"race\"; allbuttons(); '>Race</a>";
	if (srSelectedDemo=='rel') srHTML+="<a class='selected' onclick='srSelectedDemo=\"rel\"; allbuttons(); '>Religion</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"rel\"; allbuttons(); '>Religion</a>";
	if (srSelectedDemo=='mid') srHTML+="<a class='selected' onclick='srSelectedDemo=\"mid\"; allbuttons(); '>Middle School</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"mid\"; allbuttons(); '>Middle School</a>";
	if (srSelectedDemo=='soc') srHTML+="<a class='selected large' onclick='srSelectedDemo=\"soc\"; allbuttons(); '>Socioeconomic Status</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"soc\"; allbuttons(); ' class='large'>Socioeconomic Status</a>";
	if (srSelectedDemo=='seo') srHTML+="<a class='selected large' onclick='srSelectedDemo=\"seo\"; allbuttons(); '>Sexual Orientation</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"seo\"; allbuttons(); ' class='large'>Sexual Orientation</a>";
	//if (srSelectedDemo=='sch') srHTML+="<a class='selected' onclick='srSelectedDemo=\"sch\"; allbuttons(); '>Change in Sexual Orientation</a>";
	//else srHTML+="<a onclick='srSelectedDemo=\"sch\"; allbuttons(); '>Change in Sexual Orientation</a>";
	srHTML+="<div id='srdemo' class='chart'></div>";
	if (srSelectedDemo == 'soc') {
		if (srSelectedSco=='gen') srHTML+="<a class='selected' onclick='srSelectedSco=\"gen\"; allbuttons(); '>General</a>";
		else srHTML+="<a onclick='srSelectedSco=\"gen\"; allbuttons(); '>General</a>";
		if (srSelectedSco=='race') srHTML+="<a class='selected' onclick='srSelectedSco=\"race\"; allbuttons(); '>By Race</a>";
		else srHTML+="<a onclick='srSelectedSco=\"race\"; allbuttons(); '>By Race</a>";
		if (srSelectedSco == 'race') srHTML += raceDiv;
	}
	if (srSelectedDemo == 'seo') {
		if (srSelectedDemo2=='seo') srHTML+="<a class='selected large' onclick='srSelectedDemo2=\"seo\"; allbuttons(); '>Sexual Orientation</a>";
		else srHTML+="<a onclick='srSelectedDemo2=\"seo\"; allbuttons(); ' class ='large'>Sexual Orientation</a>";
		if (srSelectedDemo2=='sch') srHTML+="<a class='selected large' onclick='srSelectedDemo2=\"sch\"; allbuttons(); '>Change in Sexual Orientation</a>";
		else srHTML+="<a onclick='srSelectedDemo2=\"sch\"; allbuttons(); ' class='large'>Change in Sexual Orientation</a>";
	}
	/*srHTML+='<h1>Socioeconomic Status</h1>';
	if (srSelectedSco=='gen') srHTML+="<a class='selected' onclick='srSelectedSco=\"gen\"; allbuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedSco=\"gen\"; allbuttons(); '>General</a>";
	if (srSelectedSco=='race') srHTML+="<a class='selected' onclick='srSelectedSco=\"race\"; allbuttons(); '>By Race</a>";
	else srHTML+="<a onclick='srSelectedSco=\"race\"; allbuttons(); '>By Race</a>";
	srHTML+="<div id='srsco' class='chart'></div>";*/

	srHTML += "<h1 class='head' id='sracchead'>Stuyvesant Academics</h1>";
	srAcNar();
	srHTML+='<h1>What was your Stuyvesant GPA?</h1>';
	//if (srSelectedGpa=='gpa') srHTML+="<a class='selected' onclick='srSelectedGpa=\"gpa\"; allbuttons(); '>GPA</a>";
	//else srHTML+="<a onclick='srSelectedGpa=\"gpa\"; allbuttons(); '>GPA</a>";
	srHTML+="<div id='srgpa' class='chart'></div>";

	srHTML+='<h1>What type of college will you be attending, if any?</h1>';
	if (srSelectedCol=='gen') srHTML+="<a class='selected' onclick='srSelectedCol=\"gen\"; allbuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedCol=\"gen\"; allbuttons(); '>General</a>";
	if (srSelectedCol=='gpa') srHTML+="<a class='selected' onclick='srSelectedCol=\"gpa\"; allbuttons(); '>By GPA</a>";
	else srHTML+="<a onclick='srSelectedCol=\"gpa\"; allbuttons(); '>By GPA</a>";
	if (srSelectedCol=='soc') srHTML+="<a class='selected large' onclick='srSelectedCol=\"soc\"; allbuttons(); '>By Socioeconomic Status</a>";
	else srHTML+="<a onclick='srSelectedCol=\"soc\"; allbuttons(); ' class='large'>By Socioeconomic Status</a>";
	srHTML+="<div id='srcol' class='chart'></div>";

	srHTML+='<h1>How well did your middle school prepare you for Stuyvesant?</h1>';
	if (srSelectedMpr=='gen') srHTML+="<a class='selected' onclick='srSelectedMpr=\"gen\"; allbuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedMpr=\"gen\"; allbuttons(); '>General</a>";
	if (srSelectedMpr=='mid') srHTML+="<a class='selected large' onclick='srSelectedMpr=\"mid\"; allbuttons(); '>By Middle School</a>";
	else srHTML+="<a onclick='srSelectedMpr=\"mid\"; allbuttons(); ' class='large'>By Middle School</a>";
	srHTML+="<div id='srmpr' class='chart'></div>";

	srHTML+='<h1>Did your favorite subject or academic focus change while at Stuy?</h1>';
	if (srSelectedFch=='gen') srHTML+="<a class='selected' onclick='srSelectedFch=\"gen\"; allbuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedFch=\"gen\"; allbuttons(); '>General</a>";
	if (srSelectedFch=='gender') srHTML+="<a class='selected' onclick='srSelectedFch=\"gender\"; allbuttons(); '>By Gender</a>";
	else srHTML+="<a onclick='srSelectedFch=\"gender\"; allbuttons(); '>By Gender</a>";
	srHTML+="<div id='srfch' class='chart'></div>";

	srHTML+="<h1>How many teachers at Stuyvesant strongly impacted or inspired you?</h1>";
	srHTML+="<div id='srimp' class='chart'></div>";
}

function srlifebuttons() {
	srHTML += "<h1 class='head' id='srlifehead'>Student Life and Identity</h1>";
	srLifeNar();
	srHTML+='<h1>How many hours of sleep did you get a night?</h1>';
	if (srSelectedSleep=='und') srHTML+="<a class='selected large' onclick='srSelectedSleep=\"und\"; allbuttons(); '>As an Underclassman</a>";
	else srHTML+="<a onclick='srSelectedSleep=\"und\"; allbuttons(); ' class='large'>As an Underclassman</a>";
	if (srSelectedSleep=='upp') srHTML+="<a class='selected large' onclick='srSelectedSleep=\"upp\"; allbuttons(); '>As an Upperclassman</a>";
	else srHTML+="<a onclick='srSelectedSleep=\"upp\"; allbuttons(); ' class='large'>As an Upperclassman</a>";
	if (srSelectedSleep=='gpa') srHTML+="<a class='selected large' onclick='srSelectedSleep=\"gpa\"; allbuttons(); '>As an Upperclassman By GPA</a>";
	else srHTML+="<a onclick='srSelectedSleep=\"gpa\"; allbuttons(); ' class='large'>As an Upperclassman By GPA</a>";
	srHTML+="<div id='srsleep' class='chart'></div>";

	srHTML+='<h1>How many all-nighters did you pull at Stuy?</h1>';
	srHTML+="<div id='sraln' class='chart'></div>";
	srHTML+='<h1>How many "mental health days" did you take?</h1>';
	srHTML+="<div id='srmhd' class='chart'></div>";
	srHTML+='<h1>Were you diagnosed with a mental illness during your time at Stuyvesant?</h1>';
	srHTML+="<div id='srmen' class='chart'></div>";

	srHTML+='<h1>“In my time at Stuy, I partook in some form of academic dishonesty.”</h1>';
	if (srSelectedAcd=='gen') srHTML+="<a class='selected' onclick='srSelectedAcd=\"gen\"; allbuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedAcd=\"gen\"; allbuttons(); '>General</a>";
	if (srSelectedAcd=='gpa') srHTML+="<a class='selected' onclick='srSelectedAcd=\"gpa\"; allbuttons(); '>By GPA</a>";
	else srHTML+="<a onclick='srSelectedAcd=\"gpa\"; allbuttons(); '>By GPA</a>";
	srHTML+="<div id='sracd' class='chart'></div>";

	srHTML+='<h1>“I partook in sexual activity.”</h1>';
	srHTML+="<div id='srsea' class='chart'></div>";

	srHTML+='<h1>“I used drugs, cigarettes, or alcohol recreationally.”</h1>';
	if (srSelectedDrug=='alc') srHTML+="<a class='selected' onclick='srSelectedDrug=\"alc\"; allbuttons(); '>Alcohol</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"alc\"; allbuttons(); '>Alcohol</a>";
	if (srSelectedDrug=='cig') srHTML+="<a class='selected' onclick='srSelectedDrug=\"cig\"; allbuttons(); '>Cigarettes</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"cig\"; allbuttons(); '>Cigarettes</a>";
	if (srSelectedDrug=='420blazeit') srHTML+="<a class='selected' onclick='srSelectedDrug=\"420blazeit\"; allbuttons(); '>Marijuana</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"420blazeit\"; allbuttons(); '>Marijuana</a>";
	if (srSelectedDrug=='my future tbh') srHTML+="<a class='selected' onclick='srSelectedDrug=\"my future tbh\"; allbuttons(); '>Study Drugs</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"my future tbh\"; allbuttons(); '>Study Drugs</a>";
	if (srSelectedDrug=='gen') srHTML+="<a class='selected large' onclick='srSelectedDrug=\"gen\"; allbuttons(); '>Perscription Drugs</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"gen\"; allbuttons(); ' class='large'>Perscription Drugs</a>";
	srHTML+="<div id='srdrug' class='chart'></div>";

	srHTML+='<h1>Would you choose Stuyvesant again?</h1>';
	if (srSelectedAgain=='gen') srHTML+="<a class='selected' onclick='srSelectedAgain=\"gen\"; allbuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"gen\"; allbuttons(); '>General</a>";
	if (srSelectedAgain=='gpa') srHTML+="<a class='selected' onclick='srSelectedAgain=\"gpa\"; allbuttons(); '>By GPA</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"gpa\"; allbuttons(); '>By GPA</a>";
	if (srSelectedAgain=='col') srHTML+="<a class='selected' onclick='srSelectedAgain=\"col\"; allbuttons(); '>By College</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"col\"; allbuttons(); '>By College</a>";
	if (srSelectedAgain=='ins') srHTML+="<a class='selected xl' onclick='srSelectedAgain=\"ins\"; allbuttons(); '>By Number of Inspiring Teachers</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"ins\"; allbuttons(); ' class='xl'>By Number of Inspiring Teachers</a>";
	srHTML+="<div id='sragain' class='chart'></div>";
}

function srMakeCharts() {
	if (srSelectedDemo=='gender') srDemoGender();
	if (srSelectedDemo=='race') srDemoRace();
	if (srSelectedDemo=='rel') srDemoRel();
	if (srSelectedDemo=='mid') srDemoMid();

	if (srSelectedDemo == 'seo') {
		if (srSelectedDemo2=='seo') srDemoSeo();
		if (srSelectedDemo2=='sch') srDemoSch();
	}

	srGpa();

	if (srSelectedCol=='gen') srCol();
	if (srSelectedCol=='gpa') srColGpa();
	if (srSelectedCol=='soc') srColSoc();

	if (srSelectedMpr=='gen') srMpr();
	if (srSelectedMpr=='mid') srMprMid();

	if (srSelectedFch=='gen') srFch();
	if (srSelectedFch=='gender') srFchGender();

	if (srSelectedDemo == "soc") {
		if (srSelectedSco=='gen') srSco();
		if (srSelectedSco=='race') srScoRace();
	}
	srImp();

	if (srSelectedSleep=='und') srSleepUnd();
	if (srSelectedSleep=='upp') srSleepUpp();
	if (srSelectedSleep=='gpa') srSleepGpa();

	srAln();
	srMhd();
	srMen();

	if (srSelectedAcd=='gen') srAcd();
	if (srSelectedAcd=='gpa') srAcdGpa();

	srSea();

	if (srSelectedDrug=='gen') srDrug();
	if (srSelectedDrug=='alc') srDrugAlc();
	if (srSelectedDrug=='cig') srDrugCig();
	if (srSelectedDrug=='420blazeit') srDrug420blazeit();
	if (srSelectedDrug=='my future tbh') srDrugMyfuturetbh();

	if (srSelectedAgain=='gen') srAgain();
	if (srSelectedAgain=='gpa') srAgainGpa();
	if (srSelectedAgain=='col') srAgainCol();
	if (srSelectedAgain=='ins') srAgainIns();
}