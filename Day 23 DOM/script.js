// document.children
// HTMLCollection [html]0: htmllength: 1[[Prototype]]: HTMLCollection
// document.children[0]
// <html lang=​"en">​scroll<head>​…​</head>​<body style=​"font-family:​ sans-serif">​…​</body>​</html>​
// typeof document.children[0]
// 'object'
// console.dir(document.children[0])
// VM2903:1 html
// undefined
// document.children[0].children
// HTMLCollection(2) [head, body]

// console.dir(document.body)
// undefined
// document.body

// document.body.children
// HTMLCollection(7) [h1, hr, p, img#my-first-image-id.css-image, ul, p, script, my-first-image-id: img#my-first-image-id.css-image]0: h11: hr2: p3: img#my-first-image-id.css-image4: ul5: p6: scriptmy-first-image-id: img#my-first-image-id.css-imagelength: 7[[Prototype]]: HTMLCollection
// document.body.children[0]
// <h1>​Frondend Development​</h1>​
// console.dir(document.body.children[0])
// undefined

// document.body.children[0].innerHTML = 'Dhananjaya'
// 'Dhananjaya'
// document.body.children[0].innerText = '<i>Dhananjaya</i>'
// <i>Dhananjaya</i>​

document.body.children[0].innerHTML = '<i>Dhananjaya</i>'
console.log(document.body.children[1].innerText)