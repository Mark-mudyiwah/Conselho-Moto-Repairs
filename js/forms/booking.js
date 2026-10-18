
const bookingForm = document.getElementById('bookingForm');


const formspreeURL = 'https://formspree.io/f/mnpjloay';

bookingForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // 1. COLLECT THE FORM DATA

    const bookingData = {
        fullName: document.getElementById('fullName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),

        bikeMake: document.getElementById('bikeMake').value.trim(),
        bikeModel: document.getElementById('bikeModel').value.trim(),
        bikeYear: document.getElementById('bikeYear').value,

        service: document.getElementById('service').value,
        preferredDate: document.getElementById('preferredDate').value,
        preferredTime: document.getElementById('preferredTime').value,

        message: document.getElementById('message').value.trim()
    };

    // 2. VALIDATE THE DATA

    if (
        !bookingData.fullName ||
        !bookingData.phone ||
        !bookingData.bikeMake ||
        !bookingData.bikeModel ||
        !bookingData.service ||
        !bookingData.preferredDate ||
        !bookingData.preferredTime
    ) {
        alert('Please complete all required fields.');
        return;
    }

    // Check phone number
    const phonePattern = /^[+]?[\d\s()-]{7,20}$/;

    if (!phonePattern.test(bookingData.phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // Check email only if the customer entered one
    if (bookingData.email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(bookingData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
    }

    // Validate bike year if provided
    if (bookingData.bikeYear) {
        const year = Number(bookingData.bikeYear);
        const currentYear = new Date().getFullYear();

        if (
            !Number.isInteger(year) ||
            year < 1900 ||
            year > currentYear + 1
        ) {
            alert('Please enter a valid bike year.');
            return;
        }
    }

    // Check that the preferred date is not in the past
    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split('T')[0];

    if (bookingData.preferredDate < localToday) {
        alert('Please select today or a future date.');
        return;
    }

    // 3. SEND THE DATA TO FORMSPREE

    const submitButton = bookingForm.querySelector(
        '.booking-submit-button'
    );

    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending booking...';

    try {
        const response = await fetch(formspreeURL, {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.errors?.map(error => error.message).join(', ') ||
                'Failed to submit your booking.'
            );
        }

        // 4. HANDLE SUCCESS

        alert(
            'Your booking request has been sent successfully! ' +
            'We will contact you to confirm your booking.'
        );

        bookingForm.reset();

    } catch (error) {
        console.error('Booking submission error:', error);

        alert(
            'Sorry, we could not send your booking. ' +
            'Please check your connection and try again.'
        );

    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
});
