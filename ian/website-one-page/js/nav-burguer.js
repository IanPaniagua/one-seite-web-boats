const hamMenu = document.querySelector('.ham-menu')
const headerListElement = document.querySelector('.header__list')

hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active')
	headerListElement.classList.toggle('active')
})

const headerListItems = headerListElement.querySelectorAll('li')

headerListItems.forEach(li => {

	li.addEventListener('click', () => {
		hamMenu.classList.remove('active')
		headerListElement.classList.remove('active')
	})
})


const catalogSelectTypeElemet = document.querySelector('.catalog__type-boat');
const catalogListElement = document.querySelector('.catalog__list');
// const catalogItemLink = document.querySelector('.option__link');

catalogSelectTypeElemet.addEventListener('click', () => {
    console.log("click");
    // catalogListItem.classList.toggle('active');
    catalogListElement.classList.toggle('active');
});

const catalogListItems = catalogListElement.querySelectorAll('li');

catalogListItems.forEach(li => {
    li.addEventListener('click', () => {
        catalogListElement.classList.remove('active');
    })
})