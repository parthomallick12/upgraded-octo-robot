// Manager-specific functionality
class ManagerManager {
    constructor() {
        this.managers = [
            {
                id: 1,
                name: "manager",
                email: "manager@gmail.com",
                phone: "01701165985",
                createdAt: "12/May/2025"
            },
            {
                id: 2,
                name: "mohit manager",
                email: "mohit@gmail.com",
                phone: "01701103784",
                createdAt: "12/May/2025"
            },
            {
                id: 3,
                name: "saimun",
                email: "saimun@gmail.com",
                phone: "123456",
                createdAt: "03/Jun/2025"
            }
        ];
        this.init();
    }

    init() {
        this.setupManagerForm();
        this.renderManagerTable();
        this.setupActionButtons();
    }

    setupManagerForm() {
        const form = document.getElementById('managerForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const managerData = {
                id: this.managers.length + 1,
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
            if (!this.isValidEmail(managerData.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Check if email already exists
            if (this.managers.some(manager => manager.email === managerData.email)) {
                showNotification('A manager with this email already exists.', 'error');
                return;
            }

            this.addManager(managerData);
            form.reset();
            showNotification('Manager created successfully!', 'success');
        });
    }

    addManager(managerData) {
        this.managers.push(managerData);
        this.renderManagerTable();
    }

    deleteManager(id) {
        if (confirm('Are you sure you want to delete this manager?')) {
            this.managers = this.managers.filter(manager => manager.id !== id);
            this.renderManagerTable();
            showNotification('Manager deleted successfully!', 'success');
        }
    }

    editManager(id) {
        const manager = this.managers.find(manager => manager.id === id);
        if (manager) {
            // Fill form with manager data
            document.getElementById('managerName').value = manager.name;
            document.getElementById('managerEmail').value = manager.email;
            document.getElementById('managerPhone').value = manager.phone;
            
            // Scroll to form
            document.querySelector('.manager-form').scrollIntoView({ behavior: 'smooth' });
            
            showNotification('Manager data loaded for editing.', 'info');
        }
    }

    renderManagerTable() {
        const tbody = document.querySelector('.data-table tbody');
        if (!tbody) return;

        tbody.innerHTML = this.managers.map(manager => `
            <tr>
                <td>${manager.id}</td>
                <td>${manager.name}</td>
                <td>${manager.email}</td>
                <td>${manager.phone}</td>
                <td>${manager.createdAt}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-outline edit" onclick="managerManager.editManager(${manager.id})">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                <path d="m15 5 4 4"/>
                            </svg>
                            Edit
                        </button>
                        <button class="btn btn-sm btn-outline delete" onclick="managerManager.deleteManager(${manager.id})">
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

// Initialize manager manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.managerManager = new ManagerManager();
});