const navBtns=(text)=>{
    const btn=document.getElementById(text);
    const allBtns=document.querySelectorAll('#navBtns button');
    allBtns.forEach(btn=>btn.classList.remove('btn-active'));
    btn.classList.add('btn-active');
    const scrollToSection = (sectionId) => {
        const targetDiv = document.getElementById(sectionId);
        const navbarHeight = document.querySelector("nav").offsetHeight;
        
        if (targetDiv) {
            window.scrollTo({
                top: targetDiv.offsetTop - navbarHeight - 20, 
                behavior: "smooth"
            });
        }
    };

    if (text === 'btnFaq') {
        scrollToSection('faq');
    } else if (text === 'btnLearn') {
        scrollToSection('learn');
    } else if (text === 'btnLogout') {
        logout();
        btn.classList.remove('btn-active');
    }

}
const toggle=(id)=>{
    const checkbox=document.getElementById(id);
    console.log(checkbox.checked);
    const plus=document.getElementById(`plus-${id}`);
    const minus=document.getElementById(`minus-${id}`);
    if(checkbox.checked){
        plus.style.display='none';
        minus.style.display='block';
    }
    else{
        plus.style.display='block';
        minus.style.display='none';
    }
}
const header= document.getElementById('header');
const hero = document.getElementById('hero');
const main= document.getElementById('main');

header.style.display='none';
main.style.display='none';

const login=()=>{
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    if(username==='' || password===''){
        alert('Please enter your username and password');
    }
    else{
        if(password === '123456'){
            header.style.display='block';
            hero.style.display='none';
            main.style.display='block';
            Swal.fire({
                position: 'center'
                ,icon: "success",
                title: "Login Successful",
                text: `Welcome, ${username}!`,
                showConfirmButton: false,
                timer: 2000
              });
        }
        else{
            alert(`Wrong code! You have entered ${password}. Use 123456 to login`);
        }
    }
    
}
const logout=()=>{
    header.style.display='none';
    hero.style.display='block';
    main.style.display='none';
}