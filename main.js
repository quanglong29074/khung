const itemsliderbar = document.querySelectorAll(".catagory-left-li")
itemsliderbar.forEach(function(menu, index){
    menu.addEventListener("click",function(){
       
        menu.classList.toggle("block")
    })
})

const header = document.querySelector("header")
    window.addEventListener("scroll",function(){
        x = window.pageYOffset
        if(x>0){
            header.classList.add("sticky")
        }
        else{
            header.classList.remove("sticky")
        }
    })

    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector('.aspect-ratio-169')
    const dotItem = document.querySelectorAll(".dot")
    let imgNuber = imgPosition.length
    let index = 0
    imgPosition.forEach(function (image, index) {
        image.style.left = index * 100 + "%"
        dotItem[index].addEventListener("click", function () {
            slider(index)
        })
    })
    function imgSlide() {
        index++;
        if (index >= imgNuber) { index = 0 }
        slider(index)
    }
    function slider(index) {
        imgContainer.style.left = "-" + index * 100 + "%"
        const dotActive = document.querySelector(".active")
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }
    setInterval(imgSlide, 5000)








// check
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phone');
const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3;
       max = 25;

      const username = usernameEl.value.trim();
      
      if (!isRequired(username)) {
          showError(usernameEl, 'Username cannot be blank.');
      } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
      } else {
        showSuccess(usernameEl);
        valid = true;
      }
      return valid;
};

const checkPhone = () => {
  // This makes it false by default until validated with specific parameters
      let valid = false;
  // This sets the min and max lengths for the field
      const min = 14,
            max = 30;
  // This trims whitespace before and after
      const phone = phoneEl.value.trim();
  // This checks if the phone field is blank, if so, it shows a message
      if (!isRequired(phone)) {
          showError(phoneEl, 'Phone cannot be blank.');
  
  
   // This checks to see if the phone length is between the min/max parameters, if not, it will show a message       
      } else if (!isBetween(phone.length, min, max)) {
          showError(phoneEl, `Phone must be between ${min} and ${max} characters.`)
  
  //The function returns true if the field passes the required checks.
      } else {
          showSuccess(phoneEl);
          valid = true;
      }
      // Now the phone is considered valid
      return valid;
  };

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl,'Email is not vaid.')
    } else {
      showSuccess(emailEl);
      valid = true;
    }
    return valid;
};



const isEmailValid = (email) => {
  //regular expression (check email)
  //https://developer.mozzila.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Regexp
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const isPasswordSecure = (password) => {
  //regular expression (check password)
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
  //get the from-lield element
  const formField = input.parentElement;
  //add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  //show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  //get the fro,-field element
  const formField = input.parentElement;

  //remove the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  //hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}


form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isUsernameValid = checkUsername(),
       isEmailValid = checkEmail(),
       isPhoneValid = checkPhone ();
  let isFormValid = isUsernameValid &&
      isEmailValid &&
      isPhoneValid;

      // submit to the server if the form is valid
      if (isFormValid) {
          alert('gửi thành công')
      }
});
const debounce = (fn, delay = 1) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer 
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args)

    }, delay);
  };
};
form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'username':
        checkUsername();
        break;
    case 'email':
      checkEmail();
      break;
    case 'phone':
      checkPhone ();
      break;
  }
}));