characters = [
{
	Name: "Lancet-2",
	Qualification: "Starter",
	Position: "Ranged",
	Class: "Medic",
	Tags: ["Healing", "Robot"],
	Rank: 1
},{
	Name: "Castle-3",
	Position: "Melee",
	Qualification: "Starter",
	Class: "Guard",
	Tags: ["Support", "Robot"],
	Rank: 1
},{
	Name: "12F",
	Qualification: "Starter",
	Position: "Ranged",
	Class: "Caster",
	Tags: ["Starter"],
	Rank: 2
},{
	Name: "Noir Carne",
	Qualification: "Starter",
	Position: "Melee",
	Class: "Defender",
	Tags: ["Starter"],
	Rank: 2
},{
	Name: "Durin",
	Qualification: "Starter",
	Position: "Ranged",
	Class: "Caster",
	Tags: ["Ranged", "Starter"],
	Rank: 2
},{
	Name: "Yato",
	Qualification: "Starter",
	Position: "Melee",
	Class: "Vanguard",
	Tags: ["Melee", "Starter"],
	Rank: 2
},{
	Name: "Rangers",
	Qualification: "Starter",
	Position: "Ranged",
	Class: "Sniper",
	Tags: ["Starter"],
	Rank: 2
},{
	Name: "Adnachiel",
	Qualification: "Starter",
	Position: "Ranged",
	Class: "Sniper",
	Tags: ["Ranged", "DPS"],
	Rank: 3
},{
	Name: "Estelle",
	Qualification: "Senior Operator",
	Position: "Melee",
	Class: "Guard",
	Tags: ["AOE", "Survival"],
	Rank: 4
},{
	Name: "Indra",
	Qualification: "Top Operator",
	Position: "Melee",
	Class: "Guard",
	Tags: ["Senior", "DPS", "Survival"],
	Rank: 5
},{
	Name: "Vulcan",
	Qualification: "Top Operator",
	Position: "Melee",
	Class: "Defender",
	Tags: ["Senior", "Survival", "Defense", "DPS"],
	Rank: 5
}]

let final = []
let namesFinal = []

let qualToggle = false
let inputQual = ""

let posToggle = false
let inputPosition = ""

let classToggle = false
let inputClass = []

let tagToggle = false
let inputTags = []

function filterQualification(){
	for(let key in characters){
		if(characters.hasOwnProperty(key)){
			let getQual = characters[key].Qualification

			for(let i = 0; i < final.length; i++){
				for(let j = 0; j < getQual.length; j++){

				}
			}
		}
	}
}

function checkQualification(){
	for(let key in characters){
		if(characters.hasOwnProperty(key)){
			let getQual = characters[key].Qualification

			if(getQual == inputQual && !final.includes(characters[key])){
				final.push(characters[key].Name)
			}
		}
	}
}

function checkPosition(){
	for(let key in characters){
		if(characters.hasOwnProperty(key)){
			let getPosition = characters[key].Position

			if(getPosition == inputPosition && !final.includes(characters[key])){
				final.push(characters[key].Name)
			}
		}
	}
}

function checkClass(){
	for(let key in characters){
		if(characters.hasOwnProperty(key)){
			let getClass = characters[key].Class

			for(let i = 0; i < inputClass.length; i++){
				if(inputClass[i] == getClass && !final.includes(characters[key])){
					final.push(characters[key].Name)
				}

			}

		}

	}
}

function checkTags(){
	for(let key in characters){
		if(characters.hasOwnProperty(key)){
			let getTags = characters[key].Tags
			
			for(let i = 0; i < inputTags.length; i++){
					for(let j = 0; j < getTags.length; j++){
						if(getTags[j] == inputTags[i] && !final.includes(characters[key])){
							final.push(characters[key].Name)
						}
					}
			}
		}

	}	
}

function alertFunction(){

	//Checks user input against objects
	//Places matches into an array
	checkQualification()
	checkPosition()
	checkClass()
	checkTags()
	//filterQualification()
	//Gets rid of duplicate entries
	let unique = new Set(final);
	final = [...unique]
	let finalNames = final.join(", ")
	alert(finalNames)
	form = []

}

function qualActive(id){
	if(qualToggle == true){
		inputQual = ""
		qualToggle = false
	}else{
		inputQual = id
		qualToggle = true
	}
}

function posActive(id){
	if(posToggle == true){
		inputQual = ""
		posToggle = false
	}else{
		inputPosition = id
		posToggle = true
	}
}

function classActive(id){
	if(classToggle == true){
		inputClass = []
		classToggle = false
	}else{
		inputClass.push(id)
		classToggle = true
	} 
}

function tagActive(id){
	if(tagToggle == true){
		inputTags = []
		tagToggle = false
	}else{
		inputTags.push(id)
		tagActive = true	
	}
	
}