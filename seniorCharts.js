//Demographics

function srDemoGender() {
$(function () {
$('#srdemo').highcharts({
	title: {
		//text: 'Gender'
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
		 data: [49.7,47.8,2.5]}]});});
}
function srDemoRace() {
$(function () {
$('#srdemo').highcharts({
	title: {
		//text: 'Race'
	},	xAxis: {
		categories: ['East Asian','South Asian','White','Hispanic','Black','Multiracial'],
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
		 data: [44.7,15.5,26.1,1.2,0.0,12.4]}]});});
}
function srDemoRel() {
$(function () {
$('#srdemo').highcharts({
	title: {
		//text: 'Religion'
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

}
function srSco() {
$(function () {
$('#srdemo').highcharts({
	title: {
		//text: 'Socioeconomic Status'
	},	xAxis: {
		categories: ['Lower Class','Lower-middle class','Middle Class','Upper-middle Class','Upper Class','I don\'t know'],
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
		 data: [13.0,16.1,34.8,29.2,5.0,1.9]}]});});
}
function srScoRace() {
$(function () {
$('#srdemo').highcharts({
	title: {
		//text: 'Socioeconomic Status by race'
	},	xAxis: {
		categories: ['Lower or working class','Lower-middle class','Middle class','Upper-middle class','Upper Class'],
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
		 name: 'East Asian',
		 data: [21.1,18.3,36.6,21.1,2.8]}, {
		 name: 'South Asian',
		 data: [12.0,32.0,48.0,8.0,0.0]}, {
		 name: 'White/Caucasian',
		 data: [4.9,7.3,26.8,48.8,12.2]}, {
		 name: 'Other',
		 data: [4.8,9.5,33.3,47.6,4.8]}]});});

}
function srDemoMid() {
$(function () {
$('#srdemo').highcharts({
	title: {
		//text: 'Middle School'
	},	xAxis: {
		categories: ['Selective Public School ','Zoned Public School','Private School','Parochial School','Other'],
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
		 data: [39.1,47.2,8.7,1.2,3.7]}]});});

}
function srDemoSeo() {
$(function () {
$('#srdemo').highcharts({
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
		 name: '82.6%',
		 data: [82.6,2.5,10.6,3.1,1.2]}]});});
}
function srDemoSch() {
$(function () {
$('#srdemo').highcharts({
	title: {
		//text: 'Change in Sexual Orientation'
	},	xAxis: {
		categories: ['Yes','No','I\'m not sure'],
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
		 data: [12.4,83.6,5.0]}]});});
}

