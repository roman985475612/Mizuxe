// Contact form
const contactForm = document.getElementById('contactForm')
const submitBtn = contactForm.querySelector('.submit-btn')

// Newletter form
const newsletterForm = document.getElementById('newsletterForm')
const newsletterSubmitBtn = newsletterForm.querySelector('.submit-btn')

const patterns = {
    notEmpty: /.+/,
    email: /^.+@.+\..+$/
}

contactForm.addEventListener('focusin', onFocus)
contactForm.addEventListener('submit', async e => {
    e.preventDefault()

    submitBtn.disabled = true

    if (validation(e.target)) {
        console.log('Valid OK')
    }
    
    submitBtn.disabled = false
})

newsletterForm.addEventListener('focusin', onFocus)
newsletterForm.addEventListener('submit', async e => {
    e.preventDefault()

    newsletterSubmitBtn.disabled = true

    if (validation(e.target)) {
        console.log('Valid OK')
    }
    
    newsletterSubmitBtn.disabled = false
})

function onFocus(e) {
    if (e.target.classList.contains('form-control')) {
        e.target.classList.remove('is-invalid')
        e.target.classList.remove('is-valid')
    }
}

function validation(form) {
    let fields = form.querySelectorAll('.form-control')
    let isValid = true
    
    fields.forEach(f => {
        let pattern = patterns[f.dataset.valid]
        f.value = f.value.trim()
        
        if (pattern.test(f.value)) {
            f.classList.add('is-valid')
        } else {
            f.classList.add('is-invalid')
            isValid = false
        }
    })

    return isValid
}