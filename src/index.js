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
	const dogBreed = document.getElementById("dog-breeds")
	.createElement('li').appendChild('ul')
    fetch('https://dog.ceo/api/breeds/list/all')
	.then(res => res.json())
	.then(dogBreedObject => {
		let dogArray = dogBreedObject.message
		dogArray.forEach(dog => dogBreed.innerHTML += ap)

	})
}
