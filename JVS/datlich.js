document.addEventListener('DOMContentLoaded', () => {
    // --- DANH SÁCH BÁC SĨ VÀ GÓI DỊCH VỤ (Ví dụ) ---
    const doctorsAndServices = [
        { id: 'bs_tam', type: 'doctor', name_vi: 'BS. Nguyễn Văn Tâm (Tim Mạch)', name_en: 'Dr. Nguyen Van Tam (Cardiology)' },
        { id: 'bs_xuan', type: 'doctor', name_vi: 'BS. Trần Thị Xuân (Sản Phụ Khoa)', name_en: 'Dr. Tran Thi Xuan (Obstetrics & Gynecology)' },
        { id: 'bs_lieu', type: 'doctor', name_vi: 'BS. Lê Văn Liễu (Nha Khoa)', name_en: 'Dr. Le Van Lieu (Dentistry)' },
        { id: 'goi_kham_tong_quat', type: 'service', name_vi: 'Gói Khám Sức Khỏe Tổng Quát', name_en: 'General Health Check-up Package' },
        { id: 'goi_tam_soat_ung_thu', type: 'service', name_vi: 'Gói Tầm Soát Ung Thư Cơ Bản', name_en: 'Basic Cancer Screening Package' }
    ];

    // --- I18N OBJECT (Thêm key mới) ---
    const i18n = {
        en: {
            pageTitleBooking: "Book Appointment",
            settingsAriaLabel: "Settings",
            settingsChangeTheme: "Toggle Theme",
            settingsChangeLanguage: "Switch Language",
            settingsHelp: "Help",
            bookingTitle: "Book an Appointment",
            // bookingWithDr: "Booking with: ", // Không còn dùng trực tiếp
            selectDoctorServiceLabel: "Select Doctor / Service Package:", // MỚI
            selectOptionDefault: "-- Please select --", // MỚI (Cho select bác sĩ/gói)
            patientNameLabel: "Full Name:",
            patientPhoneLabel: "Phone Number:",
            patientEmailLabel: "Email (Optional):",
            appointmentDateLabel: "Preferred Date:",
            appointmentTimeLabel: "Preferred Time:",
            selectTimeOption: "-- Select Time --",
            appointmentNotesLabel: "Notes:",
            notesPlaceholder: "Symptoms, reason for visit,...",
            submitButton: "Request Appointment",
            backButtonText: "Back",
            themeTextDark: "Dark Mode",
            themeTextLight: "Light Mode",
            validationRequired: "This field is required.",
            validationSelectDoctorService: "Please select a doctor or service.", // MỚI
            validationInvalidEmail: "Please enter a valid email address.",
            validationInvalidPhone: "Please enter a valid phone number (10-13 digits).",
            validationDateInPast: "Appointment date cannot be in the past.",
            validationTimeRequired: "Please select an appointment time.",
            formSuccessMessage: "Appointment requested successfully for {service}! We will contact you shortly.", // MỚI: {service}
            formErrorMessage: "Please correct the errors in the form."
        },
        vi: {
            pageTitleBooking: "Đặt Lịch Hẹn",
            settingsAriaLabel: "Cài đặt",
            settingsChangeTheme: "Đổi Chế độ",
            settingsChangeLanguage: "Đổi Ngôn ngữ",
            settingsHelp: "Trợ giúp",
            bookingTitle: "Đặt Lịch Hẹn",
            // bookingWithDr: "Đặt lịch với: ", // Không còn dùng trực tiếp
            selectDoctorServiceLabel: "Chọn Bác sĩ / Gói dịch vụ:", // MỚI
            selectOptionDefault: "-- Vui lòng chọn --", // MỚI
            patientNameLabel: "Họ và Tên:",
            patientPhoneLabel: "Số Điện Thoại:",
            patientEmailLabel: "Email (Không bắt buộc):",
            appointmentDateLabel: "Ngày Hẹn:",
            appointmentTimeLabel: "Giờ Hẹn:",
            selectTimeOption: "-- Chọn giờ --",
            appointmentNotesLabel: "Ghi Chú:",
            notesPlaceholder: "Triệu chứng, lý do khám,...",
            submitButton: "Gửi Yêu Cầu",
            backButtonText: "Quay lại",
            themeTextDark: "Chế Độ Tối",
            themeTextLight: "Chế Độ Sáng",
            validationRequired: "Vui lòng không để trống.",
            validationSelectDoctorService: "Vui lòng chọn bác sĩ hoặc gói dịch vụ.", // MỚI
            validationInvalidEmail: "Vui lòng nhập email hợp lệ.",
            validationInvalidPhone: "Vui lòng nhập số điện thoại hợp lệ (10-13 số).",
            validationDateInPast: "Ngày hẹn không thể ở quá khứ.",
            validationTimeRequired: "Vui lòng chọn giờ hẹn.",
            formSuccessMessage: "Yêu cầu đặt lịch cho {service} thành công! Chúng tôi sẽ sớm liên hệ.", // MỚI: {service}
            formErrorMessage: "Vui lòng sửa các lỗi trong biểu mẫu."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'vi';
    let currentTheme = localStorage.getItem('theme') || 'dark';

    const settingsContainer = document.getElementById('settingsContainer');
    const settingsButton = document.getElementById('settingsButton');
    const settingsOptions = document.getElementById('settingsOptions');
    const toggleThemeOptionButton = document.getElementById('toggleThemeOption');
    const settingsThemeIcon = document.getElementById('settingsThemeIcon');
    const toggleLanguageOptionButton = document.getElementById('toggleLanguageOption');
    const backButton = document.getElementById('backButton');
    const appointmentForm = document.getElementById('appointmentForm');
    const formFeedback = document.getElementById('form-feedback');
    // const doctorNameDisplay = document.getElementById('doctorNameDisplay'); // Không còn dùng trực tiếp nữa
    const selectDoctorService = document.getElementById('selectDoctorService'); // Element MỚI

    // --- LANGUAGE FUNCTIONALITY ---
    function applyTranslations(lang) {
        const texts = i18n[lang];
        if (!texts) return;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (texts[key]) {
                 // Check if it's the selectDoctorService to handle its default option
                if (element.id === 'selectDoctorService' && element.tagName === 'SELECT') {
                    const defaultOption = element.querySelector('option[value=""]');
                    if (defaultOption && texts.selectOptionDefault) {
                        defaultOption.textContent = texts.selectOptionDefault;
                    }
                } else {
                    element.textContent = texts[key];
                }
            }
        });
        // ... (phần còn lại của applyTranslations giữ nguyên)
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            if (texts[key]) {
                element.setAttribute('aria-label', texts[key]);
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (texts[key]) {
                element.placeholder = texts[key];
            }
        });
        const pageTitleKey = document.querySelector('title').getAttribute('data-i18n'); // Lấy từ thẻ title
        if (pageTitleKey && texts[pageTitleKey]) {
            document.title = texts[pageTitleKey];
        }

        document.documentElement.lang = lang;
        populateDoctorServiceSelect(); // Tải lại select khi đổi ngôn ngữ
    }

    function changeLanguage(lang) {
        currentLang = lang;
        applyTranslations(currentLang);
        localStorage.setItem('lang', currentLang);
        updateSettingsThemeButtonText();
    }

    // --- THEME FUNCTIONALITY (Giữ nguyên) ---
     function applyTheme(theme) {
        currentTheme = theme;
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        if (settingsThemeIcon) {
            settingsThemeIcon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
        localStorage.setItem('theme', currentTheme);
        updateSettingsThemeButtonText();
    }
    
    function updateSettingsThemeButtonText() {
        const themeButtonTextSpan = toggleThemeOptionButton.querySelector('span');
        if(themeButtonTextSpan) {
            const key = themeButtonTextSpan.getAttribute('data-i18n'); // 'settingsChangeTheme'
            if (key && i18n[currentLang] && i18n[currentLang][key]) {
                 themeButtonTextSpan.textContent = i18n[currentLang][key];
            }
        }
    }

    // --- SETTINGS MENU (Giữ nguyên) ---
    if (settingsButton && settingsOptions && settingsContainer) {
        settingsButton.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsContainer.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (settingsContainer.classList.contains('active') && !settingsContainer.contains(e.target)) {
                settingsContainer.classList.remove('active');
            }
        });
    }
    if (toggleThemeOptionButton) {
        toggleThemeOptionButton.addEventListener('click', () => {
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
            if(settingsContainer) settingsContainer.classList.remove('active');
        });
    }
    if (toggleLanguageOptionButton) {
        toggleLanguageOptionButton.addEventListener('click', () => {
            changeLanguage(currentLang === 'vi' ? 'en' : 'vi');
            if(settingsContainer) settingsContainer.classList.remove('active');
        });
    }

    // --- BACK BUTTON (Giữ nguyên) ---
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    }
    
    // --- POPULATE DOCTOR/SERVICE SELECT & HANDLE PRE-SELECTION ---
    function populateDoctorServiceSelect() {
        if (!selectDoctorService) return;
        
        const currentSelectedValue = selectDoctorService.value; // Lưu giá trị đang chọn (nếu có)
        selectDoctorService.innerHTML = `<option value="" data-i18n="selectOptionDefault">${i18n[currentLang].selectOptionDefault}</option>`; // Reset và thêm option mặc định

        doctorsAndServices.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = currentLang === 'vi' ? item.name_vi : item.name_en;
            selectDoctorService.appendChild(option);
        });

        // Cố gắng chọn lại giá trị đã lưu hoặc từ URL
        const urlParams = new URLSearchParams(window.location.search);
        const doctorServiceParam = urlParams.get('serviceId'); // Đổi 'doctor' thành 'serviceId'
        
        if (doctorServiceParam && doctorsAndServices.find(s => s.id === doctorServiceParam)) {
            selectDoctorService.value = doctorServiceParam;
        } else if (currentSelectedValue && doctorsAndServices.find(s => s.id === currentSelectedValue)) {
            selectDoctorService.value = currentSelectedValue; // Khôi phục lựa chọn trước đó nếu hợp lệ
        }
    }


    // --- FORM VALIDATION AND SUBMISSION ---
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            clearAllErrors();
            if(formFeedback) {
                formFeedback.textContent = '';
                formFeedback.className = 'form-feedback-message';
            }

            let isValid = true;

            // Validate Doctor/Service Selection
            if (selectDoctorService && !selectDoctorService.value) {
                showError(selectDoctorService, i18n[currentLang].validationSelectDoctorService, 'doctorServiceError');
                isValid = false;
            }

            // ... (Các validation khác giữ nguyên: patientName, patientPhone, patientEmail, appointmentDate, appointmentTime)
            const patientName = document.getElementById('patientName');
            if (!patientName.value.trim()) {
                showError(patientName, i18n[currentLang].validationRequired);
                isValid = false;
            }
            const patientPhone = document.getElementById('patientPhone');
            const phoneRegex = /^\+?\d{10,13}$/;
            if (!patientPhone.value.trim()) {
                showError(patientPhone, i18n[currentLang].validationRequired);
                isValid = false;
            } else if (!phoneRegex.test(patientPhone.value.trim())) {
                showError(patientPhone, i18n[currentLang].validationInvalidPhone);
                isValid = false;
            }
            const patientEmail = document.getElementById('patientEmail');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (patientEmail.value.trim() && !emailRegex.test(patientEmail.value.trim())) {
                showError(patientEmail, i18n[currentLang].validationInvalidEmail);
                isValid = false;
            }
            const appointmentDate = document.getElementById('appointmentDate');
            if (!appointmentDate.value) {
                showError(appointmentDate, i18n[currentLang].validationRequired);
                isValid = false;
            } else {
                const selectedDate = new Date(appointmentDate.value + "T00:00:00");
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    showError(appointmentDate, i18n[currentLang].validationDateInPast);
                    isValid = false;
                }
            }
            const appointmentTime = document.getElementById('appointmentTime');
            if (!appointmentTime.value) {
                showError(appointmentTime, i18n[currentLang].validationTimeRequired);
                isValid = false;
            }


            if (isValid && formFeedback) {
                const selectedServiceElement = selectDoctorService.options[selectDoctorService.selectedIndex];
                const selectedServiceName = selectedServiceElement ? selectedServiceElement.textContent : "N/A";

                const bookingData = {
                    serviceId: selectDoctorService.value,
                    serviceName: selectedServiceName, // Lưu tên đã chọn
                    name: patientName.value.trim(),
                    phone: patientPhone.value.trim(),
                    email: patientEmail.value.trim(),
                    date: appointmentDate.value,
                    time: appointmentTime.value,
                    notes: document.getElementById('appointmentNotes').value.trim(),
                    timestamp: new Date().toISOString()
                };

                let bookings = JSON.parse(localStorage.getItem('appointments')) || [];
                bookings.push(bookingData);
                localStorage.setItem('appointments', JSON.stringify(bookings));
                
                formFeedback.textContent = i18n[currentLang].formSuccessMessage.replace('{service}', selectedServiceName);
                formFeedback.classList.add('success');
                appointmentForm.reset();
                selectDoctorService.value = ""; // Reset cả select bác sĩ/gói
            } else if (formFeedback) {
                formFeedback.textContent = i18n[currentLang].formErrorMessage;
                formFeedback.classList.add('error');
            }
        });
    }

    function showError(inputElement, message, errorElementId = null) {
        let errorElement;
        if (errorElementId) {
            errorElement = document.getElementById(errorElementId);
        } else {
            const formGroup = inputElement.closest('.form-group, .form-group-half > div');
            if (formGroup) {
                errorElement = formGroup.querySelector('.error-message');
            }
        }
        if (errorElement) errorElement.textContent = message;
    }

    function clearAllErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    }

    // --- INITIAL LOAD ---
    populateDoctorServiceSelect(); // Phải gọi trước changeLanguage để option mặc định có text đúng
    applyTheme(currentTheme);
    changeLanguage(currentLang); // Sẽ gọi lại applyTranslations và populateDoctorServiceSelect

    // --- SCROLL CONTROLS (Giữ nguyên hoặc tùy chỉnh) ---
    // ...
});
// Nút Back (SỬA Ở ĐÂY ĐỂ LUÔN VỀ INDEX.HTML)
const backButton = document.getElementById('backButton'); // Đổi tên biến nếu đã khai báo ở trên
if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Luôn điều hướng về index.html
  });
}