const scriptURL = 'https://script.google.com/macros/s/AKfycbyfWZRBOkYbt7Gn9Oo9jUiG_yFlEuPCarmFubCzDyXNOgc6Wg7s/exec'
const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault();
              
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => swal("Mensaje enviado!", "En breve nos estaremos contactando con usted!", "success"))
                .then( response => document.getElementById('my-form').reset())
                .catch(error => console.error('Error!', error.message))
            })