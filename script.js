
const click = document.getElementById("logo")
const dialogo = document.getElementById("item")
const cancelar = document.getElementById("cancel")

click.addEventListener('click', function () {
  dialogo.showModal()
})

cancelar.addEventListener('click', function () {
  dialogo.close()
})





























































// const container = document.getElementById('container')

// //CABEÇARIO

// let topo = document.createDocumentFragment()

// let bar = document.createElement('header')
// bar.id = 'bar'

// const logo = document.createElement('div')
// logo.style.backgroundColor = 'white'
// logo.style.borderRadius = '40px'
// logo.className = 'logo'

// let nick = document.createElement('h1')
// nick.id = 'nickname'
// nick.textContent = 'Noticias JN News'

// let nav = document.createElement('nav')

// const menuText = ['Início', 'Sobre a Escola', 'Categoria', 'Sobre']
// const menuLinks = ['#base', '#informacoes', '#categoria', '#sobre'] 
// for (let i = 0; i < menuText.length; i++) {
//   let a = document.createElement('a')
//   a.textContent = menuText[i]
//   a.href = menuLinks[i]   
//   a.style.textDecoration = "none"
//   a.style.marginRight = "15px"
//   nav.appendChild(a)
// }

//  nav.className = 'nav'


// bar.append(logo, nick, nav)

// topo.append(bar)




// //BASE
// const base = document.createDocumentFragment()

// let itens = document.createElement('div')
// itens.id = "base"

// let cont_titulo = document.createElement('div')
// cont_titulo.className = 'cont_titulo'
// let cate_titulo = document.createElement('h1')
// cate_titulo.className = 'titulo'
// let span1 = document.createElement('span')
// span1.textContent = 'CEti JOSÉ NARCISO'
// span1.className = 'span1'


// let span2 = document.createElement('span')
// span2.textContent = 'DA '
// span2.className = 'span2'
// let span3 = document.createElement('span')
// span3.textContent = 'ROCHA FILHO '
// span3.className = 'span3'


// cate_titulo.appendChild(span1)
// cate_titulo.appendChild(span2)
 



//TOPO
// var topo = document.createDocumentFragment()

// let d = document.createElement('div')
// d.id = 'topo'

// const logo = document.createElement('div')
// logo.style.backgroundColor = 'pink'
// logo.className = 'logo'

// let nav = document.createElement('nav')

// const menuText = ['Início', 'Produtos', 'Serviços', 'Sobre']
// for(let item of menuText){
//   let a = document.createElement('a')
//   a.textContent = item
//   nav.appendChild(a)
// }

// const login = document.createElement('button')
// login.className = 'btn-login'
// login.textContent = 'Login'

// d.append(logo, nav, login)
// topo.appendChild(d)

// //LEFT
// var left = document.createDocumentFragment()

// let l = document.createElement('div')
// l.id = 'left'

// left.appendChild(l)

// //RIGHT
// var right = document.createDocumentFragment()

// let r = document.createElement('div')
// r.id = 'right'
// right.appendChild(r)

// //BOTTOM
// var bottom = document.createDocumentFragment()

// let b = document.createElement('div')
// b.id = 'bottom'

// const bTop = document.createElement('div')
// bTop.className = 'b-top'
// const socialIcons = [
//   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>`,
//   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>`,
//   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>`,
//   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>`,
//   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>`
// ]

// for(let i = 0; i<socialIcons.length;i++){
//   bTop.innerHTML += socialIcons[i]
// }

// const bTP = document.createElement('p')
// bTP.textContent = "Página desenvolvida durante as aulas do curso técnico em desenvolvimento de sistemas no CETI José Narciso da Rocha Filho."
// bTop.appendChild(bTP)

// const bBottom = document.createElement('div')
// bBottom.className = 'b-bottom'
// const bBP = document.createElement('p')
// bBP.textContent = "2025, Nascimento Enterprice. Todos os direitos reservados."
// bBottom.appendChild(bBP)

// b.append(bTop, bBottom)
// bottom.appendChild(b)

// container.append(topo, left, right, bottom)

// const notici_base = document.createDocumentFragment()
// var n = document.createElement('div')
// n.id = 'noticia'

// let text = document.createElement('p')
// text.textContent = 'Noticia de 01/09/2025'
// text.className= 'titulo'
// n.appendChild(text); 
// let not1 = document.createElement('p')
// not1.textContent = 'A Escola Estadual José Narciso deu início, nesta segunda-feira (01), à aguardada Semana da Cidadania, um evento anual que promove atividades educativas voltadas à conscientização social, respeito ao próximo e responsabilidade comunitária.......'
// not1.className= 'noticia-1'
// n.appendChild(not1); 
// notici_base.appendChild(n)