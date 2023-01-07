const nameLabel=document.getElementById(nameLabel)
const nameInput=document.getElementById(nameInput)

const surnameLabel=document.getElementById(surnameLabel)
const surname=document.getElementById(surname)

const emailLabel=document.getElementById(emailLabel)
const email=document.getElementById(email)

const messageLabel=document.getElementById(messageLabel)
const message=document.byElementId(message)

const emailError=document.getElementById(emailError)
const messageError=document.getElementById(messageError)

nameInput.addEventListener('focusin',()=>{
  nameLabel.style.color="#000"  
})
nameInput.addEventListener('focusout',()=>{
nameLabel.style.color="#777"  
  })

surname.addEventListener('focusin',()=>{
    nameLabel.style.color="#000"  
  })
surname.addEventListener('focusout',()=>{
      surnameLabel.style.color="#777"  
    })

email.addEventListener('focusin',()=>{
    emailLabel.style.color="#000"  
    })
email.addEventListener('focusout',()=>{
    nameInputLabel.style.color="#777" 
    emailError.innerText=""
    })

message.addEventListener('focusin',()=>{
    messageLabel.style.color="#000"  
    })        
message.addEventListener('focusout',()=>{
    messageLabel.style.color="#777"  
    messageError.innerText=""
    })

contactForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    if (email.value===""){
        emailError.innerText="*email alanı boş bırakılamaz"
        email.focus()
        return
    }
    if (message.value===""){
        messageError.innerText="*mesaj alanı boş bırakılamaz"
        message.focus()
        return
    }
    const newForm={
       name:nameInput.value,
       surname:surname.value,
       email:email.value,
       message:message.value,
       date:new Date()
    }
    fetch("http://localhost:3004/add-form",{
        method:"post"
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
            },
        body:JSON.stringify(newForm)
        
    })
    .then(res=>res.json()) 
    .then(data=>{
        console.log(data)
        })
    .catch(err=>{
        console.log(err)

        })    
    })
        
    
    
   
    
