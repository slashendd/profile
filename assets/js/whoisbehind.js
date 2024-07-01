// content.js

document.addEventListener("DOMContentLoaded", function () {
    const teamMembersData = [
      {
        name: "Gilang Teja Krishna",
        instagram: "https://www.instagram.com/artisansprince",
        role: "1st Founder, Fullstack Developer",
        avatarSrc: "./assets/images/gilang.jpeg",
      },
      {
        name: "Mahendra Wira Dharma",
        instagram: "https://www.instagram.com/hencuy_",
        role: "2nd Founder, Fullstack Developer",
        avatarSrc: "./assets/images/mahen.jpeg",
      },
      {
        name: "Reffy Dian Pratama",
        instagram: "https://www.instagram.com/repinisasi",
        role: "UI/UX, Frontend Developer",
        avatarSrc: "./assets/images/reffy.jpeg",
      },
      {
        name: "Arya Mahesa Putra",
        instagram: "https://www.instagram.com/aryaaspp_",
        role: "Gen 1 Leader, Backend Developer",
        avatarSrc: "./assets/images/arya.jpeg",
      },
      {
        name: "Narendra Febriliansyah",
        instagram: "https://www.instagram.com/narendrabrilians",
        role: "Backend Developer",
        avatarSrc: "./assets/images/ren.jpeg",
      },
      {
        name: "Agus Manuaba",
        instagram: "https://www.instagram.com/agus_manuaba",
        role: "UI/UX, Graphic Designer",
        avatarSrc: "./assets/images/manu.jpeg",
      },
      {
        name: "Gita Sri Adnyani",
        instagram: "https://www.instagram.com/gitasriadnyani",
        role: "Data Analyst, Team Manager",
        avatarSrc: "./assets/images/gita.jpeg",
      },
      {
        name: "Febi Maharani",
        instagram: "https://www.instagram.com/_fbymhrn",
        role: "UI/UX Designer",
        avatarSrc: "./assets/images/feby.jpeg",
      },
      {
        name: "Khaifathan Sophan",
        instagram: "https://www.instagram.com/khaifathansophan",
        role: "Mobile Apps Developer",
        avatarSrc: "./assets/images/fathan.jpeg",
      },
      {
        name: "Fergo Fernanda",
        instagram: "https://www.instagram.com/fergo_fernanda",
        role: "Dev Ops, Backend Developer",
        avatarSrc: "./assets/images/fergo.jpeg",
      },
      {
        name: "Royya Ishan",
        instagram: "https://www.instagram.com/royy.ihsn_",
        role: "Hardware Specialist",
        avatarSrc: "./assets/images/roy.jpeg",
      },
      {
        name: "Dimas Dwi Figo",
        instagram: "https://www.instagram.com/figocahyo_",
        role: "Frontend Developer",
        avatarSrc: "./assets/images/figo.jpeg",
      },
    ];
  
    const whobehindList = document.querySelector(".whobehind-list");
  
    function createTeamMemberItem(data) {
      const teamMemberItem = document.createElement("li");
      teamMemberItem.classList.add("whobehind-item");
  
      teamMemberItem.innerHTML = `
        <div class="content-card" data-whobehind-item">
          <figure class="whobehind-avatar-box">
            <img src="${data.avatarSrc}" alt="${data.name}" width="60" data-whobehind-avatar>
          </figure>
          <h4 class="h4 whobehind-item-title" data-whobehind-title>${data.name}</h4>
          <a href="${data.instagram}" target="_blank"><i class="uil uil-instagram"></i>${data.instagram.replace(
        "https://www.instagram.com/",
        ""
      )}</a>
          <div class="whobehind-text" data-whobehind-text>
            <p>${data.role}</p>
          </div>
        </div>
      `;
  
      return teamMemberItem;
    }
  
    function renderTeamMembers() {
      teamMembersData.forEach((memberData) => {
        const teamMemberItem = createTeamMemberItem(memberData);
        whobehindList.appendChild(teamMemberItem);
      });
    }
  
    renderTeamMembers();
  });
  
