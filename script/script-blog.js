let scroll_up = document.querySelector('.scroll-icon-up')

window.onscroll = ()=>{
    if(window.scrollY > 120){
        scroll_up.classList.add('show') 
    }else{
        scroll_up.classList.remove('show') 
    }
}
scroll_up.onclick = ()=>{
    window.scrollTo({
        top :0,
        behavior :'smooth'
    })
}


let header = document.querySelector('.header')

window.addEventListener('scroll',function(){
    if(window.scrollY >= 150){
        header.classList.add('active_1')
    }else{
        header.classList.remove('active_1')
        
    }
})



const mine_bar = document.querySelector('.mine-icon');
const nav_mune = document.querySelector('.navbar-collapse')

mine_bar.onclick = ()=>{
    nav_mune.classList.toggle('active_3')
    mine_bar.classList.toggle('active_3')
    
}