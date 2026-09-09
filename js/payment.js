// ============================================
// 📂 js/payment.js - পেমেন্ট ফর্ম (bKash + Nagad)
// ============================================

// ============================================
// ১. হামবার্গার মেনু কন্ট্রোল
// ============================================
document.addEventListener('DOMContentLoaded', function() {
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

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});

// ============================================
// ২. কোর্স প্রিভিউ দেখানো
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const previewContainer = document.getElementById('coursePreview');
    const form = document.getElementById('paymentForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMessage');

    // URL থেকে কোর্স আইডি নিন
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    let selectedCourse = null;

    // কোর্স খুঁজে বের করুন
    if (courseId && typeof coursesData !== 'undefined') {
        selectedCourse = coursesData.find(c => c.id === parseInt(courseId));
    }

    // ============================================
    // ৩. কোর্স প্রিভিউ HTML তৈরি করুন
    // ============================================
    if (selectedCourse) {
        // ক্যাটাগরি ব্যাজ
        let categoryBadge = '';
        switch(selectedCourse.category) {
            case 'acs27': categoryBadge = 'ACS 27'; break;
            case 'acs28': categoryBadge = 'ACS 28'; break;
            case 'admission': categoryBadge = 'এডমিশন'; break;
            case 'engineering': categoryBadge = 'ইঞ্জিনিয়ারিং'; break;
            case 'varsity': categoryBadge = 'ভার্সিটি'; break;
            case 'medical': categoryBadge = 'মেডিকেল'; break;
            case 'class10': categoryBadge = '১০ম শ্রেণি'; break;
            default: categoryBadge = 'জেনারেল';
        }

        previewContainer.innerHTML = `
            <img src="${selectedCourse.image || 'images/default-course.jpg'}" 
                 alt="${selectedCourse.name}" 
                 onerror="this.src='images/default-course.jpg'" />
            <div class="preview-body">
                <span class="badge">${categoryBadge}</span>
                <h2>${selectedCourse.name}</h2>
                <div class="meta">
                    <span>⏱ ${selectedCourse.duration || 'N/A'}</span>
                    <span>👨‍🏫 ${selectedCourse.instructor || 'ACS টিম'}</span>
                    ${selectedCourse.cycle ? `<span>🔄 সাইকেল ${selectedCourse.cycle}</span>` : ''}
                </div>
                <div class="price-large">💰 ${selectedCourse.price}</div>
                <div class="description">
                    ${selectedCourse.fullDesc || selectedCourse.shortDesc || 'কোর্স সম্পর্কে বিস্তারিত তথ্য।'}
                </div>
            </div>
        `;
    } else {
        previewContainer.innerHTML = `
            <div style="padding:40px;text-align:center;color:var(--gray);">
                <div style="font-size:48px;margin-bottom:12px;">❌</div>
                <h3>কোর্স খুঁজে পাওয়া যায়নি</h3>
                <p style="font-size:14px;">সঠিক কোর্স নির্বাচন করে আবার চেষ্টা করুন</p>
                <a href="courses.html" class="btn-secondary" style="margin-top:16px;">সব কোর্স দেখুন</a>
            </div>
        `;
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            submitBtn.style.cursor = 'not-allowed';
        }
    }

    // ============================================
    // ৪. পেমেন্ট মেথড (bKash + Nagad)
    // ============================================
    const methodBtns = document.querySelectorAll('.method-btn');
    const paymentMethodInput = document.getElementById('paymentMethod');

    // ডিফল্ট: bKash সিলেক্টেড
    if (paymentMethodInput) {
        paymentMethodInput.value = 'bKash';
    }

    methodBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // সব বাটন থেকে active সরান
            methodBtns.forEach(b => b.classList.remove('active'));
            // এই বাটনে active যোগ করুন
            this.classList.add('active');
            // হিডেন ইনপুটে মান সেট করুন
            if (paymentMethodInput) {
                paymentMethodInput.value = this.dataset.method;
            }
        });
    });

    // ============================================
    // ৫. ফর্ম সাবমিট হ্যান্ডলার
    // ============================================
    if (form && selectedCourse) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // ফর্মের ডাটা নিন
            const tgUsername = document.getElementById('tgUsername').value.trim();
            const paymentMethod = document.getElementById('paymentMethod').value;
            const senderNumber = document.getElementById('senderNumber').value.trim();
            const trxId = document.getElementById('trxId').value.trim();

            // সব error হাইড করুন
            document.querySelectorAll('.error-text').forEach(el => el.classList.remove('show'));
            document.querySelectorAll('.form-group input, .form-group select').forEach(el => el.classList.remove('error'));

            let isValid = true;

            // ইউজারনেম ভ্যালিডেশন
            if (!tgUsername || !tgUsername.startsWith('@')) {
                document.getElementById('tgUsernameError').classList.add('show');
                document.getElementById('tgUsername').classList.add('error');
                isValid = false;
            }

            // পেমেন্ট মেথড ভ্যালিডেশন
            if (!paymentMethod) {
                document.getElementById('paymentMethodError').classList.add('show');
                document.getElementById('paymentMethod').classList.add('error');
                isValid = false;
            }

            // নম্বর ভ্যালিডেশন
            const bdPhoneRegex = /^(01[3-9]\d{8})$/;
            if (!bdPhoneRegex.test(senderNumber)) {
                document.getElementById('senderNumberError').classList.add('show');
                document.getElementById('senderNumber').classList.add('error');
                isValid = false;
            }

            // ট্রানজেকশন আইডি ভ্যালিডেশন
            if (trxId.length < 6) {
                document.getElementById('trxIdError').classList.add('show');
                document.getElementById('trxId').classList.add('error');
                isValid = false;
            }

            if (!isValid) return;

            // ============================================
            // ৬. টেলিগ্রাম মেসেজ তৈরি
            // ============================================
            const message = `📚 *নতুন কোর্স এনরোলমেন্ট*\n\n` +
                `🔰 *কোর্স:* ${selectedCourse.name}\n` +
                `💰 *টাকা:* ${selectedCourse.price}\n` +
                `🏦 *পেমেন্ট মেথড:* ${paymentMethod}\n` +
                `📱 *সেন্ডার নম্বর:* ${senderNumber}\n` +
                `🧾 *ট্রানজেকশন আইডি:* ${trxId}\n` +
                `👤 *ইউজার:* ${tgUsername}\n\n` +
                `📅 *তারিখ:* ${new Date().toLocaleString('bn-BD')}`;

            // ============================================
            // ৭. টেলিগ্রামে পাঠান
            // ============================================
            // ⚠️ এখানে আপনার বটের ইউজারনেম দিন
            const botUsername = 'STUDY_ROOM_MY_bot'; // 👈 পরিবর্তন করুন!
            
            const tgLink = `https://t.me/${botUsername}?text=${encodeURIComponent(message)}`;
            window.open(tgLink, '_blank');

            // ============================================
            // ৮. সফল মেসেজ দেখান
            // ============================================
            form.style.display = 'none';
            if (successMsg) {
                successMsg.style.display = 'block';
                successMsg.style.animation = 'fadeInUp 0.5s ease';
            }
        });
    }

    // ============================================
    // ৯. ইনপুট ফিল্ডে লাইভ ভ্যালিডেশন
    // ============================================
    const tgInput = document.getElementById('tgUsername');
    if (tgInput) {
        tgInput.addEventListener('input', function() {
            if (this.value.length > 0 && !this.value.startsWith('@')) {
                this.value = '@' + this.value.replace(/^@+/, '');
            }
            if (this.value.startsWith('@') && this.value.length > 1) {
                this.classList.remove('error');
                document.getElementById('tgUsernameError').classList.remove('show');
            }
        });
    }

    const numberInput = document.getElementById('senderNumber');
    if (numberInput) {
        numberInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 11) {
                this.value = this.value.slice(0, 11);
            }
            if (this.value.length === 11) {
                this.classList.remove('error');
                document.getElementById('senderNumberError').classList.remove('show');
            }
        });
    }

    const trxInput = document.getElementById('trxId');
    if (trxInput) {
        trxInput.addEventListener('input', function() {
            if (this.value.length >= 6) {
                this.classList.remove('error');
                document.getElementById('trxIdError').classList.remove('show');
            }
        });
    }
});
