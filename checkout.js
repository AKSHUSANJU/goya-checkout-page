document.getElementById('delivery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const addressLine1 = document.getElementById('address-line1').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const mobilePattern = /^\d{10}$/;

    if (!email || !country || !firstName || !lastName || !addressLine1 || !mobileNumber.match(mobilePattern)) {
        isValid = false;
        alert('Please fill in all required fields and ensure the mobile number is valid.');
    }

    if (isValid) {
        // Proceed with payment process
        alert('Form submitted successfully.');
    }
}

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value;
    if (couponCode) {
        // Apply the coupon
        alert('Coupon applied.');
    } else {
        alert('Please enter a coupon code.');
    }
}

function payNow() {
    document.getElementById('delivery-form').submit();
}
