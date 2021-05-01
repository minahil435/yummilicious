const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const searchButton = document.querySelector('#submit')
const input = document.querySelector('#input')
const headingDivForRecipes = document.querySelector("#headingDiv2")
const SavedItemsButton = document.querySelector('#SavedItems')
searchButton.addEventListener("click", ButtonClicked)
SavedItemsButton.addEventListener("click", SavedItemsButtonClicked)
let dishesArray = []

function ButtonClicked() {
    const hidePictures = document.querySelectorAll('.wallpaper')
    for (i = 4; i < hidePictures.length; i++) {
        hidePictures[i].style.height = "0px"
    }
    const array = document.querySelectorAll('.recipeGrid')
    const recipeGrid = array[1]
    recipeGrid.innerHTML = ''

    const search = document.querySelector("#background")
    search.style.top = "120px"

    if (input.value === null || input.value === ' ' || input.value === '') { }
    else {
        headingDivForRecipes.innerText = "Recipes for " + input.value
        displayRecipes(input.value)
    }
}

function SavedItemsButtonClicked() {
    window.location.href = "SavedItemsTab.html"
}

function displayRecipes(name) {
    fetch(url + name).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        let i = 0
        for (const each of data.meals) {
            dishesArray.push(each)
            displayData(i)
            i = i + 1;
        }
        window.localStorage.setItem('items', JSON.stringify(dishesArray));
    })
}

function displayData(index) {
    const array = document.querySelectorAll('.recipeGrid')
    const recipeGrid = array[1]
    const parent = document.createElement('div');
    parent.className = 'dish';
    parent.id = index

    const image = document.createElement('img');
    image.className = 'dishImage'
    image.src = dishesArray[index].strMealThumb

    const title = document.createElement('h3');
    title.innerText = dishesArray[index].strMeal
    title.className = "whitefontcolor"

    parent.appendChild(image)
    parent.appendChild(title)
    recipeGrid.appendChild(parent)

    parent.addEventListener('click', function (event) {
        dishClicked(event.currentTarget.id)
    });
}

function dishClicked(index) {
    window.localStorage.setItem('recipe', JSON.stringify(dishesArray[index]));
    window.location.href = "recipe.html"
}