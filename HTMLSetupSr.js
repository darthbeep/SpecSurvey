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
	srDivSetup();
	document.getElementById("fr").innerHTML = "";
	document.getElementById("comp").innerHTML = "";
	srTop();
	//srHTML = "";
	srtopbuttons();
	srdemobuttons();
	srlifebuttons();
	//document.getElementById("sr").innerHTML = srHTML;
	//srMakeCharts();
}

function srDivSetup() {
	document.getElementById("fr").innerHTML = "";
	document.getElementById("comp").innerHTML = "";
	srHTML = "";
	srHTML += "<div id='srtopbdiv'></div>";
	srHTML += "<div id='srtopdiv'></div>";
	srHTML += "<div id='srtopdiv'></div>";
	srHTML += "<div id='srdemodiv'></div>";
	srHTML += "<div id='srstudiv'></div>";
	document.getElementById("sr").innerHTML = srHTML;
}

function srtopbuttons() {
	srHTML = "";
	if (view == "freshmen") srHTML += "<a class = 'selected switchbutton' onclick='demobuttons()'>Freshman Survey</a>";
	else srHTML += "<a onclick='view = \"freshmen\"; demobuttons();' class='large switchbutton'>Freshman Survey</a>";
	if (view == "seniors") srHTML += "<a class = 'selected large switchbutton' onclick='demobuttons()'>Senior Survey</a>";
	else srHTML += "<a onclick='view = \"seniors\";allbuttons();'>Senior Survey</a>";
	if (view == "compare") srHTML += "<a class = 'selected switchbutton' onclick='call()'>Comparison Highlights</a>";
	else srHTML += "<a onclick='view = \"compare\";call();' class='large switchbutton'>Comparison Highlights</a>";
	document.getElementById("srtopbdiv").innerHTML = srHTML;
}


