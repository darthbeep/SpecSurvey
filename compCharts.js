function compCharts() {
	$(function () {
$('#frdemo').highcharts({
	title: {
		text: 'Religion incoming freshmen identify with'
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
		}],
		max: 60
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

		$(function () {
$('#frdemo2').highcharts({
	title: {
		text: 'Sexual Orientation of incoming freshmen'
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



	$(function () {
$('#frfav').highcharts({
	title: {
		text: 'Favorite Subject of incoming freshmen'
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
		}],
		max: 60
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

	$(function () {
$('#frsch').highcharts({
	title: {
		text: 'Freshman responses to "After I graduate from Stuyvesant, I think I might attend an Ivy League University, Stanford University, or MIT”'
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

	$(function () {
$('#fracc').highcharts({
	title: {
		text: 'Freshman responses to "I feel prepared for academics at Stuyvesant”'
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

	$(function () {
$('#frspr').highcharts({
	title: {
		text: 'Average amount of sleep in middle school'
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
		}],
		max: 50
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
	$(function () {
$('#frdrug').highcharts({
	title: {
		text: 'Freshman responses to “I am opposed to the use of recreational drugs, like marijuana, by high school students”'
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
		}],
		max: 90
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

	$(function () {
$('#fralc').highcharts({
	title: {
		text: 'Freshman responses to "I am opposed to the use of alcohol by high school students."'
	},	xAxis: {
		categories: ['Strongly agree','Agree','Neutral','Disagree','Strongly disasgree'],
	},
	yAxis: {
		max: 100,
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

	$(function () {
$('#frcheat').highcharts({
	title: {
		text: '“In middle school, I partook in some form of academic dishonesty.”'
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

	compChartsSr();
}
function compChartsSr() {
	gridLight2();
$(function () {
$('#srdemo').highcharts({
	title: {
		text: 'Religion Outgoing Seniors Identify With'
	},	xAxis: {
		categories: ['Christianity','Islam','Judaism','Hinduism','Buddhism','Agnosticism/Atheism','Other'],
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
		 data: [16.8,5.6,12.4,3.7,5.0,51.6,5.0]}]});});

$(function () {
$('#srdemo2').highcharts({
	title: {
		text: 'Sexual Orientation of outgoing seniors'
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
		}],
		max: 100
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
		 name: '82.6%',
		 data: [82.6,2.5,10.6,3.1,1.2]}]});});

$(function () {
$('#srfch').highcharts({
	title: {
		text: 'Did your favorite subject change while at Stuyvesant?'
	},	xAxis: {
		categories: ['I don\'t know','No','Yes'],
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
		 data: [11.2,36.0,52.8]}]});});

	$(function () {
$('#srcol').highcharts({
	title: {
		text: 'Type of college, if any, I will attend next fall'
	},	xAxis: {
		categories: ['Gap Year','Ivy League','Liberal Arts College','Non-NY State School','Other Research University','Other Top 10 School','SUNY/CUNY','Other'],
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
		,max: 50
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
		 data: [0.6,17.4,9.9,5.0,18.6,18.0,26.1,4.3]}]});});

	$(function () {
$('#srmpr').highcharts({
	title: {
		text: 'Senior responses to "My middle school prepared me for academics at Stuyvesant”'
	},	xAxis: {
		categories: ['1 (poorly)','2','3','4','5 (exceedingly well)'],
	},
	yAxis: {
		title: {
			text: 'Percent of Students Polled'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}],
		max: 50
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
		 data: [13.2,17.6,35.8,24.5,8.8]}]});});

	$(function () {
$('#srsleep').highcharts({
	title: {
		text: 'Average amount of sleep as an upperclassmen'
	},	xAxis: {
		categories: ['Less than 5','5 - 6','6 - 7','7 - 8','More than 8'],
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
		 data: [25.2,42.1,22.7,9.8,1.2]}]});});
$(function () {
$('#srdrug').highcharts({
	title: {
		text: 'Senior responses to “I drank alcohol during high school”'
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
		}],
		max: 100
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
		 data: [7.5,16.1,19.3,57.1]}]});});
$(function () {
$('#srdrug2').highcharts({
	title: {
		text: 'Senior responses to “I used marijuana during high school”'
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
		}],
		max: 100
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
		 name: '420blazeit',
		 data: [3.8,6.3,8.8,81.3]}]});});
$(function () {
$('#sracd').highcharts({
	title: {
		text: '"At Stuyvesant, I partook in some form of academic dishonesty.”'
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
		 data: [3.8,21.3,46.3,28.8]}]});});
gridLight();
}