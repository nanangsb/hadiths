async function ready() {
  let data = await getJSON('editions');

  let UL = getElement('ul', { class: 'list-group' })
  for (let [key, value] of Object.entries(data)) {
    let LI = getElement('li', { class: 'list-group-item' })
    let newparams = new URLSearchParams();
    newparams.set('bareedition', key)
    let aElem = getElement('a', { href: `single.html?${newparams.toString()}` })
    aElem.innerText = value.name
    LI.appendChild(aElem)
    UL.appendChild(LI)
  }
  document.querySelector('#mycontainer').appendChild(UL)
}



document.addEventListener("DOMContentLoaded", ready);