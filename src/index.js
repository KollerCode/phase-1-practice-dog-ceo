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
			dogBreed.innerHTML += `<li>${breed}</li>`
		})
	})
})

function handleColorChange() {
	addEventListener('click',)
}