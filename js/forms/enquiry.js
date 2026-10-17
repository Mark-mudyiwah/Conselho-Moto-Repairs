const submitButton = document.querySelector('.contact-submit-btn')


function getEnquiryData() {
    const customerName = document.getElementById('fullName').value.trim();
    const customerNumber = document.getElementById('phone').value.trim();
    const customerEmail = document.getElementById('email').value.trim();
    const bikeType = document.getElementById('bike').value.trim();
    const serviceNeeded = document.getElementById('service').value;
    const customMessage = document.getElementById('message').value.trim();

    return {
        customerName,
        customerNumber,
        customerEmail,
        bikeType,
        serviceNeeded,
        customMessage
    };
}


function validateData(data) {

    if (!data.customerName || data.customerName.length < 3) {
        return 'Please enter your full name (at least 3 characters).';
    }

    if (!data.customerNumber) {
        return 'Please enter your phone number.';
    }

    if (!/^[0-9+\s()-]{10,20}$/.test(data.customerNumber)) {
        return 'Please enter a valid phone number.';
    }

    if (data.customerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customerEmail)) {
        return 'Please enter a valid email address.';
    }

    if (!data.serviceNeeded) {
        return 'Please select a service.';
    }

    if (!data.customMessage || data.customMessage.length < 10) {
        return 'Please describe your enquiry in at least 10 characters.';
    }

    return null;
}


function clearForm() {
    document.querySelector('.contact-form').reset();
}

submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const enquiryData = getEnquiryData();

    const error = validateData(enquiryData);

    if (error) {
        alert(error);
        return;
    }

    try {
        const response = await axios.post(
            'https://formspree.io/f/mnpjloay',
            enquiryData,
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        console.log(response.data);

        alert('Your assistance request has been sent successfully!');

        clearForm();

    } catch (error) {
        console.error(error.response?.data || error.message);

        alert('Failed to send your request. Please try again.');
    }
});