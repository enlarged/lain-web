function navigation(module) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    var tab = document.getElementById(module);
    if (tab) {
        tab.classList.add('active');
    }
}
