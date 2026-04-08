const btnHamburguesa = document.getElementById("btn-hamburguesa")
const menuNavegacion = document.getElementById("menu-navegacion")
const navLinks = document.querySelectorAll(".nav-link") // la lista de los enlaces

// Menú hamburguesa: abrir/cerrar

btnHamburguesa.addEventListener("click", (e) => {
  e.stopPropagation()

  menuNavegacion.classList.toggle("abierto")
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuNavegacion.classList.remove("abierto")
  })
})

document.addEventListener("click", (e) => {
  if (
    !menuNavegacion.contains(e.target) &&
    !btnHamburguesa.contains(e.target)
  ) {
    menuNavegacion.classList.remove("abierto")
  }
})

const paso1Btn = document.getElementById("paso1-btn")
const paso1Resultado = document.getElementById("paso1-resultado")

paso1Btn.addEventListener("click", () => {
  paso1Resultado.textContent = "Texto modificado con getElementById"
  paso1Resultado.style.color = "#667eea"
  paso1Resultado.style.fontWeight = "bold"
})

const paso2Btn = document.getElementById("paso2-btn")
const paso2Texto = document.querySelector(".paso2-texto")

paso2Btn.addEventListener("click", () => {
  paso2Texto.style.backgroundColor = "#667eea"
  paso2Texto.style.color = "white"
})

const paso3Btn = document.getElementById("paso3-btn")
const paso3TextContent = document.getElementById("paso3-text")
const paso3InnerHTML = document.getElementById("paso3-html")

paso3Btn.addEventListener("click", () => {
  paso3TextContent.textContent =
    "Esto es textContent: <strong>no interpreta HTML</strong>"
  paso3InnerHTML.innerHTML =
    "Esto es innerHTML: <strong>sí interpreta HTML</strong>"
})

const paso4Btn = document.getElementById("paso4-btn")
const paso4Contenedor = document.getElementById("paso4-contenedor")

paso4Btn.addEventListener("click", () => {
  const tarjeta = document.createElement("div")
  tarjeta.className = "tarjeta"

  const titulo = document.createElement("h3")
  titulo.textContent = "Nueva tarjeta"

  const descripcion = document.createElement("p")
  descripcion.textContent = "Creada con createElement"

  tarjeta.appendChild(titulo)
  tarjeta.appendChild(descripcion)

  paso4Contenedor.appendChild(tarjeta)
})

const paso5Btn = document.getElementById("paso5-btn")
const paso5Contenedor = document.getElementById("paso5-contenedor")

paso5Btn.addEventListener("click", () => {
  paso5Contenedor.innerHTML = ""

  usuarios.forEach((usuario) => {
    const card = document.createElement("div")
    card.className = "item-lista"
    card.textContent = `Nombre: ${usuario.nombre} - Edad: ${usuario.edad}`

    paso5Contenedor.appendChild(card)
  })
})

const paso6Btn = document.getElementById("paso6-btn")
const paso6Contenedor = document.getElementById("paso6-contenedor")

paso6Btn.addEventListener("click", () => {
  const productosHTML = datosProductos
    .map(
      (producto) => `
  <div class="tarjeta">
    <h3>${producto.nombre}</h3>
    <p class="precio">${producto.precio}</p>
  </div>
  `,
    )
    .join("")

  paso6Contenedor.innerHTML = productosHTML
})

const paso7Contenedor = document.getElementById("paso7-caja")
const paso7Toggle = document.getElementById("paso7-toggle")
const paso7Add = document.getElementById("paso7-add")
const paso7Remove = document.getElementById("paso7-remove")

paso7Toggle.addEventListener("click", () => {
  paso7Contenedor.classList.toggle("activa")

  const estaActiva = paso7Contenedor.classList.contains("activa")

  if (estaActiva) {
    paso7Toggle.style.backgroundColor = "red"
    paso7Toggle.textContent = "Quitar clase 'activa'"
  } else {
    paso7Toggle.style.backgroundColor = "#667eea"
    paso7Toggle.textContent = "Añadir clase 'activa'"
  }
})

paso7Add.addEventListener("click", () => {
  paso7Contenedor.classList.add("destacada")
})

paso7Remove.addEventListener("click", () => {
  paso7Contenedor.classList.remove("destacada")
})

const paso8InputNombre = document.getElementById("paso8-input")
const paso8InputPrecio = document.getElementById("paso8-precio")
const paso8BtnAgregar = document.getElementById("paso8-agregar")
const paso8BtnLimpiar = document.getElementById("paso8-limpiar")
const paso8Contenedor = document.getElementById("paso8-contenedor")

let productosPersonalizados = []

function renderizarProductos() {
  paso8Contenedor.innerHTML = ""

  productosPersonalizados.forEach((producto) => {
    const card = document.createElement("div")
    card.className = "producto-card"

    const titulo = document.createElement("h3")
    titulo.textContent = producto.nombre

    const precio = document.createElement("div")
    precio.className = "precio-producto"
    precio.textContent = `${producto.precio}€`

    const btnEliminar = document.createElement("button")
    btnEliminar.className = "btn btn-eliminar"
    btnEliminar.textContent = "Eliminar"

    btnEliminar.addEventListener("click", () => {
      productosPersonalizados = productosPersonalizados.filter(
        (productoPersonalizado) => productoPersonalizado.id !== producto.id,
      )
      renderizarProductos()
    })

    card.appendChild(titulo)
    card.appendChild(precio)
    card.appendChild(btnEliminar)
    paso8Contenedor.appendChild(card)
  })
}

paso8BtnAgregar.addEventListener("click", () => {
  const nombre = paso8InputNombre.value.trim()
  const precio = paso8InputPrecio.value

  if (nombre === "" || precio === "") {
    alert("Por favor completa todos los campos")
    return
  }

  const nuevoProducto = {
    id: Date.now(),
    nombre,
    precio: parseFloat(precio),
  }

  productosPersonalizados.push(nuevoProducto)
  renderizarProductos()
  console.log("Estado actual:", productosPersonalizados)

  paso8InputNombre.value = ""
  paso8InputPrecio.value = ""
})

paso8BtnLimpiar.addEventListener("click", () => {
  productosPersonalizados = []
  renderizarProductos()
})
