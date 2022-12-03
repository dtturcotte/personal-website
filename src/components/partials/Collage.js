import React from 'react'
import Packery from 'packery'

import '../../scss/global.scss'
import '../../scss/isotope.scss'

var $ = require('jquery')

var layouts = ['grid-item', 'grid-item grid-item--width2 grid-item--height2']

// Unable to make ajax request to http domain (HTwS is unsecured) in production.
// So, I've added the thumbnails locally, and made request locally, and added response from HTwS here, then deployed
let comicsAndArtwork = {
	artwork: [
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=14&cat=',
			thumb: 'Alternate Reality.png',
			id: 14,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=9&cat=',
			thumb: 'Champlain.png',
			id: 9,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=19&cat=',
			thumb: 'Coast with Me.png',
			id: 19,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=42&cat=',
			thumb: 'In the Moment.png',
			id: 42,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=43&cat=',
			thumb: 'Cliffs of Portugal.png',
			id: 43,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=2&cat=',
			thumb: 'Dark Templar.png',
			id: 2,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=18&cat=',
			thumb: 'Celebrity Jeopardy.png',
			id: 18,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=27&cat=',
			thumb: 'Reference Compilation.png',
			id: 27,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=32&cat=',
			thumb: 'Alternate Reality Process.png',
			id: 32,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=31&cat=',
			thumb: 'Alchemy Live Process.png',
			id: 31,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=44&cat=',
			thumb: 'Thai Elephants.png',
			id: 44,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=4&cat=',
			thumb: 'Head.png',
			id: 4,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=33&cat=',
			thumb: 'Battery Park Process.png',
			id: 33,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=5&cat=',
			thumb: 'Hydralisk.png',
			id: 5,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=16&cat=',
			thumb: 'Bubblicious.png',
			id: 16,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=29&cat=',
			thumb: 'Tom Yum Goong.png',
			id: 29,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=11&cat=',
			thumb: 'Sketch Compilation.png',
			id: 11,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=45&cat=',
			thumb: 'Jaz.png',
			id: 45,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=34&cat=',
			thumb: 'Champlain Process.png',
			id: 34,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=23&cat=',
			thumb: 'Knopfler.png',
			id: 23,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=7&cat=',
			thumb: 'Spaceship.png',
			id: 7,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=3&cat=',
			thumb: 'Goron.png',
			id: 3,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=8&cat=',
			thumb: 'Cardboard Chap.png',
			id: 8,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=46&cat=',
			thumb: 'Lois Circle.png',
			id: 46,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=26&cat=',
			thumb: 'Raura.png',
			id: 26,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=37&cat=',
			thumb: 'Money For Nothing Process.png',
			id: 37,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=21&cat=',
			thumb: 'Fifty Fifty.png',
			id: 21,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=12&cat=',
			thumb: 'Snack Break.png',
			id: 12,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=39&cat=',
			thumb: 'South Beach Process.png',
			id: 39,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=35&cat=',
			thumb: 'Knopfler Process.png',
			id: 35,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=6&cat=',
			thumb: 'Kid Buu.png',
			id: 6,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=38&cat=',
			thumb: 'Raura Process.png',
			id: 38,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=36&cat=',
			thumb: 'Modern Measures Process.png',
			id: 36,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=10&cat=',
			thumb: 'Gladiators.png',
			id: 10,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=13&cat=',
			thumb: 'Alchemy Live.png',
			id: 13,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=41&cat=',
			thumb: 'In the Moment Process.png',
			id: 41,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=17&cat=',
			thumb: 'Bulma Reference.png',
			id: 17,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=25&cat=',
			thumb: 'Money For Nothin.png',
			id: 25,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=22&cat=',
			thumb: 'Jing Ju.png',
			id: 22,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=30&cat=',
			thumb: 'Ye Qu.png',
			id: 30,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=24&cat=',
			thumb: 'Modern Measures.png',
			id: 24,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=15&cat=',
			thumb: 'Battery Park.png',
			id: 15,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=40&cat=',
			thumb: 'South Beach.png',
			id: 40,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=28&cat=',
			thumb: 'Shawnei.png',
			id: 28,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=0&cat=',
			thumb: 'Brolly.png',
			id: 0,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=20&cat=',
			thumb: 'Dodge This.png',
			id: 20,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=artwork&id=1&cat=',
			thumb: 'Bulma.png',
			id: 1,
			cat: null,
		},
	],
	comics: [
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=46&cat=',
			thumb: 'Waking Up.png',
			id: 46,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=7&cat=',
			thumb: 'MacGyver IKEA.png',
			id: 7,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=68&cat=',
			thumb: 'MMA.png',
			id: 68,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=19&cat=',
			thumb: 'Guide Dog.png',
			id: 19,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=78&cat=',
			thumb: 'Cloud Storage.png',
			id: 78,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=31&cat=',
			thumb: 'Profound Sayings.png',
			id: 31,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=30&cat=',
			thumb: 'Please Recycle.png',
			id: 30,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=60&cat=',
			thumb: 'Puppy Vogue.png',
			id: 60,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=76&cat=',
			thumb: 'Online Dating Photos.png',
			id: 76,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=3&cat=',
			thumb: 'Cookie Psychology.png',
			id: 3,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=18&cat=',
			thumb: 'Free Parking.png',
			id: 18,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=65&cat=',
			thumb: 'Note Taking.png',
			id: 65,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=57&cat=',
			thumb: 'Pres Debate Facepalmers.png',
			id: 57,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=29&cat=',
			thumb: 'Parkour GPS.png',
			id: 29,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=69&cat=',
			thumb: 'Obnoxious Work Emails.png',
			id: 69,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=55&cat=',
			thumb: 'Survey.png',
			id: 55,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=13&cat=',
			thumb: 'Calorie Count.png',
			id: 13,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=32&cat=',
			thumb: 'Reality.png',
			id: 32,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=24&cat=',
			thumb: 'Match Ratings.png',
			id: 24,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=15&cat=',
			thumb: 'Cop Outs.png',
			id: 15,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=54&cat=',
			thumb: 'Startup vs Corporation.png',
			id: 54,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=73&cat=',
			thumb: 'Chipotle.png',
			id: 73,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=61&cat=',
			thumb: 'Slapman.png',
			id: 61,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=9&cat=',
			thumb: 'Safety Manual.png',
			id: 9,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=1&cat=',
			thumb: 'Automated Phone System.png',
			id: 1,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=11&cat=',
			thumb: 'Bag Cereal.png',
			id: 11,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=59&cat=',
			thumb: 'Bionic Legs.png',
			id: 59,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=26&cat=',
			thumb: 'Moving.png',
			id: 26,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=66&cat=',
			thumb: 'Filing Taxes.png',
			id: 66,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=45&cat=',
			thumb: 'Value of a Dollar.png',
			id: 45,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=71&cat=',
			thumb: 'Line Cutting.png',
			id: 71,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=12&cat=',
			thumb: 'Bother.png',
			id: 12,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=8&cat=',
			thumb: 'Pop Culture.png',
			id: 8,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=21&cat=',
			thumb: 'Hallway Interactions.png',
			id: 21,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=10&cat=',
			thumb: 'A Better Idea.png',
			id: 10,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=6&cat=',
			thumb: 'Looking For Things.png',
			id: 6,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=36&cat=',
			thumb: 'Small Differences Shower.png',
			id: 36,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=27&cat=',
			thumb: 'Oil Change.png',
			id: 27,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=28&cat=',
			thumb: 'Organic Milk.png',
			id: 28,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=75&cat=',
			thumb: 'Corporate Project Circle.png',
			id: 75,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=14&cat=',
			thumb: 'Camping Newbie.png',
			id: 14,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=52&cat=',
			thumb: 'Office Douchebags.png',
			id: 52,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=48&cat=',
			thumb: 'Email Salutations.png',
			id: 48,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=62&cat=',
			thumb: 'The Original Hipsters.png',
			id: 62,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=4&cat=',
			thumb: 'Emotional Comparison.png',
			id: 4,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=67&cat=',
			thumb: 'Inbox.png',
			id: 67,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=2&cat=',
			thumb: 'Awkwardness.png',
			id: 2,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=22&cat=',
			thumb: 'Knitting.png',
			id: 22,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=50&cat=',
			thumb: 'Fitting In.png',
			id: 50,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=42&cat=',
			thumb: 'True Feelings.png',
			id: 42,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=34&cat=',
			thumb: 'Scotch Tape.png',
			id: 34,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=47&cat=',
			thumb: 'Business Foods.png',
			id: 47,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=51&cat=',
			thumb: 'Holding Down the Fort.png',
			id: 51,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=44&cat=',
			thumb: 'Unlimited MPG.png',
			id: 44,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=16&cat=',
			thumb: 'Douchebag Drivers.png',
			id: 16,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=43&cat=',
			thumb: 'Typing.png',
			id: 43,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=0&cat=',
			thumb: 'Animals.png',
			id: 0,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=64&cat=',
			thumb: 'Reasons I fly Delta.png',
			id: 64,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=70&cat=',
			thumb: 'Tour Guide.png',
			id: 70,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=53&cat=',
			thumb: 'ReFw.png',
			id: 53,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=25&cat=',
			thumb: 'Moving.png',
			id: 25,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=23&cat=',
			thumb: 'Knock On Wood.png',
			id: 23,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=17&cat=',
			thumb: 'Douchey Self Checkout.png',
			id: 17,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=77&cat=',
			thumb: 'Scheduling Meetings.png',
			id: 77,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=33&cat=',
			thumb: 'Saran Wrap.png',
			id: 33,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=5&cat=',
			thumb: 'Five Second Rule.png',
			id: 5,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=49&cat=',
			thumb: 'Executive Calendar.png',
			id: 49,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=41&cat=',
			thumb: 'Three Easy Steps Chinese.png',
			id: 41,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=37&cat=',
			thumb: 'Small Differences Storm Prep.png',
			id: 37,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=74&cat=',
			thumb: 'Number of Ks.png',
			id: 74,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=63&cat=',
			thumb: 'Thirty Years Later.png',
			id: 63,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=38&cat=',
			thumb: 'Small Differences The Fridge.png',
			id: 38,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=20&cat=',
			thumb: 'Halloween Candy.png',
			id: 20,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=35&cat=',
			thumb: 'Small Differences Closet.png',
			id: 35,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=56&cat=',
			thumb: 'Thinking Out Loud.png',
			id: 56,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=72&cat=',
			thumb: 'Hand Dryer.png',
			id: 72,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=40&cat=',
			thumb: 'Storm Categories.png',
			id: 40,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=39&cat=',
			thumb: 'Spell That Please.png',
			id: 39,
			cat: null,
		},
		{
			link: 'http://hittingtreeswithsticks.com?action=viewimage&site=comics&id=58&cat=',
			thumb: 'VP Debate Facepalmers.png',
			id: 58,
			cat: null,
		},
	],
}

