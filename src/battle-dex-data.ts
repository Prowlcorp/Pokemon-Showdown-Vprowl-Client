/**
 * Pokemon Showdown Dex Data
 *
 * A collection of data and definitions for src/battle-dex.ts.
 *
 * Larger data has their own files in data/, so this is just for small
 * miscellaneous data that doesn't need its own file.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

/**
 * String that contains only lowercase alphanumeric characters.
 */
type ID = string & {__isID: true};

const BattleNatures: {[k in NatureName]: {plus?: StatName, plus2?: StatName, plus3?: StatName, minus?: StatName, minus2?: StatName}} = {
	Adamant: {
		plus: 'atk',
		minus: 'spa',
	},
	Aggressive: {
		plus: 'atk',
		plus2: 'spa',
		plus3: 'spe',
		minus: 'def',
		minus2: 'spd',
	},
	Bashful: {},
	Bold: {
		plus: 'def',
		minus: 'atk',
	},
	Brave: {
		plus: 'atk',
		minus: 'spe',
	},
	Calm: {
		plus: 'spd',
		minus: 'atk',
	},
	Careful: {
		plus: 'spd',
		minus: 'spa',
	},
	Docile: {},
	Gentle: {
		plus: 'spd',
		minus: 'def',
	},
	Hardy: {},
	Hasty: {
		plus: 'spe',
		minus: 'def',
	},
	Impish: {
		plus: 'def',
		minus: 'spa',
	},
	Jolly: {
		plus: 'spe',
		minus: 'spa',
	},
	Lax: {
		plus: 'def',
		minus: 'spd',
	},
	Lonely: {
		plus: 'atk',
		minus: 'def',
	},
	Mild: {
		plus: 'spa',
		minus: 'def',
	},
	Modest: {
		plus: 'spa',
		minus: 'atk',
	},
	Naive: {
		plus: 'spe',
		minus: 'spd',
	},
	Naughty: {
		plus: 'atk',
		minus: 'spd',
	},
	Pacifist: {
		plus: 'def',
		plus2: 'spd',
		plus3: 'spe',
		minus: 'atk',
		minus2: 'spa',
	},
	Quiet: {
		plus: 'spa',
		minus: 'spe',
	},
	Quirky: {},
	Rash: {
		plus: 'spa',
		minus: 'spd',
	},
	Relaxed: {
		plus: 'def',
		minus: 'spe',
	},
	Sassy: {
		plus: 'spd',
		minus: 'spe',
	},
	Serious: {},
	Timid: {
		plus: 'spe',
		minus: 'atk',
	},
};
const BattleStatIDs: {[k: string]: StatName | undefined} = {
	HP: 'hp',
	hp: 'hp',
	Atk: 'atk',
	atk: 'atk',
	Def: 'def',
	def: 'def',
	SpA: 'spa',
	SAtk: 'spa',
	SpAtk: 'spa',
	spa: 'spa',
	SpD: 'spd',
	SDef: 'spd',
	SpDef: 'spd',
	spd: 'spd',
	Spe: 'spe',
	Spd: 'spe',
	spe: 'spe',
};
/** Stat short names */
const BattleStatNames = {
	hp: 'HP',
	atk: 'Atk',
	def: 'Def',
	spa: 'SpA',
	spd: 'SpD',
	spe: 'Spe',
} as const;

const BattleBaseSpeciesChart = [
	"burmy", "shellos", "gastrodon", "deerling", "sawsbuck", "vivillon", "flabebe", "floette", "florges", "furfrou", "minior", "alcremie",
] as ID[];

