//Demo

function frGender() {
	$(function () {
$('#frdemo').highcharts({
	title: {
		//text: null
	},	xAxis: {
		categories: ['Male','Female','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [51.3,47.8,0.9]}]});});
}
function frEth() {
	$(function () {
$('#frdemo').highcharts({
	title: {
		//text: 'Race'
	},	xAxis: {
		categories: ['Asian','Black','Hispanic','White','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	chart: {
		type: 'column'
	},
	series: [{
		 name: 'Percent of Students',
		 data: [75.3,.3,1.3,17.5,5.5]}]});});
}
function frLeg() {
$(function () {
$('#frdemo').highcharts({
	title: {
		//text: 'Legal Status'
	},	xAxis: {
		categories: ['U.S. Citizen (Passport)','Permanent Resident (Green Card + Passport of another country)','Dual Citizenship (Passport of two countries)','Visa','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	chart: {
		type: 'column'
	},
	series: [{
		 name: 'Percent of Students',
		 data: [86.4,6,6.2,.9,.4]}]});});
}
function frRel() {
$(function () {
$('#frdemo').highcharts({
	title: {
		//text: 'Religion'
	},	xAxis: {
		categories: ['Christianity','Islam','Judaism','Agnosticism/Atheism','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'i hate myself',
		 data: [22.6,13,5.4,34.5,24.5]}]});});

}
function frSoc() {
	$(function () {
$('#frdemo').highcharts({
	title: {
		//text: 'Socioeconomic Status'
	},	xAxis: {
		categories: ['Lower Class','Middle Class','Upper-Middle Class','Upper Class','Unknown'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '9.6',
		 data: [9.6,49.6,19.7,1,20]}]});});
}

function frSocRace() {
	$(function () {
$('#frdemo').highcharts({
	title: {
		//text: 'Socioeconomic Status by Race'
	},	xAxis: {
		categories: ['Lower Class','Middle Class','Upper-Middle Class','Upper Class','I don\'t know'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [10.4,53.1,13,.8,22.6]}, {
		 name: 'White',
		 data: [4.3,36.2,46.6,1.7,11.2]}, {
		 name: 'Other',
		 data: [14.3,44.9,24.5,2,14.3]}]});});

}

function frEd() {
	$(function () {
$('#frdemo').highcharts({
	title: {
		//text: 'Highest Education Level of Parents'
	},	xAxis: {
		categories: ['Middle School','High School','Associate\'s Degree','Bachelor\'s Degree','Post-College Education'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'someone please rescue me from the hell that is life',
		 data: [5.1,22.2,8.8,37.0,26.9]}]});});
}
function frMid() {
$(function () {
$('#frmid').highcharts({
	title: {
		//text: 'Middle School'
	},	xAxis: {
		categories: ['Selective Public School','Zoned Public School','Private School','Parochial School','Homeschool'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'ayylmao',
		 data: [54.5,39.6,4.5,1.2,.1]}]});});
}

function frMidRace() {
	$(function () {
$('#frmid').highcharts({
	title: {
		//text: 'Middle School by Race'
	},	xAxis: {
		categories: ['Selective Public School','Zoned Public School','Private School','Parochial School','Homeschool'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [51.8,44.1,2.6,1.6,0]}, {
		 name: 'White',
		 data: [64.3,25.2,9.6,0,.9]}, {
		 name: 'Other',
		 data: [58.3,29.2,12.5,0,0]}]});});
}

function frSeo() {
	$(function () {
$('#frdemo').highcharts({
	title: {
		//text: 'Sexual Orientation'
	},	xAxis: {
		categories: ['Heterosexual','Homosexual','Bisexual','Unsure','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '86.7',
		 data: [86.7,.9,4,6.5,1.9]}]});});
}
//Applying to stuy
function frStudy() {
	$(function () {
$('#frstudy').highcharts({
	title: {
		//text: '"I started studying for the SHSAT"'
	},	xAxis: {
		categories: ['More than one year before the exam','6 months-1 year before the exam','4-6 months before the exam','1-4 months before the exam','Less than one month before the exam','Did not study'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'help me please',
		 data: [21.2,27.9,20.2,21.1,5.5,4.1]}]});});
}
function frStudyRace() {
	$(function () {
$('#frstudy').highcharts({
	title: {
		//text: '"I started studying for the SHSAT" By Race'
	},	xAxis: {
		categories: ['More than one year before the exam','6 months-1 year before the exam','4-6 months before the exam','1-4 months before the exam','Less than one month before the exam','Did not study'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		//enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [25,28.1,20.2,21.1,3.7,4.1]}, {
		 name: 'White',
		 data: [9.2,30,20.2,20,6.7,5]}, {
		 name: 'Other',
		 data: [10.2,22.4,22.4,24.5,18.4,2]}

		 ]});});
}
function frStudySoc() {
	$(function () {
$('#frstudy').highcharts({
	title: {
		//text: '"I started studying for the SHSAT" By Socioeconomic Status'
	},	xAxis: {
		categories: ['More than one year before the exam','6 months-1 year before the exam','4-6 months before the exam','1-4 months before the exam','Less than one month before the exam','Did not study'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Lower Class',
		 data: [36.9,21.5,20,16.9,1.5,3.1]}, {
		 name: 'Middle Class',
		 data: [20.9,29.3,21.2,20.9,4.5,3.3]}, {
		 name: 'Upper-Middle Class',
		 data: [9.8,34.6,24.1,18.8,9,3.8]}, {
		 name: 'Upper Class',
		 data: [14.3,28.6,0,28.6,28.6,0]}

		 ]});});
}
function frStudyMid() {
	$(function () {
$('#frstudy').highcharts({
	title: {
		//text: '"I started studying for the SHSAT" By Middle School'
	},	xAxis: {
		categories: ['More than one year before the exam','6 months-1 year before the exam','4-6 months before the exam','1-4 months before the exam','Less than one month before the exam','Did not study'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		//enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Selective Public School',
		 data: [21.9,28.4,21,19.7,5.2,3.8]}, {
		 name: 'Zoned Public School',
		 data: [22.9,27.1,18.8,21.8,4.5,4.9]}, { 
		 name: 'Other',
		 data: [10.3,20.5,17.9,30.8,17.8,2.6]}

		 ]});});
}
function frMeth() {
	$(function () {
$('#frmeth').highcharts({
	title: {
		//text: 'Methods of Studying'
	},	xAxis: {
		categories: ['Self-study/preparatory books','Preporatory class (not SHSI)','SHSI preporatory school','One-on-one tutoring','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'might as well leave the dev\'s name somewhere so this was done by Shaina',
		 data: [14.5,68.9,5.6,7.6,3.4]}]});});
}
function frMethRace() {
	$(function () {
$('#frmeth').highcharts({
	title: {
		//text: 'Methods of Studying for the SHSAT by Race'
	},	xAxis: {
		categories: ['Self-study/preparatory books','Preporatory class (not SHSI)','SHSI preporatory school','One-on-one tutoring','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [11.5,73.6,7.2,3.9,3.9]}, {
		 name: 'White',
		 data: [20.9,53.6,.9,22.7,1.8]}, {
		 name: 'Other',
		 data: [30.4,56.5,0,10.9,2.2]}]});});
}
function frMethMid() {
	$(function () {
$('#frmeth').highcharts({
	title: {
		//text: 'Methods of Studying for the SHSAT by Middle School'
	},	xAxis: {
		categories: ['Self-study/preparatory books','Preporatory class (not SHSI)','SHSI preporatory school','One-on-one tutoring','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Selective Public School',
		 data: [14.8,68.3,6.1,7.8,2.9]}, {
		 name: 'Zoned Public School',
		 data: [13.2,72.4,5.6,4.4,4.4]}, {
		 name: 'Other',
		 data: [23.7,52.6,2.6,18.4,2.6]}]});});
}
function frMethStudy() {
	$(function () {
$('#frmeth').highcharts({
	title: {
		//text: 'Method of Stuying for the SHSAT by Study Timeframe'
	},	xAxis: {
		categories: ['Self-study/preparatory books','Preporatory class (not SHSI)','SHSI preporatory school','One-on-one tutoring','Other'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'More than one year before the exam',
		 data: [13.2,70.1,11.1,2.8,2.8]}, {
		 name: '6 months-1 year before the exam',
		 data: [11.3,74.2,5.4,5.4,3.8]}, {
		 name: '4-6 months before the exam',
		 data: [12.5,67.6,2.9,14.7,2.2]}, {
		 name: '1-4 months before the exam',
		 data: [12.1,73.6,4.3,9.3,0.7]}, {
		 name: 'Less than one month before the exam',
		 data: [51.5,24.2,0.0,6.1,18.2]}]});});

}
function frPress() {
	$(function () {
$('#frpress').highcharts({
	title: {
		//text: '"My parents Pressured me to come to Stuy"'
	},	xAxis: {
		categories: ['Not at all, it was entirely my choice','A little, but it was my decision','A lot, but in the end I accepted what they wanted','It was entirely their decision'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'what\'s red and bad for your teeth? A brick.',
		 data: [24.8,51.8,20.4,3.1]}]});});
}
function frPressRace() {
$(function () {
$('#frpress').highcharts({
	title: {
		//text: '"My Parents Pressured me to Come to Stuy" By Race'
	},	xAxis: {
		categories: ['Not at all, it was entirely my choice','A little, but it was my decision','A lot, but in the end I accepted what they wanted','It was entirely their decision'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [19.1,52.7,24.4,3.9]}, {
		 name: 'White',
		 data: [41.5,50.0,7.6,0.8]}, {
		 name: 'Other',
		 data: [45.8,43.8,10.4,0.0]}]});});
}
function frPressSoc() {
$(function () {
$('#frpress').highcharts({
	title: {
		//text: '"My Parents Pressured me to go to Stuy" By Socioeconomic Status'
	},	xAxis: {
		categories: ['Not at all, it was entirely my choice','A little, but it was my decision','A lot, but in the end I accepted what they wanted','It was entirely their decision'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Lower Class',
		 data: [17.2,53.1,29.7,0.0]}, {
		 name: 'Middle Class',
		 data: [22.5,53.2,21.0,3.3]}, {
		 name: 'Upper Middle Class',
		 data: [34.6,43.6,19.5,2.3]}, {
		 name: 'Upper Class',
		 data: [14.3,57.1,28.6,0.0]}]});});
}
function frPressPar() {
$(function () {
$('#frpress').highcharts({
	title: {
		//text: '"My Parents Pressured me to go to Stuy" By Parent Education'
	},	xAxis: {
		categories: ['Not at all, it was entirely my choice','A little, but it was my decision','A lot, but in the end I accepted what they wanted','It was entirely their decision'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Middle School',
		 data: [6.3,59.4,31.3,3.1]}, {
		 name: 'High School',
		 data: [16.8,55.5,21.2,6.6]}, {
		 name: 'Associate\'s Degree',
		 data: [22.2,50.0,25.9,1.9]}, {
		 name: 'Bachelor\'s Degree',
		 data: [25.0,53.1,19.7,2.2]}, {
		 name: 'Post-college education',
		 data: [34.1,47.0,17.7,1.2]}]});});
}
//Middle School acedemics
function frPar() {
	$(function () {
$('#frpar').highcharts({
	title: {
		//text: '\"I participate in class frequently\"'
	},	xAxis: {
		categories: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'who cares',
		 data: [33.9,34.9,25,5.3,.9]}]});});
}
function frParGen() {
	$(function () {
$('#frpar').highcharts({
	title: {
		//text: '"I paricipate in class frequently" By Gender'
	},	xAxis: {
		categories: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [35.7,38.3,21.9,3.5,.6]}, {
		 name: 'Female',
		 data: [31.9,31.9,27.9,7.4,.9]}]});});
}
function frParRace() {
	$(function () {
$('#frpar').highcharts({
	title: {
		//text: '"I paricipate in class frequently" By Race'
	},	xAxis: {
		categories: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [28,34.8,29.4,6.8,1]}, {
		 name: 'White',
		 data: [57.5,33.3,7.5,0.8,.8]}, {
		 name: 'Other',
		 data: [35.4,41.7,22.9,0,0]}]});});
}
function frHw() {
	$(function () {
$('#frhw').highcharts({
	title: {
		//text: 'Hours Spent on Homework'
	},	xAxis: {
		categories: ['Less than half an hour','Half an hour to an hour','One to two hours','Two to three hours','More than three hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'why am i too lazy to fix this',
		 data: [6.8,25.0,36.5,22.7,9.0]}]});});
}
function frHwGen() {
$(function () {
$('#frhw').highcharts({
	title: {
		//text: 'Time Spent on Homework Per Night'
	},	xAxis: {
		categories: ['Less than half an hour','Half an hour to an hour','One to two hours','Two to three hours','More than three hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [9.2,28.6,39.0,15.9,7.2]}, {
		 name: 'Female',
		 data: [3.7,22.0,32.6,30.7,10.9]}]});});
}
function frHwRace() {
$(function () {
$('#frhw').highcharts({
	title: {
		//text: 'Hours Spent on Homework Per Night By Race'
	},	xAxis: {
		categories: ['Less than half an hour','Half an hour to an hour','One to two hours','Two to three hours','More than three hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [6.1,24.1,37.1,22.9,9.8]}, {
		 name: 'White',
		 data: [10.2,25.4,35.6,20.3,8.5]}, {
		 name: 'Other',
		 data: [6.1,32.7,32.7,26.5,2.0]}]});});

}
function frHwMid() {
	$(function () {
$('#frhw').highcharts({
	title: {
		//text: 'Hours Spent on Homework Per Night By Middle School'
	},	xAxis: {
		categories: ['Less than half an hour','Half an hour to an hour','One to two hours','Two to three hours','More than three hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Selective Public Middle School',
		 data: [6.4,25.6,36.1,23.1,8.9]}, {
		 name: 'Zoned Public Middle School',
		 data: [7.6,24.2,38.3,21.6,8.3]}, {
		 name: 'Private/Parochial School',
		 data: [10.3,23.1,33.3,23.1,10.3]}]});});
}
function frFav() {
$(function () {
$('#frfav').highcharts({
	title: {
		//text: 'Favorite Subject'
	},	xAxis: {
		categories: ['Math','Science','English','History','Other','Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'programming is hard',
		 data: [41.3,26.6,8.4,9.2,11.5,3.1]}]});});
}
function frFavGender() {
	$(function () {
$('#frfav').highcharts({
	title: {
		//text: 'Favorite Subject By Gender'
	},	xAxis: {
		categories: ['Math','Science','English','History','Other','Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [44.0,30.0,3.1,10.3,10.0,2.6]}, {
		 name: 'Female',
		 data: [39.0,23.6,13.5,8.0,12.9,3.1]}]});});
}
function frFavRace() {
$(function () {
$('#frfav').highcharts({
	title: {
		//text: 'Favorite Subject By Race'
	},	xAxis: {
		categories: ['Math','Science','English','History','Other','Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [43.8,25.4,7.2,8.1,13.2,2.3]}, {
		 name: 'White',
		 data: [37.5,27.5,14.2,12.5,5.0,3.3]}, {
		 name: 'Other',
		 data: [24.5,38.8,8.2,12.2,10.2,6.1]}]});});
}

function frSleep() {
$(function () {
$('#frsleep').highcharts({
	title: {
		//text: 'Hours of Sleep'
	},	xAxis: {
		categories: ['Fewer than 6 hours','6-7 hours','7-8 hours','8-9 hours','More than 9 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'why do you make me do this, Sonia',
		 data: [7.2,31.4,35.9,20.9,4.6]}]});});
}
function frSleepGender() {
$(function () {
$('#frsleep').highcharts({
	title: {
		//text: 'Hours of Sleep by Gender'
	},	xAxis: {
		categories: ['Fewer than 6 hours','6-7 hours','7-8 hours','8-9 hours','More than 9 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [6.1,24.0,39.3,24.9,5.8]}, {
		 name: 'Female',
		 data: [8.3,38.9,32.7,16.7,3.4]}]});});
}
function frSleepRace() {
	$(function () {
$('#frsleep').highcharts({
	title: {
		//text: 'Hours of Sleep by Race'
	},	xAxis: {
		categories: ['Fewer than 6 hours','6-7 hours','7-8 hours','8-9 hours','More than 9 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [7.2,32.9,34.2,20.9,4.7]}, {
		 name: 'White',
		 data: [5.9,26.9,38.7,24.4,4.2]}, {
		 name: 'Other',
		 data: [10.2,26.5,49.0,10.2,4.1]}]});});
}
function frSleepMid() {
$(function () {
$('#frsleep').highcharts({
	title: {
		//text: 'Hours of Sleep by Middle School'
	},	xAxis: {
		categories: ['Fewer than 6 hours','6-7 hours','7-8 hours','8-9 hours','More than 9 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Selective Public Middle School',
		 data: [7.7,33.1,36.2,19.3,3.6]}, {
		 name: 'Zoned Public Middle School',
		 data: [7.9,29.1,36.6,21.5,4.9]},  {
		 name: 'Private/Parochial School',
		 data: [0.0,33.3,35.9,23.1,7.7]}]});});
}
function frWork() {
$(function () {
$('#frwork').highcharts({
	title: {
		//text: '"I have a strong work ethic"'
	},	xAxis: {
		categories: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'meh',
		 data: [21.6,46.8,25.6,4.6,1.3]}]});});
}
function frWorkGender() {
$(function () {
$('#frwork').highcharts({
	title: {
		//text: '"I have a strong work ethic" by Gender'
	},	xAxis: {
		categories: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [17.8,44.7,30.4,5.8,1.2]}, {
		 name: 'Female',
		 data: [25.7,49.5,20.4,3.1,1.2]}]});});
}
function frWorkRace() {
	$(function () {
$('#frwork').highcharts({
	title: {
		//text: '"I have a strong work ethic" by Race'
	},	xAxis: {
		categories: ['Strongly Agree','Agree','Neutral','Disagree','Strongly Disagree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [20.9,45.9,28.1,3.9,1.2]}, {
		 name: 'White',
		 data: [26.1,51.3,16.8,5.0,0.8]}, {
		 name: 'Other',
		 data: [21.3,40.4,23.4,10.6,4.3]}]});});
}
function frAwr() {
$(function () {
$('#frawr').highcharts({
	title: {
		//text: '"I consider myself aware of current events"'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'please work',
		 data: [18.1,41.9,31.9,6.5,1.6]}]});});

}
function frAwrGender() {
$(function () {
$('#frawr').highcharts({
	title: {
		//text: '"I consider myself to be aware of current events" By Gender'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [21.2,43.3,28.1,5.7,1.7]}, {
		 name: 'Female',
		 data: [14.8,40.3,36.3,7.1,1.5]}]});});
}
function frAwrRace() {
$(function () {
$('#frawr').highcharts({
	title: {
		//text: '"I consider myself to be aware of current events" by Race'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [13.2,42.6,34.8,7.4,1.9]}, {
		 name: 'White',
		 data: [33.3,40.8,20.8,4.2,0.8]}, {
		 name: 'Other',
		 data: [30.6,38.8,28.6,2.0,0.0]}]});});
}
function frAwrMid() {
$(function () {
$('#frawr').highcharts({
	title: {
		//text: '"I consider myself to be aware of current events" by middle school'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Selective Public Middle School',
		 data: [18.6,42.6,32.2,5.2,1.4]}, {
		 name: 'Zoned Public Middle School',
		 data: [17.4,41.1,31.3,7.9,2.3]}, {
		 name: 'Private/Parochial School',
		 data: [25.6,41.0,30.8,2.6,0.0]}]});});

}

