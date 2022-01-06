document.addEventListener('DOMContentLoaded', () => {
	let imgContainer = document.getElementById("dog-image-container")

	fetch('https://dog.ceo/api/breeds/image/random/4')
	.then(response => response.json())
	.then(jsonObject => {
		let imagesArray = jsonObject.message
	    imagesArray.forEach(url => imgContainer.innerHTML += makeImageURL(url))
	})
})

function makeImageURL(url) {
	return `<img src ="${url}"/>` 
}

document.addEventListener('DOMContentLoaded', () => {
	let dogBreed = document.getElementById("dog-breeds")

    fetch('https://dog.ceo/api/breeds/list/all')
	.then(res => res.json())
	.then(response => {
		let dogArray = Object.keys(response.message)
		dogArray.forEach((breed) => {
			dogBreed.innerHTML += `<li class="li-breed">${breed}</li>`
		})
		dogBreed.addEventListener('click', function(event){
			if (event.target.tagName === "LI"){
				event.target.style.color = 'pink'
			}
			else {
				
			}
		})
	})

	let dogSelect = document.getElementById("breed-dropdown")
	dogSelect.addEventListener('change', (event) => {
		fetch('https://dog.ceo/api/breeds/list/all')
		.then(res => res.json())
		.then(res => {
		let dogArray = Object.keys(res.message)
		let filteredArray = dogArray.filter(breed => {
			return breed.startsWith(event.target.value)
		})

		dogBreed.innerHTML = ''
			
		filteredArray.forEach((breed) => {
			dogBreed.innerHTML += `<li class="li-breed">${breed}</li>`
		})

	})
	})
})