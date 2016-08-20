function frTop() {
	var topHTML = "";
	topHTML += "<div class='toptext'>This data was collected in a 30-question survey distributed to all incoming freshmen at Camp Stuy Part I, an orientation for incoming freshmen that took place on June 2, 2016. While 689 students responded to the survey, not every student answered every question. Other slight discrepancies arise from rounding issues and faulty bubbling.</div>";
	topHTML += "<hr class='topline'>";
	/*topHTML += "<div class='topcontainer' onclick='location.href=\"#demohead\"' style='cursor:pointer'>";
	topHTML += 'test';
	//topHTML += "<a class='toplink' href='#demohead'>Demographics</a>"
	topHTML += "</div>";*/
	topHTML += "<div class='topcontainer' onclick='location.href=\"#demohead\"'>Demographics</div>";
	topHTML += "<div class='spacing'> - </div>";
	topHTML += "<div class='topcontainer' onclick='location.href=\"#apphead\"'>Applying to Stuyvesant</div>";
	topHTML += "<div class='spacing'> - </div>";
	topHTML += "<div class='topcontainer' onclick='location.href=\"#midachead\"'>Middle School Academics</div>";
	topHTML += "<div class='spacing'> - </div>";
	topHTML += "<div class='topcontainer' onclick='location.href=\"#midlifehead\"'>Middle School Life and Identity</div>";
	topHTML += "<div class='spacing'> - </div>";
	topHTML += "<div class='topcontainer' onclick='location.href=\"#exhead\"'>Expectations of Stuyvesant and Future Plans</div>";
	topHTML += "<hr class='topline'>";
	document.getElementById("toptext").innerHTML=topHTML;
}
function srTop() {
	var topHTML = "";
	topHTML += "<div class='toptext'>This data was collected in a 25-question survey distributed to all outgoing seniors via stuy.edu e-mail. The survey was open for completion from June 28 to July 14. While 161 students responded to the survey, not every student answered every question. Other slight discrepancies arise from rounding issues or faulty answers.</div>";
	topHTML += "<hr class='topline'>";
	/*topHTML += "<div class='topcontainer' onclick='location.href=\"#demohead\"' style='cursor:pointer'>";
	topHTML += 'test';
	//topHTML += "<a class='toplink' href='#demohead'>Demographics</a>"
	topHTML += "</div>";*/
	topHTML += "<div class='topcontainer' onclick='location.href=\"#srdemohead\"'>Demographics</div>";
	topHTML += "<div class='spacing'> - </div>";
	topHTML += "<div class='topcontainer' onclick='location.href=\"#sracchead\"'>Stuyvesant Academics</div>";
	topHTML += "<div class='spacing'> - </div>";
	topHTML += "<div class='topcontainer' onclick='location.href=\"#srlifehead\"'>Student Life and Identity</div>";
	topHTML += "<hr class='topline'>";
	document.getElementById("toptext").innerHTML=topHTML;
}
function compTop() {
	document.getElementById("toptext").innerHTML="";
}
