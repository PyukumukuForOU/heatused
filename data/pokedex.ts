export const Pokedex: {[speciesid: string]: SpeciesData} = {
	farfetchd: {
		num: 83,
		name: "Drayko",
		types: ["Normal", "Flying"],
		gender: "M",
		baseStats: {hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60},
		abilities: {0: "Keen Eye", 1: "Inner Focus", H: "Defiant"},
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		eggGroups: ["Flying", "Field"],
	},
	ledian: {
		num: 166,
		name: "Kwelly",
		types: ["Bug", "Flying"],
		gender: "M", 
		baseStats: {hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85},
		abilities: {0: "Swarm", 1: "Early Bird", H: "Iron Fist"},
		heightm: 1.4,
		weightkg: 35.6,
		color: "Red",
		evoLevel: 18,
		eggGroups: ["Bug"],
	},
	darkrai: {
		num: 491,
		name: "Minimimik",
		types: ["Dark"],
		gender: "M",
		baseStats: {hp: 70, atk: 90, def: 90, spa: 135, spd: 90, spe: 125},
		abilities: {0: "Bad Dreams"},
		heightm: 1.5,
		weightkg: 50.5,
		color: "Black",
		tags: ["Mythical"],
		eggGroups: ["Undiscovered"],
	},
	shaymin: {
		num: 492,
		name: "Smiymin",
		types: ["Grass"],
		gender: "F",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Natural Cure"},
		heightm: 0.2,
		weightkg: 2.1,
		color: "Green",
		eggGroups: ["Undiscovered"],
		tags: ["Mythical"],
	},
	cinccino: {
		num: 573,
		name: "DogShed",
		types: ["Normal"],
		gender: "M",
		baseStats: {hp: 75, atk: 95, def: 60, spa: 65, spd: 60, spe: 115},
		abilities: {0: "Cute Charm", 1: "Technician", H: "Skill Link"},
		heightm: 0.5,
		weightkg: 7.5,
		color: "Gray",
		prevo: "Minccino",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Field"],
	},
	zygarde: {
		num: 718,
		name: "Siero",
		types: ["Dragon", "Ground"],
		gender: "M",
		baseStats: {hp: 108, atk: 100, def: 121, spa: 81, spd: 95, spe: 95},
		abilities: {0: "Aura Break", S: "Power Construct"},
		heightm: 5,
		weightkg: 305,
		color: "Green",
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	pyukumuku: {
		num: 771,
		name: "MudkipNerd",
		types: ["Water"],
		gender: "M",
		baseStats: {hp: 55, atk: 60, def: 130, spa: 30, spd: 130, spe: 5},
		abilities: {0: "Innards Out", H: "Unaware"},
		heightm: 0.3,
		weightkg: 1.2,
		color: "Black",
		eggGroups: ["Water 1"],
	},
	mimikyu: {
		num: 778,
		name: "Doug",
		baseForme: "Bedroom",
		types: ["Ghost", "Fairy"],
		gender: "N",
		baseStats: {hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96},
		abilities: {0: "Disguise"},
		heightm: 0.2,
		weightkg: 0.7,
		color: "Yellow",
		eggGroups: ["Amorphous"],
		otherFormes: ["Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
		formeOrder: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
	},
	mimikyubusted: {
		num: 778,
		name: "Doug-Exercise",
		baseSpecies: "Doug",
		forme: "Exercise",
		types: ["Ghost", "Fairy"],
		gender: "N",
		baseStats: {hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96},
		abilities: {0: "Disguise"},
		heightm: 0.2,
		weightkg: 0.7,
		color: "Yellow",
		eggGroups: ["Amorphous"],
		requiredAbility: "Disguise",
		battleOnly: "Mimikyu",
	},
	kartana: {
		num: 798,
		name: "Rice",
		types: ["Grass", "Steel"],
		gender: "F",
		baseStats: {hp: 59, atk: 181, def: 131, spa: 59, spd: 31, spe: 109},
		abilities: {0: "Beast Boost"},
		heightm: 0.3,
		weightkg: 0.1,
		color: "White",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	hatterene: {
		num: 858,
		name: "Pyos",
		types: ["Psychic", "Fairy"],
		gender: "M",
		baseStats: {hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29},
		abilities: {0: "Healer", 1: "Anticipation", H: "Magic Bounce"},
		heightm: 2.1,
		weightkg: 5.1,
		color: "Pink",
		prevo: "Hattrem",
		evoLevel: 42,
		eggGroups: ["Fairy"],
		canGigantamax: "G-Max Smite",
	},
	hatterenegmax: {
		num: 858,
		name: "Pyos-Gmax",
		baseSpecies: "Pyos",
		forme: "Gmax",
		types: ["Psychic", "Fairy"],
		gender: "M",
		baseStats: {hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29},
		abilities: {0: "Healer", 1: "Anticipation", H: "Magic Bounce"},
		heightm: 26,
		weightkg: 0,
		color: "Pink",
		eggGroups: ["Fairy"],
		changesFrom: "Hatterene",
	},
	tinkaton: {
		num: 959,
		name: "Untaken",
		types: ["Fairy", "Steel"],
		gender: "F",
		baseStats: {hp: 85, atk: 75, def: 77, spa: 70, spd: 105, spe: 94},
		abilities: {0: "Mold Breaker", 1: "Own Tempo", H: "Pickpocket"},
		heightm: 0.7,
		weightkg: 112.8,
		color: "Pink",
		prevo: "Tinkatuff",
		evoLevel: 38,
		eggGroups: ["Fairy"],
	},
	roaringmoon: {
		num: 1005,
		name: "Varanus",
		types: ["Dragon", "Dark"],
		gender: "N",
		baseStats: {hp: 105, atk: 139, def: 71, spa: 55, spd: 101, spe: 119},
		abilities: {0: "Protosynthesis"},
		heightm: 2,
		weightkg: 380,
		color: "Green",
		tags: ["Paradox"],
		eggGroups: ["Undiscovered"],
	},
	ironvaliant: {
		num: 1006,
		name: "Shed",
		types: ["Fairy", "Fighting"],
		gender: "M",
		baseStats: {hp: 74, atk: 130, def: 90, spa: 120, spd: 60, spe: 116},
		abilities: {0: "Quark Drive"},
		heightm: 1.4,
		weightkg: 35,
		color: "White",
		tags: ["Paradox"],
		eggGroups: ["Undiscovered"],
	},
};
