// ============================================
// 📚 main.js - হোম পেজের জন্য (প্রায়োরিটি ভিত্তিক)
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
    
    // ===== হোম পেজে ফিচার্ড কোর্স দেখানো =====
    const homeContainer = document.getElementById('home-courses');
    
    if (homeContainer && typeof coursesData !== 'undefined') {
        
        // ==========================================
        // 🔥 প্রায়োরিটি কোর্স লিস্ট (আপনার ইচ্ছামতো)
        // এখানে যেসব কোর্স দেখাতে চান তার ID দিন
        // ==========================================
        const priorityCourseIds = [
            1, // ACS 27 - ফিজিক্স C1 (ফ্রি)
            8, // ACS 27 - জীববিজ্ঞান C1 (ফ্রি)
            15, // ACS 27 - গণিত C1 (ফ্রি)
            22, // ACS 27 - কেমিস্ট্রি C1 (ফ্রি)
            29, // ACS 28 - ফিজিক্স C1 (ফ্রি)
            57, // ACS 26 - এডমিশন ফিজিক্স (পেইড)
            61, // ইঞ্জিনিয়ারিং - ফিজিক্স (পেইড)
            64 // মেডিকেল - জীববিজ্ঞান (পেইড)
        ];
        
        // ===== প্রায়োরিটি অনুযায়ী কোর্স পাওয়া =====
        function getPriorityCourses() {
            const featured = [];
            const usedIds = new Set();
            
            // ১. প্রথমে প্রায়োরিটি আইডি অনুযায়ী কোর্স নেওয়া
            priorityCourseIds.forEach(id => {
                const course = coursesData.find(c => c.id === id);
                if (course && !usedIds.has(course.id)) {
                    featured.push(course);
                    usedIds.add(course.id);
                }
            });
            
            // ২. যদি ৮টির কম হয়, তাহলে বাকি জায়গা পূরণ করতে
            // কিছু অতিরিক্ত কোর্স যোগ করা (প্রথমে ফ্রি, তারপর পেইড)
            if (featured.length < 8) {
                const remaining = coursesData.filter(c =>
                    !usedIds.has(c.id) &&
                    (c.type === 'free' || c.cycle === 'C1')
                );
                
                const extra = remaining.slice(0, 8 - featured.length);
                extra.forEach(c => {
                    featured.push(c);
                    usedIds.add(c.id);
                });
            }
            
            return featured;
        }
        
        const featuredCourses = getPriorityCourses();
        
        // ===== কোর্স কার্ড রেন্ডার =====
        function renderHomeCourses(courses) {
            if (courses.length === 0) {
                homeContainer.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px;">
                        <p style="color: var(--gray);">কোনো কোর্স পাওয়া যায়নি</p>
                    </div>
                `;
                return;
            }
            
            // ক্যাটাগরি লেবেল
            const categoryLabels = {
                'acs27': '📘 ACS 27',
                'acs28': '📗 ACS 28',
                'bp27': '📘 BP 27',
                'bp28': '📗 BP 28',
                'admission': '🎯 এডমিশন',
                'engineering': '🏛 ইঞ্জিনিয়ারিং',
                'medical': '🏥 মেডিকেল',
                'class10': '📚 ১০ম শ্রেণি',
                'varsity': '🏛 ভার্সিটি',
                'free': '🎁 ফ্রি'
            };
            
            let html = '';
            courses.forEach(course => {
                let badge = categoryLabels[course.category] || course.category;
                
                let typeBadge = course.type === 'free' ?
                    '<span style="background: #22c55e; color: white; padding: 2px 10px; border-radius: 50px; font-size: 11px;">🎁 ফ্রি</span>' :
                    '<span style="background: var(--primary); color: white; padding: 2px 10px; border-radius: 50px; font-size: 11px;">💳 পেইড</span>';
                
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
            
            homeContainer.innerHTML = html;
        }
        
        renderHomeCourses(featuredCourses);
    }
});