function srdemobuttons() {
	srHTML = "";
	srHTML += "<h1 class='head' id='srdemohead'>Demographics</h1>";
	srDemoNar();
	//srHTML+='<h1>Demographics</h1>';
	if (srSelectedDemo=='gender') srHTML+="<a class='selected' onclick='srSelectedDemo=\"gender\"; srdemobuttons(); '>Gender</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"gender\"; srdemobuttons(); '>Gender</a>";
	if (srSelectedDemo=='race') srHTML+="<a class='selected' onclick='srSelectedDemo=\"race\"; srdemobuttons(); '>Race</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"race\"; srdemobuttons(); '>Race</a>";
	if (srSelectedDemo=='rel') srHTML+="<a class='selected' onclick='srSelectedDemo=\"rel\"; srdemobuttons(); '>Religion</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"rel\"; srdemobuttons(); '>Religion</a>";
	if (srSelectedDemo=='mid') srHTML+="<a class='selected' style='width: 130px' onclick='srSelectedDemo=\"mid\"; srdemobuttons(); '>Middle School</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"mid\"; srdemobuttons();' style='width: 130px'>Middle School</a>";
	if (srSelectedDemo=='soc') srHTML+="<a class='selected large' onclick='srSelectedDemo=\"soc\"; srdemobuttons(); '>Socioeconomic Status</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"soc\"; srdemobuttons(); ' class='large'>Socioeconomic Status</a>";
	if (srSelectedDemo=='seo') srHTML+="<a class='selected large' onclick='srSelectedDemo=\"seo\"; srdemobuttons(); '>Sexual Orientation</a>";
	else srHTML+="<a onclick='srSelectedDemo=\"seo\"; srdemobuttons(); ' class='large'>Sexual Orientation</a>";
	//if (srSelectedDemo=='sch') srHTML+="<a class='selected' onclick='srSelectedDemo=\"sch\"; srdemobuttons(); '>Change in Sexual Orientation</a>";
	//else srHTML+="<a onclick='srSelectedDemo=\"sch\"; srdemobuttons(); '>Change in Sexual Orientation</a>";
	srHTML+="<div id='srdemo' class='chart'></div>";
	if (srSelectedDemo == 'soc') {
		if (srSelectedSco=='gen') srHTML+="<a class='selected' onclick='srSelectedSco=\"gen\"; srdemobuttons(); '>General</a>";
		else srHTML+="<a onclick='srSelectedSco=\"gen\"; srdemobuttons(); '>General</a>";
		if (srSelectedSco=='race') srHTML+="<a class='selected' onclick='srSelectedSco=\"race\"; srdemobuttons(); '>By Race</a>";
		else srHTML+="<a onclick='srSelectedSco=\"race\"; srdemobuttons(); '>By Race</a>";
		if (srSelectedSco == 'race') srHTML += raceDiv;
	}
	if (srSelectedDemo == 'seo') {
		if (srSelectedDemo2=='seo') srHTML+="<a class='selected large' onclick='srSelectedDemo2=\"seo\"; srdemobuttons(); '>Sexual Orientation</a>";
		else srHTML+="<a onclick='srSelectedDemo2=\"seo\"; srdemobuttons(); ' class ='large'>Sexual Orientation</a>";
		if (srSelectedDemo2=='sch') srHTML+="<a class='selected large' onclick='srSelectedDemo2=\"sch\"; srdemobuttons(); '>Change in Sexual Orientation</a>";
		else srHTML+="<a onclick='srSelectedDemo2=\"sch\"; srdemobuttons(); ' class='large'>Change in Sexual Orientation</a>";
	}
	/*srHTML+='<h1>Socioeconomic Status</h1>';
	if (srSelectedSco=='gen') srHTML+="<a class='selected' onclick='srSelectedSco=\"gen\"; srdemobuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedSco=\"gen\"; srdemobuttons(); '>General</a>";
	if (srSelectedSco=='race') srHTML+="<a class='selected' onclick='srSelectedSco=\"race\"; srdemobuttons(); '>By Race</a>";
	else srHTML+="<a onclick='srSelectedSco=\"race\"; srdemobuttons(); '>By Race</a>";
	srHTML+="<div id='srsco' class='chart'></div>";*/
	srHTML += "<br><br><hr><h1 class='head' id='sracchead'>Stuyvesant Academics</h1>";
	srAcNar();
	srHTML+='<h1>What was your Stuyvesant GPA?</h1>';
	//if (srSelectedGpa=='gpa') srHTML+="<a class='selected' onclick='srSelectedGpa=\"gpa\"; srdemobuttons(); '>GPA</a>";
	//else srHTML+="<a onclick='srSelectedGpa=\"gpa\"; srdemobuttons(); '>GPA</a>";
	srHTML+="<div id='srgpa' class='chart'></div>";

	srHTML+='<h1>What type of college will you be attending, if any?</h1>';
	if (srSelectedCol=='gen') srHTML+="<a class='selected' onclick='srSelectedCol=\"gen\"; srdemobuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedCol=\"gen\"; srdemobuttons(); '>General</a>";
	if (srSelectedCol=='gpa') srHTML+="<a class='selected' onclick='srSelectedCol=\"gpa\"; srdemobuttons(); '>By GPA</a>";
	else srHTML+="<a onclick='srSelectedCol=\"gpa\"; srdemobuttons(); '>By GPA</a>";
	if (srSelectedCol=='soc') srHTML+="<a class='selected large' onclick='srSelectedCol=\"soc\"; srdemobuttons(); '>By Socioeconomic Status</a>";
	else srHTML+="<a onclick='srSelectedCol=\"soc\"; srdemobuttons(); ' class='large'>By Socioeconomic Status</a>";
	srHTML+="<div id='srcol' class='chart'></div>";
	//if (srSelectedCol=='soc') socCaption();

	srHTML+='<h1>How well did your middle school prepare you for Stuyvesant?</h1>';
	if (srSelectedMpr=='gen') srHTML+="<a class='selected' onclick='srSelectedMpr=\"gen\"; srdemobuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedMpr=\"gen\"; srdemobuttons(); '>General</a>";
	if (srSelectedMpr=='mid') srHTML+="<a class='selected large' onclick='srSelectedMpr=\"mid\"; srdemobuttons(); '>By Middle School</a>";
	else srHTML+="<a onclick='srSelectedMpr=\"mid\"; srdemobuttons(); ' class='large'>By Middle School</a>";
	srHTML+="<div id='srmpr' class='chart'></div>";

	srHTML+='<h1>Did your favorite subject or academic focus change while at Stuy?</h1>';
	if (srSelectedFch=='gen') srHTML+="<a class='selected' onclick='srSelectedFch=\"gen\"; srdemobuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedFch=\"gen\"; srdemobuttons(); '>General</a>";
	if (srSelectedFch=='gender') srHTML+="<a class='selected' onclick='srSelectedFch=\"gender\"; srdemobuttons(); '>By Gender</a>";
	else srHTML+="<a onclick='srSelectedFch=\"gender\"; srdemobuttons(); '>By Gender</a>";
	srHTML+="<div id='srfch' class='chart'></div>";

	srHTML+="<h1>How many teachers at Stuyvesant strongly impacted or inspired you?</h1>";
	srHTML+="<div id='srimp' class='chart'></div>";
	document.getElementById("srdemodiv").innerHTML = srHTML;
	srMakeCharts1();
}

