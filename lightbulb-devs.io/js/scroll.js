var scrollAnimations = ()=>{

	//Key parameters
	const header = {//... for Header section
		whole: document.querySelector('.header'),
		logo: document.querySelector('.header .logo h1'),
		navigationLinks: document.querySelectorAll('.header .link a')
	};

	const banner = {//... for Banner section
		whole: document.querySelector('.banner'),
		company: document.querySelector('.banner .company-name'),
		tagline: document.querySelector('.banner .tagline'),
		service: document.querySelector('.banner .service p'),
		serviceIcon: document.querySelector('.banner .service .icon')
	};

	const about = {//... for About section
		whole: document.querySelector('.about'),
		title: document.querySelector('.about .title'),
		subtitle: document.querySelector('.about .subtitle'),
		heading: document.querySelector('.about .heading'),
		subheading: document.querySelector('.about .subheading'),
		paragraphs: document.querySelectorAll('.about .body p')
	};

	const services = {//... for Services section
		whole: document.querySelector('.services'),
		title: document.querySelector('.services .title-wrap .title'),
		subtitle: document.querySelector('.services .title-wrap .subtitle'),
		brief: document.querySelector('.services .services-description .brief'),
		all: document.querySelectorAll('.services .services-description .all-services .service'),
		flipCardsBody: document.querySelector('.services .services-description .flip-cards'),
		flipCards: document.querySelectorAll('.services .services-description .flip-cards .flip-card')
	};

	const pricing = {//... for Pricing section
		whole: document.querySelector('.pricing'),
		title: document.querySelector('.pricing .title-wrap .title'),
		subtitle: document.querySelectorAll('.pricing .title-wrap .subtitle span'),
		switch: document.querySelector('.pricing .tab-switcher'),
		mainTabs: document.querySelectorAll('.pricing .tab-switcher .main-tab p'),
		subTabs: document.querySelectorAll('.pricing .category .sub-tabs .tab'),
		plans: document.querySelectorAll('.pricing .sub-category .plan')
	}

	const team = {//... for Team section
		whole: document.querySelector('.team'),
		title: document.querySelector('.team .title-wrap .title'),
		subtitle: document.querySelector('.team .title-wrap .subtitle'),
		members: document.querySelectorAll('.team .member')
	};

	const footer = {//... for Footer section
		whole: document.querySelector('.footer'),
		formFields: document.querySelectorAll('.footer .contact-form .field'),
		orContact: document.querySelector('.footer .or'),
		call: document.querySelector('.footer .contact-info .phone'),
		email: document.querySelector('.footer .contact-info .email'),
		map: document.querySelector('.footer .maps .map'),
		socialMedia: document.querySelectorAll('.footer .social-media .icon'),
		socialMedia: document.querySelectorAll('.footer .scroll .scroll-top')
	};

	var screenHeight = window.innerHeight; //The device's screen height
	
	//Animations
	var effects = {
		//Header
		header: {
			whole: ()=>{
				var topGap = banner.whole.getBoundingClientRect().top; //The gap between the element and the top of the device's screen

				if (topGap < 0) {
					header.whole.style = 'height: var(--navbar); background: linear-gradient(rgba(80, 80, 80, 1), rgba(0, 0, 0, 1) 50%); border-radius: 0 0 3px 3px; box-shadow: 0 0 10px var(--black), 0 0 10px grey;';
					header.logo.style = 'width: 45px; height: 45px; transition-property: width, height; transition-duration: 0.3s; transition-timing-function: ease-in-out;';
					for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
						header.navigationLinks[i].style = 'font-size: 16px; transition: font-size 0.3s ease-in-out;';
					}
				}
				if (topGap >= 0) {
					header.whole.style = 'height: var(--navbar-top); background: var(--black); border-radius: 0; box-shadow: none;';
					header.logo.style = 'width: 60px; height: 60px; transition-property: width, height; transition-duration: 0.3s; transition-timing-function: ease-in-out;';
					for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
						header.navigationLinks[i].style = 'font-size: 20px; transition: font-size 0.3s ease-in-out;';
					}
				}
			},
			logo: ()=>{},
			navigationLinks: ()=>{},
		},
		//Banner
		banner: {},
		//About
		about: {},
		//Services
		services: {},
		//Pricing
		pricing: {},
		//Team
		team: {},
		//Footer
		footer: {}
	};

	window.addEventListener('scroll', effects.header.whole, false);
	effects.header.whole();

};

window.addEventListener('DOMContentLoaded', scrollAnimations, false); //Run srcipt after page loads