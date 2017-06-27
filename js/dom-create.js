document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items

    // target the list
    var shoppingList = document.querySelector('#shopping-list')
    var myCart = document.querySelector('#cart-list')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    // target the buttons
    var button = document.querySelector('.addToCart')
    button.addEventListener('click', addToCart)
    var searchBrandButton = document.querySelector('.searchBrandButton')
    searchBrandButton.addEventListener('click', getItemsByBrand)
    var searchAuthorButton = document.querySelector('.searchAuthorButton')
    searchAuthorButton.addEventListener('click', getItemsByAuthor)

    // target the input
    var searchByBrand = document.querySelector('.searchByBrand')
    var searchByAuthor = document.querySelector('.searchByAuthor')

    // target list from shoppingList
    var shoppingList1 = document.querySelectorAll('#shopping-list li')

    function addToCart () {
      var lastItem = shoppingList1[shoppingList1.length - 1]
      myCart.appendChild(lastItem)
    }
    // 2.) getItemsByBrand(items, brand)
    function getItemsByBrand (items, searchBrand) {
      items = data.items
      searchBrand = searchByBrand.textContent
      var arrBrand = []
      for (var k = 0; k < items.length; k++) {
        var brand = items[k].product.brand
        if (searchBrand === brand) {
          arrBrand.push(items[k].product.brand)
          var newBrand = document.createElement('li')
          newBrand.textContent = arrBrand[k]
          shoppingList.appendChild(newBrand)
        }
      }console.log(arrBrand)
    }

    // 3.) getItemsByAuthor(items, author)
    function getItemsByAuthor (items, searchAuthor) {
      items = data.items
      searchAuthor = searchByAuthor.textContent
      var arrAuthor = []
      for (var x = 0; x < items.length; x++) {
        var author = items[x].product.author.name
        for (var y = 0; y <= searchAuthor.length; y++) {
          if (author.substring(0, y) === searchAuthor) {
            arrAuthor.push(items[x].product.title)
            var newAuthor = document.createElement('li')
            newAuthor.textContent = arrAuthor[x]
            shoppingList.appendChild(newAuthor)
            // myCart.appendChild(arrAuthor[x])
          }
        }
      }
      console.log(arrAuthor)
    }

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})

// // UPDATING EXISITNG ELEMENT
// // target the p element
// // var p = document.querySelector('p')
// //
// // p.textContent = 'My shopping list descriptions'
//
// // CREATING NEW ELEMENT
// // create new paragraph
// // var newP = document.createElement('p')
// // // target the parent to put the new para in
// // var body = document.body
// // body.appendChild(newP) // will always append to the last line of the target in html
//
