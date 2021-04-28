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

    const image = document.createElement('img');
    image.className = 'dishImage'
    image.src = dishesArray[index].strMealThumb
    image.id = index

    const title = document.createElement('h3');
    title.innerText = dishesArray[index].strMeal

    const button = document.createElement('button');
    button.innerText = "remove"
    button.id =  dishesArray[index].idMeal

    button.addEventListener('click', function (event){
        deleteItem(event.currentTarget.id)

      });

    parent.appendChild(image)
    parent.appendChild(title)
    parent.appendChild(button)

    recipeGrid.appendChild(parent)

    image.addEventListener('click', function (event){
        dishClicked(event.currentTarget.id)

      });
}
function dishClicked(index){
    console.log(index)
    window.localStorage.setItem('recipe', JSON.stringify(dishesArray[index]));
    window.location.href = "recipe.html"
}


function deleteItem(num){
    
    let element =  dishesArray.filter(function (e) {
        return e.idMeal === num
    });
    
    console.log(element)
    console.log(dishesArray)
    console.log(dishesArray.indexOf(element[0]))

    let index = dishesArray.indexOf(element[0])
 
    dishesArray.splice(index, 1);
    console.log(dishesArray)
    window.localStorage.setItem('Saveditems', JSON.stringify(dishesArray));
    location.reload();
  
}
