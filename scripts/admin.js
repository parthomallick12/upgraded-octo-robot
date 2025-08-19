// Admin-specific functionality
class AdminManager {
    constructor() {
        this.admins = [
            {
                id: 1,
                name: "sagor",
                email: "sagor12@gmail.com",
                phone: "+1 (471) 115-1",
                createdAt: "12/May/2025"
            },
            {
                id: 2,
                name: "asif",
                email: "asif@gmail.com",
                phone: "01701103433",
                createdAt: "12/May/2025"
            }
        ];
        this.init();
    }

    init() {
        this.setupAdminForm();
        this.renderAdminTable();
        this.setupActionButtons();
    }

    setupAdminForm() {
        const form = document.getElementById('adminForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const adminData = {
                id: this.admins.length + 1,
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
            if (!this.isValidEmail(adminData.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Check if email already exists
            if (this.admins.some(admin => admin.email === adminData.email)) {
                showNotification('An admin with this email already exists.', 'error');
                return;
            }

            this.addAdmin(adminData);
            form.reset();
            showNotification('Admin created successfully!', 'success');
        });
    }

    addAdmin(adminData) {
        this.admins.push(adminData);
        this.renderAdminTable();
    }

    deleteAdmin(id) {
        if (confirm('Are you sure you want to delete this admin?')) {
            this.admins = this.admins.filter(admin => admin.id !== id);
            this.renderAdminTable();
            showNotification('Admin deleted successfully!', 'success');
        }
    }

    editAdmin(id) {
        const admin = this.admins.find(admin => admin.id === id);
        if (admin) {
            // Fill form with admin data
            document.getElementById('adminName').value = admin.name;
            document.getElementById('adminEmail').value = admin.email;
            document.getElementById('adminPhone').value = admin.phone;
            
            // Scroll to form
            document.querySelector('.admin-form').scrollIntoView({ behavior: 'smooth' });
            
            showNotification('Admin data loaded for editing.', 'info');
        }
    }

    renderAdminTable() {
        const tbody = document.getElementById('adminTableBody');
        if (!tbody) return;

        tbody.innerHTML = this.admins.map(admin => `
            <tr>
                <td>${admin.id}</td>
                <td>${admin.name}</td>
                <td>${admin.email}</td>
                <td>${admin.phone}</td>
                <td>${admin.createdAt}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-outline edit" onclick="adminManager.editAdmin(${admin.id})">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                <path d="m15 5 4 4"/>
                            </svg>
                            Edit
                        </button>
                        <button class="btn btn-sm btn-outline delete" onclick="adminManager.deleteAdmin(${admin.id})">
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

// Initialize admin manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.adminManager = new AdminManager();
});