const BattlePokemonIconIndexes: {[id: string]: number} = {
	egg: 900 + 1,
	pikachubelle: 900 + 2,
	pikachulibre: 900 + 3,
	pikachuphd: 900 + 4,
	pikachupopstar: 900 + 5,
	pikachurockstar: 900 + 6,
	pikachucosplay: 900 + 7,
	castformrainy: 900 + 35,
	castformsnowy: 900 + 36,
	castformsunny: 900 + 37,
	deoxysattack: 900 + 38,
	deoxysdefense: 900 + 39,
	deoxysspeed: 900 + 40,
	burmysandy: 900 + 41,
	burmytrash: 900 + 42,
	wormadamsandy: 900 + 43,
	wormadamtrash: 900 + 44,
	cherrimsunshine: 900 + 45,
	shelloseast: 900 + 46,
	gastrodoneast: 900 + 47,
	rotomfan: 900 + 48,
	rotomfrost: 900 + 49,
	rotomheat: 900 + 50,
	rotommow: 900 + 51,
	rotomwash: 900 + 52,
	giratinaorigin: 900 + 53,
	shayminsky: 900 + 54,
	unfezantf: 900 + 55,
	basculinbluestriped: 900 + 56,
	darmanitanzen: 900 + 57,
	deerlingautumn: 900 + 58,
	deerlingsummer: 900 + 59,
	deerlingwinter: 900 + 60,
	sawsbuckautumn: 900 + 61,
	sawsbucksummer: 900 + 62,
	sawsbuckwinter: 900 + 63,
	frillishf: 900 + 64,
	jellicentf: 900 + 65,
	tornadustherian: 900 + 66,
	thundurustherian: 900 + 67,
	landorustherian: 900 + 68,
	kyuremblack: 900 + 69,
	kyuremwhite: 900 + 70,
	keldeoresolute: 900 + 71,
	meloettapirouette: 900 + 72,
	vivillonarchipelago: 900 + 73,
	vivilloncontinental: 900 + 74,
	vivillonelegant: 900 + 75,
	vivillongarden: 900 + 77,
	vivillonhighplains: 900 + 78,
	vivillonicysnow: 900 + 79,
	vivillonjungle: 900 + 80,
	vivillonmarine: 900 + 81,
	vivillonmodern: 900 + 82,
	vivillonmonsoon: 900 + 83,
	vivillonocean: 900 + 84,
	vivillonpolar: 900 + 86,
	vivillonriver: 900 + 87,
	vivillonsandstorm: 900 + 88,
	vivillonsavanna: 900 + 89,
	vivillonsun: 900 + 90,
	vivillontundra: 900 + 91,
	pyroarf: 900 + 92,
	flabebeblue: 900 + 93,
	flabebeorange: 900 + 94,
	flabebewhite: 900 + 95,
	flabebeyellow: 900 + 96,
	floetteblue: 900 + 97,
	floetteeternal: 900 + 98,
	floetteorange: 900 + 99,
	floettewhite: 900 + 100,
	floetteyellow: 900 + 101,
	florgesblue: 900 + 102,
	florgesorange: 900 + 103,
	florgeswhite: 900 + 104,
	florgesyellow: 900 + 105,
	furfroudandy: 900 + 106,
	furfroudebutante: 900 + 107,
	furfroudiamond: 900 + 108,
	furfrouheart: 900 + 109,
	furfroukabuki: 900 + 110,
	furfroulareine: 900 + 111,
	furfroumatron: 900 + 112,
	furfroupharaoh: 900 + 113,
	furfroustar: 900 + 114,
	meowsticf: 900 + 115,
	aegislashblade: 900 + 116,
	hoopaunbound: 900 + 118,
	rattataalola: 900 + 119,
	raticatealola: 900 + 120,
	raichualola: 900 + 121,
	sandshrewalola: 900 + 122,
	sandslashalola: 900 + 123,
	vulpixalola: 900 + 124,
	ninetalesalola: 900 + 125,
	diglettalola: 900 + 126,
	dugtrioalola: 900 + 127,
	meowthalola: 900 + 128,
	persianalola: 900 + 129,
	geodudealola: 900 + 130,
	graveleralola: 900 + 131,
	golemalola: 900 + 132,
	grimeralola: 900 + 133,
	mukalola: 900 + 134,
	exeggutoralola: 900 + 135,
	marowakalola: 900 + 136,
	greninjaash: 900 + 137,
	zygarde10: 900 + 138,
	zygardecomplete: 900 + 139,
	oricoriopompom: 900 + 140,
	oricoriopau: 900 + 141,
	oricoriosensu: 900 + 142,
	lycanrocmidnight: 900 + 143,
	wishiwashischool: 900 + 144,
	miniormeteor: 900 + 145,
	miniororange: 900 + 146,
	minioryellow: 900 + 147,
	miniorgreen: 900 + 148,
	miniorblue: 900 + 149,
	miniorindigo: 900 + 150,
	miniorviolet: 900 + 151,
	magearnaoriginal: 900 + 152,
	lycanrocdusk: 900 + 160,
	necrozmaduskmane: 900 + 161,
	necrozmadawnwings: 900 + 162,
	necrozmaultra: 900 + 163,
	ponytakonor: 900 + 167,
	rapidashkonor: 900 + 168,
	zigzagoonkonor: 900 + 173,
	linoonekonor: 900 + 174,
	yamaskkonor: 900 + 178,
	cramorantgulping: 900 + 180,
	cramorantgorging: 900 + 181,
	toxtricitylowkey: 900 + 182,
	sinisteaantique: 854,
	polteageistantique: 855,
	alcremierubycream: 900 + 183,
	alcremiematchacream: 900 + 184,
	alcremiemintcream: 900 + 185,
	alcremielemoncream: 900 + 186,
	alcremiesaltedcream: 900 + 187,
	alcremierubyswirl: 900 + 188,
	alcremiecaramelswirl: 900 + 189,
	alcremierainbowswirl: 900 + 190,
	eiscuenoice: 900 + 191,
	zaciancrowned: 900 + 194,
	zamazentacrowned: 900 + 195,
	pikachuworld: 900 + 199,
	articunokonor: 900 + 200,
	zapdoskonor: 900 + 201,
	moltreskonor: 900 + 202,

	gumshoostotem: 735,
	raticatealolatotem: 900 + 120,
	marowakalolatotem: 900 + 136,
	araquanidtotem: 752,
	lurantistotem: 754,
	salazzletotem: 758,
	vikavolttotem: 738,
	togedemarutotem: 777,
	mimikyutotem: 778,
	mimikyubustedtotem: 778,
	ribombeetotem: 743,
	kommoototem: 784,

	venusaurmega: 1116 + 0,
	charizardmegax: 1116 + 1,
	charizardmegay: 1116 + 2,
	blastoisemega: 1116 + 3,
	beedrillmega: 1116 + 4,
	pidgeotmega: 1116 + 5,
	alakazammega: 1116 + 6,
	slowbromega: 1116 + 7,
	gengarmega: 1116 + 8,
	kangaskhanmega: 1116 + 9,
	pinsirmega: 1116 + 10,
	gyaradosmega: 1116 + 11,
	aerodactylmega: 1116 + 12,
	mewtwomegax: 1116 + 13,
	mewtwomegay: 1116 + 14,
	ampharosmega: 1116 + 15,
	steelixmega: 1116 + 16,
	scizormega: 1116 + 17,
	heracrossmega: 1116 + 18,
	houndoommega: 1116 + 19,
	tyranitarmega: 1116 + 20,
	sceptilemega: 1116 + 21,
	blazikenmega: 1116 + 22,
	swampertmega: 1116 + 23,
	gardevoirmega: 1116 + 24,
	sableyemega: 1116 + 25,
	mawilemega: 1116 + 26,
	aggronmega: 1116 + 27,
	medichammega: 1116 + 28,
	manectricmega: 1116 + 29,
	sharpedomega: 1116 + 30,
	cameruptmega: 1116 + 31,
	altariamega: 1116 + 32,
	banettemega: 1116 + 33,
	absolmega: 1116 + 34,
	glaliemega: 1116 + 35,
	salamencemega: 1116 + 36,
	metagrossmega: 1116 + 37,
	latiasmega: 1116 + 38,
	latiosmega: 1116 + 39,
	kyogreprimal: 1116 + 40,
	groudonprimal: 1116 + 41,
	rayquazamega: 1116 + 42,
	lopunnymega: 1116 + 43,
	garchompmega: 1116 + 44,
	lucariomega: 1116 + 45,
	abomasnowmega: 1116 + 46,
	gallademega: 1116 + 47,
	audinomega: 1116 + 48,
	dianciemega: 1116 + 49,
};

