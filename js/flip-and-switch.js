var flipAndSwitch = ()=>{
	var flipCard = (()=>{//The control for flip cards
			const flipCards = { //Flip card parts
				card: document.querySelectorAll('.flip-cards .flip-card'), //... whole
				front: document.querySelectorAll('.flip-cards .flip-card .front'), //... front
				back: document.querySelectorAll('.flip-cards .flip-card .back') //... back
			};

			//When the card is flipped to the other side
			var flippedCardOne = ()=>{
				flipCards.front[0].style = 'transform: perspective(1000px) rotateY(-180deg); transition: transform 0.3s linear;';
				flipCards.back[0].style = 'transform: perspective(1000px) rotateX(0deg); transition: 0.3s linear;';
			};

			//When the card is flipped to the other side
			var flippedCardTwo = ()=>{
				flipCards.front[1].style = 'transform: perspective(1000px) rotateY(-180deg); transition: transform 0.3s linear;';
				flipCards.back[1].style = 'transform: perspective(1000px) rotateX(0deg); transition: 0.3s linear;';
			};

			//When the card is not flipped
			var unflippedCardOne = ()=>{
				flipCards.front[0].style = 'transform: perspective(1000px) rotateY(0deg); transition: transform 0.3s linear;';
				flipCards.back[0].style = 'transform: perspective(1000px) rotateY(180deg); transition: transform 0.3s linear;';
			};

			//When the card is not flipped
			var unflippedCardTwo = ()=>{
				flipCards.front[1].style = 'transform: perspective(1000px) rotateY(0deg); transition: transform 0.3s linear;';
				flipCards.back[1].style = 'transform: perspective(1000px) rotateY(180deg); transition: transform 0.3s linear;';
			};

			//To flip the cards when hovered or touched...
			flipCards.card[0].addEventListener('mouseover', flippedCardOne, false);
			flipCards.card[1].addEventListener('mouseover', flippedCardTwo, false);
			//... and unflip the cards when out of focus
			flipCards.card[0].addEventListener('mouseout', unflippedCardOne, false);
			flipCards.card[1].addEventListener('mouseout', unflippedCardTwo, false);
		})();

	var pricesSwitch = (()=>{ //The control for the Prices section's categories
		var switchTabs = (()=>{
			const pricing = {
				mainTab: document.querySelectorAll('.tab-switcher .main-tab'), //The category switch
				subTab: { //The sub-category switches
					website: document.querySelectorAll('.categories .website .sub-tabs .tab'),
					mobileApp: document.querySelectorAll('.categories .mobile-app .sub-tabs .tab'),
					webApp: document.querySelectorAll('.categories .web-app .sub-tabs .tab'),
					desktopApp: document.querySelectorAll('.categories .desktop-app .sub-tabs .tab')
				},
				category: document.querySelectorAll('.categories .category'), //All categories
				subcategory: { //Sub-categories
					website: document.querySelectorAll('.categories .website .sub-category'),
					mobileApp: document.querySelectorAll('.categories .mobile-app .sub-category'),
					webApp: document.querySelectorAll('.categories .web-app .sub-category'),
					desktopApp: document.querySelectorAll('.categories .desktop-app .sub-category')
				},
				plans: { //Service plans
					website: document.querySelectorAll('.categories .website .sub-category .plan'),
					mobileApp: document.querySelectorAll('.categories .mobile-app .sub-category .plan'),
					webApp: document.querySelectorAll('.categories .web-app .sub-category .plan'),
					desktopApp: document.querySelectorAll('.categories .desktop-app .sub-category .plan')
				},
				toggleDetails: { //To show/hide plan details
					website: document.querySelectorAll('.categories .website .plan .details p'),
					mobileApp: document.querySelectorAll('.categories .mobile-app .plan .details p'),
					webApp: document.querySelectorAll('.categories .web-app .plan .details p'),
					desktopApp: document.querySelectorAll('.categories .desktop-app .plan .details p'),
				},
				details: { //Plan details
					all: document.querySelectorAll('.categories .category .plan .deliverables ul'),
					website: document.querySelectorAll('.categories .website .plan .deliverables ul'),
					mobileApp: document.querySelectorAll('.categories .mobile-app .plan .deliverables ul'),
					webApp: document.querySelectorAll('.categories .web-app .plan .deliverables ul'),
					desktopApp: document.querySelectorAll('.categories .desktop-app .plan .deliverables ul')
				},
				requestButton: document.querySelectorAll('.categories .plan .request-button') //Plan request button
			};

			var showDetails = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]; //Whether or not plan details are visible

			var resetPlanDetailsDisplay = ()=>{ //To hide plan details
				for (var i = pricing.toggleDetails.website.length - 1; i >= 0; i--) {
					pricing.toggleDetails.website[i].innerHTML = 'More details...';
				}
				for (var i = pricing.toggleDetails.mobileApp.length - 1; i >= 0; i--) {
					pricing.toggleDetails.mobileApp[i].innerHTML = 'More details...';
				}
				for (var i = pricing.toggleDetails.webApp.length - 1; i >= 0; i--) {
					pricing.toggleDetails.webApp[i].innerHTML = 'More details...';
				}
				for (var i = pricing.toggleDetails.desktopApp.length - 1; i >= 0; i--) {
					pricing.toggleDetails.desktopApp[i].innerHTML = 'More details...';
				}
				for (var i = pricing.details.all.length - 1; i >= 0; i--) {
					pricing.details.all[i].className = pricing.details.all[i].className.replace('visible', 'hidden');
				}
				for (var i = showDetails.length - 1; i >= 0; i--) {
					showDetails[i] = false;
				}
			};

			var tabSwitcher = (()=>{ //Tab switching functionality
				var switchToCategoryOne = ()=>{ //Switch to the first category
					//Set the tab as the current tab
					for (var i = pricing.mainTab.length - 1; i >= 0; i--) {
						pricing.mainTab[i].className = pricing.mainTab[i].className.replace(' active-tab', '');
					}
					pricing.mainTab[0].className = pricing.mainTab[0].className.replace('', ' active-tab ');
					//Set the corresponding category as the current one
					for (var i = pricing.category.length - 1; i >= 0; i--) {
						pricing.category[i].className = pricing.category[i].className.replace(' category-active', '');
					}
					pricing.category[0].className = pricing.category[0].className.replace('', ' category-active ');
					//Set the first sub-tab as the current one
					for (var i = pricing.subTab.website.length - 1; i >= 0; i--) {
						pricing.subTab.website[i].className = pricing.subTab.website[i].className.replace(' active-tab', '');
					}
					pricing.subTab.website[0].className = pricing.subTab.website[0].className.replace('', ' active-tab ');
					//Set the corresponding sub-category (i.e. the first) as the active one
					for (var i = pricing.subcategory.website.length - 1; i >= 0; i--) {
						pricing.subcategory.website[i].className = pricing.subcategory.website[i].className.replace(' sub-category-active', '');
					}
					pricing.subcategory.website[0].className = pricing.subcategory.website[0].className.replace('', ' sub-category-active ');
					resetPlanDetailsDisplay();
				}

				var switchToCategoryTwo = ()=>{ //Switch to the second category
					//Set the tab as the current tab
					for (var i = pricing.mainTab.length - 1; i >= 0; i--) {
						pricing.mainTab[i].className = pricing.mainTab[i].className.replace(' active-tab', '');
					}
					pricing.mainTab[1].className = pricing.mainTab[1].className.replace('', ' active-tab ');
					//Set the corresponding category as the current one
					for (var i = pricing.category.length - 1; i >= 0; i--) {
						pricing.category[i].className = pricing.category[i].className.replace(' category-active', '');
					}
					pricing.category[1].className = pricing.category[1].className.replace('', ' category-active ');
					//Set the first sub-tab as the current one
					for (var i = pricing.subTab.mobileApp.length - 1; i >= 0; i--) {
						pricing.subTab.mobileApp[i].className = pricing.subTab.mobileApp[i].className.replace(' active-tab', '');
					}
					pricing.subTab.mobileApp[0].className = pricing.subTab.mobileApp[0].className.replace('', ' active-tab ');
					//Set the corresponding sub-category (i.e. the first) as the active one
					for (var i = pricing.subcategory.mobileApp.length - 1; i >= 0; i--) {
						pricing.subcategory.mobileApp[i].className = pricing.subcategory.mobileApp[i].className.replace(' sub-category-active', '');
					}
					pricing.subcategory.mobileApp[0].className = pricing.subcategory.mobileApp[0].className.replace('', ' sub-category-active ');
					resetPlanDetailsDisplay();
				}

				var switchToCategoryThree = ()=>{ //Switch to the third category
					//Set the tab as the current tab
					for (var i = pricing.mainTab.length - 1; i >= 0; i--) {
						pricing.mainTab[i].className = pricing.mainTab[i].className.replace(' active-tab', '');
					}
					pricing.mainTab[2].className = pricing.mainTab[2].className.replace('', ' active-tab ');
					//Set the corresponding category as the current one
					for (var i = pricing.category.length - 1; i >= 0; i--) {
						pricing.category[i].className = pricing.category[i].className.replace(' category-active', '');
					}
					pricing.category[2].className = pricing.category[2].className.replace('', ' category-active ');
					//Set the first sub-tab as the current one
					for (var i = pricing.subTab.webApp.length - 1; i >= 0; i--) {
						pricing.subTab.webApp[i].className = pricing.subTab.webApp[i].className.replace(' active-tab', '');
					}
					pricing.subTab.webApp[0].className = pricing.subTab.webApp[0].className.replace('', ' active-tab ');
					//Set the corresponding sub-category (i.e. the first) as the active one
					for (var i = pricing.subcategory.webApp.length - 1; i >= 0; i--) {
						pricing.subcategory.webApp[i].className = pricing.subcategory.webApp[i].className.replace(' sub-category-active', '');
					}
					pricing.subcategory.webApp[0].className = pricing.subcategory.webApp[0].className.replace('', ' sub-category-active ');
					resetPlanDetailsDisplay();
				}

				var switchToCategoryFour = ()=>{ //Switch to the fourth category
					//Set the tab as the current tab
					for (var i = pricing.mainTab.length - 1; i >= 0; i--) {
						pricing.mainTab[i].className = pricing.mainTab[i].className.replace(' active-tab', '');
					}
					pricing.mainTab[3].className = pricing.mainTab[3].className.replace('', ' active-tab ');
					//Set the corresponding category as the current one
					for (var i = pricing.category.length - 1; i >= 0; i--) {
						pricing.category[i].className = pricing.category[i].className.replace(' category-active', '');
					}
					pricing.category[3].className = pricing.category[3].className.replace('', ' category-active ');
					//Set the first sub-tab as the current one
					for (var i = pricing.subTab.desktopApp.length - 1; i >= 0; i--) {
						pricing.subTab.desktopApp[i].className = pricing.subTab.desktopApp[i].className.replace(' active-tab', '');
					}
					pricing.subTab.desktopApp[0].className = pricing.subTab.desktopApp[0].className.replace('', ' active-tab ');
					//Set the corresponding sub-category (i.e. the first) as the active one
					for (var i = pricing.subcategory.desktopApp.length - 1; i >= 0; i--) {
						pricing.subcategory.desktopApp[i].className = pricing.subcategory.desktopApp[i].className.replace(' sub-category-active', '');
					}
					pricing.subcategory.desktopApp[0].className = pricing.subcategory.desktopApp[0].className.replace('', ' sub-category-active ');
					resetPlanDetailsDisplay();
				}

				//Website category
				var switchSubTabWebPersonal = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.website[0]) {
						for (var i = pricing.subTab.website.length - 1; i >= 0; i--) {
							pricing.subTab.website[i].className = pricing.subTab.website[i].className.replace('active-tab', '');
						}
						pricing.subTab.website[0].className = pricing.subTab.website[0].className.replace('', ' active-tab ');
						for (var i = pricing.subcategory.website.length - 1; i >= 0; i--) {
							pricing.subcategory.website[i].className = pricing.subcategory.website[i].className.replace(' sub-category-active', '');
						}
						pricing.subcategory.website[0].className = pricing.subcategory.website[0].className.replace('', ' sub-category-active ');
						resetPlanDetailsDisplay();
					}
				};
				var switchSubTabWebSmallBiz = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.website[1]) {
						for (var i = pricing.subTab.website.length - 1; i >= 0; i--) {
							pricing.subTab.website[i].className = pricing.subTab.website[i].className.replace('active-tab', '');
						}
						pricing.subTab.website[1].className = pricing.subTab.website[1].className.replace('', ' active-tab ');
						//
						for (var i = pricing.subcategory.website.length - 1; i >= 0; i--) {
							pricing.subcategory.website[i].className = pricing.subcategory.website[i].className.replace(' sub-category-active', '');
						}
						pricing.subcategory.website[1].className = pricing.subcategory.website[1].className.replace('', ' sub-category-active ');
						resetPlanDetailsDisplay();
					}
				};
				var switchSubTabWebLargeBiz = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.website[2]) {
						for (var i = pricing.subTab.website.length - 1; i >= 0; i--) {
							pricing.subTab.website[i].className = pricing.subTab.website[i].className.replace('active-tab', '');
						}
						pricing.subTab.website[2].className = pricing.subTab.website[2].className.replace('', ' active-tab ');
						for (var i = pricing.subcategory.website.length - 1; i >= 0; i--) {
							pricing.subcategory.website[i].className = pricing.subcategory.website[i].className.replace(' sub-category-active', '');
						}
						pricing.subcategory.website[2].className = pricing.subcategory.website[2].className.replace('', ' sub-category-active ');
						resetPlanDetailsDisplay();
					}
				};
				//Mobile App category
				var switchSubTabMobileAppAndroid = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.mobileApp[0]) {
						for (var i = pricing.subTab.mobileApp.length - 1; i >= 0; i--) {
							pricing.subTab.mobileApp[i].className = pricing.subTab.mobileApp[i].className.replace('active-tab', '');
						}
						pricing.subTab.mobileApp[0].className = pricing.subTab.mobileApp[0].className.replace('', ' active-tab ');
						for (var i = pricing.subcategory.mobileApp.length - 1; i >= 0; i--) {
							pricing.subcategory.mobileApp[i].className = pricing.subcategory.mobileApp[i].className.replace(' sub-category-active', '');
						}
						pricing.subcategory.mobileApp[0].className = pricing.subcategory.mobileApp[0].className.replace('', ' sub-category-active ');
						resetPlanDetailsDisplay();
					}
				};
				var switchSubTabMobileAppIOS = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.mobileApp[1]) {
						for (var i = pricing.subTab.mobileApp.length - 1; i >= 0; i--) {
							pricing.subTab.mobileApp[i].className = pricing.subTab.mobileApp[i].className.replace('active-tab', '');
						}
						pricing.subTab.mobileApp[1].className = pricing.subTab.mobileApp[1].className.replace('', ' active-tab ');
						for (var i = pricing.subcategory.mobileApp.length - 1; i >= 0; i--) {
							pricing.subcategory.mobileApp[i].className = pricing.subcategory.mobileApp[i].className.replace(' sub-category-active', '');
						}
						pricing.subcategory.mobileApp[1].className = pricing.subcategory.mobileApp[1].className.replace('', ' sub-category-active ');
						resetPlanDetailsDisplay();
					}
				};
				var switchSubTabMobileAppCross = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.mobileApp[2]) {
						for (var i = pricing.subTab.mobileApp.length - 1; i >= 0; i--) {
							pricing.subTab.mobileApp[i].className = pricing.subTab.mobileApp[i].className.replace('active-tab', '');
						}
						pricing.subTab.mobileApp[2].className = pricing.subTab.mobileApp[2].className.replace('', ' active-tab ');
						for (var i = pricing.subcategory.mobileApp.length - 1; i >= 0; i--) {
							pricing.subcategory.mobileApp[i].className = pricing.subcategory.mobileApp[i].className.replace(' sub-category-active', '');
						}
						pricing.subcategory.mobileApp[2].className = pricing.subcategory.mobileApp[2].className.replace('', ' sub-category-active ');
						resetPlanDetailsDisplay();
					}
				};
				//Web App category
				var switchSubTabWebApp = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.webApp[0]) {
						for (var i = pricing.subTab.webApp.length - 1; i >= 0; i--) {
							pricing.subTab.webApp[i].className = pricing.subTab.webApp[i].className.replace('active-tab', '');
						}
						pricing.subTab.webApp[0].className = pricing.subTab.webApp[0].className.replace('', ' active-tab ');
						resetPlanDetailsDisplay();
					}
				};
				//Desktop App category
				var switchSubTabDesktopApp = (event)=>{
					//Set this sub-tab and it's corresponding sub-category as the current
					if (event.target = pricing.subTab.desktopApp[0]) {
						for (var i = pricing.subTab.desktopApp.length - 1; i >= 0; i--) {
							pricing.subTab.desktopApp[i].className = pricing.subTab.desktopApp[i].className.replace('active-tab', '');
						}
						pricing.subTab.desktopApp[0].className = pricing.subTab.desktopApp[0].className.replace('', ' active-tab ');
						resetPlanDetailsDisplay();
					}
				};//To show/hide plan details
				//Website category
				var toggleDetailsWeb = (event)=>{
					if (event.target = pricing.toggleDetails.website[0]) {
						if (showDetails[0] == false) {
							showDetails[0] = true;
							pricing.details.website[0].className = pricing.details.website[0].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[0].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[0] == true) {
							showDetails[0] = false;
							pricing.details.website[0].className = pricing.details.website[0].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[0].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsWeb1 = (event)=>{
					if (event.target = pricing.toggleDetails.website[1]) {
						if (showDetails[1] == false) {
							showDetails[1] = true;
							pricing.details.website[1].className = pricing.details.website[1].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[1].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[1] == true) {
							showDetails[1] = false;
							pricing.details.website[1].className = pricing.details.website[1].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[1].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsWeb2 = (event)=>{
					if (event.target = pricing.toggleDetails.website[2]) {
						if (showDetails[2] == false) {
							showDetails[2] = true;
							pricing.details.website[2].className = pricing.details.website[2].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[2].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[2] == true) {
							showDetails[2] = false;
							pricing.details.website[2].className = pricing.details.website[2].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[2].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsWeb3 = (event)=>{
					if (event.target = pricing.toggleDetails.website[3]) {
						if (showDetails[3] == false) {
							showDetails[3] = true;
							pricing.details.website[3].className = pricing.details.website[3].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[3].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[3] == true) {
							showDetails[3] = false;
							pricing.details.website[3].className = pricing.details.website[3].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[3].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsWeb4 = (event)=>{
					if (event.target = pricing.toggleDetails.website[4]) {
						if (showDetails[4] == false) {
							showDetails[4] = true;
							pricing.details.website[4].className = pricing.details.website[4].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[4].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[4] == true) {
							showDetails[4] = false;
							pricing.details.website[4].className = pricing.details.website[4].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[4].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsWeb5 = (event)=>{
					if (event.target = pricing.toggleDetails.website[5]) {
						if (showDetails[5] == false) {
							showDetails[5] = true;
							pricing.details.website[5].className = pricing.details.website[5].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[5].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[5] == true) {
							showDetails[5] = false;
							pricing.details.website[5].className = pricing.details.website[5].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[5].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsWeb6 = (event)=>{
					if (event.target = pricing.toggleDetails.website[6]) {
						if (showDetails[6] == false) {
							showDetails[6] = true;
							pricing.details.website[6].className = pricing.details.website[6].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[6].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[6] == true) {
							showDetails[6] = false;
							pricing.details.website[6].className = pricing.details.website[6].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[6].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsWeb7 = (event)=>{
					if (event.target = pricing.toggleDetails.website[7]) {
						if (showDetails[7] == false) {
							showDetails[7] = true;
							pricing.details.website[7].className = pricing.details.website[7].className.replace('hidden', 'visible');
							pricing.toggleDetails.website[7].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[7] == true) {
							showDetails[7] = false;
							pricing.details.website[7].className = pricing.details.website[7].className.replace('visible', 'hidden');
							pricing.toggleDetails.website[7].innerHTML = 'More details...';
							return;
						}
					}
				};
				//Mobile App category
				var toggleDetailsMobi = (event)=>{
					if (event.target = pricing.toggleDetails.mobileApp[0]) {
						if (showDetails[8] == false) {
							showDetails[8] = true;
							pricing.details.mobileApp[0].className = pricing.details.mobileApp[0].className.replace('hidden', 'visible');
							pricing.toggleDetails.mobileApp[0].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[8] == true) {
							showDetails[8] = false;
							pricing.details.mobileApp[0].className = pricing.details.mobileApp[0].className.replace('visible', 'hidden');
							pricing.toggleDetails.mobileApp[0].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsMobi1 = (event)=>{
					if (event.target = pricing.toggleDetails.mobileApp[1]) {
						if (showDetails[9] == false) {
							showDetails[9] = true;
							pricing.details.mobileApp[1].className = pricing.details.mobileApp[1].className.replace('hidden', 'visible');
							pricing.toggleDetails.mobileApp[1].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[9] == true) {
							showDetails[9] = false;
							pricing.details.mobileApp[1].className = pricing.details.mobileApp[1].className.replace('visible', 'hidden');
							pricing.toggleDetails.mobileApp[1].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsMobi2 = (event)=>{
					if (event.target = pricing.toggleDetails.mobileApp[2]) {
						if (showDetails[10] == false) {
							showDetails[10] = true;
							pricing.details.mobileApp[2].className = pricing.details.mobileApp[2].className.replace('hidden', 'visible');
							pricing.toggleDetails.mobileApp[2].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[10] == true) {
							showDetails[10] = false;
							pricing.details.mobileApp[2].className = pricing.details.mobileApp[2].className.replace('visible', 'hidden');
							pricing.toggleDetails.mobileApp[2].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsMobi3 = (event)=>{
					if (event.target = pricing.toggleDetails.mobileApp[3]) {
						if (showDetails[11] == false) {
							showDetails[11] = true;
							pricing.details.mobileApp[3].className = pricing.details.mobileApp[3].className.replace('hidden', 'visible');
							pricing.toggleDetails.mobileApp[3].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[11] == true) {
							showDetails[11] = false;
							pricing.details.mobileApp[3].className = pricing.details.mobileApp[3].className.replace('visible', 'hidden');
							pricing.toggleDetails.mobileApp[3].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsMobi4 = (event)=>{
					if (event.target = pricing.toggleDetails.mobileApp[4]) {
						if (showDetails[12] == false) {
							showDetails[12] = true;
							pricing.details.mobileApp[4].className = pricing.details.mobileApp[4].className.replace('hidden', 'visible');
							pricing.toggleDetails.mobileApp[4].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[12] == true) {
							showDetails[12] = false;
							pricing.details.mobileApp[4].className = pricing.details.mobileApp[4].className.replace('visible', 'hidden');
							pricing.toggleDetails.mobileApp[4].innerHTML = 'More details...';
							return;
						}
					}
				};
				var toggleDetailsMobi5 = (event)=>{
					if (event.target = pricing.toggleDetails.mobileApp[5]) {
						if (showDetails[13] == false) {
							showDetails[13] = true;
							pricing.details.mobileApp[5].className = pricing.details.mobileApp[5].className.replace('hidden', 'visible');
							pricing.toggleDetails.mobileApp[5].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[13] == true) {
							showDetails[13] = false;
							pricing.details.mobileApp[5].className = pricing.details.mobileApp[5].className.replace('visible', 'hidden');
							pricing.toggleDetails.mobileApp[5].innerHTML = 'More details...';
							return;
						}
					}
				};
				//Web App category
				var toggleDetailsWebApp = (event)=>{
					if (event.target = pricing.toggleDetails.webApp[0]) {
						if (showDetails[14] == false) {
							showDetails[14] = true;
							pricing.details.webApp[0].className = pricing.details.webApp[0].className.replace('hidden', 'visible');
							pricing.toggleDetails.webApp[0].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[14] == true) {
							showDetails[14] = false;
							pricing.details.webApp[0].className = pricing.details.webApp[0].className.replace('visible', 'hidden');
							pricing.toggleDetails.webApp[0].innerHTML = 'More details...';
							return;
						}
					}
				};
				//Desktop App category
				var toggleDetailsDesktop = (event)=>{
					if (event.target = pricing.toggleDetails.desktopApp[0]) {
						if (showDetails[15] == false) {
							showDetails[15] = true;
							pricing.details.desktopApp[0].className = pricing.details.desktopApp[0].className.replace('hidden', 'visible');
							pricing.toggleDetails.desktopApp[0].innerHTML = 'Less details...';
							return;
						}
						if (showDetails[15] == true) {
							showDetails[15] = false;
							pricing.details.desktopApp[0].className = pricing.details.desktopApp[0].className.replace('visible', 'hidden');
							pricing.toggleDetails.desktopApp[0].innerHTML = 'More details...';
							return;
						}
					}
				};

				//Event Listeners
				pricing.mainTab[0].addEventListener('mouseup', switchToCategoryOne, false);
				pricing.mainTab[1].addEventListener('mouseup', switchToCategoryTwo, false);
				pricing.mainTab[2].addEventListener('mouseup', switchToCategoryThree, false);
				pricing.mainTab[3].addEventListener('mouseup', switchToCategoryFour, false);
				pricing.subTab.website[0].addEventListener('mouseup', switchSubTabWebPersonal, false);
				pricing.subTab.website[1].addEventListener('mouseup', switchSubTabWebSmallBiz, false);
				pricing.subTab.website[2].addEventListener('mouseup', switchSubTabWebLargeBiz, false);
				pricing.subTab.mobileApp[0].addEventListener('mouseup', switchSubTabMobileAppAndroid, false);
				pricing.subTab.mobileApp[1].addEventListener('mouseup', switchSubTabMobileAppIOS, false);
				pricing.subTab.mobileApp[2].addEventListener('mouseup', switchSubTabMobileAppCross, false);
				pricing.subTab.webApp[0].addEventListener('mouseup', switchSubTabWebApp, false);
				pricing.subTab.desktopApp[0].addEventListener('mouseup', switchSubTabDesktopApp, false);
				pricing.toggleDetails.website[0].addEventListener('mouseup', toggleDetailsWeb, false);
				pricing.toggleDetails.website[1].addEventListener('mouseup', toggleDetailsWeb1, false);
				pricing.toggleDetails.website[2].addEventListener('mouseup', toggleDetailsWeb2, false);
				pricing.toggleDetails.website[3].addEventListener('mouseup', toggleDetailsWeb3, false);
				pricing.toggleDetails.website[4].addEventListener('mouseup', toggleDetailsWeb4, false);
				pricing.toggleDetails.website[5].addEventListener('mouseup', toggleDetailsWeb5, false);
				pricing.toggleDetails.website[6].addEventListener('mouseup', toggleDetailsWeb6, false);
				pricing.toggleDetails.website[7].addEventListener('mouseup', toggleDetailsWeb7, false);
				pricing.toggleDetails.mobileApp[0].addEventListener('mouseup', toggleDetailsMobi, false);
				pricing.toggleDetails.mobileApp[1].addEventListener('mouseup', toggleDetailsMobi1, false);
				pricing.toggleDetails.mobileApp[2].addEventListener('mouseup', toggleDetailsMobi2, false);
				pricing.toggleDetails.mobileApp[3].addEventListener('mouseup', toggleDetailsMobi3, false);
				pricing.toggleDetails.mobileApp[4].addEventListener('mouseup', toggleDetailsMobi4, false);
				pricing.toggleDetails.mobileApp[5].addEventListener('mouseup', toggleDetailsMobi5, false);
				pricing.toggleDetails.webApp[0].addEventListener('mouseup', toggleDetailsWebApp, false);
				pricing.toggleDetails.desktopApp[0].addEventListener('mouseup', toggleDetailsDesktop, false);
				pricing.requestButton.forEach((button)=>{ //To scroll to the footer contact section when any of the plan request buttons are pushed
					button.addEventListener('mouseup', (event)=>{
						document.querySelector('.footer').scrollIntoView({
							behavior: 'smooth'
						});
					}, false);
				});
			})();
		})();
	})();
};
window.addEventListener('DOMContentLoaded', flipAndSwitch, false); //Run srcipt after page loads