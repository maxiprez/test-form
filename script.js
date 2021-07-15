const scriptURL = 'https://script.google.com/macros/s/AKfycbyfWZRBOkYbt7Gn9Oo9jUiG_yFlEuPCarmFubCzDyXNOgc6Wg7s/exec'
const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Gracias por contactarnos, en breve nos pondremos en contacto con usted..."))
                .catch(error => console.error('Error!', error.message))
            })