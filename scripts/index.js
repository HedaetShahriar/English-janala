const navBtns=(text)=>{
    const btn=document.getElementById(text);
    const allBtns=document.querySelectorAll('#navBtns button');
    allBtns.forEach(btn=>btn.classList.remove('btn-active'));
    btn.classList.add('btn-active');
    if(text==='btnFaq'){
        window.location.href='#faq';
        
    }
    else if(text==='btnLearn'){
        window.top.location.href='#learn';
    }
    else if(text === 'btnLogout'){
        // window.location.href='#hero';
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
                showConfirmButton: false,
                timer: 1000
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