function srGpa() {
$(function () {
$('#srgpa').highcharts({
	title: {
		//text: 'GPA'
	},	xAxis: {
		categories: ['Below 70','70 - 79.999','80 - 84.999','85 - 88.999','89 - 91.999','92 - 94.999','95 - 97','Above 97'],
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
		 data: [0.6,0.6,2.5,8.1,23.0,40.4,22.4,2.5]}]});});

}
function srCol() {
$(function () {
$('#srcol').highcharts({
	title: {
		//text: 'College Type'
	},	xAxis: {
		categories: ['Gap Year','Ivy League University','Liberal Arts College','Non-NY State School','Other Research University','Other Top 10 School (Stanford, MIT, UChicago)','SUNY/CUNY','Other'],
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
		 data: [0.6,17.4,9.9,5.0,18.6,18.0,26.1,4.3]}]});});
}
function srColGpa() {
$(function () {
$('#srcol').highcharts({
	title: {
		//text: 'College Type by GPA'
	},	xAxis: {
		categories: ['Ivy League University','Liberal Arts College','Non-NY State School','Other Research University','Other Top 10 School (Stanford, MIT, UChicago)','SUNY/CUNY','Other'],
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
		 name: 'Below 85',
		 data: [0.0,0.0,0.0,16.7,0.0,83.3,0.0]}, {
		 name: '85 - 88.999',
		 data: [0.0,7.7,7.7,23.1,0.0,46.2,15.4]}, {
		 name: '89 - 91.999',
		 data: [2.7,8.1,10.8,24.3,8.1,35.1,8.1]}, {
		 name: '92 - 94.999',
		 data: [16.9,12.3,3.1,24.6,18.5,21.5,3.1]}, {
		 name: '95 - 97',
		 data: [36.1,11.1,2.8,2.8,36.1,11.1,0.0]}, {
		 name: 'Above 97',
		 data: [75.0,0.0,0.0,0.0,25.0,0.0,0.0]}]});});
}
function srColSoc() {
$(function () {
$('#srcol').highcharts({
	title: {
		//text: 'College Type by socioeconomic status'
	},	xAxis: {
		categories: ['Ivy League University','Liberal Arts College','Non-NY State School','Other Research University','Other Top 10 School (Stanford, MIT, UChicago)','SUNY/CUNY','Other'],
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
		 name: 'Lower or working class',
		 data: [28.6,9.5,4.8,9.5,23.8,19.0,4.8]}, {
		 name: 'Lower-middle class',
		 data: [7.7,11.5,3.8,11.5,7.7,53.8,3.8]}, {
		 name: 'Middle class',
		 data: [23.2,7.1,3.6,16.1,12.5,30.4,7.1]}, {
		 name: 'Upper-middle class',
		 data: [14.9,12.8,8.5,29.8,19.1,14.9,0.0]}, {
		 name: 'Upper Class',
		 data: [0.0,12.5,0.0,12.5,75.0,0.0,0.0]}]});});

}
function srMpr() {
$(function () {
$('#srmpr').highcharts({
	title: {
		//text: '"Middle School prepared my for Stuyvesant"'
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
		 data: [13.2,17.6,35.8,24.5,8.8]}]});});
}
function srMprMid() {
$(function () {
$('#srmpr').highcharts({
	title: {
		//text: '"Middle School prepared my for Stuyvesant" by middle school'
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
		 name: 'Public Zoned School',
		 data: [18.7,28.0,29.3,18.7,5.3]}, {
		 name: 'Selective Public School (NEST+m, Mark Twain, etc.)',
		 data: [8.1,3.2,38.7,35.5,14.5]}, {
		 name: 'Other',
		 data: [9.1,22.7,50.0,13.6,4.5]}]});});
}
function srFch() {
$(function () {
$('#srfch').highcharts({
	title: {
		//text: 'Change in favorite subject'
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

}
function srFchGender() {
$(function () {
$('#srfch').highcharts({
	title: {
		//text: 'Change in favorite subject by gender'
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
		 name: 'Female',
		 data: [15.6,28.6,55.8]}, {
		 name: 'Male',
		 data: [7.5,43.8,48.8]}]});});
}
function srImp() {
$(function () {
$('#srimp').highcharts({
	title: {
		//text: 'Number of Teachers that made a strong impression'
	},	xAxis: {
		categories: ['0','1','2 - 3 ','4 - 5','More than 5'],
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
		 data: [3.2,3.2,58.9,26.6,8.2]}]});});
}
//Student life and idientity

function srSleepUnd() {
$(function () {
$('#srsleep').highcharts({
	title: {
		//text: 'Hours of Sleep as an underclassman'
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
		 name: 'Sonia why did\'t you give me percentages',
		 data: [10.6,29.8,32.3,25.5,3.1]}]});});
}
function srSleepUpp() {
$(function () {
$('#srsleep').highcharts({
	title: {
		//text: 'Hours of Sleep as an upperclassman'
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
}
function srSleepGpa() {
$(function () {
$('#srsleep').highcharts({
	title: {
		//text: 'Hours of Sleep as an upperclassman by gpa'
	},	xAxis: {
		categories: ['Less than 5','5 - 6','6 - 7','More than 7'],
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
		 name: 'Below 85',
		 data: [33.3,66.7,0.0,0.0]}, {
		 name: '85 - 88.999',
		 data: [38.5,30.8,30.8,0.0]}, {
		 name: '89 - 91.999',
		 data: [27.0,40.5,16.2,16.2]}, {
		 name: '92 - 94.999',
		 data: [25.0,43.8,25.0,6.3]}, {
		 name: 'Above 95',
		 data: [17.5,40.0,27.5,15.0]}]});});
}
function srAln() {
$(function () {
$('#sraln').highcharts({
	title: {
		//text: 'All Nighters at Stuy'
	},	xAxis: {
		categories: ['None','1','2 - 3','4 - 6','More than 6'],
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
		 data: [38.5,13.7,21.7,10.6,15.5]}]});});
}
function srMhd() {
$(function () {
$('#srmhd').highcharts({
	title: {
		//text: 'Mental Health Days'
	},	xAxis: {
		categories: ['None','1 - 3','4 - 8','8 - 11','More than 11'],
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
		 data: [30.6,28.1,21.9,6.3,13.1]}]});});
}
function srMen() {
$(function () {
$('#srmen').highcharts({
	title: {
		//text: 'Where you diagnosed with a mental illness at stuyvesant'
	},	xAxis: {
		categories: ['No','Yes'],
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
		 data: [86.3,13.7]}]});});
}

function srAcd() {
$(function () {
$('#sracd').highcharts({
	title: {
		//text: 'Frequency of Academic Dishonesty'
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
		 name: 'just so you know this entire thing was done by Shaina Peters',
		 data: [3.8,21.3,46.3,28.8]}]});});
}
function srAcdGpa() {
$(function () {
$('#sracd').highcharts({
	title: {
		//text: 'Frequency of Academic Dishonesty by gpa'
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
		 name: 'Below 89',
		 data: [5.3,15.8,57.9,21.1]}, {
		 name: '89 - 91.999',
		 data: [8.3,25.0,47.2,19.4]}, {
		 name: '92 - 94.999',
		 data: [3.1,30.8,40.0,26.2]}, {
		 name: 'Above 95',
		 data: [0.0,5.0,50.0,45.0]}]});});

}
function srSea() {
$(function () {
$('#srsea').highcharts({
	title: {
		//text: '"I partook in Sexual Activity"'
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
		 name: 'Sonia please how hard is it to just give me percentages',
		 data: [6.3,18.8,14.4,60.6]}]});});
}