const BattlePokemonIconIndexesLeft: {[id: string]: number} = {
	pikachubelle: 1200 + 0,
	pikachupopstar: 1200 + 1,
	clefairy: 1200 + 2,
	clefable: 1200 + 3,
	jigglypuff: 1200 + 4,
	wigglytuff: 1200 + 5,
	dugtrioalola: 1200 + 6,
	poliwhirl: 1200 + 7,
	poliwrath: 1200 + 8,
	mukalola: 1200 + 9,
	kingler: 1200 + 10,
	croconaw: 1200 + 11,
	cleffa: 1200 + 12,
	igglybuff: 1200 + 13,
	politoed: 1200 + 14,
	sneasel: 1200 + 35,
	teddiursa: 1200 + 36,
	roselia: 1200 + 37,
	zangoose: 1200 + 38,
	seviper: 1200 + 39,
	castformsnowy: 1200 + 40,
	absolmega: 1200 + 41,
	absol: 1200 + 42,
	regirock: 1200 + 43,
	torterra: 1200 + 44,
	budew: 1200 + 45,
	roserade: 1200 + 46,
	magmortar: 1200 + 47,
	togekiss: 1200 + 48,
	rotomwash: 1200 + 49,
	shayminsky: 1200 + 50,
	emboar: 1200 + 51,
	pansear: 1200 + 52,
	simisear: 1200 + 53,
	drilbur: 1200 + 54,
	excadrill: 1200 + 55,
	sawk: 1200 + 56,
	lilligant: 1200 + 57,
	garbodor: 1200 + 58,
	solosis: 1200 + 59,
	vanilluxe: 1200 + 60,
	amoonguss: 1200 + 61,
	klink: 1200 + 62,
	klang: 1200 + 63,
	klinklang: 1200 + 64,
	litwick: 1200 + 65,
	golett: 1200 + 66,
	golurk: 1200 + 67,
	kyuremblack: 1200 + 68,
	kyuremwhite: 1200 + 69,
	kyurem: 1200 + 70,
	keldeoresolute: 1200 + 71,
	meloetta: 1200 + 72,
	greninja: 1200 + 73,
	greninjaash: 1200 + 74,
	furfroudebutante: 1200 + 75,
	barbaracle: 1200 + 76,
	clauncher: 1200 + 77,
	clawitzer: 1200 + 78,
	sylveon: 1200 + 79,
	klefki: 1200 + 80,
	zygarde: 1200 + 81,
	zygarde10: 1200 + 82,
	zygardecomplete: 1200 + 83,
	dartrix: 1200 + 84,
	steenee: 1200 + 85,
	tsareena: 1200 + 86,
	comfey: 1200 + 87,
	miniormeteor: 1200 + 88,
	minior: 1200 + 89,
	miniororange: 1200 + 90,
	minioryellow: 1200 + 91,
	miniorgreen: 1200 + 92,
	miniorblue: 1200 + 93,
	miniorviolet: 1200 + 94,
	miniorindigo: 1200 + 95,
	dhelmise: 1200 + 96,
	necrozma: 1200 + 97,
	marshadow: 1200 + 98,
	necrozmaduskmane: 1200 + 101,
	necrozmadawnwings: 1200 + 102,
	necrozmaultra: 1200 + 103,
	stakataka: 1200 + 104,
	blacephalon: 1200 + 105,
};

