const panels = document.querySelectorAll('.panel');

console.log(panels);


panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        remoteActiveClasses();
        panel.classList.add('active')
    })
    
})
function remoteActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    }  
        )
}