//Middle school life and identity
function frSocial() {
	$(function () {
$('#frsocial').highcharts({
	title: {
		//text: '"I consider myself to be a sociable person"'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'What\'s red and smells like blue paint? Red paint.',
		 data: [18.8,33.7,33.9,10.7,3.0]}]});});

}
function frSocialGender() {
	$(function () {
$('#frsocial').highcharts({
	title: {
		//text: '"I consider myself to be a sociable person" by gender'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [17.8,36.4,32.4,10.5,2.9]}, {
		 name: 'Female',
		 data: [19.6,31.5,35.2,11.2,2.5]}]});});

}
function frSocialRace() {
	$(function () {
$('#frsocial').highcharts({
	title: {
		//text: '"I consider myself to be a sociable person" by race'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [15.2,34.2,36.2,11.3,3.2]}, {
		 name: 'White',
		 data: [36.4,33.9,19.5,8.5,1.7]}, {
		 name: 'Other',
		 data: [14.3,30.6,42.9,10.2,2.0]}]});});
}
function frTv() {
$(function () {
$('#frtv').highcharts({
	title: {
		//text: 'Time spent watching tv'
	},	xAxis: {
		categories: ['0 - 1 hour','1 - 3 hours','3 - 5 hours','5 - 7 hours','More than 7 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'help',
		 data: [36.3,25.6,19.2,8.3,10.6]}]});});

}
function frTvGender() {
	$(function () {
$('#frtv').highcharts({
	title: {
		//text: 'Time spent watching tv by gender'
	},	xAxis: {
		categories: ['0 - 1 hour','1 - 3 hours','3 - 5 hours','5 - 7 hours','More than 7 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [41.1,26.5,17.2,8.2,7.0]}, {
		 name: 'Female',
		 data: [30.3,24.6,21.8,8.8,14.5]}]});});
}
function frTvRace() {
$(function () {
$('#frtv').highcharts({
	title: {
		//text: 'Time spent watching tv by race'
	},	xAxis: {
		categories: ['0 - 1 hour','1 - 3 hours','3 - 5 hours','5 - 7 hours','More than 7 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [39.2,25.7,17.5,7.6,10.0]}, {
		 name: 'White',
		 data: [25.4,20.3,28.0,11.9,14.4]}, {
		 name: 'Other',
		 data: [32.7,34.7,16.3,8.2,8.2]}]});});

}
function frTvSleep() {
	$(function () {
$('#frtv').highcharts({
	title: {
		//text: 'Time spent watching tv by hours slept'
	},	xAxis: {
		categories: ['0 - 1 hour','1 - 3 hours','3 - 5 hours','5 - 7 hours','More than 7 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Fewer than 6 hours',
		 data: [33.3,20.8,16.7,2.1,27.1]}, {
		 name: '6-7 hours',
		 data: [37.7,25.6,15.9,9.7,11.1]}, {
		 name: '7-8 hours',
		 data: [33.3,27.1,21.7,7.5,10.4]}, {
		 name: '8-9 hours',
		 data: [37.9,26.4,17.9,12.1,5.7]}, {
		 name: 'More than 9 hours',
		 data: [38.7,22.6,32.3,0.0,6.5]}]});});
}
function frFb() {
	$(function () {
$('#frfb').highcharts({
	title: {
		//text: 'Time spent watching tv by hours slept'
	},	xAxis: {
		categories: ['I don\'t have a Facebook account','I don\'t have a Facebook but I use other social media.','0-1.5 hours','1.5-3 hours','More than 3 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [22.6,20.8,43.6,8.6,4.4]}]});});
}
function frFbGender() {
	$(function () {
$('#frfb').highcharts({
	title: {
		//text: 'Time spent watching tv by hours slept by gender'
	},	xAxis: {
		categories: ['I don\'t have a Facebook account','I don\'t have a Facebook but I use other social media.','0-1.5 hours','1.5-3 hours','More than 3 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [19.8,21.5,35.8,10.2,6.4]}, {
		 name: 'Female',
		 data: [21.1,23.0,38.2,10.9,6.8]}]});});
}
function frFbRace() {
	$(function () {
$('#frfb').highcharts({
	title: {
		//text: 'Time spent watching tv by hours slept by race'
	},	xAxis: {
		categories: ['I don\'t have a Facebook account','I don\'t have a Facebook but I use other social media.','0-1.5 hours','1.5-3 hours','More than 3 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [18.3,17.0,48.3,10.5,5.9]}, {
		 name: 'White',
		 data: [33.9,38.1,24.6,3.4,0.0]}, {
		 name: 'Other',
		 data: [36.7,20.4,40.8,2.0,0.0]}]});});
}
function frFbSleep() {
	$(function () {
$('#frfb').highcharts({
	title: {
		//text: 'Time spent watching tv by hours slept by amount of sleep'
	},	xAxis: {
		categories: ['I don\'t have a Facebook account','I don\'t have a Facebook but I use other social media.','0-1.5 hours','1.5-3 hours','More than 3 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Fewer than 6 hours',
		 data: [21.3,29.8,29.8,10.6,8.5]}, {
		 name: '6-7 hours',
		 data: [20.4,17.5,46.0,10.9,5.2]}, {
		 name: '7-8 hours',
		 data: [20.3,22.4,45.6,7.5,4.1]}, {
		 name: '8-9 hours',
		 data: [27.1,20.0,42.9,6.4,3.6]}, {
		 name: 'More than 9 hours',
		 data: [35.5,22.6,35.5,6.5,0.0]}]});});

}

function frDrug() {
$(function () {
$('#frdrug').highcharts({
	title: {
		//text: '"I am opposed to the use of recreational drugs, like marijuana, by high school students."'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [65.3,19.4,11.0,2.6,1.6]}]});});
}
function frDrugGender() {
	$(function () {
$('#frdrug').highcharts({
	title: {
		//text: '"I am opposed to the use of recreational drugs, like marijuana, by high school students." by gender'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [65.5,19.1,10.7,3.2,1.4]}, {
		 name: 'Female',
		 data: [66.3,18.9,11.1,2.2,1.5]}]});});

}
function frDrugRace() {
	$(function () {
$('#frdrug').highcharts({
	title: {
		//text: '"I am opposed to the use of recreational drugs, like marijuana, by high school students." by race'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [66.1,20.0,10.2,2.0,1.8]}, {
		 name: 'White',
		 data: [65.8,15.4,13.7,4.3,0.9]}, {
		 name: 'Other',
		 data: [57.1,22.4,12.2,6.1,2.0]}]});});
}
function frDrugRel() {
	$(function () {
$('#frdrug').highcharts({
	title: {
		//text: '"I am opposed to the use of recreational drugs, like marijuana, by high school students." by religion'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Christianity',
		 data: [71.1,18.1,7.4,2.7,0.7]}, {
		 name: 'Islam',
		 data: [69.0,14.3,13.1,0.0,3.6]}, {
		 name: 'Judaism',
		 data: [65.7,22.9,5.7,5.7,0.0]}, {
		 name: 'Agnosticism/Atheism',
		 data: [59.0,21.0,15.3,3.1,1.7]}, {
		 name: 'Other',
		 data: [68.8,17.5,8.8,3.1,1.9]}]});});
}
function frDrugEd() {
	$(function () {
$('#frdrug').highcharts({
	title: {
		//text: '"I am opposed to the use of recreational drugs, like marijuana, by high school students" by level of parent education'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Middle School',
		 data: [53.1,31.3,9.4,3.1,3.1]}, {
		 name: 'High School',
		 data: [58.0,24.6,14.5,1.4,1.4]}, {
		 name: 'Associate\'s Degree',
		 data: [61.1,25.9,7.4,3.7,1.9]}, {
		 name: 'Bachelor\'s Degree',
		 data: [67.5,15.4,12.7,2.6,1.8]}, {
		 name: 'Post-college education',
		 data: [68.7,16.3,9.0,4.2,1.8]}]});});

}
function frAlc() {
$(function () {
$('#fralc').highcharts({
	title: {
		//text: '"I am opposed to the use of alcohol by high school students."'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [64.9,24.0,8.4,1.6,1.0]}]});});

}
function frAlcDrug() {
$(function () {
$('#fralc').highcharts({
	title: {
		//text: '"I am opposed to the use of alcohol by high school students" by opposition to drug usage'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Strongly agree',
		 data: [88.7,9.7,1.6,0.0,0.0]}, {
		 name: 'Agree',
		 data: [20.6,69.5,9.2,0.8,0.0]}, {
		 name: 'Neutral',
		 data: [20.3,29.7,44.6,4.1,1.4]}, {
		 name: 'Disagree',
		 data: [11.8,23.5,23.5,41.2,0.0]}, {
		 name: 'Strongly Disagree',
		 data: [18.2,18.2,9.1,0.0,54.5]}]});});

}

function frCheatHc() {
$(function () {
$('#frcheat').highcharts({
	title: {
		//text: '"I cheated in middle school"'
	},	xAxis: {
		categories: ['Frequently','Sometimes','Rarely','Never'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [0.9,9.4,41.5,46.4]}]});});
}
function frCheatWc() {
$(function () {
$('#frcheat2').highcharts({
	title: {
		//text: '"I would rather have a bad grade than cheat"'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disagree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [33.9,39.8,21.4,3.7,1.2]}]});});
}

//Expectations
function frAcc() {
$(function () {
$('#fracc').highcharts({
	title: {
		//text: '"I feel prepared for academics at Stuy"'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [10.0,44.4,38.0,5.3,2.2]}]});});

}
function frAccGender() {
$(function () {
$('#fracc').highcharts({
	title: {
		//text: '"I feel prepared for academics at Stuy" by Gender'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [12.4,46.9,34.8,3.5,2.4]}, {
		 name: 'Female',
		 data: [6.5,42.9,41.3,7.5,1.9]}]});});
}
function frAccRace() {
$(function () {
$('#fracc').highcharts({
	title: {
		//text: '"I feel prepared for academics at Stuy" by race'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [8.9,41.2,42.0,5.5,2.4]}, {
		 name: 'White',
		 data: [14.5,53.0,25.6,6.0,0.9]}, {
		 name: 'Other',
		 data: [8.3,60.4,25.0,2.1,4.2]}]});});

}
function frAccMid() {
$(function () {
$('#fracc').highcharts({
	title: {
		//text: '"I feel prepared for academics at Stuy" by middle school'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Selective Public School',
		 data: [9.5,49.6,33.3,4.8,2.8]}, {
		 name: 'Zoned Public School',
		 data: [10.7,36.8,43.7,6.9,1.9]}, {
		 name: 'Other',
		 data: [10.3,53.8,35.9,0.0,0.0]}]});});
}
function frAccPar() {
$(function () {
$('#fracc').highcharts({
	title: {
		//text: '"I feel prepared for academics at Stuy" by parent pressure'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Not at all, it was entirely my choice',
		 data: [16.8,49.7,27.5,4.2,1.8]}, {
		 name: 'A little, but it was my decision',
		 data: [9.2,45.1,40.5,3.8,1.4]}, {
		 name: 'A lot, but in the end I accepted what they wanted',
		 data: [2.9,39.0,45.6,9.6,2.9]}, {
		 name: 'It was entirely their decision',
		 data: [9.5,28.6,33.3,14.3,14.3]}]});});

}

function frGrade() {
$(function () {
$('#frgrade').highcharts({
	title: {
		//text: '"I predict that I will be among"'
	},	xAxis: {
		categories: ['Top 10 percent','Top 25 percent','Top 50 percent','Bottom 50 percent'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [18.8,47.7,28.7,4.9]}]});});

}
function frGradeGender() {
$(function () {
$('#frgrade').highcharts({
	title: {
		//text: '"I predict that I will be among" by gender'
	},	xAxis: {
		categories: ['Top 10 percent','Top 25 percent','Top 50 percent','Bottom 50 percent'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [24.9,46.7,26.0,2.4]}, {
		 name: 'Female',
		 data: [12.2,49.4,31.7,6.7]}]});});
}
function frGradeRace() {
$(function () {
$('#frgrade').highcharts({
	title: {
		//text: '"I predict that I will be among" by race'
	},	xAxis: {
		categories: ['Top 10 percent','Top 25 percent','Top 50 percent','Bottom 50 percent'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [18.1,44.8,31.3,5.8]}, {
		 name: 'White',
		 data: [23.5,56.5,19.1,0.9]}, {
		 name: 'Other',
		 data: [16.3,57.1,22.4,4.1]}]});});
}

function frSpr() {
$(function () {
$('#frspr').highcharts({
	title: {
		//text: 'Hours of Sleep'
	},	xAxis: {
		categories: ['Fewer than 5 hours','5-6 hours','6-7 hours','7-8 hours','More than 8 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'i stopped doing this manually lol',
		 data: [19.9,39.9,29.0,9.2,1.9]}]});});
}
function frSprGender() {
$(function () {
$('#frspr').highcharts({
	title: {
		//text: 'Hours of Sleep by gender'
	},	xAxis: {
		categories: ['Fewer than 5 hours','5-6 hours','6-7 hours','7-8 hours','More than 8 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [18.6,32.7,33.9,12.4,2.4]}, {
		 name: 'Female',
		 data: [21.2,47.4,24.0,5.9,1.6]}]});});
}
function frSprRace() {
$(function () {
$('#frspr').highcharts({
	title: {
		//text: 'Hours of Sleep by race'
	},	xAxis: {
		categories: ['Fewer than 5 hours','5-6 hours','6-7 hours','7-8 hours','More than 8 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [22.6,41.6,26.5,7.9,1.4]}, {
		 name: 'White',
		 data: [10.3,34.5,35.3,17.2,2.6]}, {
		 name: 'Other',
		 data: [14.6,37.5,39.6,2.1,6.3]}]});});

}
function frSprCs() {
$(function () {
$('#frspr').highcharts({
	title: {
		//text: 'Hours of Sleep by current amount of sleep'
	},	xAxis: {
		categories: ['Fewer than 5 hours','5-6 hours','6-7 hours','7-8 hours','More than 8 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Fewer than 6 hours',
		 data: [61.7,31.9,6.4,0.0,0.0]}, {
		 name: '6-7 hours',
		 data: [31.0,49.5,16.7,2.4,0.5]}, {
		 name: '7-8 hours',
		 data: [9.5,42.7,38.2,9.1,0.4]}, {
		 name: '8-9 hours',
		 data: [9.9,26.2,41.1,18.4,4.3]}, {
		 name: 'More than 9 hours',
		 data: [10.0,26.7,16.7,30.0,16.7]}]});});

}
function frSprGrade() {
$(function () {
$('#frspr').highcharts({
	title: {
		//text: 'Hours of sleep by expected grade rank'
	},	xAxis: {
		categories: ['Fewer than 5 hours','5-6 hours','6-7 hours','7-8 hours','More than 8 hours'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Top 10 percent',
		 data: [17.2,41.0,30.3,9.0,2.5]}, {
		 name: 'Top 25 percent',
		 data: [17.3,40.7,30.8,9.6,1.6]}, {
		 name: 'Top 50 percent',
		 data: [20.5,40.5,27.6,9.2,2.2]}, {
		 name: 'Bottom 50 percent',
		 data: [46.9,31.3,12.5,6.3,3.1]}]});});
}

function frSch() {
$(function () {
$('#frsch').highcharts({
	title: {
		//text: '"After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT."'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [24.0,41.3,31.0,2.7,0.9]}]});});
}
function frSchGender() {
$(function () {
$('#frsch').highcharts({
	title: {
		//text: '"After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT." by gender'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [25.7,41.2,29.8,2.0,1.2]}, {
		 name: 'Female',
		 data: [22.5,42.4,31.6,3.2,0.3]}]});});
}
function frSchRace() {
$(function () {
$('#frsch').highcharts({
	title: {
		//text: '"After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT." by race'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [21.4,39.6,34.8,3.0,1.2]}, {
		 name: 'White',
		 data: [34.7,43.2,19.5,2.5,0.0]}, {
		 name: 'Other',
		 data: [26.5,55.1,18.4,0.0,0.0]}]});});
}
function frSchSoc() {
$(function () {
$('#frsch').highcharts({
	title: {
		//text: '"After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT." by socioeconomic status'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Lower class',
		 data: [24.6,36.9,35.4,1.5,1.5]}, {
		 name: 'Middle class',
		 data: [20.1,43.6,32.9,2.1,1.2]}, {
		 name: 'Upper middle class',
		 data: [29.7,45.3,20.3,4.7,0.0]}, {
		 name: 'Upper class',
		 data: [57.1,28.6,14.3,0.0,0.0]}]});});
}
function frSchPar() {
$(function () {
$('#frsch').highcharts({
	title: {
		//text: '"After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT." by parent education'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Middle School',
		 data: [0.0,40.6,59.4,0.0,0.0]}, {
		 name: 'High School',
		 data: [16.2,41.9,36.8,3.7,1.5]}, {
		 name: 'Associate\'s Degree',
		 data: [18.5,46.3,27.8,7.4,0.0]}, {
		 name: 'Bachelor\'s Degree',
		 data: [24.9,42.2,28.9,2.7,1.3]}, {
		 name: 'Post-college education',
		 data: [34.8,41.5,22.6,1.2,0.0]}]});});
}

function frExc() {
$(function () {
$('#frexc').highcharts({
	title: {
		//text: 'Extracurricular of interest'
	},	xAxis: {
		categories: ['Academic Clubs/publications','Sports','Debate/Government','Community Service','Arts (visual or performance)','Other/Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [23.0,29.5,9.9,7.4,19.5,10.8]}]});});

}
function frExcGender() {
$(function () {
$('#frexc').highcharts({
	title: {
		//text: 'Extracurricular of interest by gender'
	},	xAxis: {
		categories: ['Academic Clubs/publications','Sports','Debate/Government','Community Service','Arts (visual or performance)','Other/Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [27.7,44.5,10.6,6.1,11.0,12.9]}, {
		 name: 'Female',
		 data: [24.1,21.0,11.2,10.8,32.9,10.5]}]});});

}
function frExcRace() {
$(function () {
$('#frexc').highcharts({
	title: {
		//text: 'Extracurricular of interest by race'
	},	xAxis: {
		categories: ['Academic Clubs/publications','Sports','Debate/Government','Community Service','Arts (visual or performance)','Other/Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [26.1,30.5,9.4,10.1,23.9,13.2]}, {
		 name: 'White',
		 data: [21.1,45.0,17.4,0.9,15.6,10.1]}, {
		 name: 'Other',
		 data: [34.0,29.8,10.6,8.5,17.0,4.3]}]});});
}


function frGoal() {
$(function () {
$('#frgoal').highcharts({
	title: {
		//text: 'Academic field of choice'
	},	xAxis: {
		categories: ['STEM-related fields','Social sciences','Foreign language studies','English language studies','Finance/business/management','Other/Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0,
		enabled: false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: '',
		 data: [59.6,6.8,0.9,1.7,8.7,22.2]}]});});
}
function frGoalGender() {
$(function () {
$('#frgoal').highcharts({
	title: {
		//text: 'Academic field of choice by gender'
	},	xAxis: {
		categories: ['STEM-related fields','Social sciences','Foreign language studies','English language studies','Finance/business/management','Other/Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Male',
		 data: [67.7,2.9,0.9,0.9,10.3,17.4]}, {
		 name: 'Females',
		 data: [51.5,10.7,0.9,2.5,7.4,27.0]}]});});
}
function frGoalRace() {
$(function () {
$('#frgoal').highcharts({
	title: {
		//text: 'Academic field of choice by race'
	},	xAxis: {
		categories: ['STEM-related fields','Social sciences','Foreign language studies','English language studies','Finance/business/management','Other/Unsure'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	chart: {
		type: 'column'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle', 
		borderWidth: 0
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	series: [{
		 name: 'Asian',
		 data: [59.7,6.2,0.6,1.2,9.5,22.9]}, {
		 name: 'White',
		 data: [60.0,8.3,0.8,5.0,5.8,20.0]}, {
		 name: 'Other',
		 data: [55.1,10.2,4.1,0.0,8.2,22.4]}]});});

}
