// creo un array di oggetti

const ourTeam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

const team = document.getElementById("team");

for (const attribute of ourTeam) {
  team.innerHTML += ` 
  <div class="card card_team">
    <img src="img/${attribute.photo}" class="card-img-top" alt="foto membro team" />
    <div class="card-body">
    <h5 class="card-title">${attribute.name}</h5>
    <p class="card-text">${attribute.role}</p>
    </div>
  </div>`;
}
