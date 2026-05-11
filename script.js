(function() {
  'use strict';

  const form = document.getElementById('contactForm');
  
  if (form) {
    function isValidEmail(email) {
      const pattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
      return pattern.test(email);
    }
    
    function validateName() {
      const nameInput = document.getElementById('name');
      if (!nameInput) return true;
      const name = nameInput.value.trim();
      
      if (name.length < 2) {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        return false;
      } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
        return true;
      }
    }
    
    function validateEmail() {
      const emailInput = document.getElementById('email');
      if (!emailInput) return true;
      const email = emailInput.value.trim();
      
      if (!isValidEmail(email)) {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        return false;
      } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        return true;
      }
    }
    
    function validateMessage() {
      const messageInput = document.getElementById('message');
      if (!messageInput) return true;
      const message = messageInput.value.trim();
      
      if (message === "") {
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        return false;
      } else {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
        return true;
      }
    }
    
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    
    if (nameField) nameField.addEventListener('input', validateName);
    if (emailField) emailField.addEventListener('input', validateEmail);
    if (messageField) messageField.addEventListener('input', validateMessage);
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();
      
      if (isNameValid && isEmailValid && isMessageValid) {
        alert('✅ Message sent successfully! I will reply within 48 hours.');
        form.reset();
        if (nameField) nameField.classList.remove('is-valid', 'is-invalid');
        if (emailField) emailField.classList.remove('is-valid', 'is-invalid');
        if (messageField) messageField.classList.remove('is-valid', 'is-invalid');
      } else {
        alert('⚠️ Please fix the errors before submitting.');
      }
    });
    
    form.setAttribute('novalidate', true);
  }
  
  const posts = {
    'first-post': {
      title: 'My First Journal Entry',
      content: 'Today we had our mini capstone title defense. It was a nerve-wracking but exciting experience. Presenting our project idea to the panel taught me the importance of preparation and confidence. I am proud of what my team accomplished.'
    },
    'student': {
      title: 'Being a BSIT Student',
      content: 'Studying at National Teachers College has been an incredible journey. My friends and I help each other with coding assignments, group projects, and late-night study sessions. The camaraderie makes the tough days bearable and the good days unforgettable.'
    },
    'inspiration': {
      title: 'NSTP Project',
      content: 'Teaching and helping the youth through our NSTP project was a life-changing experience. Seeing their smiles and eagerness to learn reminded me why I chose this path. Giving back to the community is truly rewarding.'
    },
    'webdev': {
      title: 'Learning C++ Programming',
      content: 'My first experience with programming languages started with C++. It was challenging at first, but understanding logic, loops, and functions opened my mind to how software works. Now I appreciate every line of code I write.'
    },
    'goals': {
      title: 'Setting Goals for 2025',
      content: 'This year, I want to finish my BSIT degree strong, build more real-world projects, and start freelancing. I also want to improve my communication skills and expand my network. Small steps every day will get me there.'
    },
    'books': {
      title: 'About Me',
      content: 'I am Peejay Real, a BSIT student passionate about technology and helping others. This journal is my way of documenting my journey, lessons learned, and dreams for the future. Thanks for stopping by!'
    }
  };
  
  const readMoreButtons = document.querySelectorAll('.read-more');
  
  if (readMoreButtons.length > 0) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalElement = document.getElementById('postModal');
    let bsModal = null;
    
    if (modalElement) {
      bsModal = new bootstrap.Modal(modalElement);
    }
    
    readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const postKey = this.getAttribute('data-post');
        const post = posts[postKey];
        
        if (post && modalTitle && modalBody) {
          modalTitle.textContent = post.title;
          modalBody.innerHTML = '<p>' + post.content + '</p><hr><small class="text-muted">Thank you for reading! - Peejay Real 💙</small>';
          
          if (bsModal) {
            bsModal.show();
          }
        }
      });
    });
  }
  
})();