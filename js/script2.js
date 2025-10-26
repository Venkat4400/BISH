// ========== ROLE SELECTION ==========
function selectRole(role) {
    // Remove selected class from all cards
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked card
    event.currentTarget.classList.add('selected');
    
    // Update form select
    const roleSelect = document.getElementById('roleTypeSelect');
    roleSelect.value = role;
    
    // Smooth scroll to form
    document.querySelector('.form-section').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

// ========== FORM SUBMISSION ==========
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // In production, send data to backend
    console.log('Form submitted:', data);
    
    // Show success message
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    
    // Reset form
    event.target.reset();
    
    // Scroll to success message
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
}

// ========== OBSERVER FOR TRUSTED LOGOS ==========
// Add to existing observer or create new one
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-in forwards';
        }
    });
}, observerOptions);

// Observe role cards and trusted logos
document.querySelectorAll('.role-card, .trusted-logo').forEach(element => {
    observer.observe(element);
});
