// Selecting a element using DOM
/* 
    getElementById() :- getElementbyId element return a element object that represents an HTML element

*/

// let message = document.getElementById("message")

// console.log("message", message) 

/* 
    it will print <p id="message">JS DOM</p>
    
    Edge cases:
    
    1) if that id is not present in the dom then it will return null
    2) if there are more than one id it matches then it will return the first matched element
*/

/*
----------------
    getElementByName()

    The getElementsByName() method of the Document object returns a NodeList Collection of elements with a given name attribute in the document.
-----------------
*/

// let btn = document.getElementsByName("language")

// console.log(btn[0]) ==> <input type="radio" name="language" value="javascript"></input>

/*
    It returns a node list like 
    NodeList[input, button]
    if you want to access the element you have to use btn[index] and the key you want to access

*/

/*
----------------
getElementByTagName()

The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
-----------------
*/

// let element = document.getElementsByTagName("h1")

// console.log(element[0].innerText = "Hello")

/*
    It will ruturn the html collection of elements

    [h1, h1, h1, h1, h1]
*/

/*
----------------
getElementByClassName()

The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).
----------------
*/

// const classname = document.getElementsByClassName("message")
// console.log(classname)

/*
    it returns all the html elements with given mached class name [h1.message, h1.message, h1.message]

    <h1 class="message">second Element</h1>
       <div id="container">
        <h1 class="message">third element</h1>
       <h1 class="message">fourth element</h1>
       </div>
*/

// if you want to get the elements inside the container then you have to use differenlty

// let container = document.getElementById("container")
// const containerClassElements = container.getElementsByClassName("message")
// console.log(containerClassElements) ==> it will give only the elements inside the container

/*


| Method                     | Returns        | Query Type | Notes                       |
| -------------------------- | -------------- | ---------- | --------------------------- |
| `getElementById()`         | Single Element | By ID      | Returns `null` if not found |
| `getElementsByName()`      | NodeList       | By name    | Mostly for form elements    |
| `getElementsByTagName()`   | HTMLCollection | By tag     | Live collection             |
| `getElementsByClassName()` | HTMLCollection | By class   | Live collection             |
    uerySelector()	         |      Element	  |  CSS selector	First match only
    querySelectorAll()	     |       NodeList |	CSS selector	Static list, can use forEach()
*/

/*
----------------
querySelector() // .classname, #id

The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).
----------------
*/

const element = document.querySelector("div")

console.log(element)