const projects = [
  {
    title: 'Projekat 01 — Balkon sa imitacijom drveta',
    desc: 'Novi Sad, 2024 · spoljašnja keramika, precizna završna obrada.',
    images: ['NS_projekat01-01.jpeg','NS_projekat01-02.jpeg']
  },
  {
    title: 'Projekat 02 — Keramičko stepenište',
    desc: 'Novi Sad, 2024 · oblaganje stepeništa i detalji uz zid.',
    images: ['NS_projekat02-01.jpeg','NS_projekat02-02.jpeg']
  },
  {
    title: 'Projekat 03 — Velikoformatne podne pločice',
    desc: 'Okolina Novog Sada, 2025 · terasa i velika podna površina.',
    images: ['NS_projekat03-01.jpeg','NS_projekat03-02.jpeg']
  },
  {
    title: 'Projekat 04 — Kupatilo sa walk-in tušem',
    desc: 'Novi Sad, 2025 · proces ugradnje i završni izgled kupatila.',
    images: ['NS_projekat04-01.jpeg','NS_projekat04-02.jpeg','NS_projekat04-03.jpeg','NS_projekat04-05.jpeg']
  }
];

const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.modal-close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentProject = 0;
let currentImage = 0;

function showImage(){
  const p = projects[currentProject];
  modalImage.src = `assets/projects/${p.images[currentImage]}`;
  modalTitle.textContent = p.title;
  modalDesc.textContent = `${p.desc} · Fotografija ${currentImage + 1}/${p.images.length}`;
}
function openModal(projectIndex){
  currentProject = projectIndex;
  currentImage = 0;
  showImage();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function nextImage(){
  const total = projects[currentProject].images.length;
  currentImage = (currentImage + 1) % total;
  showImage();
}
function prevImage(){
  const total = projects[currentProject].images.length;
  currentImage = (currentImage - 1 + total) % total;
  showImage();
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(Number(card.dataset.project)));
});
closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if(!modal.classList.contains('open')) return;
  if(e.key === 'Escape') closeModal();
  if(e.key === 'ArrowRight') nextImage();
  if(e.key === 'ArrowLeft') prevImage();
});
