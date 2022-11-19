function changeProfile() {
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "Programator";
var m1=document.getElementById("mail");
m1.innerHTML="0787829360";

}

function educationToAchievements() {
var h2=document.getElementById("Educatie");
h2.innerHTML="Realizari";
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Programator";
	p1.innerHTML = "15.12.2029-16.05.2031";
	l1.innerHTML = "https://www.ejobs.ro/locuri-de-munca/programator";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "O lucrare de licenta reusita";
	p2.innerHTML = "22.06.2029";
	l2.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Voluntariat in osut";
	p3.innerHTML = "18.10.2022-24.06.2026";
	l3.innerHTML = "https://osut.ro/info-studenti/oportunitati/oportunitati-de-voluntariat";
}

function oldToNewImage() {
	document.getElementById("Pozaprofil")
	.src = "https://scontent.fomr1-1.fna.fbcdn.net/v/t39.30808-6/299952104_3122497134641838_2916714462665910426_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=-3SiBQKdDtUAX8zzy1q&_nc_ht=scontent.fomr1-1.fna&oh=00_AfBkToK4zPVuwxtSVyJY4_Qt8vXLKhFlFk3mkYN1uKR5AA&oe=637D1F9C";
	img.style.opacity = "1";
	img.style.borderWidth = "10px";
    img.style.borderStyle = "solid";
    img.style.borderColor = "red";
	img.style.right="100px";
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementByTagName("body");
	body.style.backgroundColor  = "#e1f0e5";
	body.style.fontFamily="Verdana";
	
}