function srlifebuttons() {
	srHTML = "";
	srHTML += "<br><br><hr><h1 class='head' id='srlifehead'>Student Life and Identity</h1>";
	srLifeNar();
	srHTML+='<h1>How many hours of sleep did you get a night?</h1>';
	if (srSelectedSleep=='und') srHTML+="<a class='selected large' onclick='srSelectedSleep=\"und\"; srlifebuttons(); '>As an Underclassman</a>";
	else srHTML+="<a onclick='srSelectedSleep=\"und\"; srlifebuttons(); ' class='large'>As an Underclassman</a>";
	if (srSelectedSleep=='upp') srHTML+="<a class='selected large' onclick='srSelectedSleep=\"upp\"; srlifebuttons(); '>As an Upperclassman</a>";
	else srHTML+="<a onclick='srSelectedSleep=\"upp\"; srlifebuttons(); ' class='large'>As an Upperclassman</a>";
	if (srSelectedSleep=='gpa') srHTML+="<a class='selected' style='width:250px' onclick='srSelectedSleep=\"gpa\"; srlifebuttons(); '>As an Upperclassman By GPA</a>";
	else srHTML+="<a onclick='srSelectedSleep=\"gpa\"; srlifebuttons(); ' style='width:250px'>As an Upperclassman By GPA</a>";
	srHTML+="<div id='srsleep' class='chart'></div>";

	srHTML+='<h1>How many all-nighters did you pull at Stuy?</h1>';
	srHTML+="<div id='sraln' class='chart'></div>";
	srHTML+='<h1>How many "mental health days" did you take?</h1>';
	srHTML+="<div id='srmhd' class='chart'></div>";
	srHTML+='<h1>Were you diagnosed with a mental illness during your time at Stuyvesant?</h1>';
	srHTML+="<div id='srmen' class='chart' style='width:700px'></div>";

	srHTML+='<h1>“In my time at Stuy, I partook in some form of academic dishonesty.”</h1>';
	if (srSelectedAcd=='gen') srHTML+="<a class='selected' onclick='srSelectedAcd=\"gen\"; srlifebuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedAcd=\"gen\"; srlifebuttons(); '>General</a>";
	if (srSelectedAcd=='gpa') srHTML+="<a class='selected' onclick='srSelectedAcd=\"gpa\"; srlifebuttons(); '>By GPA</a>";
	else srHTML+="<a onclick='srSelectedAcd=\"gpa\"; srlifebuttons(); '>By GPA</a>";
	srHTML+="<div id='sracd' class='chart'></div>";

	srHTML+='<h1>“I partook in sexual activity.”</h1>';
	srHTML+="<div id='srsea' class='chart'></div>";

	srHTML+='<h1>“I used drugs, cigarettes, or alcohol recreationally.”</h1>';
	if (srSelectedDrug=='alc') srHTML+="<a class='selected' onclick='srSelectedDrug=\"alc\"; srlifebuttons(); '>Alcohol</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"alc\"; srlifebuttons(); '>Alcohol</a>";
	if (srSelectedDrug=='cig') srHTML+="<a class='selected' onclick='srSelectedDrug=\"cig\"; srlifebuttons(); '>Cigarettes</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"cig\"; srlifebuttons(); '>Cigarettes</a>";
	if (srSelectedDrug=='420blazeit') srHTML+="<a class='selected' onclick='srSelectedDrug=\"420blazeit\"; srlifebuttons(); '>Marijuana</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"420blazeit\"; srlifebuttons(); '>Marijuana</a>";
	if (srSelectedDrug=='my future tbh') srHTML+="<a class='selected' onclick='srSelectedDrug=\"my future tbh\"; srlifebuttons(); '>Study Drugs</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"my future tbh\"; srlifebuttons(); '>Study Drugs</a>";
	if (srSelectedDrug=='gen') srHTML+="<a class='selected large' onclick='srSelectedDrug=\"gen\"; srlifebuttons(); '>Perscription Drugs</a>";
	else srHTML+="<a onclick='srSelectedDrug=\"gen\"; srlifebuttons(); ' class='large'>Perscription Drugs</a>";
	srHTML+="<div id='srdrug' class='chart'></div>";

	srHTML+='<h1>Would you choose Stuyvesant again?</h1>';
	if (srSelectedAgain=='gen') srHTML+="<a class='selected' onclick='srSelectedAgain=\"gen\"; srlifebuttons(); '>General</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"gen\"; srlifebuttons(); '>General</a>";
	if (srSelectedAgain=='gpa') srHTML+="<a class='selected' onclick='srSelectedAgain=\"gpa\"; srlifebuttons(); '>By GPA</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"gpa\"; srlifebuttons(); '>By GPA</a>";
	if (srSelectedAgain=='col') srHTML+="<a class='selected' onclick='srSelectedAgain=\"col\"; srlifebuttons(); '>By College</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"col\"; srlifebuttons(); '>By College</a>";
	if (srSelectedAgain=='ins') srHTML+="<a class='selected' style='width:280px' onclick='srSelectedAgain=\"ins\"; srlifebuttons(); '>By Number of Inspiring Teachers</a>";
	else srHTML+="<a onclick='srSelectedAgain=\"ins\"; srlifebuttons(); ' style='width:280px'>By Number of Inspiring Teachers</a>";
	srHTML+="<div id='sragain' class='chart'></div>";
	srHTML+="<br><br><br>";
	document.getElementById("srstudiv").innerHTML = srHTML;
	srMakeCharts2();
}

function srMakeCharts1() {
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
}
function srMakeCharts2() {
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