function srDrug() {
$(function () {
$('#srdrug').highcharts({
	title: {
		//text: '"I used prescription  drugs (eg. Xanax and Valium)"'
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
		 data: [0.6,1.2,1.9,96.3]}]});});
}
function srDrugAlc() {
$(function () {
$('#srdrug').highcharts({
	title: {
		//text: '"I drank alcohol"'
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
		 data: [7.5,16.1,19.3,57.1]}]});});
}
function srDrugCig() {
$(function () {
$('#srdrug').highcharts({
	title: {
		//text: '"I smoked cigarettes"'
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
		 data: [0.6,1.9,2.5,95.0]}]});});
}
function srDrug420blazeit() {
$(function () {
$('#srdrug').highcharts({
	title: {
		//text: '"I used marijuana"'
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
		 name: '420blazeit',
		 data: [3.8,6.3,8.8,81.3]}]});});

}
function srDrugMyfuturetbh() {
$(function () {
$('#srdrug').highcharts({
	title: {
		//text: '"I used study drugs (eg. Adderall)"'
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
		 data: [1.2,1.2,5.0,92.5]}]});});
}
function srAgain() {
$(function () {
$('#sragain').highcharts({
	title: {
		//text: 'Would you choose Stuyvesant Again?'
	},	xAxis: {
		categories: ['Yes','No'],
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
		 data: [89.4,10.6]}]});});
}
function srAgainGpa() {
$(function () {
$('#sragain').highcharts({
	title: {
		//text: 'Would you choose Stuyvesant Again? by gpa'
	},	xAxis: {
		categories: ['Yes','No'],
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
		 name: 'Below 85',
		 data: [66.7,33.3]}, {
		 name: '85 - 88.999',
		 data: [84.6,15.4]}, {
		 name: '89 - 91.999',
		 data: [78.4,21.6]}, {
		 name: '92 - 94.999',
		 data: [92.3,7.7]}, {
		 name: 'Above 95',
		 data: [100.0,0.0]}]});});
}
function srAgainCol() {
$(function () {
$('#sragain').highcharts({
	title: {
		//text: 'Would you choose Stuyvesant Again? by college'
	},	xAxis: {
		categories: ['Yes','No'],
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
		 name: 'Ivy League University',
		 data: [96.4,3.6]}, {
		 name: 'Other Top 10 School (Stanford, MIT, UChicago)',
		 data: [96.6,3.4]}, {
		 name: 'Liberal Arts College',
		 data: [87.5,12.5]}, {
		 name: 'Non-NY State School',
		 data: [87.5,12.5]}, {
		 name: 'Other Research University',
		 data: [90.0,10.0]}, {
		 name: 'SUNY/CUNY',
		 data: [81.0,19.0]}, {
		 name: 'Other',
		 data: [87.5,12.5]}]});});
}
function srAgainIns() {
$(function () {
$('#sragain').highcharts({
	title: {
		//text: 'Would you choose Stuyvesant Again? by number of inspiring teachers'
	},	xAxis: {
		categories: ['Yes','No'],
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
		 name: '0 - 1',
		 data: [30.0,70.0]}, {
		 name: '2 - 3 ',
		 data: [12.9,87.1]}, {
		 name: 'More than 4',
		 data: [3.6,96.4]}]});});
}