class Collage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	async setPackery(makeRequest) {
		if (makeRequest) {
			var htws = {
				url: 'http://hittingtreeswithsticks.com/?action=personalpage',
				art_limit: 100, // limit return
				comics_limit: 100, // limit return
				max_width: 100, // specify image width in px
				max_height: 100, // specify image height in px
				site: 'comics', // artwork or comics
			}

			let url = htws.url + '&limit=' + htws.art_limit + '&mw=' + htws.max_width + '&mh=' + htws.max_height + '&site=' + htws.site + '&callback=?'
			let response = await $.getJSON(url)
			console.log('Response: ', response)
		}

		var grid = document.querySelector('.grid')
		let pack = new Packery(grid, {
			itemSelector: '.grid-item',
			layoutMode: 'packery',
		})

		setTimeout(() => {
			pack.layout()
		}, 100)
	}

	componentDidMount() {
		this.setPackery(false)
	}

	componentWillMount() {}

	render() {
		return (
			<div className="grid">
				{comicsAndArtwork.artwork.map((art, index) => {
					var rand = Math.floor(Math.random() * layouts.length)
					return (
						<a key={index} href={art.link} target="_blank">
							<img src={`../assets/comics_and_artwork/ArtThumbnails/${art.thumb}`} className={`grid-item ${layouts[rand]}`} />
						</a>
					)
				})}
			</div>
		)
	}
}

export default Collage
