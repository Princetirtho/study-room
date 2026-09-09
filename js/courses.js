// ============================================
// 📚 courses.js - ৩ স্তরের হায়ারার্কিক্যাল ফিল্টার
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

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ===== ফিল্টার ভেরিয়েবল =====
    let currentType = 'all';        // 'all', 'paid', 'free'
    let currentCategory = 'all';   // 'all', 'acs27', 'acs28', 'bp27', 'bp28', 'admission', 'engineering', 'medical', 'varsity', 'class10'
    let currentSubCategory = 'all'; // 'all', 'physics', 'chemistry', 'biology', 'math', 'ict'

    // ===== DOM এলিমেন্ট =====
    const container = document.getElementById('course-container');
    const typeFilterButtons = document.getElementById('typeFilterButtons');
    const categoryFilterButtons = document.getElementById('categoryFilterButtons');
    const subFilterButtons = document.getElementById('subFilterButtons');
    const subFilterGroup = document.getElementById('subFilterGroup');
    const filterCount = document.getElementById('filterCount');
    const filterBadge = document.getElementById('filterBadge');

    // ===== ক্যাটাগরি লেবেল =====
    const categoryLabels = {
        'acs27': '📘 ACS 27',
        'acs28': '📗 ACS 28',
        'bp27': '📘 BP 27',
        'bp28': '📗 BP 28',
        'admission': '🎯 এডমিশন',
        'engineering': '🏛 ইঞ্জিনিয়ারিং',
        'medical': '🏥 মেডিকেল',
        'varsity': '🏛 ভার্সিটি',
        'class10': '📚 ১০ম শ্রেণি',
        'free': '🎁 ফ্রি কোর্স'
    };

    const subCategoryLabels = {
        'physics': '⚛️ ফিজিক্স',
        'chemistry': '🧪 কেমিস্ট্রি',
        'biology': '🧬 জীববিজ্ঞান',
        'math': '📐 গণিত',
        'ict': '💻 আইসিটি'
    };

    // ===== টাইপ অনুযায়ী ক্যাটাগরি পাওয়া =====
    function getCategoriesByType(type) {
        let filtered = [...coursesData];
        
        // টাইপ ফিল্টার
        if (type !== 'all') {
            filtered = filtered.filter(c => c.type === type);
        }
        
        // ক্যাটাগরি গুলো সংগ্রহ
        const cats = new Set();
        filtered.forEach(c => cats.add(c.category));
        
        // 'free' ক্যাটাগরি থাকলে সেটা রাখবো, না থাকলে বাদ
        const result = ['all', ...Array.from(cats)];
        return result;
    }

    // ===== ক্যাটাগরি অনুযায়ী সাব-ক্যাটাগরি পাওয়া =====
    function getSubCategoriesByCategory(category, type) {
        let filtered = [...coursesData];
        
        // টাইপ ফিল্টার
        if (type !== 'all') {
            filtered = filtered.filter(c => c.type === type);
        }
        
        // ক্যাটাগরি ফিল্টার
        if (category !== 'all') {
            filtered = filtered.filter(c => c.category === category);
        }
        
        const subs = new Set();
        filtered.forEach(c => subs.add(c.subCategory));
        return ['all', ...Array.from(subs)];
    }

    // ===== ফিল্টার বাটন তৈরি =====
    function renderFilterButtons() {
        // ===== ১ম স্তর: Type (All, Paid, Free) =====
        const typeButtons = [
            { value: 'all', label: '📚 সব' },
            { value: 'paid', label: '💳 পেইড' },
            { value: 'free', label: '🎁 ফ্রি' }
        ];

        let typeHTML = '';
        typeButtons.forEach(btn => {
            const active = currentType === btn.value ? 'active' : '';
            const extraClass = btn.value === 'free' && active ? 'type-free' : '';
            typeHTML += `<button class="filter-btn ${active} ${extraClass}" data-type="${btn.value}">${btn.label}</button>`;
        });
        typeFilterButtons.innerHTML = typeHTML;

        // ===== ২য় স্তর: Category (বর্তমান টাইপ অনুযায়ী) =====
        const categories = getCategoriesByType(currentType);
        let catHTML = '';
        categories.forEach(cat => {
            const active = currentCategory === cat ? 'active' : '';
            let label = cat === 'all' ? '📂 সব' : (categoryLabels[cat] || cat);
            catHTML += `<button class="filter-btn ${active}" data-category="${cat}">${label}</button>`;
        });
        categoryFilterButtons.innerHTML = catHTML;

        // ===== ৩য় স্তর: Sub-category (বর্তমান টাইপ + ক্যাটাগরি অনুযায়ী) =====
        const subCategories = getSubCategoriesByCategory(currentCategory, currentType);
        let subHTML = '';
        subCategories.forEach(sub => {
            const active = currentSubCategory === sub ? 'active-secondary' : '';
            const label = sub === 'all' ? '📖 সব' : (subCategoryLabels[sub] || sub);
            subHTML += `<button class="filter-btn ${active}" data-sub="${sub}">${label}</button>`;
        });
        subFilterButtons.innerHTML = subHTML;

        // সাব-ফিল্টার গ্রুপ দেখান/লুকান
        if (currentCategory !== 'all' && subCategories.length > 1) {
            subFilterGroup.classList.remove('hidden');
        } else {
            subFilterGroup.classList.add('hidden');
            if (currentCategory === 'all') {
                currentSubCategory = 'all';
            }
        }
    }

    // ===== ফিল্টার ইভেন্ট =====
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        // ===== ১ম স্তর: Type =====
        if (btn.dataset.type) {
            const newType = btn.dataset.type;
            
            if (currentType === newType) {
                currentType = 'all';
            } else {
                currentType = newType;
            }
            
            // ক্যাটাগরি ও সাব রিসেট
            currentCategory = 'all';
            currentSubCategory = 'all';
            
            renderFilterButtons();
            applyFilters();
            return;
        }

        // ===== ২য় স্তর: Category =====
        if (btn.dataset.category) {
            const newCategory = btn.dataset.category;
            
            if (currentCategory === newCategory) {
                currentCategory = 'all';
                currentSubCategory = 'all';
            } else {
                currentCategory = newCategory;
                currentSubCategory = 'all';
            }
            
            renderFilterButtons();
            applyFilters();
            return;
        }

        // ===== ৩য় স্তর: Sub-category =====
        if (btn.dataset.sub) {
            const newSub = btn.dataset.sub;
            
            if (currentSubCategory === newSub) {
                currentSubCategory = 'all';
            } else {
                currentSubCategory = newSub;
            }
            
            renderFilterButtons();
            applyFilters();
            return;
        }
    });

    // ===== ফিল্টার অ্যাপ্লাই =====
    function applyFilters() {
        let filtered = [...coursesData];

        // ===== টাইপ ফিল্টার =====
        if (currentType !== 'all') {
            filtered = filtered.filter(c => c.type === currentType);
        }

        // ===== ক্যাটাগরি ফিল্টার =====
        if (currentCategory !== 'all') {
            filtered = filtered.filter(c => c.category === currentCategory);
        }

        // ===== সাব-ক্যাটাগরি ফিল্টার =====
        if (currentSubCategory !== 'all') {
            filtered = filtered.filter(c => c.subCategory === currentSubCategory);
        }

        // রেন্ডার
        renderCourses(filtered);

        // কাউন্ট আপডেট
        filterCount.textContent = filtered.length;

        // ব্যাজ দেখান
        if (currentType !== 'all' || currentCategory !== 'all' || currentSubCategory !== 'all') {
            filterBadge.style.display = 'inline';
        } else {
            filterBadge.style.display = 'none';
        }
    }

    // ===== কোর্স রেন্ডার =====
    function renderCourses(courses) {
        if (!container) return;

        if (courses.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                    <div style="font-size: 64px; margin-bottom: 16px;">🔍</div>
                    <h3 style="color: var(--gray); font-size: 22px;">কোনো কোর্স খুঁজে পাওয়া যায়নি</h3>
                    <p style="color: var(--gray-light); margin-top: 8px;">অন্য ফিল্টার নির্বাচন করুন অথবা <button onclick="clearAllFilters()" style="color: var(--primary); background: none; border: none; cursor: pointer; font-weight: 600; text-decoration: underline;">ফিল্টার রিসেট</button> করুন</p>
                </div>
            `;
            return;
        }

        let html = '';
        courses.forEach(course => {
            // ক্যাটাগরি ব্যাজ
            let badge = categoryLabels[course.category] || course.category;
            
            // ফ্রি/পেইড ব্যাজ
            let typeBadge = course.type === 'free' 
                ? '<span style="background: #22c55e; color: white; padding: 2px 10px; border-radius: 50px; font-size: 11px;">🎁 ফ্রি</span>' 
                : '<span style="background: var(--primary); color: white; padding: 2px 10px; border-radius: 50px; font-size: 11px;">💳 পেইড</span>';

            // বাটন তৈরি (ফ্রি হলে জয়েন, পেইড হলে কিনুন)
            let actionButton = '';
            if (course.type === 'free') {
                actionButton = `
                    <a href="${course.telegramLink || '#'}" target="_blank" class="btn-buy" style="background: #22c55e;">
                        📢 জয়েন করুন
                    </a>
                `;
            } else {
                actionButton = `
                    <a href="payment.html?id=${course.id}" class="btn-buy">🛒 এখনই কিনুন</a>
                `;
            }

            html += `
                <div class="course-card">
                    <img src="${course.image || 'images/default-course.jpg'}" 
                         alt="${course.name}" 
                         onerror="this.src='images/default-course.jpg'" />
                    <div class="card-body">
                        <h3>
                            ${course.name}
                            ${typeBadge}
                        </h3>
                        <p>${course.shortDesc || ''}</p>
                        <div style="display:flex; gap:6px; flex-wrap:wrap; margin: 6px 0;">
                            <span style="background:var(--light); padding:2px 10px; border-radius:50px; font-size:12px;">${badge}</span>
                            ${course.cycle ? `<span style="background:var(--light); padding:2px 10px; border-radius:50px; font-size:12px;">সাইকেল ${course.cycle}</span>` : ''}
                        </div>
                        <div class="price">${course.price}</div>
                        <div class="btn-group">
                            <a href="course-details.html?id=${course.id}" class="btn-details">📖 বিস্তারিত</a>
                            ${actionButton}
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    // ===== ফিল্টার রিসেট =====
    window.clearAllFilters = function() {
        currentType = 'all';
        currentCategory = 'all';
        currentSubCategory = 'all';
        renderFilterButtons();
        applyFilters();
    };

    // ===== ফুটার ক্যাটাগরি লিংক =====
    function renderFooterCategories() {
        const footerDiv = document.getElementById('footerCategories');
        if (!footerDiv) return;
        
        const categories = getCategoriesByType('all');
        let html = '';
        categories.forEach(cat => {
            if (cat === 'all') return;
            const label = categoryLabels[cat] || cat;
            html += `<a href="courses.html?category=${cat}">${label}</a>`;
        });
        footerDiv.innerHTML = html;
    }

    // ===== ইউআরএল থেকে ক্যাটাগরি পড়া =====
    function getCategoryFromURL() {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category');
        if (cat && categoryLabels[cat]) {
            currentCategory = cat;
            currentType = 'all';
        }
    }

    // ===== ইনিশিয়ালাইজ =====
    getCategoryFromURL();
    renderFilterButtons();
    renderFooterCategories();
    applyFilters();

    console.log('✅ Courses Loaded:', coursesData.length);
});