const BattleAvatarNumbers: {[k: string]: string} = {
	1: 'lucas',
	2: 'dawn',
	3: 'youngster-gen4',
	4: 'lass-gen4dp',
	5: 'camper',
	6: 'picnicker',
	7: 'bugcatcher',
	8: 'aromalady',
	9: 'twins-gen4dp',
	10: 'hiker-gen4',
	11: 'battlegirl-gen4',
	12: 'fisherman-gen4',
	13: 'cyclist-gen4',
	14: 'cyclistf-gen4',
	15: 'blackbelt-gen4dp',
	16: 'artist-gen4',
	17: 'pokemonbreeder-gen4',
	18: 'pokemonbreederf-gen4',
	19: 'cowgirl',
	20: 'jogger',
	21: 'pokefan-gen4',
	22: 'pokefanf-gen4',
	23: 'pokekid',
	24: 'youngcouple-gen4dp',
	25: 'acetrainer-gen4dp',
	26: 'acetrainerf-gen4dp',
	27: 'waitress-gen4',
	28: 'veteran-gen4',
	29: 'ninjaboy',
	30: 'dragontamer',
	31: 'birdkeeper-gen4dp',
	32: 'doubleteam',
	33: 'richboy-gen4',
	34: 'lady-gen4',
	35: 'gentleman-gen4dp',
	36: 'madame-gen4dp',
	37: 'beauty-gen4dp',
	38: 'collector',
	39: 'policeman-gen4',
	40: 'pokemonranger-gen4',
	41: 'pokemonrangerf-gen4',
	42: 'scientist-gen4dp',
	43: 'swimmer-gen4dp',
	44: 'swimmerf-gen4dp',
	45: 'tuber',
	46: 'tuberf',
	47: 'sailor',
	48: 'sisandbro',
	49: 'ruinmaniac',
	50: 'psychic-gen4',
	51: 'psychicf-gen4',
	52: 'gambler',
	53: 'guitarist-gen4',
	54: 'acetrainersnow',
	55: 'acetrainersnowf',
	56: 'skier',
	57: 'skierf-gen4dp',
	58: 'roughneck-gen4',
	59: 'clown',
	60: 'worker-gen4',
	61: 'schoolkid-gen4dp',
	62: 'schoolkidf-gen4',
	63: 'roark',
	64: 'barry',
	65: 'byron',
	66: 'aaron',
	67: 'bertha',
	68: 'flint',
	69: 'lucian',
	70: 'cynthia-gen4',
	71: 'bellepa',
	72: 'rancher',
	73: 'mars',
	74: 'galacticgrunt',
	75: 'gardenia',
	76: 'crasherwake',
	77: 'maylene',
	78: 'fantina',
	79: 'candice',
	80: 'volkner',
	81: 'parasollady-gen4',
	82: 'waiter-gen4dp',
	83: 'interviewers',
	84: 'cameraman',
	85: 'reporter',
	86: 'idol',
	87: 'cyrus',
	88: 'jupiter',
	89: 'saturn',
	90: 'galacticgruntf',
	91: 'argenta',
	92: 'palmer',
	93: 'thorton',
	94: 'buck',
	95: 'darach',
	96: 'marley',
	97: 'mira',
	98: 'cheryl',
	99: 'riley',
	100: 'dahlia',
	101: 'ethan',
	102: 'lyra',
	103: 'twins-gen4',
	104: 'lass-gen4',
	105: 'acetrainer-gen4',
	106: 'acetrainerf-gen4',
	107: 'juggler',
	108: 'sage',
	109: 'li',
	110: 'gentleman-gen4',
	111: 'teacher',
	112: 'beauty',
	113: 'birdkeeper',
	114: 'swimmer-gen4',
	115: 'swimmerf-gen4',
	116: 'kimonogirl',
	117: 'scientist-gen4',
	118: 'acetrainercouple',
	119: 'youngcouple',
	120: 'supernerd',
	121: 'medium',
	122: 'schoolkid-gen4',
	123: 'blackbelt-gen4',
	124: 'pokemaniac',
	125: 'firebreather',
	126: 'burglar',
	127: 'biker-gen4',
	128: 'skierf',
	129: 'boarder',
	130: 'rocketgrunt',
	131: 'rocketgruntf',
	132: 'archer',
	133: 'ariana',
	134: 'proton',
	135: 'petrel',
	136: 'eusine',
	137: 'lucas-gen4pt',
	138: 'dawn-gen4pt',
	139: 'madame-gen4',
	140: 'waiter-gen4',
	141: 'falkner',
	142: 'bugsy',
	143: 'whitney',
	144: 'morty',
	145: 'chuck',
	146: 'jasmine',
	147: 'pryce',
	148: 'clair',
	149: 'will',
	150: 'koga',
	151: 'bruno',
	152: 'karen',
	153: 'lance',
	154: 'brock',
	155: 'misty',
	156: 'ltsurge',
	157: 'erika',
	158: 'janine',
	159: 'sabrina',
	160: 'blaine',
	161: 'blue',
	162: 'red',
	163: 'red',
	164: 'silver',
	165: 'giovanni',
	166: 'unknownf',
	167: 'unknown',
	168: 'unknown',
	169: 'hilbert',
	170: 'hilda',
	171: 'youngster',
	172: 'lass',
	173: 'schoolkid',
	174: 'schoolkidf',
	175: 'smasher',
	176: 'linebacker',
	177: 'waiter',
	178: 'waitress',
	179: 'chili',
	180: 'cilan',
	181: 'cress',
	182: 'nurseryaide',
	183: 'preschoolerf',
	184: 'preschooler',
	185: 'twins',
	186: 'pokemonbreeder',
	187: 'pokemonbreederf',
	188: 'lenora',
	189: 'burgh',
	190: 'elesa',
	191: 'clay',
	192: 'skyla',
	193: 'pokemonranger',
	194: 'pokemonrangerf',
	195: 'worker',
	196: 'backpacker',
	197: 'backpackerf',
	198: 'fisherman',
	199: 'musician',
	200: 'dancer',
	201: 'harlequin',
	202: 'artist',
	203: 'baker',
	204: 'psychic',
	205: 'psychicf',
	206: 'cheren',
	207: 'bianca',
	208: 'plasmagrunt-gen5bw',
	209: 'n',
	210: 'richboy',
	211: 'lady',
	212: 'pilot',
	213: 'workerice',
	214: 'hoopster',
	215: 'scientistf',
	216: 'clerkf',
	217: 'acetrainerf',
	218: 'acetrainer',
	219: 'blackbelt',
	220: 'scientist',
	221: 'striker',
	222: 'brycen',
	223: 'iris',
	224: 'drayden',
	225: 'roughneck',
	226: 'janitor',
	227: 'pokefan',
	228: 'pokefanf',
	229: 'doctor',
	230: 'nurse',
	231: 'hooligans',
	232: 'battlegirl',
	233: 'parasollady',
	234: 'clerk',
	235: 'clerk-boss',
	236: 'backers',
	237: 'backersf',
	238: 'veteran',
	239: 'veteranf',
	240: 'biker',
	241: 'infielder',
	242: 'hiker',
	243: 'madame',
	244: 'gentleman',
	245: 'plasmagruntf-gen5bw',
	246: 'shauntal',
	247: 'marshal',
	248: 'grimsley',
	249: 'caitlin',
	250: 'ghetsis-gen5bw',
	251: 'depotagent',
	252: 'swimmer',
	253: 'swimmerf',
	254: 'policeman',
	255: 'maid',
	256: 'ingo',
	257: 'alder',
	258: 'cyclist',
	259: 'cyclistf',
	260: 'cynthia',
	261: 'emmet',
	262: 'hilbert-dueldisk',
	263: 'hilda-dueldisk',
	264: 'hugh',
	265: 'rosa',
	266: 'nate',
	267: 'colress',
	268: 'beauty-gen5bw2',
	269: 'ghetsis',
	270: 'plasmagrunt',
	271: 'plasmagruntf',
	272: 'iris-gen5bw2',
	273: 'brycenman',
	274: 'shadowtriad',
	275: 'rood',
	276: 'zinzolin',
	277: 'cheren-gen5bw2',
	278: 'marlon',
	279: 'roxie',
	280: 'roxanne',
	281: 'brawly',
	282: 'wattson',
	283: 'flannery',
	284: 'norman',
	285: 'winona',
	286: 'tate',
	287: 'liza',
	288: 'juan',
	289: 'guitarist',
	290: 'steven',
	291: 'wallace',
	292: 'bellelba',
	293: 'benga',
	294: 'ash',
	'#bw2elesa': 'elesa-gen5bw2',
	'#teamrocket': 'teamrocket',
	'#yellow': 'yellow',
	'#zinnia': 'zinnia',
	'#clemont': 'clemont',
	'#wally': 'wally',
	breeder: 'pokemonbreeder',
	breederf: 'pokemonbreederf',

	1001: '#1001',
	1002: '#1002',
	1003: '#1003',
	1005: '#1005',
	1010: '#1010',
};

