(function() {
    const accordion = document.querySelector('.accord')
    const accordionBodies = accordion.querySelectorAll('.card-body')
    const accordionIcons = accordion.querySelectorAll('.fas')

    accordion.addEventListener('selectstart', e => e.preventDefault())

    accordion.addEventListener('click', e => {
        if (!e.target.classList.contains('card-header')) {
            return false
        }

        let accordionBody = e.target.parentNode.querySelector('.card-body')
        
        let isClosed = accordionBody.classList.contains('d-none')

        accordionBodies.forEach(i => i.classList.add('d-none'))
        accordionIcons.forEach(i => {
            i.classList.remove('fa-angle-up')
            i.classList.add('fa-angle-down')
        })

        let i = e.target.querySelector('.fas')
        
        if (isClosed) {
            accordionBody.classList.remove('d-none')
            i.classList.remove('fa-angle-down')
            i.classList.add('fa-angle-up')
        }
    })
})()