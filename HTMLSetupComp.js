var compHTML = "";

function call() {
	document.getElementById("fr").innerHTML = "";
	document.getElementById("sr").innerHTML = "";
	compTop();
	compHTML = "";
	comptopbuttons();
	cmakeeverything();
	document.getElementById("comp").innerHTML = compHTML;
	compCharts();
}

function comptopbuttons() {
	if (view == "freshmen") compHTML += "<a class = 'selected' onclick='demobuttons()'>Freshman Survey</a>";
	else compHTML += "<a onclick='view = \"freshmen\"; demobuttons();' class='large'>Freshman Survey</a>";
	if (view == "seniors") compHTML += "<a class = 'selected' onclick='demobuttons()'>Senior Survey</a>";
	else compHTML += "<a onclick='view = \"seniors\";allbuttons();' class = 'large'>Senior Survey</a>";
	if (view == "compare") compHTML += "<a class = 'selected large' onclick='call()'>Comparison Highlights</a>";
	else compHTML += "<a onclick='view = \"compare\";call();'>Comparison Highlights</a>";
}
function cmakeeverything() {
	compHTML += "<h1 class='head' id='comphead'>Comparison Highlights</h1>";
	compNar();
	compHTML += "<h1 class='comptitle'>Religion</h1>";
	compHTML += "<table align = 'center'><tr><td valign='top'><div id='frdemo' class='chart'></div></td><td><div id='srdemo' class='crace'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Sexual Orientation</h1>";
	compHTML += "<table align = 'center'><tr><td><div id='frdemo2' class='chart'></div></td><td><div id='srdemo2' class='chart'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Favorite Subject</h1>";
	compHTML += "<table align = 'center'><tr><td><div id='frfav' class='chart'></div></td><td><div id='srfch' class='chart'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Future Plans</h1>";
	compHTML += "<table align = 'center'><tr><td valign='top'><div id='frsch' class='chart'></td><td valign='bottom'><div id='srcol' class='colchart'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Academic Preparedness</h1>";
	compHTML += "<table align = 'center'><tr><td><div id='fracc' class='chart'></div></td><td><div id='srmpr' class='chart'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Sleep</h1>";
	compHTML += "<table align = 'center'><tr><td><div id='frspr' class='chart'></div></td><td><div id='srsleep' class='chart'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Alcohol</h1>";
	compHTML += "<table align = 'center'><tr><td><div id='fralc' class='chart'></div></td><td><div id='srdrug' class='chart'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Drugs</h1>";
	compHTML += "<table align = 'center'><tr><td><div id='frdrug' class='chart'></div></td><td><div id='srdrug2' class='chart'></div></td></tr></table>";
	compHTML += "<h1 class='comptitle'>Academic Dishonesty</h1>";
	compHTML += "<table align = 'center'><tr><td><div id='frcheat' class='chart'></div></td><td><div id='sracd' class='chart'></div></td></tr></table>";
}