type StatName = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type NatureName = 'Adamant' | 'Aggressive' | 'Bashful' | 'Bold' | 'Brave' | 'Calm' | 'Careful' | 'Docile' | 'Gentle' |
	'Hardy' | 'Hasty' | 'Impish' | 'Jolly' | 'Lax' | 'Lonely' | 'Mild' | 'Modest' | 'Naive' | 'Naughty' | 'Pacifist' |
	'Quiet' | 'Quirky' | 'Rash' | 'Relaxed' | 'Sassy' | 'Serious' | 'Timid';
type StatNameExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type TypeName = 'Normal' | 'Fighting' | 'Flying' | 'Poison' | 'Ground' | 'Rock' | 'Bug' | 'Ghost' | 'Steel' |
	'Fire' | 'Water' | 'Grass' | 'Electric' | 'Psychic' | 'Ice' | 'Dragon' | 'Dark' | 'Fairy' | '???';
type StatusName = 'par' | 'psn' | 'frz' | 'slp' | 'brn' | 'bld';
type BoostStatName = 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'evasion' | 'accuracy';
type GenderName = 'M' | 'F' | 'N' | 'H';

interface Effect {
	readonly id: ID;
	readonly name: string;
	readonly effectType: 'Item' | 'Move' | 'Ability' | 'Species' | 'PureEffect';
	/**
	 * Do we have data on this item/move/ability/species?
	 * WARNING: Always false if the relevant data files aren't loaded.
	 */
	readonly exists: boolean;
}

