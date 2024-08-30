function toggleForm(formIndex) {
    var forms = document.querySelectorAll('.form-borda');
    forms.forEach((form, index) => {
        if (index === formIndex) {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
    document.body.style.overflowY = (formIndex >= 0) ? 'hidden' : 'auto';
}
