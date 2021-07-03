(function() {
    const scrollBtn = document.getElementById('topBtn')
    
    window.addEventListener('scroll', e => {
        if (window.pageYOffset > window.innerHeight) {
            scrollBtn.classList.add('d-block')
        } else {
            scrollBtn.classList.remove('d-block')
        }
    })

    scrollBtn.addEventListener('click', e => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
})()