
const button = document.querySelector('buttton');
const shx1 = document.querySelector('.shx1');

const setListener = (Element, type, handler) => {
    if(Element){
        return;

    }
    Element.addeventListener(type, handler);
    return ()=>{
        Element.removeEventListener(type, handler);
    };
}

const removeEvent = setListener (button,'click', function() {
    shx1.innerHTML = 'Привет';
});
setListener(shx1,'click', () =>{
    removeEvent();
})