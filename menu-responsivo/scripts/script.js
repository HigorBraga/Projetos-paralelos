function abrirMenu() {
    const menu = window.document.getElementById('menu-itens');

    menu.className = menu.className.includes('responsivo') ? '' : 'responsivo';
    
}