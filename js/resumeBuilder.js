var bio = {

	"name" : "Elena Cohen",
	"role" : "Aspiring Front-End Web Developer",
	"email": "elroco11@yahoo.com",
	"phone": "(650) 906-6974",
	"location": "Washington D.C.",


	"welcomemessage" : "Hello! My name is Elena and I am interested in becoming a front-end developer!",
	"skills" : [
		"ArcGIS", "writing", "HTML", "Google Maps API"
		],

"biopic" : "images/IMG_1309_1024.jpg"
}

var work = {
	"jobs": [
	{
		"employer": "AAFP",
		"title": "Health GIS Specialist",
		"location": "Washington D.C.",
		"dates": "January 2014- May 2015",
		"description": "Created maps using ArcGIS and Google Maps API, helped train users on how to use online mapping tools",
	},
	{
		"employer": "Town of North Andover Department of Public Works",
		"title": "GIS Intern",
		"location": "North Andover, MA",
		"dates": "June-August 2012",
		"description": "Edited and created ArcGIS shapefiles, updated databases, performed field data collection with GPS",
	},
	{
		"employer": "U.S Geological Survey Pacific Coastal and Marine Science Center",
		"title": "Student GIS Volunteer",
		"location": "Menlo Park, CA",
		"dates": "June-August 2011",
		"description": "Created KML files showing locations of underwater images, edited information from seafloor mapping cruises for consistency with original logbook entries",
	}
	]	
}

var education = {
	"schools": [
		{
		"name": "Clark University",
		"city": "Worcester, MA",
		"degree": "Bachelor of Arts",
		"major": "Geography",
		"dates": "2009-2013",
		}
		]
}

var projects = {
	"projects": [
	 {
	 	"title": "Front-End Nanodegree P1",
	 	"dates": "June-July 2015",
	 	"images": "images/project1.png",
	 	"description": "Personal website created for Udacity Intro to HTML course",
	 },
	 {
	 	"title": "Web Mapping and Open Source GIS Final Project",
	 	"dates": "April 2013",
	 	"images":"images/webmap.png",
	 	"description": "Created using Google Maps API, users can switch between different layers",
	 }
	]

}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedImage);
var formattedEmail = HTMLemail.replace("%data%",bio.email);
$("#header").append(formattedEmail);
var formattedPhone = HTMLmobile.replace("%data%", bio.phone);
$("#header").append(formattedPhone);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
$("#header").append(formattedLocation);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",
     bio.skills[1]);
  $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",
    bio.skills[2]);
  $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", 
    bio.skills[3]);
  $("#skills").append(formattedSkill);
}


function displayWork(){}
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);;

  var formattedEmployer = HTMLworkEmployer.replace
    ("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + 
    formattedTitle;

  $(".work-entry:last").append(
    formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);  
}

function displaySchools(){}
for (school in education.schools) {
  $("#education").append(HTMLschoolStart);;

  var formattedSchoolName = HTMLschoolName.replace
    ("%data%", education.schools[school].name);

  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major); 
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedDegreeType = formattedMajor + "," + formattedDegree;
 

  $(".education-entry:last").append(
    formattedSchoolName);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    $(".education-entry:last").append(formattedDegreeType);  
}


function displayProjects(){}
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);;
	
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedProjectDates);

	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjectDescription);

	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
	$(".project-entry:last").append(formattedProjectImage);

	}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs) {
		var locationArray = [];
		locationArray.push(newLocation);
	}

	return locationArray;
}


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}



$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
