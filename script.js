//botoes do menu de especialidades
const botaoFormato = document.getElementById('btn-especialidades-formato')
const botaoTorra = document.getElementById('btn-especialidades-torra')

//menus especialidades
const menuFormato = document.getElementById('menuFormato')
const menuTorra = document.getElementById('menuTorra')
//funcao de mudar a area visivel

botaoFormato.addEventListener('click',()=>{
    botaoTorra.style.backgroundColor='#D4C9C2'
    botaoFormato.style.backgroundColor='#F2EFED'
    menuTorra.style.display='none'
    menuFormato.style.display='grid'
})

botaoTorra.addEventListener('click',()=>{
    botaoFormato.style.backgroundColor='#D4C9C2'
    botaoTorra.style.backgroundColor='#F2EFED'
    menuFormato.style.display='none'
    menuTorra.style.display='grid'
})

