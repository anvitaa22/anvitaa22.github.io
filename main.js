const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".container nav ul li");

window.addEventListener('scroll', () =>{
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop-sectionHeight / 3)){
            current = section.getAttribute("id");
        }
    })

    navLi.forEach(list =>{
        list.classList.remove('active');
        if (list.classList.contains(current)){
            list.classList.add('active')
        }
    })
})


modalData = {
	'0': {
		'title': 'Rhymes With Reason',
		'role': "Full-Stack Developer Intern",
		'dates': 'June 2021 - September 2021, San Diego CA',
        'description': "RWR is a edu-tech startup which aims to teach students high-level english vocabulary through music. I implemented the new design for the student experience in React and worked on the APIs in Django which was used for the backend. I worked on incorporating a rewards system in the e-learning eperience aimed to increase site engagement. I also added Lazy Loading to the application to reduce load times.",
		'tools': 'React, Django, JavaScript, Python, Postgres,',
	},
	'1': {
		'title': 'CoffeeData',
		'role': 'Big Data Analytics Intern',
		'dates': 'October 2020 - March 2021, Cupertino CA',
		'description': "I implemented a Spark pipeline to improve the efficiency of machine learning workflows. I learned how to clean and process data and apply ML libraries in Spark to make predictions based on data. I also used Tableau to visiually represent the findings",
		'tools': 'Apache Spark, Scala, MLib, Spark SQL, Tableau',
	},
	'2': {
		'title': 'UCSD CSE',
		'role': 'Undergraduate Tutor',
		'dates': 'June 2021 - September 2021',
        'description': "I was a tutor for a computer science algorithms class (CSE 101). My role included holding office hours for helping students with class material, designing questions for assignments and tests and grading them. I was also actively involved in setting up automated grading for the programming assignments using the Gradescope API and writing unit tests. ",
        'tools': 'Python, C/C++, Gradescope API',
	},
	'3': {
		'title': 'Pomofocus',
		'role': 'Full-Stack Developer and Designer',
		'dates': 'January 2021 - March 2021',
		'description': 'Pomofocus is a web application using vanilla HTML, CSS and JavaScript to increase productivity. The app allows users to create tasks and manage them using them using the Pomodoro technique. I coded the front-end and back-end of the application, and also designed it on Figma after conducting user research. Feel free it check it out out the <a href="https://zihaokong.github.io/cse110-w21-group27/" target="_blank">application</a> and the <a href="https://github.com/Zihaokong/cse110-w21-group27" target="_blank">code</a>',
		'tools': 'HTML, CSS, JavaScript, Bootstrap, Jest, Cypress, GitHub Actions, Figma'
	},
	'4': {
		'title': 'EasyBites',
		'role': 'Full-Stack Developer',
		'dates': 'October 2020 - January 2021',
		'description': 'EasyBites is a mobile application which aims at building a community for sharing food recipes. As a Full-Stack Developer, I coded the home page and settings feature of the application using Android Studio. I also created a database on Firebase and integrated the app with the database for real-time use. Feel free to check out the code <a href="https://github.com/haelaine/Recipe-App" target="_blank">here.</a>',
		'tools': 'Android Studio, Kotlin, Firebase, Figma, Git'
	},
	'5': {
		'title': 'Women in Computing',
		'role': 'Project Lead',
		'dates': 'January 2021 - March 2021',
		'description': 'I participated in the Winter Dev Program in WIC, a club at UCSD as a project lead for a team. The app being created by the team was a fitness tracker mobile application in React Native. I led the backend developement by intergrating the databse to Firebase. As a team lead, I also followed a SPRINT plan, delegated tasks among team members and conducted weekly retrospective meetings. You can have a deeper look into the code by clicking <a href="https://github.com/anvitaa22/fitness-app-wic" target="_blank">here.</a>',
		'tools': 'React Native, Firebase, JavaScript, Figma, Git'
	},
	'6': {
		'title': 'OpenSource @ UCSD',
		'role': 'Front-end Engineer',
		'dates': 'January 2021 - May 2021',
		'description': 'As a part of this club, I learned how to develop and contribute to open-source projects. I was in a project team wherein we developed a collaborative planner for remote group projects. I coded the front-end of the application in remote HTML, CSS and JavaScript. I also helped integrate the Google Calendar API to store events and assisted in storing the user information in the database which was managed using Firebase. Feel free to check out our code by clicking <a href="https://github.com/os-ucsd/leetles" target="_blank">here.</a>',
		'tools': 'JavaScript, Firebase, HTML/CSS, Bootstrap, Figma, ESLint'
	},
	
}

var cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", function fillContent(evt) {
		contentBabyContent = modalData[this.id]
		document.getElementsByClassName("modal-title")[0].innerHTML = contentBabyContent.title;
		document.getElementsByClassName('modal-role')[0].innerHTML = contentBabyContent.role;
		document.getElementsByClassName('modal-dates')[0].innerHTML = contentBabyContent.dates;
		document.getElementsByClassName('modal-description')[0].innerHTML = contentBabyContent.description;

		if ('tools' in contentBabyContent) {
			document.getElementsByClassName('modal-tools')[0].innerHTML = contentBabyContent.tools;
		} else {
			document.getElementsByClassName('modal-tools')[0].innerHTML = '';	
		}
	});
}

function openInfoModal() {
    document.getElementById('info-modal').style.display = 'block';
  }
  function closeInfoModal() {
    document.getElementById('info-modal').style.display = 'none';
  }