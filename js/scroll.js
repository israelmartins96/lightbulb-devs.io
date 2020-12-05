const loader = document.querySelector('.loader-wrap'); //Loading screen //Other comments don't forget

var scrollAnimations = ()=>{
	//Key parameters
	const fullPage =document.querySelector('body');

	const header = {//... for Header section
		whole: document.querySelector('.header'),
		logoWrap: document.querySelector('.header .logo'),
		logo: document.querySelector('.header .logo h1'),
		navigationLinksWrap: document.querySelectorAll('.header .link'),
		navigationLinks: document.querySelectorAll('.header .link span')
	};

	const banner = {//... for Banner section
		whole: document.querySelector('.banner'),
		company: document.querySelector('.banner .company-name'),
		tagline: document.querySelector('.banner .tagline'),
		serviceIcon: document.querySelectorAll('.banner .service .icon'),
		service: document.querySelectorAll('.banner .service p')
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
		allContent: document.querySelector('.footer *'),
		formFields: document.querySelectorAll('.footer .contact-form .field'),
		orContact: document.querySelector('.footer .or'),
		call: document.querySelector('.footer .contact-info .phone'),
		email: document.querySelector('.footer .contact-info .email'),
		map: document.querySelector('.footer .maps .map'),
		socialMedia: document.querySelectorAll('.footer .social-media .icon'),
		scrollToTop: document.querySelector('.footer .scroll .scroll-top')
	};

	const pageSections = document.querySelectorAll('.page-section'); //All page sections

	var screenHeight = window.innerHeight; //The device's screen height

	//Animations
	var effects = {
		//Header
		header: {
			whole: ()=>{
				var scroll = (()=>{
					var topGapBanner = banner.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen

					var topGapAbout = about.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen

					var topGapServices = services.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen

					var topGapPricing = pricing.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen

					var topGapTeam = team.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen

					var topGapFooter = footer.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen

					if (topGapBanner < 0) {
						header.whole.style = 'height: var(--navbar); background: linear-gradient(rgba(80, 80, 80, 1), rgba(0, 0, 0, 1) 50%); border-radius: 0 0 3px 3px; box-shadow: 0 0 10px var(--black), 0 0 10px grey;';
						header.logo.style = 'width: 45px; height: 45px; transition-property: width, height; transition-duration: 0.3s; transition-timing-function: ease-in-out;';
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinks[i].style = 'font-size: 16px; transition: font-size 0.3s ease-in-out;';
						}
						footer.scrollToTop.className = footer.scrollToTop.className.replace(' off', ' on');
						about.whole.style = 'background-color: var(--black); color: var(--white); transition-property: color, background-color; transition-duration: 0.5s; transition-timing-function: ease-out;';
					}
					if (topGapBanner >= 0) {
						header.whole.style = 'height: var(--navbar-top); background: var(--black); border-radius: 0; box-shadow: none;';
						header.logo.style = 'width: 60px; height: 60px; transition-property: width, height; transition-duration: 0.3s; transition-timing-function: ease-in-out;';
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinks[i].style = 'font-size: 20px; transition: font-size 0.3s ease-in-out;';
						}
						footer.scrollToTop.className = footer.scrollToTop.className.replace(' on', ' off');
					}
					var switchToCurrentSectionLink = (()=>{ //To switch the navigation link to the corresponding section
						if (topGapBanner < (screenHeight / 2)) {
							for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
								header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
							}
							header.navigationLinksWrap[0].className = header.navigationLinksWrap[0].className.replace('', ' current-page ');
						}
						if (topGapAbout < (screenHeight / 2)) {
							for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
								header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
							}
							header.navigationLinksWrap[1].className = header.navigationLinksWrap[1].className.replace('', ' current-page ');
							about.whole.style = 'background-color: var(--white); color: var(--black); transition-property: color, background-color; transition-duration: 0.5s; transition-timing-function: ease-in;';
						}
						if (topGapServices < (screenHeight / 2)) {
							for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
								header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
							}
							header.navigationLinksWrap[2].className = header.navigationLinksWrap[2].className.replace('', ' current-page ');
							about.whole.style = 'background-color: var(--black); color: var(--white); transition-property: color, background-color; transition-duration: 0.5s; transition-timing-function: ease-out;';
							pricing.whole.style = 'background-color: var(--black); color: var(--white); transition-property: color, background-color; transition-duration: 0.5s; transition-timing-function: ease-out;';
							pricing.title.style = 'color: var(--white) !important; transition-property: color; transition-duration: 0.5s; transition-timing-function: ease-out;';
						}
						if (topGapPricing < (screenHeight / 2)) {
							for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
								header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
							}
							header.navigationLinksWrap[3].className = header.navigationLinksWrap[3].className.replace('', ' current-page ');
							pricing.whole.style = 'background-color: var(--white); color: var(--black); transition-property: color, background-color; transition-duration: 0.5s; transition-timing-function: ease-in;';
							pricing.title.style = 'color: var(--black); transition-property: color; transition-duration: 0.5s; transition-timing-function: ease-out;';
						}
						if (topGapTeam < (screenHeight / 2)) {
							for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
								header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
							}
							header.navigationLinksWrap[4].className = header.navigationLinksWrap[4].className.replace('', ' current-page ');
							pricing.whole.style = 'background-color: var(--black); color: var(--white); transition-property: color, background-color; transition-duration: 0.5s; transition-timing-function: ease-out;';
							pricing.title.style = 'color: var(--white); transition-property: color; transition-duration: 0.5s; transition-timing-function: ease-out;';
						}
						if (topGapFooter < (screenHeight / 2)) {
							for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
								header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
							}
							header.navigationLinksWrap[5].className = header.navigationLinksWrap[5].className.replace('', ' current-page ');
						}
					})();
				})();
			},
			navigationLinks: ()=>{
				var scrollToSection = (()=>{
					//Banner section
					header.navigationLinks[0].addEventListener('mouseup', ()=>{ //To scroll to the desired section when the link is hit
						pageSections[0].scrollIntoView({
							behavior: 'smooth'
						});
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
						}
						header.navigationLinksWrap[0].className = header.navigationLinksWrap[0].className.replace('', ' current-page ');
					}, false);
					//About section
					header.navigationLinksWrap[1].addEventListener('mouseup', ()=>{
						pageSections[1].scrollIntoView({
							behavior: 'smooth'
						});
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
						}
						header.navigationLinksWrap[1].className = header.navigationLinksWrap[1].className.replace('', ' current-page ');
					}, false);
					//Services section
					header.navigationLinksWrap[2].addEventListener('mouseup', ()=>{
						pageSections[2].scrollIntoView({
							behavior: 'smooth'
						});
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
						}
						header.navigationLinksWrap[2].className = header.navigationLinksWrap[2].className.replace('', ' current-page ');
					}, false);
					//Pricing section
					header.navigationLinksWrap[3].addEventListener('mouseup', ()=>{
						pageSections[3].scrollIntoView({
							behavior: 'smooth'
						});
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
						}
						header.navigationLinksWrap[3].className = header.navigationLinksWrap[3].className.replace('', ' current-page ');
					}, false);
					//Team section
					header.navigationLinksWrap[4].addEventListener('mouseup', ()=>{
						pageSections[4].scrollIntoView({
							behavior: 'smooth'
						});
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
						}
						header.navigationLinksWrap[4].className = header.navigationLinksWrap[4].className.replace('', ' current-page ');
					}, false);
					//Contact section
					header.navigationLinksWrap[5].addEventListener('mouseup', ()=>{
						pageSections[5].scrollIntoView({
							behavior: 'smooth'
						});
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
						}
						header.navigationLinksWrap[5].className = header.navigationLinksWrap[5].className.replace('', ' current-page ');
					}, false);
				})();
			},
		},
		footer: {
			scrollToTop: ()=>{
				var scroll = (()=>{
					footer.scrollToTop.addEventListener('click', ()=>{ //To scroll to the top of the page when the arrow is hit
						pageSections[0].scrollIntoView({
							behavior: 'smooth'
						});
						footer.scrollToTop.className = footer.scrollToTop.className.replace(' on', ' off');
						for (var i = header.navigationLinks.length - 1; i >= 0; i--) {
							header.navigationLinksWrap[i].className = header.navigationLinksWrap[i].className.replace(' current-page', '');
						}
						header.navigationLinksWrap[0].className = header.navigationLinksWrap[0].className.replace('', ' current-page ');
					}, false);
				})();
			}
		}
	};

	var animations = {
		header: (()=>{
			var topGapBanner = banner.whole.getBoundingClientRect().top;
			if (topGapBanner >= 0) {
				for (var i = header.navigationLinksWrap.length - 1; i >= 0; i--) {
					header.navigationLinksWrap[i].style = 'opacity: 0; transform: translateY(5px);';
				}
				header.logoWrap.style.opacity = 0;
				setTimeout(()=>{
					var linkCount = header.navigationLinksWrap.length - 1;
					var displayLink = (linkPos)=>{
						header.navigationLinksWrap[linkPos].style = 'opacity: 1; transform: translateY(0); transition-property: opacity, transform; transition-duration: 0.3s; transition-timing-function: ease-in;';
					};
					var displayLinkControl = ()=>{
						displayLink(linkCount);
						linkCount -= 1;
						if (linkCount < 0) {
							var stopDisplayLinkInterval = ()=>{
								clearInterval(displayLinkInterval);
							};
							stopDisplayLinkInterval();
							header.logoWrap.style = 'opacity: 1; transition: opacity 0.5s ease-in 0.5s;';
						}
					};
					var displayLinkInterval = setInterval(displayLinkControl, 500);
				}, 1300);
			}
		})(),
		banner: (()=>{
			var topGapBanner = banner.whole.getBoundingClientRect().top;
			if (topGapBanner >= 0) {
				fullPage.style.overflow = 'hidden';
				banner.company.style.opacity = 0;
				banner.tagline.style = 'opacity: 0; transform: translateX(20px);';
				for (var i = banner.service.length - 1; i >= 0; i--) {
					banner.serviceIcon[i].style = 'opacity: 0; transform: translateY(20px);';
					banner.service[i].style = 'opacity: 0; transform: translateX(20px);';
				}
				setTimeout(()=>{
					banner.company.style = 'opacity: 1; transition-property: opacity; transition-duration: 0.9s; transition-timing-function: ease-in; transition-delay: 4.5s;';
					banner.tagline.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.9s; transition-timing-function: ease-in; transition-delay: 5.5s;';
					var serviceCount = 0;
					var displayService = (servicePos)=>{
						banner.serviceIcon[servicePos].style = 'opacity: 1; transform: translateY(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in; transition-delay: 6.5s;';
						banner.service[servicePos].style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in; transition-delay: 6.8s;';
					};
					var displayServiceControl = ()=>{
						displayService(serviceCount);
						serviceCount += 1;
						if (serviceCount > (banner.service.length - 1)) {
							var stopDisplayServiceInterval = ()=>{
								setTimeout(()=>{
									fullPage.style.overflow = 'auto';
								}, 7000);
								clearInterval(displayServiceInterval);
							};
							stopDisplayServiceInterval();
						}
					};
					var displayServiceInterval = setInterval(displayServiceControl, 800);
				}, 1300);
			}
		})(),
		about: (()=>{
			var topGapAbout = about.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
			if (topGapAbout > (0 + header.whole.offsetHeight)) {
				about.title.style = 'opacity: 0; transform: translateX(-20px);';
				about.subtitle.style = 'opacity: 0; transform: translateX(20px);';
				about.heading.style = 'opacity: 0; transform: translateX(-20px);';
				about.subheading.style = 'opacity: 0; transform: translateX(20px);';
				about.paragraphs[0].style = 'opacity: 0; transform: translateY(-20px);';
				about.paragraphs[1].style = 'opacity: 0; transform: translateY(20px);';
				setTimeout(()=>{
					var displayContent = ()=>{
						var screenHeight = window.innerHeight; //The device's screen height
						var topGapAbout = about.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
						var visible = false;
						if (topGapAbout < (screenHeight / 1.2) && visible == false) {
							visible = true;
							about.title.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							about.subtitle.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							about.heading.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							about.subheading.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							for (var i = about.paragraphs.length - 1; i >= 0; i--) {
								about.paragraphs[i].style = 'opacity: 1; transform: translateY(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							}
							about.whole.removeEventListener('scroll', displayContent);
						}
					}
					window.addEventListener('scroll', displayContent, false);
				}, 1300);
			}
		})(),
		services: (()=>{
			var topGapServices = services.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
			if (topGapServices > (0 + header.whole.offsetHeight)) {
				services.title.style = 'opacity: 0; transform: translateX(20px);';
				services.subtitle.style = 'opacity: 0; transform: translateX(-20px);';
				services.brief.style = 'opacity: 0; transform: translateX(-20px);';
				services.all[0].style = 'opacity: 0; transform: translateX(50%);';
				services.all[1].style = 'opacity: 0; transform: translateX(-50%);';
				services.all[2].style = 'opacity: 0; transform: translateX(50%);';
				services.all[3].style = 'opacity: 0; transform: translateX(-50%);';
				services.all[4].style = 'opacity: 0; transform: translateX(50%);';
				services.all[5].style = 'opacity: 0; transform: translateX(-50%);';
				services.flipCards[0].style = 'opacity: 0; transform: translateY(50%);';
				services.flipCards[1].style = 'opacity: 0; transform: translateY(-50%);';
				setTimeout(()=>{
					var displayContent = ()=>{
						var screenHeight = window.innerHeight; //The device's screen height
						var topGapServices = services.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
						var visible = false;
						if (topGapServices < (screenHeight / 1.2) && visible == false) {
							visible = true;
							services.title.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							services.subtitle.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							services.brief.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							for (var i = services.all.length - 1; i >= 0; i--) {
								services.all[i].style = 'opacity: 1; transform: translateY(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							}
							for (var i = services.flipCards.length - 1; i >= 0; i--) {
								services.flipCards[i].style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							}
							services.whole.removeEventListener('scroll', displayContent);
						}
					}
					window.addEventListener('scroll', displayContent, false);
				}, 1300);
			}
		})(),
		pricing: (()=>{
			var topGapPricing = pricing.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
			if (topGapPricing > (0 + header.whole.offsetHeight)) {
				pricing.title.style = 'opacity: 0; transform: translateX(-20px);';
				for (var i = pricing.subtitle.length - 1; i >= 0; i--) {
					pricing.subtitle[i].style = 'opacity: 0; transform: translateX(50px);';
				}
				pricing.switch.style = 'opacity: 0; transform: translateX(-20px);';
				for (var i = pricing.mainTabs.length - 1; i >= 0; i--) {
					pricing.mainTabs[i].style = 'opacity: 0; transform: translateX(20px);';
				}
				for (var i = pricing.subTabs.length - 1; i >= 0; i--) {
					pricing.subTabs[i].style = 'opacity: 0; transform: translateY(-20px);';
				}
				for (var i = pricing.plans.length - 1; i >= 0; i--) {
					pricing.plans[i].style = 'opacity: 0; transform: translateY(20px);';
				}
				setTimeout(()=>{
					var displayContent = ()=>{
						var screenHeight = window.innerHeight; //The device's screen height
						var topGapPricing = pricing.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
						var visible = false;
						if (topGapPricing < (screenHeight / 2) && visible == false) {
							visible = true;
							pricing.title.style = 'opacity: 1; transform: translateX(0); transition-property: color, opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							var subtitlePartsCount = 0;
							var displaySubtitle = (subtitlePos)=>{
								pricing.subtitle[subtitlePos].style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in; transition-delay: 0s;';
							};
							var displaySubtitleControl = ()=>{
								displaySubtitle(subtitlePartsCount);
								subtitlePartsCount += 1;
								if (subtitlePartsCount >= pricing.subtitle.length) {
									var stopDisplaySubtitleInterval = ()=>{
										clearInterval(displaySubtitleInterval);
									};
									stopDisplaySubtitleInterval();
								}
							};
							var displaySubtitleInterval = setInterval(displaySubtitleControl, 800);
							pricing.switch.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							for (var i = pricing.mainTabs.length - 1; i >= 0; i--) {
								pricing.mainTabs[i].style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							}
							for (var i = pricing.subTabs.length - 1; i >= 0; i--) {
								pricing.subTabs[i].style = 'opacity: 1; transform: translateY(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							}
							for (var i = pricing.plans.length - 1; i >= 0; i--) {
								pricing.plans[i].style = 'opacity: 1; transform: translateY(0); transition-property: opacity, transform, box-shadow; transition-duration: 0.3s; transition-timing-function: ease-in-out;';
							}
							pricing.whole.removeEventListener('scroll', displayContent);
						}
					}
					window.addEventListener('scroll', displayContent, false);
				}, 1300);
			}
		})(),
		team: (()=>{
			var topGapTeam = team.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
			if (topGapTeam > (0 + header.whole.offsetHeight)) {
				team.title.style = 'opacity: 0; transform: translateX(100px);';
				team.subtitle.style = 'opacity: 0; transform: translateX(-100px);';
				for (var i = team.members.length - 1; i >= 0; i--) {
					team.members[i].style = 'opacity: 0; transform: translateX(100px);';
				}
				setTimeout(()=>{
					var displayContent = ()=>{
						var topGapTeam = team.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
						var screenHeight = window.innerHeight; //The device's screen height
						var visible = false;
						if (topGapTeam < (screenHeight / 1.2) && visible == false) {
							visible = true;
							team.title.style = 'opacity: 1; transform: translateX(0); transition-property: color, opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							team.subtitle.style = 'opacity: 1; transform: translateX(0); transition-property: color, opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							var teamMembersCount = 0;
							var displayTeamMembers = (teamMemberPos)=>{
								team.members[teamMemberPos].style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in; transition-delay: 0s;';
							};
							var displayTeamMembersControl = ()=>{
								displayTeamMembers(teamMembersCount);
								teamMembersCount += 1;
								if (teamMembersCount > (team.members.length - 1)) {
									var stopDisplayTeamMembersInterval = ()=>{
										clearInterval(displayTeamMembersInterval);
									};
									stopDisplayTeamMembersInterval();
								}
							};
							var displayTeamMembersInterval = setInterval(displayTeamMembersControl, 800);
							team.whole.removeEventListener('scroll', displayContent);
						}
					}
					window.addEventListener('scroll', displayContent, false);
				}, 1300);
			}
		})(),
		footer: (()=>{
			var topGapFooter = footer.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
			if (topGapFooter > (0 + header.whole.offsetHeight)) {
				footer.allContent.style = 'opacity: 0; transform: translateY(100px);';
				setTimeout(()=>{
					var displayContent = ()=>{
						var screenHeight = window.innerHeight; //The device's screen height
						var topGapFooter = footer.whole.getBoundingClientRect().top; //The gap between the section and the top of the device's screen
						var visible = false;
						if (topGapFooter < (screenHeight / 1.2) && visible == false) {
							visible = true;
							footer.allContent.style = 'opacity: 1; transform: translateX(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-timing-function: ease-in;';
							footer.whole.removeEventListener('scroll', displayContent);
						}
					}
					window.addEventListener('scroll', displayContent, false);
				}, 1300);
			}
		})()
	};

	window.addEventListener('scroll', effects.header.whole, false);
	effects.header.whole();
	effects.header.navigationLinks();
	effects.footer.scrollToTop();
};

window.addEventListener('DOMContentLoaded', scrollAnimations, false); //Run srcipt after page loads

setTimeout(()=>{
	loader.style = 'opacity: 0; transition-property: opacity, display; transition-duration: 0.3s; transition-timing-function: ease-out;';
	setTimeout(()=>{
		loader.style = 'display: none;';
	}, 300);
}, 1000);