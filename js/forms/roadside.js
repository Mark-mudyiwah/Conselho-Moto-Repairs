
function validateFormData(formData) {

    if (!formData.customerName || formData.customerName.length < 5) {
        return 'Name should be at least 5 characters long';
    }

    if (!/^\d{10}$/.test(formData.customerNumber)) {
        return 'Phone number must contain exactly 10 digits';
    }

    if (!formData.bikeMake) {
        return 'Please enter your bike make';
    }

    if (!formData.bikeModel) {
        return 'Please enter your bike model';
    }

    if (!formData.customerProblem) {
        return 'Please select the problem with your bike';
    }

    if (!formData.customerLocation) {
        return 'Please enter your location';
    }

    if (!formData.customerArea) {
        return 'Please select your area';
    }

    if (!formData.problemDescription || formData.problemDescription.length < 10) {
        return 'Please describe the problem in at least 10 characters';
    }

    return null;
}


function getFormData() {

    const formData = {
        customerName: document.getElementById('assistanceName').value.trim(),
        customerNumber: document.getElementById('assistancePhone').value.trim(),
        bikeMake: document.getElementById('assistanceBikeMake').value.trim(),
        bikeModel: document.getElementById('assistanceBikeModel').value.trim(),
        customerProblem: document.getElementById('assistanceProblem').value,
        customerLocation: document.getElementById('assistanceLocation').value.trim(),
        customerArea: document.getElementById('area').value.trim(),
        problemDescription: document.getElementById('assistanceMessage').value.trim()
    };

    const error = validateFormData(formData);

    if (error) {
        alert(error);
        return null;
    }

    return formData;
}

const assistanceForm = document.getElementById('assistanceForm');

assistanceForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = getFormData();

    if (!data) return;

    try {
        const response = await axios.post(
            'https://formspree.io/f/mnpjloay',
            data,
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        console.log(response.data);

        alert('Your assistance request has been sent successfully!');

        assistanceForm.reset();

    } catch (error) {
        console.error(error.response?.data || error.message);

        alert('Failed to send your request. Please try again.');
    }
});