class PureEffect implements Effect {
	readonly effectType = 'PureEffect';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;
	constructor(id: ID, name: string) {
		this.id = id;
		this.name = name;
		this.gen = 0;
		this.exists = false;
	}
}

class Item implements Effect {
	// effect
	readonly effectType = 'Item';
	readonly id: ID;
	readonly name: string;
	readonly exists: boolean;

	readonly spritenum: number;
	readonly desc: string;
	readonly shortDesc: string;

	readonly megaStone: string;
	readonly megaEvolves: string;
	readonly zMove: string | true | null;
	readonly zMoveType: TypeName | '';
	readonly zMoveFrom: string;
	readonly zMoveUser: readonly string[] | null;
	readonly onPlate: TypeName;
	readonly onMemory: TypeName;
	readonly onDrive: TypeName;
	readonly fling: any;
	readonly naturalGift: any;
	readonly isPokeball: boolean;
	readonly itemUser?: readonly string[];

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.spritenum = data.spritenum || 0;
		this.desc = data.desc || data.shortDesc || '';
		this.shortDesc = data.shortDesc || this.desc;

		this.megaStone = data.megaStone || '';
		this.megaEvolves = data.megaEvolves || '';
		this.zMove = data.zMove || null;
		this.zMoveType = data.zMoveType || '';
		this.zMoveFrom = data.zMoveFrom || '';
		this.zMoveUser = data.zMoveUser || null;
		this.onPlate = data.onPlate || '';
		this.onMemory = data.onMemory || '';
		this.onDrive = data.onDrive || '';
		this.fling = data.fling || null;
		this.naturalGift = data.naturalGift || null;
		this.isPokeball = !!data.isPokeball;
		this.itemUser = data.itemUser;
	}
}

