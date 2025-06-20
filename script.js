
const students = Array.from({ length: 15 }, (_, i) => ({
  id: `student${i + 1}`,
  name: `Student ${i + 1}`,
  screenShareUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  webcamUrl: "https://www.w3schools.com/html/movie.mp4",
  phoneCameraUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
}));

const studentGrid = document.getElementById("studentGrid");

// Populate grid
students.forEach(student => {
  const card = document.createElement("div");
  card.className = "student-card";
  card.innerHTML = `
    <h3>${student.name}</h3>
    <div class="student-videos">
      <video src="${student.screenShareUrl}" muted controls></video>
      <video src="${student.webcamUrl}" muted controls></video>
      <video src="${student.phoneCameraUrl}" muted controls></video>
    </div>
    <button onclick="viewDetails('${student.id}')">View Details</button>
  `;
  studentGrid.appendChild(card);
});

// Modal logic
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalScreenShare = document.getElementById("modalScreenShare");
const modalWebcam = document.getElementById("modalWebcam");
const modalPhone = document.getElementById("modalPhone");

function viewDetails(studentId) {
  const student = students.find(s => s.id === studentId);
  modalTitle.textContent = `Reviewing: ${student.name}`;
  modalScreenShare.src = student.screenShareUrl;
  modalWebcam.src = student.webcamUrl;
  modalPhone.src = student.phoneCameraUrl;
  modal.style.display = "flex";
}

closeModalBtn.onclick = () => {
  modal.style.display = "none";
  [modalScreenShare, modalWebcam, modalPhone].forEach(video => video.pause());
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    [modalScreenShare, modalWebcam, modalPhone].forEach(video => video.pause());
  }
};

// Fullscreen buttons
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fullscreen-btn")) {
    const videoId = e.target.getAttribute("data-video");
    const video = document.getElementById(videoId);
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  }
});
