document.addEventListener('DOMContentLoaded', () => {
	fetchAllDogs()
	formFunction()
})

function fetchAllDogs() {
	fetch('http://localhost:3000/dogs')
	.then(res => res.json())
	.then(json => {
		console.log(json)
		json.forEach(renderEachDog)
	})
}

function renderEachDog(dog){
	let trDog = document.createElement('tr')
	let tdName = document.createElement('td')
	let tdBreed = document.createElement('td')
	let tdSex = document.createElement('td')
	let tdBtnContainer = document.createElement('td')
	let btnEdit = document.createElement('button')

	tdName.textContent = dog.name
	tdBreed.textContent = dog.breed
	tdSex.textContent = dog.sex
	btnEdit.textContent = 'Edit'
	btnEdit.type = 'button'

	tdBtnContainer.append(btnEdit)
	trDog.append(tdName, tdBreed, tdSex, tdBtnContainer)
	document.querySelector('table').appendChild(trDog)

	btnEdit.addEventListener('click', populateForm)
}

//Function to callback in btnEdit event listener should locate data for dog & change text input values on form

function populateForm(dog){
	//console.log(dog)
	let form = document.querySelector('#dog-form')
	let formName = form.name 
	let formBreed = form.breed
	let formSex = form.sex

	formName.value = dog.path[2].childNodes[0].textContent
	formBreed.value = dog.path[2].childNodes[1].textContent
	formSex.value = dog.path[2].childNodes[2].textContent
}

//FOUR
function formFunction () {
//	console.log(document.querySelector('#dog-form'))
	document.querySelector('#dog-form').addEventListener('submit', (e) => {
 	e.preventDefault
 	console.log('form submitted')
	})
} 