const sortOrder = document.getElementById('sort-order')
const ul = document.querySelector('ul')
const getList = () => Array.from(ul.getElementsByTagName('li'))
sortOrder.addEventListener('change', sort, false)

const sortfunc = {
  ascending: (a, b) => a < b,
  descending: (a, b) => a > b
}

function sort () {
  const list = getList()
  const order = sortfunc[sortOrder.value]
  list.sort(sapxep)
  list.forEach(li => li.remove())
  list.forEach(li => ul.appendChild(li))
  function sapxep (taba, tabb) {
    const a = taba.textContent
    const b = tabb.textContent
    if (order(a, b)) return -1
    if (order(b, a)) return 1
    return 0
  }
}
