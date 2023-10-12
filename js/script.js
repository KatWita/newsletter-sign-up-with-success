const submitBtn = document.querySelector('.sign-up__submit-btn')
const emailInput = document.querySelector('.sign-up__input')
const errorMsg = document.querySelector('.sign-up__error')
const signUpSection = document.querySelector('.sign-up')
const success = document.querySelector('.success')
const successBtn = document.querySelector('.success__btn')

const showError = (input, msg) => {
	const inputBox = input.parentElement

	inputBox.classList.add('active')
	errorMsg.textContent = msg
}

const clearError = input => {
	const inputBox = input.parentElement

	inputBox.classList.remove('active')
	errorMsg.textContent = ''
}

const handleEmailValidation = input => {
	const reg =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (reg.test(input.value)) {
		clearError(input)
	} else {
		if (input.value === '') {
			showError(input, 'Email required')
		} else {
			showError(input, 'Valid email required')
		}
	}
}

const checkErrors = () => {
	const inputBox = document.querySelector('.sign-up__input-box')
	let errorCount = 0

	if (inputBox.classList.contains('active')) {
		errorCount++
	}

	if (errorCount === 0) {
		success.style.display = 'block'
		signUpSection.style.display = 'none'
	}
}

submitBtn.addEventListener('click', e => {
	e.preventDefault()
	handleEmailValidation(emailInput)
	checkErrors()
})

successBtn.addEventListener('click', () => {
	success.style.display = 'none'
	signUpSection.style.display = 'flex'
	emailInput.value = ''
})
