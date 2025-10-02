function deleteDraft(postId) {
    // Custom confirmation logic replaces alert()
    const modalConfirmed = confirm("Are you sure you want to delete this draft? This cannot be undone.");
    if (modalConfirmed) {
        // In a real Django app, submit a form or make an AJAX request here
        console.log(`Deleting draft post ${postId}`);
        // simulate successful deletion
        alert(`Draft ${postId} deleted successfully.`);
    }
}

AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
feather.replace();