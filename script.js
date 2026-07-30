document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling para os links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Simulação da Galeria
    // Uma vez que estamos num site estático sem backend, não conseguimos ler a pasta 'galeria' automaticamente.
    // Para adicionar os ficheiros da pasta "galeria", adicione os seus nomes ao array abaixo.
    
    const mediaFiles = [
        "WhatsApp Image 2026-07-29 at 21.47.15 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.15 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.15 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.15 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.15 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.15.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.16 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.16 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.16 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.16 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.16 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.16.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.17 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.17 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.17 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.17 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.17 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.17 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.17.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.18 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.18 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.18 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.18 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.18 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.18 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.18.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.19 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.19 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.19 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.19 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.19 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.19 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.19.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.20 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.20 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.20 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.20 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.20 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.20 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.20.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.21 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.21 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.21 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.21 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.21 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.21 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.21.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.22 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.22 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.22 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.22 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.22 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.22 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.22.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.23 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.23 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.23 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.04 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.04 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.04 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.04 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.04.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.05 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.05 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.05 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.05.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.06 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.06 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.06 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.06 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.06.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.07 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.07 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.07 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.07 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.07 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.07 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.07.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.08 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.08 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.08 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.08 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.08 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.08.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.09 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.09 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.09 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.09 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.09 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.09.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.10 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.10 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.10 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.10 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.10 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.10 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.10.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.11 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.11 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.11 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.11 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.11 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.11 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.11.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12 (7).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.12.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.14 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.14 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.14.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.23 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.23 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.23 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.23.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.24 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.24 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.24 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.24 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.24 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.24 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.24.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25 (7).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.25.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.26 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.26 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.26 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.26 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.26 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.26 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.26.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27 (7).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.27.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.28 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.28 (2).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.28 (3).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.28 (4).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.28 (5).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.28 (6).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.28.jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.29 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.47.29.jpeg",
        "WhatsApp Image 2026-07-29 at 21.50.13 (1).jpeg",
        "WhatsApp Image 2026-07-29 at 21.50.13.jpeg",
        "WhatsApp Video 2026-07-29 at 21.47.13 (1).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.13 (2).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.13 (3).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.13 (4).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.13 (5).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.13 (6).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.13.mp4",
        "WhatsApp Video 2026-07-29 at 21.47.14 (1).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.14 (2).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.14 (3).mp4",
        "WhatsApp Video 2026-07-29 at 21.47.14.mp4"
    ];

    const galleryGrid = document.getElementById('gallery-grid');
    const paginationControls = document.getElementById('pagination-controls');
    
    // Configurações Paginacao
    let currentPage = 1;
    let itemsPerPage = 6; // Alterado o default para 6
    let currentModalIndex = 0;
    
    // Elementos do Modal
    const modal = document.getElementById('media-modal');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');

    function openModal(index) {
        if (mediaFiles.length === 0) return;
        currentModalIndex = index;
        const file = mediaFiles[currentModalIndex];
        const isVideo = file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov');
        
        modal.style.display = "flex";
        if (isVideo) {
            modalImg.style.display = "none";
            modalVideo.style.display = "block";
            modalVideo.src = `galeria/${file}`;
            modalVideo.play();
        } else {
            modalVideo.style.display = "none";
            modalVideo.pause();
            modalImg.style.display = "block";
            modalImg.src = `galeria/${file}`;
        }
    }

    if (modalPrev) {
        modalPrev.onclick = (e) => {
            e.stopPropagation();
            const newIndex = (currentModalIndex - 1 + mediaFiles.length) % mediaFiles.length;
            openModal(newIndex);
        };
    }

    if (modalNext) {
        modalNext.onclick = (e) => {
            e.stopPropagation();
            const newIndex = (currentModalIndex + 1) % mediaFiles.length;
            openModal(newIndex);
        };
    }

    if (modalClose) {
        modalClose.onclick = () => {
            modal.style.display = "none";
            modalVideo.pause();
        }
    }
    
    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            modalVideo.pause();
        }
    }

    function renderGallery() {
        if (!galleryGrid || mediaFiles.length === 0) return;
        
        galleryGrid.style.opacity = '0';
        galleryGrid.style.transform = 'translateY(15px)';
        galleryGrid.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
            galleryGrid.innerHTML = '';
            
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentFiles = mediaFiles.slice(startIndex, endIndex);
        
        currentFiles.forEach((file, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const isVideo = file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov');
            const globalIndex = startIndex + index;
            
            if (isVideo) {
                const video = document.createElement('video');
                video.src = `galeria/${file}`;
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                video.preload = 'none';
                
                item.addEventListener('mouseenter', () => video.play());
                item.addEventListener('mouseleave', () => video.pause());
                
                // Evento Modal com navegação
                item.addEventListener('click', () => openModal(globalIndex));
                
                item.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = `galeria/${file}`;
                img.alt = 'Galeria Raquel Fazenda';
                img.loading = 'lazy';
                
                // Evento Modal com navegação
                item.addEventListener('click', () => openModal(globalIndex));
                
                item.appendChild(img);
            }
            
            galleryGrid.appendChild(item);
        });
        
        renderPagination();
        
        setTimeout(() => {
            galleryGrid.style.opacity = '1';
            galleryGrid.style.transform = 'translateY(0)';
        }, 50);
        
        }, 400); // Aguarda o fadeOut terminar
    }

    function renderPagination() {
        if (!paginationControls) return;
        const totalPages = Math.ceil(mediaFiles.length / itemsPerPage);
        
        let html = `
            <div class="items-per-page">
                Mostrar: 
                <select id="items-per-page-select">
                    <option value="6" ${itemsPerPage == 6 ? 'selected' : ''}>6</option>
                    <option value="10" ${itemsPerPage == 10 ? 'selected' : ''}>10</option>
                    <option value="20" ${itemsPerPage == 20 ? 'selected' : ''}>20</option>
                    <option value="50" ${itemsPerPage == 50 ? 'selected' : ''}>50</option>
                </select> por página
            </div>
            <div class="pagination-buttons">
                <button class="page-btn" id="prev-btn" ${currentPage === 1 ? 'disabled' : ''}>&laquo; Anterior</button>
        `;
        
        // Paginacao Limitada
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
        
        html += `
                <button class="page-btn" id="next-btn" ${currentPage === totalPages ? 'disabled' : ''}>Próximo &raquo;</button>
            </div>
        `;
        
        paginationControls.innerHTML = html;
        
        // Events
        document.getElementById('items-per-page-select').addEventListener('change', (e) => {
            itemsPerPage = parseInt(e.target.value);
            currentPage = 1;
            renderGallery();
        });
        
        document.getElementById('prev-btn').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGallery();
                document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        document.getElementById('next-btn').addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderGallery();
                document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        document.querySelectorAll('.pagination-buttons button[data-page]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentPage = parseInt(e.target.getAttribute('data-page'));
                renderGallery();
                document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Inicializar galeria
    renderGallery();

    // 3. Interações Premium: Efeitos de fade-in e stagger
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedSelectors = [
        '.section-title', 
        '.about-image', 
        '.about-info', 
        '.overview-item', 
        '.v-timeline-item', 
        '.contact-link'
    ];
    
    document.querySelectorAll(animatedSelectors.join(', ')).forEach((el, index) => {
        el.classList.add('reveal-element');
        observer.observe(el);
    });
});
