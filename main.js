const searchButton = document.querySelector('#submit')
const input = document.querySelector('#input')
searchButton.addEventListener("click", ButtonClicked)

function ButtonClicked(){
    if (input.value === null || input.value === ' '|| input.value === ''){}
    else{
    window.localStorage.setItem('itemSearched', input.value);
    window.location.href = "dishes.html"}
 }

let dishesArray = []
let array  = JSON.parse(window.localStorage.getItem('Saveditems'));
if (array !== null){
    dishesArray =  array
    for (const each in array) {
        displayData(each)
    }
}
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
