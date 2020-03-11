characters = [
{
	Name: "Lancet-2",
	Position: "Ranged",
	Class: "Medic",
	Tags: ["Healing", "Robot"],
	Rank: 1
},{
	Name: "Castle-3",
	Position: "Melee",
	Class: "Guard",
	Tags: ["Support", "Robot"],
	Rank: 1
},{
	Name: "12F",
	Position: "Ranged",
	Class: "Caster",
	Tags: ["Starter"],
	Rank: 2
},{
	Name: "Noir Carne",
	Position: "Melee",
	Class: "Defender",
	Tags: ["Starter"],
	Rank: 2
},{
	Name: "Durin",
	Position: "Ranged",
	Class: "Caster",
	Tags: ["Ranged", "Starter"],
	Rank: 2
},{
	Name: "Yato",
	Position: "Melee",
	Class: "Vanguard",
	Tags: ["Melee", "Starter"],
	Rank: 2
},{
	Name: "Rangers",
	Position: "Ranged",
	Class: "Sniper",
	Tags: ["Starter"],
	Rank: 2
},{
	Name: "Adnachiel",
	Position: "Ranged",
	Class: "Sniper",
	Tags: ["Ranged", "DPS"],
	Rank: 3
},{
	Name: "Estelle",
	Position: "Melee",
	Class: "Guard",
	Tags: ["AOE", "Survival"],
	Rank: 4
},{
	Name: "Indra",
	Position: "Melee",
	Class: "Guard",
	Tags: ["Senior", "DPS", "Survival"],
	Rank: 5
},{
	Name: "Vulcan",
	Position: "Melee",
	Class: "Defender",
	Tags: ["Senior", "Survival", "Defense", "DPS"],
	Rank: 5
}]

let final = []
let namesFinal = []
let inputPosition = "Melee"
let inputClass = "Vanguard"
let inputTags = ["Starter", "Robot"]

for(let key in characters){
	if(characters.hasOwnProperty(key)){
		let getPosition = characters[key].Position

		if(getPosition == inputPosition){
			final.push(characters[key])
		}
	}
}

for(let key in characters){
	if(characters.hasOwnProperty(key)){
		let getClass = characters[key].Class

		if(getClass == inputClass && !final.includes(characters[key])){
			final.push(characters[key])
		}

	}

}

for(let key in characters){
	if(characters.hasOwnProperty(key)){
		let getTags = characters[key].Tags
		for(let i = 0; i < inputTags.length; i++){
				for(let j = 0; j < getTags.length; j++){
					if(getTags[j] == inputTags[i] && !final.includes(characters[key])){
						final.push(characters[key])
					}
				}
		}
	}

}

for(let i = 0; i < final.length; i++){
	namesFinal.push(final[i].Name)
}



function alertFunction(){
	alert(namesFinal)
}

function qualActive(id){
	id = "qualActive"
	alert(id)
}
function posActive(id){
	inputPosition = id
	alert(inputPosition)
}

function classActive(id){
	inputClass = id 
	alert(id)
}

function tagActive(id){
	inputTag.push(id)
	alert(id)
}



