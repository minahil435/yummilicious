let recipe = JSON.parse(window.localStorage.getItem('recipe'));


const name1 = document.querySelector('#name')
name1.innerText= recipe.strMeal
const recipeImage = document.querySelector('#recipeImage')
recipeImage.src = recipe.strMealThumb
const instruction = document.querySelector('#instruction')
instruction.innerText = recipe.strInstructions
const website = document.querySelector('a')
website.href = recipe.strYoutube

const loveButton = document.querySelector('#loveButton')
loveButton.addEventListener("click", ButtonClicked)

function ButtonClicked(){
let array = []    
array  = JSON.parse(window.localStorage.getItem('Saveditems'));
console.log(array)
if (array !== null){
array.push(recipe)}
else{
     array = [recipe]
}
window.localStorage.setItem('Saveditems', JSON.stringify(array));

}

const strIngredient1 = document.querySelector('#strIngredient1')
if (recipe.strIngredient1 !== "") {
    strIngredient1.innerText = recipe.strIngredient1
}
else {
    strIngredient1.className = "hide"
}
const strIngredient2 = document.querySelector('#strIngredient2')
if (recipe.strIngredient2 !== "") {
    strIngredient2.innerText = recipe.strIngredient2
}
else {
    strIngredient2.className = "hide"
}
const strIngredient3 = document.querySelector('#strIngredient3')
if (recipe.strIngredient3 !== "") {
    strIngredient3.innerText = recipe.strIngredient3
}
else {
    strIngredient3.className = "hide"
}
const strIngredient4 = document.querySelector('#strIngredient4')
if (recipe.strIngredient4 !== "") {
    strIngredient4.innerText = recipe.strIngredient4
}
else {
    strIngredient4.className = "hide"
}
const strIngredient5 = document.querySelector('#strIngredient5')
if (recipe.strIngredient5 !== "") {
    strIngredient5.innerText = recipe.strIngredient5
}
else {
    strIngredient5.className = "hide"
}
const strIngredient6 = document.querySelector('#strIngredient6')
if (recipe.strIngredient6 !== "") {
    strIngredient6.innerText = recipe.strIngredient6
}
else {
    strIngredient6.className = "hide"
}
const strIngredient7 = document.querySelector('#strIngredient7')
if (recipe.strIngredient6 !== "") {
    strIngredient7.innerText = recipe.strIngredient7
}
else {
    strIngredient7.className = "hide"
}
const strIngredient8 = document.querySelector('#strIngredient8')
if (recipe.strIngredient8 !== "") {
    strIngredient8.innerText = recipe.strIngredient8
}
else {
    strIngredient8.className = "hide"
}
const strIngredient9 = document.querySelector('#strIngredient9')
if (recipe.strIngredient9 !== "") {
    strIngredient9.innerText = recipe.strIngredient9
}
else {
    strIngredient9.className = "hide"
}
const strIngredient10 = document.querySelector('#strIngredient10')
if (recipe.strIngredient10 !== "") {
    strIngredient10.innerText = recipe.strIngredient10
}
else {
    strIngredient10.className = "hide"
}
const strIngredient11 = document.querySelector('#strIngredient11')
if (recipe.strIngredient11 !== "") {
    strIngredient11.innerText = recipe.strIngredient11
}
else {
    strIngredient11.className = "hide"
}
const strIngredient12 = document.querySelector('#strIngredient12')
if (recipe.strIngredient12 !== "") {
    strIngredient12.innerText = recipe.strIngredient12
}
else {
    strIngredient12.className = "hide"
}
const strIngredient13 = document.querySelector('#strIngredient13')
if (recipe.strIngredient13 !== "") {
    strIngredient13.innerText = recipe.strIngredient13
}
else {
    strIngredient13.className = "hide"
}
const strIngredient14 = document.querySelector('#strIngredient14')
if (recipe.strIngredient14 !== "") {
    strIngredient14.innerText = recipe.strIngredient14
}
else {
    strIngredient14.className = "hide"
}
const strIngredient15 = document.querySelector('#strIngredient15')
if (recipe.strIngredient15 !== "") {
    strIngredient15.innerText = recipe.strIngredient15
}
else {
    strIngredient15.className = "hide"
}
const strIngredient16 = document.querySelector('#strIngredient16')
if (recipe.strIngredient16 !== "") {
    strIngredient16.innerText = recipe.strIngredient16
}
else {
    strIngredient16.className = "hide"
}
const strIngredient17 = document.querySelector('#strIngredient17')
if (recipe.strIngredient17 !== "") {
    strIngredient17.innerText = recipe.strIngredient17
}
else {
    strIngredient17.className = "hide"
}

const strIngredient18 = document.querySelector('#strIngredient18')
if (recipe.strIngredient18 !== "") {
    strIngredient18.innerText = recipe.strIngredient18
}
else {
    strIngredient18.className = "hide"
}

