function clickMenu(){
    if (itensmenu.style.display == 'block') {
        itensmenu.style.display = 'none'}
 
else {
    itensmenu.style.display = 'block'}
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itensmenu.style.display = 'block'}

else {
    itens.style.display = 'none'} 
}