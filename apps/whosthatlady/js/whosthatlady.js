(function () {
	var app = angular.module('WhosThatLady', []);
	app.controller('randomQuote', function () {
		this.info = quotes[Math.floor(Math.random() * quotes.length)];
		this.pick = function () {
			this.info = quotes[Math.floor(Math.random() * quotes.length)];
		};
	});
	var quotes = [

		{
			nickname: "Semen Demon"
		},
		{
			nickname: "Jizz Genie"
		},
		{
			nickname: "Baby Batter Bringer"
		},
		{
			nickname: "Cum Caresser"
		},
		{
			nickname: "Lovegoo Lass"
		},
		{
			nickname: "Sperm Summoner"
		},
		{
			nickname: "Prostate Apostate"
		},
		{
			nickname: "Ejaculate Empress"
		},
		{
			nickname: "Mayonnaise Maiden"
		},
		{
			nickname: "Jizz Jockey"
		},
		{
			nickname: "Spunk Monk"
		},
		{
			nickname: "Sperm Worm"
		},
		{
			nickname: "Sodomy Sentinel"
		},
		{
			nickname: "Penile Perpetrator"
		},
		{
			nickname: "Erection Confection"
		},
		{
			nickname: "Ejaculate Immaculate"
		},
		{
			nickname: "salami tsunami"
		},
		{
			nickname: "Boner Condoner"
		},
		{
			nickname: "seminal fluid druid"
		},
		{
			nickname: "Urethral Umpire"
		},
		{
			nickname: "Wang Wizard"
		},
		{
			nickname: "Knackers Knight"
		},
		{
			nickname: "Prick Pirate"
		},
		{
			nickname: "Dong Dominator"
		},
		{
			nickname: "Cock Khan"
		},
		{
			nickname: "Stiffy Sultan"
		},
		{
			nickname: "Sausage Sergeant"
		},
		{
			nickname: "Middle Leg Major"
		},
		{
			nickname: "Pole Privateer"
		},
		{
			nickname: "Shaft Specialist"
		},
		{
			nickname: "Pecker Prodigy"
		},
		{
			nickname: "Boner Benefactor"
		},
		{
			nickname: "Matress Actress"
		},
		{
			nickname: "baloney pony wrangler"
		},
		{
			nickname: "Dick Juice Masseuse"
		},
		{
			nickname: "Tallywhacker Smacker"
		},
		{
			nickname: "Man Muscle Steam Shovel"
		},
		{
			nickname: "Baby Batter Bladder"
		},
		{
			nickname: "Willy Ghillie"
		},
		{
			nickname: "Butt Hut Slut"
		},
		{
			nickname: "Glans Fan"
		},
		{
			nickname: "Spooge Scrooge"
		},
		{
			nickname: "Ejaculate Advocate"
		},
		{
			nickname: "Skeet Treat"
		},
		{
			nickname: "Wang Wrangler"
		},
		{
			nickname: "Jism Prism"
		},
		{
			nickname: "Smegma Savant"
		},
		{
			nickname: "Anal Aficionado"
		},
		{
			nickname: "Testicular Temptress"
		},
		{
			nickname: "sperm worm"
		},
		{
			nickname: "boner toner"
		},
		{
			nickname: "spunk monk"
		},
		{
			nickname: "cock dock"
		},
		{
			nickname: "erection ejection"
		},
		{
			nickname: "dick tick"
		},
		{
			nickname: "cum plum"
		},
		{
			nickname: "seed steed"
		},
		{
			nickname: "prick chick"
		},
		{
			nickname: "cock stock"
		},
		{
			nickname: "seminal sentinel"
		},
		{
			nickname: "phallus chalice"
		},
		{
			nickname: "anus ignoramus"
		},
		{
			nickname: "smegma enigma"
		},
		{
			nickname: "beef curtain hurtin"
		},
		{
			nickname: "cunt runt"
		},
		{
			nickname: "jism prison"
		},
		{
			nickname: "ballbiting ballerina"
		},
		{
			nickname: "dongle mongle"
		},
		{
			nickname: "penis machinist"
		},
		{
			nickname: "chin chin bin"
		},
		{
			nickname: "scrotum sorceress"
		},
		{
			nickname: "wiener cleaner"
		},
		{
			nickname: "pole populator"
		},
		{
			nickname: "stiffy stimulator"
		},
		{
			nickname: "pillar pimper"
		},
		{
			nickname: "column culminator"
		},
		{
			nickname: "testicle tamer"
		},
		{
			nickname: "sperm specialist"
		},
		{
			nickname: "glans gladiator"
		},
		{
			nickname: "frenulum fractionizer"
		},
		{
			nickname: "foreskin fornicator"
		},
		{
			nickname: "Penile Private"
		},
		{
			nickname: "Smut Sergeant"
		},
		{
			nickname: "Cock Captain"
		},
		{
			nickname: "Orifice Officer"
		},
		{
			nickname: "Rear Admiral"
		},
		{
			nickname: "Cummander"
		},
		{
			nickname: "Lewd Lieutenant"
		},
		{
			nickname: "Meat Major"
		},
		{
			nickname: "Cunt Colonel"
		},
		{
			nickname: "weiner witch"
		},
		{
			nickname: "phallus phalanx"
		},
		{
			nickname: "cock commandant"
		},
		{
			nickname: "dong deity"
		},
		{
			nickname: "fluid druid"
		},
		{
			nickname: "jizz wiz"
		},
		{
			nickname: "benis burglar"
		},
		{
			nickname: "wang waxer"
		},
		{
			nickname: "schlong sentinel"
		},
		{
			nickname: "dick dastard"
		},
		{
			nickname: "jizz jezebel"
		},
		{
			nickname: "tally wacker packer"
		},
		{
			nickname: "schlong sorcerrer"
		},
		{
			nickname: "weenie genie"
		},
		{
			nickname: "chode road"
		},
		{
			nickname: "male repoductive organ gorgon"
		},
		{
			nickname: "shaft shaft"
		},
		{
			nickname: "ding dong dungeon"
		},
		{
			nickname: "cock dock"
		},
		{
			nickname: "scrotum totem"
		},
		{
			nickname: "ballsack knapsack"
		},
		{
			nickname: "testicle vestibule"
		},
		{
			nickname: "ball butter nutter"
		},
		{
			nickname: "cock cream captivator"
		},
		{
			nickname: "man milk mephistopheles"
		},
		{
			nickname: "Smega smuggler"
		},
		{
			nickname: "Cum Connoisseur"
		},
		{
			nickname: "Semen Sommelier"
		},
		{
			nickname: "Urethra Barista"
		},
		{
			nickname: "turgid tool tamer"
		},
		{
			nickname: "box lunch"
		}
	];
})();