interface MoveFlags {
	/** Ignores a target's substitute. */
	authentic?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability. */
	bite?: 1 | 0;
	/** Has no effect on Pokemon with the Bulletproof Ability. */
	bullet?: 1 | 0;
	/** The user is unable to make a move between turns. */
	charge?: 1 | 0;
	/** Makes contact. */
	contact?: 1 | 0;
	/** When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move. */
	dance?: 1 | 0;
	/** Thaws the user if executed successfully while the user is frozen. */
	defrost?: 1 | 0;
	/** Can target a Pokemon positioned anywhere in a Triple Battle. */
	distance?: 1 | 0;
	/** Prevented from being executed or selected during Gravity's effect. */
	gravity?: 1 | 0;
	/** Prevented from being executed or selected during Heal Block's effect. */
	heal?: 1 | 0;
	/** Can be copied by Mirror Move. */
	mirror?: 1 | 0;
	/** Unknown effect. */
	mystery?: 1 | 0;
	/** Prevented from being executed or selected in a Sky Battle. */
	nonsky?: 1 | 0;
	/** Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles. */
	powder?: 1 | 0;
	/** Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield. */
	protect?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability. */
	pulse?: 1 | 0;
	/** Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability. */
	punch?: 1 | 0;
	/** If this move is successful, the user must recharge on the following turn and cannot make a move. */
	recharge?: 1 | 0;
	/** Bounced back to the original user by Magic Coat or the Magic Bounce Ability. */
	reflectable?: 1 | 0;
	/** Can be stolen from the original user and instead used by another Pokemon using Snatch. */
	snatch?: 1 | 0;
	/** Has no effect on Pokemon with the Soundproof Ability. */
	sound?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Unbending Blade Ability. */
	sword?: 1 | 0;
}

type MoveTarget = 'normal' | 'any' | 'adjacentAlly' | 'adjacentFoe' | 'adjacentAllyOrSelf' | // single-target
	'self' | 'randomNormal' | // single-target, automatic
	'allAdjacent' | 'allAdjacentFoes' | // spread
	'allySide' | 'foeSide' | 'all'; // side and field

class Move implements Effect {
	// effect
	readonly effectType = 'Move';
	readonly id: ID;
	readonly name: string;
	readonly exists: boolean;

	readonly basePower: number;
	readonly accuracy: number | true;
	readonly pp: number;
	readonly type: TypeName;
	readonly category: 'Physical' | 'Special' | 'Status';
	readonly priority: number;
	readonly target: MoveTarget;
	readonly flags: Readonly<MoveFlags>;
	readonly critRatio: number;

	readonly desc: string;
	readonly shortDesc: string;
	readonly isZ: ID;
	readonly zMove?: {
		basePower?: number,
		effect?: string,
		boost?: {[stat in StatName]?: number},
	};
	readonly ohko: true | 'Ice' | null;
	readonly recoil: number[] | null;
	readonly heal: number[] | null;
	readonly multihit: number[] | number | null;
	readonly hasCustomRecoil: boolean;
	readonly noPPBoosts: boolean;
	readonly secondaries: ReadonlyArray<any> | null;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.basePower = data.basePower || 0;
		this.accuracy = data.accuracy || 0;
		this.pp = data.pp || 1;
		this.type = data.type || '???';
		this.category = data.category || 'Physical';
		this.priority = data.priority || 0;
		this.target = data.target || 'normal';
		this.flags = data.flags || {};
		this.critRatio = data.critRatio === 0 ? 0 : (data.critRatio || 1);

		// TODO: move to text.js
		this.desc = data.desc;
		this.shortDesc = data.shortDesc;
		this.isZ = data.isZ || '';
		this.zMove = data.zMove || {};
		this.ohko = data.ohko || null;
		this.recoil = data.recoil || null;
		this.heal = data.heal || null;
		this.multihit = data.multihit || null;
		this.hasCustomRecoil = data.hasCustomRecoil || false;
		this.noPPBoosts = data.noPPBoosts || false;
		this.secondaries = data.secondaries || (data.secondary ? [data.secondary] : null);