const strIngredient19 = document.querySelector('#strIngredient19')
if (recipe.strIngredient19 !== "") {
    strIngredient19.innerText = recipe.strIngredient19
}
else {
    strIngredient19.className = "hide"
}
const strIngredient20 = document.querySelector('#strIngredient20')
if (recipe.strIngredient20 !== "") {
    strIngredient20.innerText = recipe.strIngredient20
}
else {
    strIngredient20.className = "hide"
}

//quantity
const strMeasure1 = document.querySelector('#strMeasure1')
if (recipe.strMeasure1 !== "") {
    strMeasure1.innerText = recipe.strMeasure1
}
else {
    strMeasure1.className = "hide"
}
const strMeasure2 = document.querySelector('#strMeasure2')
if (recipe.strMeasure2 !== "") {
    strMeasure2.innerText = recipe.strMeasure2
}
else {
    strMeasure2.className = "hide"
}
const strMeasure3 = document.querySelector('#strMeasure3')
if (recipe.strMeasure3 !== "") {
    strMeasure3.innerText = recipe.strMeasure3
}
else {
    strMeasure3.className = "hide"
}
const strMeasure4 = document.querySelector('#strMeasure4')
if (recipe.strMeasure4 !== "") {
    strMeasure4.innerText = recipe.strMeasure4
}
else {
    strMeasure4.className = "hide"
}
const strMeasure5 = document.querySelector('#strMeasure5')
if (recipe.strMeasure5 !== "") {
    strMeasure5.innerText = recipe.strMeasure5
}
else {
    strMeasure5.className = "hide"
}
const strMeasure6 = document.querySelector('#strMeasure6')
if (recipe.strMeasure6 !== "") {
    strMeasure6.innerText = recipe.strMeasure6
}
else {
    strMeasure6.className = "hide"
}
const strMeasure7 = document.querySelector('#strMeasure7')
if (recipe.strMeasure7 !== "") {
    strMeasure7.innerText = recipe.strMeasure7
}
else {
    strMeasure7.className = "hide"
}
const strMeasure8 = document.querySelector('#strMeasure8')
if (recipe.strMeasure8 !== "") {
    strMeasure8.innerText = recipe.strMeasure8
}
else {
    strMeasure8.className = "hide"
}
const strMeasure9 = document.querySelector('#strMeasure9')
if (recipe.strMeasure9 !== "") {
    strMeasure9.innerText = recipe.strMeasure9
}
else {
    strMeasure9.className = "hide"
}
const strMeasure10 = document.querySelector('#strMeasure10')
if (recipe.strMeasure10 !== "") {
    strMeasure10.innerText = recipe.strMeasure10
}
else {
    strMeasure10.className = "hide"
}
const strMeasure11 = document.querySelector('#strMeasure11')
if (recipe.strMeasure11 !== "") {
    strMeasure11.innerText = recipe.strMeasure11
}
else {
    strMeasure11.className = "hide"
}
const strMeasure12 = document.querySelector('#strMeasure12')
if (recipe.strMeasure12 !== "") {
    strMeasure12.innerText = recipe.strMeasure12
}
else {
    strMeasure12.className = "hide"
}
const strMeasure13 = document.querySelector('#strMeasure13')
if (recipe.strMeasure13 !== "") {
    strMeasure13.innerText = recipe.strMeasure13
}
else {
    strIngredient13.className = "hide"
}
const strMeasure14 = document.querySelector('#strMeasure14')
if (recipe.strMeasure14 !== "") {
    strMeasure14.innerText = recipe.strMeasure14
}
else {
    strMeasure14.className = "hide"
}
const strMeasure15 = document.querySelector('#strMeasure15')
if (recipe.strMeasure15 !== "") {
    strMeasure15.innerText = recipe.strMeasure15
}
else {
    strMeasure15.className = "hide"
}
const strMeasure16 = document.querySelector('#strMeasure16')
if (recipe.strMeasure16 !== "") {
    strMeasure16.innerText = recipe.strMeasure16
}
else {
    strMeasure16.className = "hide"
}
const strMeasure17 = document.querySelector('#strMeasure17')
if (recipe.strMeasure17 !== "") {
    strMeasure17.innerText = recipe.strMeasure17
}
else {
    strMeasure17.className = "hide"
}

const strMeasure18 = document.querySelector('#strMeasure18')
if (recipe.strMeasure18 !== "") {
    strMeasure18.innerText = recipe.strMeasure18
}
else {
    strMeasure18.className = "hide"
}

const strMeasure19 = document.querySelector('#strMeasure19')
if (recipe.strMeasure19 !== "") {
    strMeasure19.innerText = recipe.strMeasure19
}
else {
    strMeasure19.className = "hide"
}
const strMeasure20 = document.querySelector('#strMeasure20')
if (recipe.strMeasure20 !== "") {
    strMeasure20.innerText = recipe.strMeasure20
}
else {
    strMeasure20.className = "hide"
}



