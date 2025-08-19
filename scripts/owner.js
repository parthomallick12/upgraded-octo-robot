// Owner-specific functionality
class OwnerManager {
    constructor() {
        this.owners = [
            {
                id: 1,
                name: "Ali_supplier",
                email: "aliowner@gmail.com",
                phone: "01812345678",
                createdAt: "12/May/2025"
            },
            {
                id: 2,
                name: "Bikrom_owner",
                email: "bikromowner@gmail.com",
                phone: "01701343433",
                createdAt: "13/May/2025"
            },
            {
                id: 3,
                name: "lablu",
                email: "Lablu@gmail.com",
                phone: "+880",
                createdAt: "02/Jun/2025"
            },
            {
                id: 4,
                name: "test",
                email: "test@gmail.com",
                phone: "01701103784",
                createdAt: "24/Jul/2025"
            },
            {
                id: 5,
                name: "Partho Mallick",
                email: "partho@gmail.com",
                phone: "01701867713",
                createdAt: "12/Aug/2025"
            }
        ];
        this.init();
    }

    init() {
        this.setupOwnerForm();
        this.renderOwnerTable();
        this.setupActionButtons();
    }

    setupOwnerForm() {
        const form = document.getElementById('ownerForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const ownerData = {
                id: this.owners.length + 1,
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                createdAt: new Date().toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                })
            };

            // Validate email format
            if (!this.isValidEmail(ownerData.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Check if email already exists
            if (this.owners.some(owner => owner.email === ownerData.email)) {
                showNotification('An owner with this email already exists.', 'error');
                return;
            }

            this.addOwner(ownerData);
            form.reset();
            showNotification('Owner created successfully!', 'success');
        });
    }

    addOwner(ownerData) {
        this.owners.push(ownerData);
        this.renderOwnerTable();
    }

    deleteOwner(id) {
        if (confirm('Are you sure you want to delete this owner?')) {
            this.owners = this.owners.filter(owner => owner.id !== id);
            this.renderOwnerTable();
            showNotification('Owner deleted successfully!', 'success');
        }
    }

    editOwner(id) {
        const owner = this.owners.find(owner => owner.id === id);
        if (owner) {
            // Fill form with owner data
            document.getElementById('ownerName').value = owner.name;
            document.getElementById('ownerEmail').value = owner.email;
            document.getElementById('ownerPhone').value = owner.phone;
            
            // Scroll to form
            document.querySelector('.owner-form').scrollIntoView({ behavior: 'smooth' });
            
            showNotification('Owner data loaded for editing.', 'info');
        }
    }

    renderOwnerTable() {
        const tbody = document.querySelector('.data-table tbody');
        if (!tbody) return;

        tbody.innerHTML = this.owners.map(owner => `
            <tr>
                <td>${owner.id}</td>
                <td>${owner.name}</td>
                <td>${owner.email}</td>
                <td>${owner.phone}</td>
                <td>${owner.createdAt}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-outline edit" onclick="ownerManager.editOwner(${owner.id})">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                <path d="m15 5 4 4"/>
                            </svg>
                            Edit
                        </button>
                        <button class="btn btn-sm btn-outline delete" onclick="ownerManager.deleteOwner(${owner.id})">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                            </svg>
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    setupActionButtons() {
        // Action buttons are handled via onclick attributes in the rendered HTML
        // This method can be used for additional button setup if needed
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Initialize owner manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.ownerManager = new OwnerManager();
});