		if (this.category !== 'Status' && !this.isZ) {
			let basePower = this.basePower;
			this.zMove = {};
			if (Array.isArray(this.multihit)) basePower *= 3;
			if (!basePower) {
				this.zMove.basePower = 100;
			} else if (basePower >= 140) {
				this.zMove.basePower = 200;
			} else if (basePower >= 130) {
				this.zMove.basePower = 195;
			} else if (basePower >= 120) {
				this.zMove.basePower = 190;
			} else if (basePower >= 110) {
				this.zMove.basePower = 185;
			} else if (basePower >= 100) {
				this.zMove.basePower = 180;
			} else if (basePower >= 90) {
				this.zMove.basePower = 175;
			} else if (basePower >= 80) {
				this.zMove.basePower = 160;
			} else if (basePower >= 70) {
				this.zMove.basePower = 140;
			} else if (basePower >= 60) {
				this.zMove.basePower = 120;
			} else {
				this.zMove.basePower = 100;
			}
		}
	}
}

class Ability implements Effect {
	// effect
	readonly effectType = 'Ability';
	readonly id: ID;
	readonly name: string;
	readonly exists: boolean;

	readonly shortDesc: string;
	readonly desc: string;

	readonly rating: number;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.shortDesc = data.shortDesc || data.desc || '';
		this.desc = data.desc || data.shortDesc || '';
		this.rating = data.rating || 1;
	}
}

class Species implements Effect {
	// effect
	readonly effectType = 'Species';
	readonly id: ID;
	readonly name: string;
	readonly exists: boolean;

	// name
	readonly baseSpecies: string;
	readonly forme: string;
	readonly formeid: string;
	readonly spriteid: string;
	readonly baseForme: string;

	// basic data
	readonly num: number;
	readonly types: ReadonlyArray<TypeName>;
	readonly abilities: Readonly<{
		0: string, 1?: string, H?: string, S?: string,
	}>;
	readonly baseStats: Readonly<{
		hp: number, atk: number, def: number, spa: number, spd: number, spe: number,
	}>;
	readonly weightkg: number;

	// flavor data
	readonly heightm: number;
	readonly gender: GenderName;
	readonly color: string;
	readonly genderRatio: Readonly<{M: number, F: number}> | null;
	readonly eggGroups: ReadonlyArray<string>;

	// format data
	readonly otherFormes: ReadonlyArray<string> | null;
	readonly cosmeticFormes: ReadonlyArray<string> | null;
	readonly evos: ReadonlyArray<string> | null;
	readonly prevo: string;
	readonly evoType: 'trade' | 'useItem' | 'levelMove' | 'levelExtra' | 'levelFriendship' | 'levelHold' | 'other' | '';
	readonly evoLevel: number;
	readonly evoMove: string;
	readonly evoItem: string;
	readonly evoCondition: string;
	readonly requiredItem: string;
	readonly tier: string;
	readonly isTotem: boolean;
	readonly isMega: boolean;
	readonly isPrimal: boolean;
	readonly battleOnly: string | string[] | undefined;
	readonly changesFrom: string | undefined;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.baseSpecies = data.baseSpecies || name;
		this.forme = data.forme || '';
		const baseId = toID(this.baseSpecies);
		this.formeid = (baseId === this.id ? '' : '-' + toID(this.forme));
		this.spriteid = baseId + this.formeid;
		if (this.spriteid.slice(-5) === 'totem') this.spriteid = this.spriteid.slice(0, -5);
		if (this.spriteid.slice(-1) === '-') this.spriteid = this.spriteid.slice(0, -1);
		this.baseForme = data.baseForme || '';

		this.num = data.num || 0;
		this.types = data.types || ['???'];
		this.abilities = data.abilities || {0: "No Ability"};
		this.baseStats = data.baseStats || {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0};
		this.weightkg = data.weightkg || 0;

		this.heightm = data.heightm || 0;
		this.gender = data.gender || '';
		this.color = data.color || '';
		this.genderRatio = data.genderRatio || null;
		this.eggGroups = data.eggGroups || [];

		this.otherFormes = data.otherFormes || null;
		this.cosmeticFormes = data.cosmeticFormes || null;
		this.evos = data.evos || null;
		this.prevo = data.prevo || '';
		this.evoType = data.evoType || '';
		this.evoLevel = data.evoLevel || 0;
		this.evoMove = data.evoMove || '';
		this.evoItem = data.evoItem || '';
		this.evoCondition = data.evoCondition || '';
		this.requiredItem = data.requiredItem || '';
		this.tier = data.tier || '';

		this.isTotem = false;
		this.isMega = false;
		this.isPrimal = false;
		this.battleOnly = data.battleOnly || undefined;
		this.changesFrom = data.changesFrom || undefined;
	}
}

if (typeof require === 'function') {
	// in Node
	(global as any).BattleBaseSpeciesChart = BattleBaseSpeciesChart;
	(global as any).BattleNatures = BattleNatures;
	(global as any).PureEffect = PureEffect;
	(global as any).Species = Species;
	(global as any).Ability = Ability;
	(global as any).Item = Item;
	(global as any).Move = Move;
}
