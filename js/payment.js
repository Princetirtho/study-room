// ============================================
// 📚 payment.js - পেমেন্ট পেজের JS (bKash + Nagad)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ===== হামবার্গার মেনু =====
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');

    if (hamburgerBtn && mobileMenu && overlay) {
        hamburgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        overlay.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // ===== কোর্স ডিটেইল দেখানো =====
    const previewContainer = document.getElementById('coursePreview');
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    if (previewContainer && typeof coursesData !== 'undefined') {
        const course = coursesData.find(c => c.id === parseInt(courseId));

        if (course) {
            // ক্যাটাগরি ব্যাজ
            const categoryLabels = {
                'acs27': 'ACS 27',
                'acs28': 'ACS 28',
                'bp27': 'BP 27',
                'bp28': 'BP 28',
                'admission': '🎯 এডমিশন',
                'engineering': '🏛 ইঞ্জিনিয়ারিং',
                'medical': '🏥 মেডিকেল',
                'varsity': '🏛 ভার্সিটি',
                'class10': '📚 ১০ম শ্রেণি',
                'free': '🎁 ফ্রি'
            };
            let categoryBadge = categoryLabels[course.category] || 'জেনারেল';

            previewContainer.innerHTML = `
                <img src="${course.image || 'images/default-course.jpg'}" 
                     alt="${course.name}" 
                     onerror="this.src='images/default-course.jpg'" />
                <div class="preview-body">
                    <span class="badge">${categoryBadge}</span>
                    <h2>${course.name}</h2>
                    <div class="meta">
                        <span>⏱ ${course.duration || 'N/A'}</span>
                        <span>👨‍🏫 ${course.instructor || 'ACS টিম'}</span>
                    </div>
                    <div class="price-large">💰 ${course.price}</div>
                    <div class="description">${course.shortDesc || ''}</div>
                </div>
            `;
        }
    }

    // ===== পেমেন্ট মেথড সিলেক্ট (bKash + Nagad) =====
    const methodBtns = document.querySelectorAll('.method-btn');
    const paymentMethodInput = document.getElementById('paymentMethod');

    methodBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // সব বাটন থেকে active সরান
            methodBtns.forEach(b => b.classList.remove('active'));
            // এই বাটনে active যোগ করুন
            this.classList.add('active');
            // হিডেন ইনপুটে মান সেট করুন
            paymentMethodInput.value = this.dataset.method;
        });
    });

    // ===== ফর্ম সাবমিট =====
    const form = document.getElementById('paymentForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    // ভ্যালিডেশন ফাংশন
    function validateField(id, errorId, condition) {
        const input = document.getElementById(id);
        const error = document.getElementById(errorId);
        
        if (!condition(input.value)) {
            input.classList.add('error');
            error.classList.add('show');
            return false;
        } else {
            input.classList.remove('error');
            error.classList.remove('show');
            return true;
        }
    }

    // টেলিগ্রাম ইউজারনেম ভ্যালিডেশন
    function validateTelegram(username) {
        return username.trim().startsWith('@') && username.trim().length > 1;
    }

    // নম্বর ভ্যালিডেশন
    function validateNumber(number) {
        return /^01[3-9]\d{8}$/.test(number.trim());
    }

    // ট্রানজেকশন আইডি ভ্যালিডেশন
    function validateTrxId(trx) {
        return trx.trim().length >= 6;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // সব error লুকান
        document.querySelectorAll('.error-text').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.form-group input').forEach(el => el.classList.remove('error'));

        // ভ্যালিডেশন
        const isTelegramValid = validateField('tgUsername', 'tgUsernameError', validateTelegram);
        const isNumberValid = validateField('senderNumber', 'senderNumberError', validateNumber);
        const isTrxValid = validateField('trxId', 'trxIdError', validateTrxId);

        if (!isTelegramValid || !isNumberValid || !isTrxValid) {
            return;
        }

        // ডেটা সংগ্রহ
        const paymentMethod = paymentMethodInput.value;
        const tgUsername = document.getElementById('tgUsername').value.trim();
        const senderNumber = document.getElementById('senderNumber').value.trim();
        const trxId = document.getElementById('trxId').value.trim();

        // কনসোলে দেখান (ডেভেলপমেন্ট)
        console.log('📨 পেমেন্ট রিকোয়েস্ট:');
        console.log('পেমেন্ট মেথড:', paymentMethod);
        console.log('টেলিগ্রাম ইউজারনেম:', tgUsername);
        console.log('সেন্ডার নম্বর:', senderNumber);
        console.log('ট্রানজেকশন আইডি:', trxId);

        // ✅ সফল মেসেজ দেখান
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // (ঐচ্ছিক) অ্যাডমিনকে টেলিগ্রাম/ইমেইলে পাঠানোর কোড এখানে যোগ করুন
    });

    // ===== ফুটার ক্যাটাগরি =====
    function renderFooterCategories() {
        const footerDiv = document.getElementById('footerCategories');
        if (!footerDiv || typeof coursesData === 'undefined') return;

        const categoryLabels = {
            'acs27': '📘 ACS 27',
            'acs28': '📗 ACS 28',
            'bp27': '📘 BP 27',
            'bp28': '📗 BP 28',
            'admission': '🎯 এডমিশন',
            'engineering': '🏛 ইঞ্জিনিয়ারিং',
            'medical': '🏥 মেডিকেল',
            'varsity': '🏛 ভার্সিটি',
            'class10': '📚 ১০ম শ্রেণি'
        };

        const cats = new Set();
        coursesData.forEach(c => cats.add(c.category));

        let html = '';
        cats.forEach(cat => {
            const label = categoryLabels[cat] || cat;
            html += `<a href="courses.html?category=${cat}">${label}</a>`;
        });
        footerDiv.innerHTML = html;
    }

    renderFooterCategories();
});
