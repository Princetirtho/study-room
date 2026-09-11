// ============================================
// 📂 js/payment.js - পেমেন্ট + কুপন সিস্টেম
// ============================================

// ============================================
// ১. হামবার্গার মেনু
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
// ২. মূল লজিক
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const previewContainer = document.getElementById('coursePreview');
    const form = document.getElementById('paymentForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMessage');

    // URL থেকে কোর্স আইডি
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    let selectedCourse = null;

    // কোর্স খুঁজুন
    if (courseId && typeof coursesData !== 'undefined') {
        selectedCourse = coursesData.find(c => c.id === parseInt(courseId));
    }

    // ============================================
    // ৩. কুপন ভেরিয়েবল
    // ============================================
    let appliedCoupon = null;   // প্রয়োগ করা কুপন
    let discountAmount = 0;     // ছাড়ের পরিমাণ
    let finalPrice = 0;         // চূড়ান্ত দাম
    let originalPrice = 0;      // আসল দাম

    // দাম থেকে শুধু সংখ্যা বের করার ফাংশন
    function extractPrice(priceStr) {
        if (!priceStr) return 0;
        // বাংলা সংখ্যা থেকে ইংরেজি
        const bnToEn = {
            '০':'0','১':'1','২':'2','৩':'3','৪':'4',
            '৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'
        };
        let str = priceStr.toString();
        str = str.replace(/[০-৯]/g, d => bnToEn[d]);
        // শুধু সংখ্যা ও দশমিক
        const num = parseFloat(str.replace(/[^\d.]/g, ''));
        return isNaN(num) ? 0 : num;
    }

    // সংখ্যা ফরম্যাট (বাংলা)
    function formatPrice(num) {
        return num.toString()
            .replace(/0/g, '০').replace(/1/g, '১').replace(/2/g, '২')
            .replace(/3/g, '৩').replace(/4/g, '৪').replace(/5/g, '৫')
            .replace(/6/g, '৬').replace(/7/g, '৭').replace(/8/g, '৮')
            .replace(/9/g, '৯');
    }

    // ============================================
    // ৪. কোর্স প্রিভিউ দেখানো
    // ============================================
    function renderCoursePreview() {
        if (!selectedCourse) {
            previewContainer.innerHTML = `
                <div style="padding:40px;text-align:center;color:var(--gray);">
                    <div style="font-size:48px;margin-bottom:12px;">❌</div>
                    <h3>কোর্স খুঁজে পাওয়া যায়নি</h3>
                    <p style="font-size:14px;">সঠিক কোর্স নির্বাচন করে আবার চেষ্টা করুন</p>
                    <a href="courses.html" class="btn-secondary" style="margin-top:16px;">সব কোর্স দেখুন</a>
                </div>
            `;
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.5';
                submitBtn.style.cursor = 'not-allowed';
            }
            return;
        }

        // ক্যাটাগরি ব্যাজ
        const categoryLabels = {
            'acs27': 'ACS 27', 'acs28': 'ACS 28',
            'bp27': 'BP 27', 'bp28': 'BP 28',
            'admission': 'এডমিশন', 'engineering': 'ইঞ্জিনিয়ারিং',
            'varsity': 'ভার্সিটি', 'medical': 'মেডিকেল',
            'class10': '১০ম শ্রেণি'
        };
        const categoryBadge = categoryLabels[selectedCourse.category] || 'জেনারেল';

        // আসল দাম বের করুন
        originalPrice = extractPrice(selectedCourse.price);

        // দাম সেকশন HTML
        let priceHTML = '';
        if (appliedCoupon) {
            priceHTML = `
                <div class="price-box">
                    <div class="price-row original">
                        <span>আসল দাম</span>
                        <span class="old-price">৳${formatPrice(originalPrice)}</span>
                    </div>
                    <div class="price-row discount">
                        <span>🎟️ ছাড় (${appliedCoupon.code})</span>
                        <span>-৳${formatPrice(discountAmount)}</span>
                    </div>
                    <div class="price-row total">
                        <span>মোট দাম</span>
                        <span>৳${formatPrice(finalPrice)}</span>
                    </div>
                </div>
            `;
        } else {
            priceHTML = `<div class="price-large">💰 ${selectedCourse.price}</div>`;
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
                ${priceHTML}
                <div class="description">
                    ${selectedCourse.fullDesc || selectedCourse.shortDesc || ''}
                </div>
            </div>
        `;
    }

    // ============================================
    // ৫. কুপন সিস্টেম
    // ============================================
    const couponInput = document.getElementById('couponInput');
    const applyCouponBtn = document.getElementById('applyCouponBtn');
    const couponMessage = document.getElementById('couponMessage');
    const couponSection = document.getElementById('couponSection');
    const couponApplied = document.getElementById('couponApplied');
    const appliedCouponCode = document.getElementById('appliedCouponCode');
    const appliedCouponDiscount = document.getElementById('appliedCouponDiscount');
    const removeCouponBtn = document.getElementById('removeCouponBtn');

    // মেসেজ দেখানোর ফাংশন
    function showCouponMessage(text, type) {
        couponMessage.textContent = text;
        couponMessage.className = 'coupon-message ' + type;
        couponMessage.style.display = 'block';
    }

    // কুপন ভ্যালিডেশন
    function validateCoupon(code, currentCourseId) {
        if (typeof couponsData === 'undefined') {
            return { valid: false, error: '❌ কুপন সিস্টেম লোড হয়নি' };
        }

        // কোড খুঁজুন
        const coupon = couponsData.find(c => 
            c.code.toUpperCase() === code.toUpperCase().trim()
        );

        if (!coupon) {
            return { valid: false, error: '❌ কুপন কোড সঠিক নয়' };
        }

        if (!coupon.active) {
            return { valid: false, error: '❌ কুপন নিষ্ক্রিয়' };
        }

        // মেয়াদ চেক
        if (new Date(coupon.expiryDate) < new Date()) {
            return { valid: false, error: '❌ কুপনের মেয়াদ শেষ' };
        }

        // ব্যবহার সীমা
        if (coupon.usedCount >= coupon.maxUses) {
            return { valid: false, error: '❌ কুপন ব্যবহার সীমা শেষ' };
        }

        // ✅ নির্দিষ্ট কোর্সে কাজ করে কিনা
        if (!coupon.courseIds.includes('all') && 
            !coupon.courseIds.includes(currentCourseId)) {
            return { valid: false, error: '❌ এই কোর্সে কুপন প্রযোজ্য নয়' };
        }

        return { valid: true, coupon: coupon };
    }

    // ছাড় হিসাব
    function calculateDiscount(price, coupon) {
        let discount = 0;
        
        if (coupon.type === 'percentage') {
            discount = (price * coupon.discount) / 100;
        } else {
            discount = coupon.discount;
        }
        
        // ছাড় দামের বেশি হতে পারবে না
        if (discount > price) discount = price;
        
        return Math.round(discount);
    }

    // কুপন প্রয়োগ
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', function() {
            const code = couponInput.value.trim();

            if (!code) {
                showCouponMessage('❌ কুপন কোড লিখুন', 'error');
                couponInput.classList.add('error');
                return;
            }

            if (!selectedCourse) {
                showCouponMessage('❌ আগে একটি কোর্স নির্বাচন করুন', 'error');
                return;
            }

            // ভ্যালিডেশন
            const result = validateCoupon(code, selectedCourse.id);

            if (!result.valid) {
                showCouponMessage(result.error, 'error');
                couponInput.classList.add('error');
                return;
            }

            // ✅ কুপন সফল
            appliedCoupon = result.coupon;
            discountAmount = calculateDiscount(originalPrice, appliedCoupon);
            finalPrice = originalPrice - discountAmount;

            // মেসেজ
            couponInput.classList.remove('error');
            showCouponMessage(`✅ "${appliedCoupon.code}" কুপন প্রয়োগ হয়েছে!`, 'success');

            // কুপন সেকশন লুকান, অ্যাপ্লাইড দেখান
            setTimeout(() => {
                couponSection.style.display = 'none';
                couponApplied.style.display = 'flex';
                appliedCouponCode.textContent = appliedCoupon.code;

                if (appliedCoupon.type === 'percentage') {
                    appliedCouponDiscount.textContent = `${appliedCoupon.discount}% ছাড় (৳${formatPrice(discountAmount)} সাশ্রয়)`;
                } else {
                    appliedCouponDiscount.textContent = `৳${formatPrice(appliedCoupon.discount)} ছাড়`;
                }

                // প্রিভিউ আপডেট
                renderCoursePreview();
            }, 800);
        });
    }

    // কুপন রিমুভ
    if (removeCouponBtn) {
        removeCouponBtn.addEventListener('click', function() {
            appliedCoupon = null;
            discountAmount = 0;
            finalPrice = originalPrice;

            couponInput.value = '';
            couponInput.classList.remove('error');
            couponMessage.style.display = 'none';
            couponMessage.className = 'coupon-message';
            couponSection.style.display = 'block';
            couponApplied.style.display = 'none';

            // প্রিভিউ আপডেট
            renderCoursePreview();
        });
    }

    // Enter চাপলে কুপন প্রয়োগ
    if (couponInput) {
        couponInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyCouponBtn.click();
            }
        });

        // ইনপুট টাইপ করলে error সরান
        couponInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
            this.classList.remove('error');
            couponMessage.style.display = 'none';
        });
    }

    // ============================================
    // ৬. প্রিভিউ রেন্ডার
    // ============================================
    renderCoursePreview();

    // ============================================
    // ৭. পেমেন্ট মেথড
    // ============================================
    const methodBtns = document.querySelectorAll('.method-btn');
    const paymentMethodInput = document.getElementById('paymentMethod');

    if (paymentMethodInput) {
        paymentMethodInput.value = 'bKash';
    }

    methodBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            methodBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            if (paymentMethodInput) {
                paymentMethodInput.value = this.dataset.method;
            }
        });
    });

    // ============================================
    // ৮. ফর্ম সাবমিট
    // ============================================
    if (form && selectedCourse) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const tgUsername = document.getElementById('tgUsername').value.trim();
            const paymentMethod = document.getElementById('paymentMethod').value;
            const senderNumber = document.getElementById('senderNumber').value.trim();
            const trxId = document.getElementById('trxId').value.trim();

            // Error হাইড
            document.querySelectorAll('.error-text').forEach(el => el.classList.remove('show'));
            document.querySelectorAll('.form-group input').forEach(el => el.classList.remove('error'));

            let isValid = true;

            // ইউজারনেম
            if (!tgUsername || !tgUsername.startsWith('@')) {
                document.getElementById('tgUsernameError').classList.add('show');
                document.getElementById('tgUsername').classList.add('error');
                isValid = false;
            }

            // নম্বর
            const bdPhoneRegex = /^(01[3-9]\d{8})$/;
            if (!bdPhoneRegex.test(senderNumber)) {
                document.getElementById('senderNumberError').classList.add('show');
                document.getElementById('senderNumber').classList.add('error');
                isValid = false;
            }

            // ট্রানজেকশন
            if (trxId.length < 6) {
                document.getElementById('trxIdError').classList.add('show');
                document.getElementById('trxId').classList.add('error');
                isValid = false;
            }

            if (!isValid) return;

            // ============================================
            // টেলিগ্রাম মেসেজ
            // ============================================
            let message = `📚 *নতুন কোর্স এনরোলমেন্ট*\n\n` +
                `🔰 *কোর্স:* ${selectedCourse.name}\n`;

            if (appliedCoupon) {
                message += `💰 *আসল দাম:* ৳${formatPrice(originalPrice)}\n` +
                    `🎟️ *কুপন:* ${appliedCoupon.code} (${appliedCoupon.discount}${appliedCoupon.type === 'percentage' ? '%' : '৳'} ছাড়)\n` +
                    `💰 *ছাড়:* -৳${formatPrice(discountAmount)}\n` +
                    `💰 *মোট দাম:* ৳${formatPrice(finalPrice)}\n`;
            } else {
                message += `💰 *দাম:* ${selectedCourse.price}\n`;
            }

            message += `🏦 *পেমেন্ট মেথড:* ${paymentMethod}\n` +
                `📱 *সেন্ডার নম্বর:* ${senderNumber}\n` +
                `🧾 *ট্রানজেকশন আইডি:* ${trxId}\n` +
                `👤 *ইউজার:* ${tgUsername}\n\n` +
                `📅 *তারিখ:* ${new Date().toLocaleString('bn-BD')}`;

            // টেলিগ্রামে পাঠান
            const botUsername = 'STUDY_ROOM_MY_bot'; // 👈 আপনার বট ইউজারনেম
            const tgLink = `https://t.me/${botUsername}?text=${encodeURIComponent(message)}`;
            window.open(tgLink, '_blank');

            // সফল মেসেজ
            form.style.display = 'none';
            if (successMsg) {
                successMsg.style.display = 'block';
                successMsg.style.animation = 'fadeInUp 0.5s ease';
            }
        });
    }

    // ============================================
    // ৯. লাইভ ভ্যালিডেশন
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
