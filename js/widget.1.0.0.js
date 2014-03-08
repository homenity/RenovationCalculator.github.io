(function($){
  //global settings
  var pages = new Array(3);
  
/*  pages[0] = {
	    count: 2,
		question: 'Ready to Budget My Home Repair Project?',
		title: 'How Much to Renovate',
		type: 'radio',
		description: "Yes, I have basic information about the project and am ready to learn about my options. No, I don't have basic information but want to make some guesses anyway. ",
		items: new Array({name: 'Yes', value: 1, page: 2, image: 'yes.gif'},{name: 'No', value: 0, page: 2, image: 'no.gif'})
  };
  
  */pages[0] = {
	    count: 4,
		question: 'What Project Do You Want to Budget?',
		type: 'radio',
		description: "Pick which project you want to budget.  Unfortunately at this point you have to do one at a time, but you can do it as many times as you want.",
		items: new Array(
		  {name: 'Bathroom', value: 0, page: -1, image: 'bathroom.gif'},
		  {name: 'Kitchen', value: 1, page: -1, image: 'kitchen.gif'},
		  {name: 'Flooring', value: 2, page: 3, image: 'flooring.gif'},
		  {name: 'Windows', value: 3, page: -1, image: 'windows.gif'}
		)
  };

  pages[1] = {
	    count: 1,
		question: 'How Many Square Footage Is the Project?',
		type: 'input',
		description: "Try to be as accurate as possible to get the best possible estimate.",
		items: new Array(
		  {name: 'squareFootage', value: 0, page: 4, image: 'std.gif'}
		)
  };
  pages[2] = {
	    count: 1,
		question: 'What Is Your Zip Code?',
		type: 'input',
		description: "This allows us to give you the best estimate for your area.  If you don't want to tell us, simply leave it blank.",
		items: new Array(
		  {name: 'zipCode', value: 0, page: 5, image: 'std.gif'}
		)
  };
  pages[2] = {
	    count: 1,
		question: 'How Many Rooms Does Your Project Effect?',
		type: 'input',
		description: "Is it one big room or five small rooms?  This just helps us understand the project a little better. ",
		items: new Array(
		  {name: 'rooms', value: 0, page: 6, image: 'std.gif'}
		)
  };
  
  pages[5] = {
	    count: 2,
		question: 'Are you considering doing this project yourself?',
		type: 'radio',
		description: "Some people want to take on their home renovation project and get their hands dirty, is this you?  If not and you simply want to know what it would cost to do it yourself click yes and we'll show you both options.",
		items: new Array({name: 'Yes', value: 1, page: 7, image: 'yes.gif'},{name: 'No', value: 1, page: 8, image: 'no.gif'})
  };
  
  pages[6] = {
	    count: 5,
		question: 'What is your skill level?',
		type: 'radio',
		description: "If you consider yourself average at home renovation work click a 2.  If you are above average, but have never tried it before click 3.  If you have done this work before but are not great at it, click 4.  If you do this professionally click 5.",
		items: new Array(
		  {name: '1', value: 0, page: 8, image: 'one.gif'},
		  {name: '2', value: 1, page: 8, image: 'two.gif'},
		  {name: '3', value: 2, page: 8, image: 'three.gif'},
		  {name: '4', value: 3, page: 8, image: 'four.gif'},
		  {name: '5', value: 4, page: 8, image: 'five.gif'}
		)
  };
  
  pages[7] = {
	    count: 4,
		question: 'What Existing Flooring Are We Removing?',
		type: 'radio',
		description: "We just want to know what you are taking out to put in the new flooring. ",
		items: new Array(
		  {name: 'Carpet', value: 0, page: 9, image: 'carpet.gif'},
		  {name: 'Tile', value: 1, page: 9, image: 'tile.gif'},
		  {name: 'Hardwood', value: 2, page: 9, image: 'hardwood.gif'},
		  {name: 'Nothing', value: 3, page: 9, image: 'nothing.gif'}
		)
  };
  
  pages[8] = {
	    count: 2,
		question: 'Are We Going to Remove Anything Else?',
		type: 'checkbox',
		description: "The baseboard and shoe molding are at the base of the wall on the perimeter of the room.  If they are in good shape we would recommend leaving the baseboard and just removing the shoe molding.  Shoe molding usually is not included in rooms with carpet and only with rooms of tile are hardwood.",
		items: new Array(
		  {name: 'Baseboard', value: 0, page: 10, image: 'baseboard.gif'},
		  {name: 'Shoe Molding', value: 1, page: 10, image: 'shoemolding.gif'}
		)
  };
  
  pages[9] = {
	    count: 3,
		question: 'What Type of Flooring Are You Looking to Install?',
		type: 'radio',
		description: "Flooring is a personal preference, while tile and hardwood are about the same cost typically, carpet is much cheaper.  However, carpet stains easily, wears out quickers, and is harder to clean.  Tile is great is places where the flooring could get wet - basements or bathrooms - but it is cold to the touch.  If you want some options you can always come back and budget the other.",
		items: new Array(
		  {name: 'Hardwood', value: 0, page: 11, image: 'hardwood.gif'},
		  {name: 'Carpet', value: 1, page: 18, image: 'carpet.gif'},
		  {name: 'Tile', value: 2, page: 13, image: 'tile.gif'}
		)
  };
  
  pages[10] = {
	    count: 3,
		question: 'How Wide Do You Want the Hardwood Planks?',
		type: 'radio',
		description: 'homes all had 2.5", but some modern homes are wider at 3.5" or 4.5" to really accentuate the width and less the length of the board.  The wider boards do cost more money, but are generally of a higher quality.',
		items: new Array(
		  {name: '2.5"', value: 0, page: 12, image: '25.gif'},
		  {name: '3.5"', value: 1, page: 12, image: '35.gif'},
		  {name: '4.5"', value: 2, page: 12, image: '45.gif'}
		)
  };
  
  pages[11] = {
	    count: 5,
		question: 'How Nice Do you Want the Hardwood to Be?',
		type: 'radio',
		description: "While nice and cost are not always the same thing, they are typically highly related.  For this question we just ask that you give a general idea of how specific you are about the aesthetics.  If you have your heart set on one specific type of wood and color pick 5.  If you have some preference, but are generally okay with most things pick a 3.  If you don't care at all and just something that won't disintegrate into sand pick 1.",
		items: new Array(
		  {name: '1', value: 0, page: 13, image: 'one.gif'},
		  {name: '2', value: 1, page: 13, image: 'two.gif'},
		  {name: '3', value: 2, page: 13, image: 'three.gif'},
		  {name: '4', value: 3, page: 13, image: 'four.gif'},
		  {name: '5', value: 4, page: 13, image: 'five.gif'}
		)
  };
  
  pages[12] = {
	    count: 5,
		question: 'What size tile do you want installed?',
		type: 'radio',
		description: "The size of the tile largely depends on how you want the tile to look in the room.  If the tile is bigger it can make a small room look smaller, while if it is in a big room, it can make the big room seem not as big.  However, bigger tiles break more easily and are more difficult to install so they do cost more.",
		items: new Array(
		  {name: '12" Square', value: 0, page: 14, image: '12sq.gif'},
		  {name: '16" Square', value: 1, page: 14, image: '16sq.gif'},
		  {name: '18" Square', value: 2, page: 14, image: '18sq.gif'},
		  {name: '4" x 24" Rectangle', value: 3, page: 14, image: '424rec.gif'},
		  {name: 'Other', value: 4, page: 14, image: 'nothing.gif'}
		)
  };
  
  pages[13] = {
	    count: 4,
		question: 'What type of tile do you want?',
		type: 'radio',
		description: "Ceramic tile is the Honda of tile.  It is cheap and durable, but not always pretty.  Porcelain on the other hand is the Ford that is also reliable, but a little more expensive and better looking.  Natural stone is the best looking, but it stains easily, costs more and is harder to maintain.  I don't know what other you are considering, but we will make a guess for you from our experience.",
		items: new Array(
		  {name: 'Ceramic', value: 01, page: 15, image: 'ceramic.gif'},
		  {name: 'Natural" Square', value: 1, page: 15, image: 'square.gif'},
		  {name: 'Porcelain', value: 2, page: 15, image: 'porcelain.gif'},
		  {name: 'Other', value: 3, page: 15, image: 'nothing.gif'}
		)
  };
  
  pages[14] = {
	    count: 4,
		question: 'What size grout joint do you want?',
		type: 'radio',
		description: 'We recommend a grout joint of 1/4".  While you can go smaller, the smaller the grout joint the more you will see imperfections in the laying of the tile or in the level nature of your floor.  If you go for no grout, the laying of the tile is incredibly difficult and, as a result more, expensive.  You can always go for a bigger grout joint, but it provides some more difficulty in cleaning and actually adds some cost to the project.',
		items: new Array(
		  {name: '3/32"', value: 0, page: 16, image: '332.gif'},
		  {name: '1/4"', value: 1, page: 16, image: '1i4.gif'},
		  {name: '1/8"" Square', value: 2, page: 16, image: '1i8.gif'},
		  {name: 'Nothing', value: 3, page: 16, image: 'nothing.gif'}
		)
  };
  
  pages[15] = {
	    count: 3,
		question: 'Which way do you want to lay the tile?',
		type: 'radio',
		description: 'Square or offset is simply in a rectangular fashion to the majority of the walls in the room.  Diagonal is typically at a 45 degree angle to the walls and do to the difficult cuts around the exterior costs more do to the added waste.  This added waste is even amplified with a border that requires even more cuts to get the desired look.',
		items: new Array(
		  {name: 'Square', value: 0, page: 17, image: 'square.gif'},
		  {name: 'Diagonal', value: 1, page: 17, image: 'diagonal.gif'},
		  {name: 'With a Border', value: 2, page: 17, image: 'withborder.gif'}
		)
  };
  
  pages[16] = {
	    count: 2,
		question: 'Do you want to seal the tile?',
		type: 'radio',
		description: 'Sealing helps protect the tile from stains and moisture absorbing into the grout.  We highly recommend you do it, multiple times, especially if you are going for a light grout color.',
		items: new Array(
		  {name: 'Yes', value: 0, page: 20, image: 'yes.gif'},
		  {name: 'No', value: 1, page: 20, image: 'no.gif'}
		)
  };
  
  pages[17] = {
	    count: 5,
		question: 'What kind of carpet do you want?',
		type: 'radio',
		description: 'While nice and cost are not always the same thing, they are typically highly related. For this question we just ask that you give a general idea of how specific you are about the aesthetics.  If you have your heart set on one specific type of carpet and color pick 5.  If you have some preference, but are generally okay with most things pick a 3.  If you don\'t care at all and just something that won\'t disintegrate into sand, pick 1.',
		items: new Array(
		  {name: '1', value: 0, page: 19, image: 'one.gif'},
		  {name: '2', value: 1, page: 19, image: 'two.gif'},
		  {name: '3', value: 2, page: 19, image: 'three.gif'},
		  {name: '4', value: 3, page: 19, image: 'four.gif'},
		  {name: '5', value: 4, page: 19, image: 'five.gif'}
		)
  };
  
  pages[18] = {
	    count: 2,
		question: 'Do you want a carpet pad?',
		type: 'radio',
		description: 'The carpet pad just helps the carpet be more cushy.  While you can use the one that is currently under any carpet, we recommend you replace it anyway because of potential moisture issues that cold exist in the current pad.',
		items: new Array(
		  {name: 'Yes', value: 0, page: 20, image: 'yes.gif'},
		  {name: 'No', value: 1, page: 20, image: 'no.gif'}
		)
  };
  
  pages[19] = {
	    count: 3,
		question: 'Do you want to replace the baseboard and the shoe molding?',
		type: 'radio',
		description: "As we mentioned before you should keep the baseboard if it looks good, but if you are installing hardwood or tile you should plan on replacing the shoe molding.  It'll be expensive the try and keep the existing.",
		items: new Array(
		  {name: 'Yes', value: 1, page: 21, image: 'yes.gif'},
		  {name: 'No', value: 0, page: 21, image: 'no.gif'},
		  {name: 'Just Shoe Molding', value: 2, page: 21, image: 'nothing.gif'}
		)
  };
  
  pages[20] = {
	    count: 2,
		question: 'Are you ready to start the project?',
		type: 'radio',
		description: "Yes, I want to start this project.  No, I am just budgetting because it is fun and I love this site. ",
		items: new Array(
		  {name: 'Yes', value: 0, page: 22, image: 'yes.gif'},
		  {name: 'No', value: 1, page: 22, image: 'no.gif'}
		)
  };
  
  pages[21] = {
	    count: 0,
		question: '',
		title: 'Flooring Project Results',
		type: 'results',
		description: ""
  };
  
  
  
  
  

  $(document).ready(function() {
  		  var WidgetCalc = Backbone.View.extend({
  		  		  el: "#main_container",
  		  		  defaults: {
  		  		  },
  		  		  initialize: function() {
				      this.mode = 1;
					  
				      var self = this;
					  var me = this.$el;
					  
					  this.pages = this.options.pages;
					  this.cPage = 0;
					  
					  this.data = new Array(pages.length);
					  
					  this.data[0] = {value: -1, page: -1};
					  this.data[1] = {value: -1, page: -1};
					  this.data[2] = {value: 1000, page: -1};
					  this.data[3] = {value: 123456, page: -1};
					  this.data[4] = {value: 1, page: -1};
					  this.data[5] = {value: 1, page: -1};
					  this.data[6] = {value: 2, page: -1};
					  this.data[7] = {value: -1, page: -1};
					  this.data[8] = {value: [0,0], page: -1};
					  this.data[9] = {value: -1, page: -1};
					  this.data[10] = {value: -1, page: -1};
					  this.data[11] = {value: -1, page: -1};
					  this.data[12] = {value: -1, page: -1};
					  this.data[13] = {value: -1, page: -1};
					  this.data[14] = {value: -1, page: -1};
					  this.data[15] = {value: -1, page: -1};
					  this.data[16] = {value: -1, page: -1};
					  this.data[17] = {value: -1, page: -1};
					  this.data[18] = {value: -1, page: -1};
					  this.data[19] = {value: [0,0], page: -1};
					  this.data[20] = {value: -1, page: -1};
					  this.data[21] = {value: -1, page: -1};
					  
					  this.perimeterMultiplier = 0.2;
					  this.doItYourselfLevelC = [3,2.5,2,1.5,1];
					  this.demoLaborRate = 35;
					  
					  this.carpetRemovalCostFixed = 50;
					  this.carpetRemovalCostFixedDIY = 150;
					  this.carpetRemovalCostVariable = 0.1;
					  this.carpetRemovalTime = 200;
					  this.carpetRemovalCostLabor = this.demoLaborRate/this.carpetRemovalTime;
					  
					  this.tileRemovalCostFixed = 75;
					  this.tileRemovalCostFixedDIY = 300;
					  this.tileRemovalCostVariable = 0.25;
					  this.tileRemovalTime = 50;
					  this.tileRemovalCostLabor = this.demoLaborRate/this.tileRemovalTime;
					  
					  this.hardwoodRemovalCostFixed = 75;
					  this.hardwoodRemovalCostFixedDIY = 200;
					  this.hardwoodRemovalCostVariable = 0.15;
					  this.hardwoodRemovalTime = 100;
					  this.hardwoodRemovalCostTime = this.demoLaborRate/this.hardwoodRemovalTime;
					  
					  this.baseboardRemovalCostFixed = 20;
					  this.baseboardRemovalCostFixedDIY = 40;
					  this.baseboardRemovalCostVariable = 0.1;
					  this.baseboardRemovalTime = 150;
					  this.baseboardRemovalCostTime = this.demoLaborRate/this.baseboardRemovalTime;
					  
					  this.shoeRemovalCostFixed = 20;
					  this.shoeRemovalCostFixedDIY = 40;
					  this.shoeRemovalCostVariable = 0.1;
					  this.shoeRemovalTime = 150;
					  this.shoeRemovalCostTime = this.demoLaborRate/this.shoeRemovalTime;
					  
					  this.hardwoodCostFixed = 50;
					  this.hardwoodCostFixedDIY = 350;
					  this.hardwoodCostVariable = 3;
					  this.hardwoodInstallTime = 100;
					  this.hardwoodCostLabor = 75/this.hardwoodInstallTime;
					  
					  this.hardwoodWidthC = [1,1.2,1.4,1.6];
					  this.hardwoodLevelC = [0.85,0.95,1,1.2,1.4];
					  this.tileSizeC = [1,1.2,1.4,2,1.6];
					  
					  this.tileTypeC = [1,1.5,1.1,1];
					  
					  this.tileLayoutC = [1,1.15,1.3];
					  
					  this.tileCostFixed = 100;
					  this.tileCostFixedDIY = 400;
					  this.tileCostVariable = 4;
					  this.tileLaborRate = 75;
					  this.tileInstallTime = 30;
					  this.tileCostLabor = this.tileLaborRate/this.tileInstallTime;
					  
					  this.groutSizeC = [1.2,1,1,3,1];
					  this.groutCostFixed = 10;
					  this.groutCostFixedDIY = 25;
					  this.groutInstallTime = 100;
					  this.groutCostLabor = this.tileLaborRate/this.groutInstallTime;
					  this.groutCostVariable = 0.05;
					  this.tileSealCostFixed = 10;
					  this.tileSealCostFixedDIY = 25;
					  this.tileSealCostVariable = 0.05;
					  this.tileSealCostTime = 200;
					  this.tileSealCostLabor = this.tileLaborRate/this.tileSealCostTime;
					  this.carpetLevelC = [0.9,0.95,1,1.2,1.5];
					  this.carpetCostFixed = 30;
					  this.carpetCostFixedDIY = 100;
					  this.carpetCostVariable = 1;
					  this.carpetCostTime = 200;
					  this.carpetCostLabor = 60/this.carpetCostTime;
					  this.carpetPadCostFixed = 20;
					  this.carpetPadCostFixedDIY = 100;
					  this.carpetPadCostVariable = 0.1;
					  this.carpetPadCostTime = 300;
					  this.carpetPadCostLabor = 60/this.carpetPadCostTime;
					  this.baseboardCostFixed = 70;
					  this.baseboardCostFixedDIY = 200;
					  this.baseboardCostVariable = 2;
					  this.baseboardCostTime = 50;
					  this.baseboardCostLabor = 75/this.baseboardCostTime;
					  
					  //
					  this.shoeCostFixed = 70;
					  this.shoeCostFixedDIY = 200;
					  this.shoeCostVariable = 2;
					  this.shoeCostTime = 50;
					  this.shoeCostLabor = 75/this.shoeCostTime;
					  
					  this.tileLayoutDIY = 1;
					  //
					  
					  
					  this.contractorCost= 0;
					  this.diyCost= 0;
					  this.contractorHours= 0;
					  this.diyHours= 0;
					  
					  //variables
					  this.sqft = 0;
					  this.zipCode = 0;
					  this.perimeter = 0;
					  this.noOfRooms = 0;
					  this.ifDoItYourself = 0;
					  this.doItYourself = 0;
					  this.hardwoodWidth = 0;
					  this.hardwoodLevel = 0;
					  this.tileSize = 0;
					  this.tileType = 0;
					  this.groutSize = 0;
					  this.tileLayout = 0;
					  this.tileSeal = 0;
					  this.carpetLevel = 0;
					  this.carpetPad = 0;
					  this.baseboardReplace = 0;
					  this.shoeReplace = 0;
					  this.readyToStart = 0;
					  
					  this.stepsHC = new Array();
					  
					  this.stepsHC.push([0,0,0,0,0]);
					  
					  self.showPage(0);
  		  		  },


                  calculate: function() {
				      var page = this.cPage;
					  
					  switch (page) {
					    case 2:
						  this.sqft = this.data[page].value;
						  break;
					    case 3:
						  this.zipCode = this.data[page].value;
						  break;
					    case 4:
						  this.noOfRooms = this.data[page].value;
						  this.perimeter = this.sqft*this.noOfRooms*this.perimeterMultiplier
						  break;
					    case 5:
						  this.doItYourself = this.data[page].value;
						  break;
					    case 6:
						  this.doItYourself = this.doItYourselfLevelC[this.data[page].value];
						  break;
						case 7:
						  switch (this.data[page].value) {
						    case 1: {
								  this.contractorCost+=this.sqft*(this.carpetRemovalCostVariable+this.carpetRemovalCostLabor)+this.carpetRemovalCostFixed;
								  this.contractorHours+=this.sqft/this.carpetRemovalTime;
								  this.diyCost+=this.sqft*(this.carpetRemovalCostVariable)+this.carpetRemovalCostFixedDIY;
								  this.diyHours+=(this.sqft/this.carpetRemovalTime)*this.doItYourself;
								  this.addNewStep();
								  break;
							}
							
						    case 2: {
								  this.contractorCost+=this.sqft*(this.tileRemovalCostVariable+this.tileRemovalCostLabor)+this.tileRemovalCostFixed;
								  this.contractorHours+=this.sqft/this.tileRemovalTime;
								  this.diyCost+=this.sqft*(this.tileRemovalCostVariable)+this.tileRemovalCostFixedDIY;
								  this.diyHours+=(this.sqft/this.tileRemovalTime)*this.doItYourself;
								  this.addNewStep();
								  break;
							}
							
						    case 3: {
								  this.contractorCost+=this.sqft*(this.hardwoodRemovalCostVariable+this.hardwoodRemovalCostLabor)+this.hardwoodRemovalCostFixed;
								  this.contractorHours+=this.sqft/this.hardwoodRemovalTime;
								  this.diyCost+=this.sqft*(this.hardwoodRemovalCostVariable)+this.hardwoodRemovalCostFixedDIY;
								  this.diyHours+=(this.sqft/this.hardwoodRemovalTime)*this.doItYourself;
								  this.addNewStep();
								  break;
							}
						  }
						  break;
						  case 8:
						    if (this.data[page].value[0]==1) {
							  this.contractorCost+=this.perimeter*(this.baseboardRemovalCostVariable+this.baseboardRemovalCostTime)+this.baseboardRemovalCostFixed;
							  this.contractorHours+=this.perimeter/this.baseboardRemovalTime;
							  this.diyCost+=this.perimeter*(this.baseboardRemovalCostVariable)+this.baseboardRemovalCostFixedDIY;
							  this.diyHours+=this.perimeter/this.baseboardRemovalTime*this.doItYourself;
							  this.addNewStep();
							}
						    if (this.data[page].value[1]==1) {
							  this.contractorCost+=this.perimeter*(this.shoeRemovalCostVariable+this.shoeRemovalCostTime)+this.shoeRemovalCostFixed;
							  this.contractorHours+=this.perimeter/this.shoeRemovalTime;
							  this.diyCost+=this.perimeter*(this.shoeRemovalCostVariable)+this.shoeRemovalCostFixedDIY;
							  this.diyHours+=this.perimeter/this.shoeRemovalTime*this.doItYourself;
							  this.addNewStep();
							}
							
							//alert(this.baseboardRemovalCostVariable+" "+this.baseboardRemovalCostLabor+" "+this.baseboardRemovalCostFixed);
						    break;
							case 9:
							 //
							break;
							case 10:
							  this.hardwoodWidth = this.hardwoodWidthC[this.data[page].value];
							break;
							case 11:
							  this.hardwoodLevel = this.hardwoodLevelC[this.data[page].value];
							  this.contractorCost+=this.sqft*(this.hardwoodWidth*this.hardwoodLevel*this.hardwoodCostVariable+this.hardwoodCostLabor)+this.hardwoodCostFixed;
							  this.contractorHours+=this.sqft/this.hardwoodInstallTime;
							  this.diyCost+=this.sqft*(this.hardwoodWidth*this.hardwoodLevel*this.hardwoodCostVariable)+this.hardwoodCostFixedDIY;
							  this.diyHours+=this.sqft/this.hardwoodInstallTime*this.doItYourself;
							  //console.log(this.hardwoodLevel+" "+this.hardwoodWidth+" "+this.hardwoodLevel+" "+this.hardwoodInstallTime+" "+this.hardwoodCostLabor);
							  this.addNewStep();
							break;
							case 12:
							  this.tileSize = this.tileSizeC[this.data[page].value];
							break;
							case 13:
							  this.tileType = this.tileTypeC[this.data[page].value];
							  this.contractorCosvt+=this.sqft*(this.tileSize*this.tileType*this.tileCostVariable+this.tileSize*this.tileCostLabor)+this.tileCostFixed;
							  this.contractorHours+=this.sqft/this.tileInstallTime;
							  this.diyCost+=this.sqft*(this.tileSize*this.tileType*this.tileCostVariable)+this.tileCostFixedDIY;
							  this.diyHours+=this.sqft/this.tileInstallTime*this.doItYourself;
							  this.addNewStep();
							break;
							case 14:
							  this.groutSize = this.groutSizeC[this.data[page].value];
							  this.contractorCost+=this.sqft*(this.groutSize*this.groutCostVariable+this.groutSize*this.tileCostLabor)+this.groutCostFixed;
							  this.contractorHours+=(this.sqft/this.groutSize)/this.groutInstallTime;
							  this.diyCost+=this.sqft*(this.groutSize*this.groutCostVariable)+this.groutCostFixedDIY;							  
							  this.diyHours+=((this.sqft/this.groutSize)/this.groutInstallTime)*this.doItYourself;
							  this.addNewStep();
							break;
							case 15:
							  this.tileLayout = this.tileLayoutC[this.data[page].value];
							  this.contractorCost+=this.sqft*(this.tileSize*this.tileType*this.tileCostVariable+this.tileSize*this.tileCostLabor)*this.tileLayout;
							  this.contractorHours+=this.sqft/this.tileInstallTime*this.tileLayout;
							  this.diyCost+=this.sqft*(this.tileSize*this.tileType*this.tileCostVariable)*this.tileLayoutDIY;
							  this.diyHours+=(this.sqft/this.tileInstallTime)*this.doItYourself*this.tileLayout;
							  this.addNewStep();
							break;
							case 16:
							  this.tileSeal = this.data[page].value;
							  this.contractorCost+=this.sqft*(this.tileSealCostVariable+this.tileSealCostLabor)+this.tileSealCostFixed;
							  this.contractorHours+=this.sqft/this.tileSealCostTime;
							  this.diyCost+=this.sqft*(this.tileSealCostVariable)+this.tileSealCostFixedDIY;
							  this.diyHours+=(this.sqft/this.tileSealCostTime)*this.doItYourself;
							  this.addNewStep();
							break;
							case 17:
							  this.carpetLevel = this.carpetLevelC[this.data[page].value];
							  this.contractorCost+=this.sqft*(this.carpetLevel*this.carpetCostVariable+this.carpetCostLabor)+this.carpetCostFixed;
							  this.contractorHours+=this.sqft/this.carpetCostTime;
							  this.diyCost+=this.sqft*(this.carpetLevel*this.carpetCostVariable)+this.carpetCostFixedDIY;
							  this.diyHours+=this.sqft/this.carpetCostTime*this.doItYourself;
							  this.addNewStep();
							  //console.log(
							break;
							case 18:
							  this.carpetPad = this.data[page].value;
							  this.contractorCost+=this.carpetPad*(this.sqft*(this.carpetPadCostVariable+this.carpetPadCostLabor)+this.carpetPadCostFixed);
							  this.contractorHours+=this.carpetPad*this.sqft/this.carpetPadCostTime;
							  this.diyCost+=this.carpetPad*(this.sqft*(this.carpetPadCostVariable)+this.carpetPadCostFixedDIY);
							  this.diyHours+=this.sqft/this.carpetPadCostTime*this.doItYourself;
							  this.addNewStep();
							break;
							case 19:
							  switch (this.data[page].value) {
							    case 0:
								    this.baseboardReplace = 0;
							        this.shoeReplace = 0;
								  break;
							    case 1:
								    this.baseboardReplace = 1;
							        this.shoeReplace = 1;
								  break;
							    case 2:
								    this.baseboardReplace = 0;
							        this.shoeReplace = 1;
								  break;
							  }
							  
							  this.contractorCost+=this.baseboardReplace*(this.sqft*(this.baseboardCostVariable+this.baseboardCostLabor)+this.baseboardCostFixed)+this.shoeReplace*(this.sqft*(this.shoeCostVariable+this.shoeCostLabor)+this.shoeCostFixed);
							  this.contractorHours+=this.baseboardReplace*this.perimeter/this.baseboardCostTime+this.shoeReplace*this.perimeter/this.shoeCostTime;
							  this.diyCost+=this.baseboardReplace*(this.perimeter*(this.baseboardCostVariable)+this.baseboardCostFixedDIY)+this.shoeReplace*(this.perimeter*(this.shoeCostVariable+this.shoeCostLabor)+this.shoeCostFixedDIY);
							  this.diyHours+=this.doItYourself*(this.baseboardReplace*this.perimeter/this.baseboardCostTime+this.shoeReplace*this.perimeter/this.shoeCostTime);							  
							  this.addNewStep();
							break;
							case 20:
							  this.readyToStart = this.data[page].value;
							break;
					  }
					  
							/*
							  this.contractorCost+=
							  this.contractorHours+=
							  this.diyCost+=
							  this.diyHours+=
							*/
					  
					  console.log(this.cPage+"> CC: "+this.contractorCost+", CH: "+this.contractorHours+", DIYC: "+this.diyCost+", DIYH: "+this.diyHours);
                  },

				  showPage: function(index) {
				      var self = this;
					  var me = this.$el;
					  this.cPage = index;
					  
					  self.mode = 1;
					  
					  var nt = self.pages[index].title;
					  var ct = me.find("#textHeader").text();
					  
					  if (ct=="") {
					     me.find("#textHeader").text(nt).delay(100).animate({top:0},900,"easeInOutExpo");
					  } else {
					     if (ct!=nt) {
								me.find("#textHeader").animate({top:-40},200,"easeInExpo",function() {
								    me.find("#textHeader").text(nt).delay(100).animate({top:0},500,"easeInOutExpo");
								});
						 }
					  }
					  
					  me.find("#textHeader").text();
	                  me.find("#footer").html("");
					  
					  if (self.pages[index].type!="results") {
						  me.find("#w_question").html(self.pages[index].question+'<div id="question_info"><a href="#" id="popover_info" data-trigger="hover" data-toggle="popover" data-title="Information" data-content="'+self.pages[index].description+'" data-placement="auto top"><img src="imgs/info.png" width="28" height="28" /></a></div>').css("opacity",0).delay(100).animate({opacity:1},1500);
						  me.find("#popover_info").popover();
					  } else {
					     me.find("#w_question").html("Results");
					  }
					  var i;
					  var count = self.pages[index].count;
					  var items = self.pages[index].items;
					  var s = "";
					  var w = $(window).width();
					  
					  if (self.pages[index].type=="radio") {
							  for (i=0;i<count;i++) {
								s+='<div class="answer"><div><img src="imgs/'+items[i].image+'" width="100" heiht="100" /></div><div class="answer_title">'+items[i].name+'</div></div>';
							  }

							  me.find("#answers").html(s+this.createChart(1));
							  
							  this.drawPoints();
							  
							  me.find(".answer").css("left",w/2-50);
							  
							  var w2 = count*100+(count-1)*25;
							  
							  me.find(".answer").css("opacity",0);
							  me.find(".answer").eq(count-1).animate({opacity:1},300, function() {
								  for (i=0;i<count;i++) {
								  
									me.find(".answer").eq(i).css("opacity",1).animate({left: w/2-w2/2+i*125},{
										duration: 1000,
										specialEasing: {
										  left: "easeInOutExpo"
										}});
								  }
								  
								  me.find(".answer_title").delay(1000).animate({opacity:1},200);
							  });
					  }
					  
					  if (self.pages[index].type=="checkbox") {
							  for (i=0;i<count;i++) {
								s+='<div class="answer"><div><img src="imgs/'+items[i].image+'" width="100" height="100" /></div><div class="answer_title">'+items[i].name+'</div></div>';
							  }
							  
							  //s+='<div class="answer"><div><input type="button" value="Next" id="btnSave" class="btn btn-default" style="width:100px;" /></div></div>';
							  
							  //s+='<div style="width:100%;text-align:center;"><input type="button" value="Next" id="btnSave" class="btn btn-default" style="width:120px;" /></div>';

							  me.find("#answers").html(s+this.createChart(1));
							  
							  this.drawPoints();
							  
							  me.find("#footer").html('<input type="button" value="Next" id="btnSave" class="btn btn-default" style="width:100px;" />');
							  
							  me.find(".answer").css("left",w/2-50);
							  
							  var w2 = count*100+(count-1)*25;
							  
							  me.find(".answer").css("opacity",0);
							  me.find(".answer").eq(count-1).animate({opacity:1},300, function() {
								  for (i=0;i<count;i++) {
								  
									me.find(".answer").eq(i).css("opacity",1).animate({left: w/2-w2/2+i*125},{
										duration: 1000,
										specialEasing: {
										  left: "easeInOutExpo"
										}});
								  }
								  
								  me.find(".answer_title").delay(1000).animate({opacity:1},200);
							  });
					  }
					  
					  if (self.pages[index].type=="input") {
					     s = '<div class="answer"><div><input type="text" id="input1" data-content="This field is required" value="" class="rounded" /></div><div><input type="button" value="Next" id="btnSave" class="btn btn-default" style="width:100%;" /></div></div>';

						 me.find("#answers").html(s+this.createChart(0));
						 
						 me.find(".answer").css("opacity",0);
						 
						 me.find(".answer").css("left",w/2-50);
						 
						 me.find(".answer").eq(count-1).animate({opacity:1},300);
					  }
					  
					  if (self.pages[index].type=="results") {
					    s = '<table style="width:900px;" cellspacing="0" cellpadding="10" align="center"><tr>';
						
						var contractorDays = Math.floor(this.contractorHours/8);
						
						s+='<td width="250" style="text-align:left;"><h3>Your Estimate</h3><p>Contractor: <strong>'+contractorDays+' days, $'+Math.floor(this.contractorCost)+'</strong></p>';
						
						var diyDays = Math.floor(this.diyHours/8);

						
						s+='<p>Do-It-Yourself: <strong>'+diyDays+' days, $'+Math.floor(this.diyCost)+'</strong></p>';
						s+='<p>Zip code: <strong>'+this.data[3].value+'</strong></p>';
						s+='<p>Sq. Ft.: <strong>'+this.data[2].value+'</strong></p>';
						s+='<p>Rooms: <strong>'+this.data[4].value+'</strong></p>';
						
						var rep = "";
						
						if (this.baseboardReplace==1 && this.shoeReplace==1) rep = "Baseboard, Shoe Molding";
						if (this.baseboardReplace==1 && this.shoeReplace==0) rep = "Baseboard";
						if (this.baseboardReplace==0 && this.shoeReplace==1) rep = "Shoe Molding";
						
						s+='<p>Replacement: <strong>'+rep+'</strong></p></td>';
						
						s+='<td width="400">'+this.createChart(2)+'</td>';
						s+='<td width="250"><p>Start your renovation poject today!</p><p><input type="button" value="Contact Contractor" id="btnCC" class="btn btn-primary" style="width:160px;" /></p><p>OR</p><p>Purchase supplies for this project!</p><p><input type="button" value="Renovation Supplies" id="btnCC" class="btn btn-primary" style="width:160px;" /></p></td>';
						s+='</tr></table>';
						me.find("#answers").html(s);
						
						this.drawPoints();
					  }
					  
					  me.find(".answer").unbind('click');
					  this.addAnswerEvents();
					  
					  $ww = $(window).width();
					  $hh = $(window).height();
					  
					  if (this.cPage>=7 && this.cPage!=21) {
					     //me.find("#question").css("height",100);
						me.find("#question").css("height",$hh/2-0.4*($hh/2));
					    me.find("#answers").css("top",$hh/2-0.4*($hh/2));
						me.find("#answers").css("height",450);
					  } else {
					    
					    me.find("#question").css("height",$hh/2-0.1*($hh/2));
						me.find("#answers").css("height",200);
						me.find("#answers").css("top",$hh/2-0.1*($hh/2));
					  }
				  },
				  
				  
				   linedraw: function(container,color,ax,ay,bx,by) {
					if(ay>by)
					{
						bx=ax+bx;  
						ax=bx-ax;
						bx=bx-ax;
						by=ay+by;  
						ay=by-ay;  
						by=by-ay;
					}
					
					var s = "";
					var calc=Math.atan((ay-by)/(bx-ax));
					calc=calc*180/Math.PI;
					var length=Math.sqrt((ax-bx)*(ax-bx)+(ay-by)*(ay-by));
					s+= "<div class='chart_line' style='height:" + length + "px;width:1px;background-color:"+color+";position:absolute;top:" + (ay) + "px;left:" + (ax) + "px;transform:rotate(" + calc + "deg);-ms-transform:rotate(" + calc + "deg);transform-origin:0% 0%;-moz-transform:rotate(" + calc + "deg);-moz-transform-origin:0% 0%;-webkit-transform:rotate(" + calc  + "deg);-webkit-transform-origin:0% 0%;-o-transform:rotate(" + calc + "deg);-o-transform-origin:0% 0%;'></div>"
					 
					 return s;
				  },
				  
				  createChart: function(mode) {
				     s = "";
					 var i;
					 
				     if (mode) {
						 if (this.cPage>=7) {
						   s = '<div id="chart'+mode+'"><div class="chart-legend"><div class="chart_point_dl"></div> <div class="fl">Do-It-Yourself,</div> <div class="chart_point_cl"></div> <div class="fl">Contractor</div></div><div class="chart-chart"><canvas id="chart-lines" width="350" height="219"></canvas><div id="chart-points"></div></div></div>';
						 }
						 
						 for (i=0;i<this.stepsHC;i++) {
						   
						 }
						 
						 
					 }
					 return s;
				  },
				  
				  drawPoints: function() {
				    var i;
					var s = "";
					     s = "";
						 
						 var maxc = [0,0];
						 
						 var hc = this.stepsHC;
						 
						 for (i=0;i<this.stepsHC.length;i++) {
						     if (hc[i][1]>maxc[0]) maxc[0] = hc[i][1];
							 if (hc[i][2]>maxc[1]) maxc[1] = hc[i][2];
							 
						     if (hc[i][3]>maxc[0]) maxc[0] = hc[i][3];
							 if (hc[i][4]>maxc[1]) maxc[1] = hc[i][4];
						 }
						 
						 var cx;
						 var cy;
						 var dx;
						 var dy;
						 
						 var ocx;
						 var ocy;
						 var odx;
						 var ody;

						 
						 for (i=0;i<this.stepsHC.length;i++) {
	                         if (maxc[0]==0) cy = 0; else cy = (this.stepsHC[i][1]*160)/maxc[0];
							 if (maxc[1]==0) cx = 0; else cx = (this.stepsHC[i][2]*300)/maxc[1];
							 
	                         if (maxc[0]==0) dy = 0; else dy = (this.stepsHC[i][3]*160)/maxc[0];
							 if (maxc[1]==0) dx = 0; else dx = (this.stepsHC[i][4]*300)/maxc[1];

							 
							 console.log("CC: "+dx+" "+dy);
							 
						     s+='<div id="pc1_'+i+'" class="chart_point_c" style="left:'+(19+cx)+'px;top:'+(217-cy)+'px;"></div>';
							 s+='<div id="pc2_'+i+'" class="chart_point_d" style="left:'+(19+dx)+'px;top:'+(217-dy)+'px;"></div>';
							 
							 if (i>0) {
							   //s+=this.linedraw(".chart-chart","#ccc",19+ocx,217-ody,19+cx,217-cy);
							   //drawLines
							   this.drawLine("#666",23+odx,217-ody,23+dx,217-dy);
							   this.drawLine("#f66",23+ocx,217-ocy,23+cx,217-cy);
							 }
							 ocx = cx;
							 ocy = cy;
							 odx = dx;
							 ody = dy;
						 }
						 
						 //alert(s);
						 $("#chart-points").html(s);
				  },
				  
				  drawLine: function(color,ax0,ay0,ax1,ay1) {
				        console.log(ax0+" "+ay0+" - "+ax1+" "+ay1);
						var c=document.getElementById("chart-lines");
						var ctx=c.getContext("2d");
						ctx.beginPath();
						ctx.strokeStyle=color;
						ctx.moveTo(ax0,ay0);
						ctx.lineTo(ax1,ay1);
						ctx.stroke();
				  },
				  
				  addNewStep: function() {
					 this.stepsHC.push([this.cPage,this.contractorCost,this.contractorHours,this.diyCost,this.diyHours]);
				  },
				  
				  hidePage: function(action) {
				      var self = this;
					  var me = this.$el;
					  var index = this.data[this.cPage].page-1;	
					  
					  var count = self.pages[this.cPage].count;
					  var items = self.pages[this.cPage].items;
					  
					  if (index>-1) {
					  
					   me.find("#question").delay(300).animate({opacity:0},400);
					   me.find("#answers").delay(300).animate({opacity:0},400, function() {
					     self.gotoNewPage(action);
					   });
					   
					  }
				  },
				  
				  gotoNewPage: function(action) {
				      var index;
				      var self = this;
					  var me = this.$el;
					  
				      if (action=="next") {
					       index = this.data[this.cPage].page-1;						   
							   if (index>-1) {
								   me.find("#question").css("opacity",1);
								   me.find("#answers").css("opacity",1);
								   this.showPage(index);
						       }  
					  }
				  },
				  
				  addAnswerEvents: function() {
				      var self = this;
					  var me = this.$el;
					  
					  var count = self.pages[this.cPage].count;
					  var items = self.pages[this.cPage].items;
					  
					  var i;
					  
					  if (self.pages[this.cPage].type=="radio") {
						  for (i=0;i<count;i++) {
							me.find(".answer").eq(i).bind("click", { pindex: i }, function(e) {						  
							  e.preventDefault();
							  if (self.mode) {
								  var ind = e.data.pindex;
								  
								  self.data[self.cPage].value = items[ind].value;
								  self.data[self.cPage].page = items[ind].page;
								  
								  self.calculate();
								  
								  $(this).find("img").attr("src","imgs/a_"+items[ind].image);
								  
								  self.hidePage('next');
								  
								  self.mode = 0;
							  }
							});
						  }
					  }
					  
					  if (self.pages[this.cPage].type=="checkbox") {
					     me.find("#btnSave").click(function(e) {
						    self.data[self.cPage].page = items[0].page;
							
							self.calculate();
							
						    self.hidePage('next');
							self.mode = 0;
						 });
						 
						  for (i=0;i<count;i++) {
							me.find(".answer").eq(i).bind("click", { pindex: i }, function(e) {						  
							  e.preventDefault();
							  if (self.mode) {
								  var ind = e.data.pindex;
								  var val;
								  val = self.data[self.cPage].value[ind];
								  
								  if (val) {
								    val = 0;
									$(this).find("img").attr("src","imgs/"+items[ind].image);
								  } else {
								    val = 1;
									$(this).find("img").attr("src","imgs/a_"+items[ind].image);
								  }
								  
								  self.data[self.cPage].value[ind] = val;
							  }
							});
						  }
					  }
					  
					  if (self.pages[this.cPage].type=="input") {
					     me.find("#btnSave").click(function(e) {
						    var val = me.find("#input1").val();
							
							if (val!="") {
							  self.data[self.cPage].value = val;
							  self.data[self.cPage].page = items[0].page;
							  
							  self.calculate();
							  
							  self.hidePage('next');
								  
						      self.mode = 0;
							} else {
							  me.find("#input1").popover('show');
							}
						 });
					  }
				  },
				  
  		  		  render: function() {
  		  		  }
          });
          
		  
          var widget = new WidgetCalc({
		    pages: pages
		  });
		  
  });
})(jQuery);