const name = document.getElementById ('name')

form.addEventListener('name',(e) => {
    let messages = []
    if (name.value === ''|| name.value == null){
        massages.push('Name is required')
}


    if (messages.length > 0) {
        e.prevent.Default ()
        errorElement.innerText = messages.join(', ')
    }
})