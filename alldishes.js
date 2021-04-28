const itemSearched = window.localStorage.getItem('itemSearched');
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

 let dishesArray = []
// let array  = JSON.parse(window.localStorage.getItem('items'));
// if (array !== null){
//     dishesArray =  array
//     for (const each in array) {
//         displayData(each)
//     }
// }

let completeURL = url + itemSearched
fetch(completeURL).then(function (response) {
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

function displayData(index) {

    const recipeGrid = document.querySelector('#recipeGrid')
    const parent = document.createElement('div');
    parent.className = 'dish';
    parent.id = index

    const image = document.createElement('img');
    image.className = 'dishImage'
    image.src = dishesArray[index].strMealThumb

    const title = document.createElement('h3');
    title.innerText = dishesArray[index].strMeal

    parent.appendChild(image)
    parent.appendChild(title)
    recipeGrid.appendChild(parent)

    parent.addEventListener('click', function (event){
        dishClicked(event.currentTarget.id)

      });
}

function dishClicked(index){
    window.localStorage.setItem('recipe', JSON.stringify(dishesArray[index]));
    window.location.href = "recipe.html"
}