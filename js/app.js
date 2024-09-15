console.log("app.js connected");

const container = document.getElementById("container");

data = [
  {
    name: "Tashkent State University of Economics",
    full_name: "Tashkent State University of Economics",
    established: 1931,
    type: "Public",
    city: "Tashkent",
    address: "78 University Street, Tashkent, Uzbekistan",
    phone: "+998 71 233 10 70",
    email: "info@economics.uz",
    website: "https://www.economics.uz/",
    rank: 1,
    description:
      "Tashkent State University of Economics is a leading institution for higher education in economics and finance, providing comprehensive training in various economic disciplines.",
    faculties: [
      "Faculty of Economics",
      "Faculty of Management",
      "Faculty of Finance",
    ],
    socials: {
      facebook: "https://www.facebook.com/economics.uz",
      twitter: "https://twitter.com/economics_uz",
      linkedin:
        "https://www.linkedin.com/school/tashkent-state-university-of-economics/",
    },
  },
  {
    name: "National University of Uzbekistan",
    full_name: "National University of Uzbekistan named after Mirzo Ulughbek",
    established: 1918,
    type: "Public",
    city: "Tashkent",
    address: "100174, 4 University Street, Tashkent, Uzbekistan",
    phone: "+998 71 239 53 14",
    email: "info@nuuz.uz",
    website: "https://www.nuuz.uz/",
    rank: 2,
    description:
      "The National University of Uzbekistan is renowned for its research and academic excellence in natural sciences, including mathematics, physics, and chemistry.",
    faculties: [
      "Faculty of Mathematics",
      "Faculty of Physics",
      "Faculty of Chemistry",
    ],
    socials: {
      facebook: "https://www.facebook.com/nuuz.uz",
      twitter: "https://twitter.com/nuuz_uz",
      linkedin:
        "https://www.linkedin.com/school/national-university-of-uzbekistan/",
    },
  },
  {
    name: "Tashkent State Technical University",
    full_name: "Tashkent State Technical University named after Islam Karimov",
    established: 1970,
    type: "Public",
    city: "Tashkent",
    address: "2 University Street, Tashkent, Uzbekistan",
    phone: "+998 71 233 42 85",
    email: "info@tstu.uz",
    website: "https://www.tstu.uz/",
    rank: 3,
    description:
      "Tashkent State Technical University focuses on technical and engineering education, preparing students for careers in information technology, engineering, and energy sectors.",
    faculties: [
      "Faculty of Information Technologies",
      "Faculty of Engineering",
      "Faculty of Energy Engineering",
    ],
    socials: {
      facebook: "https://www.facebook.com/tstu.uz",
      twitter: "https://twitter.com/tstu_uz",
      linkedin:
        "https://www.linkedin.com/school/tashkent-state-technical-university/",
    },
  },
  {
    name: "Tashkent Medical Academy",
    full_name: "Tashkent Medical Academy",
    established: 1919,
    type: "Public",
    city: "Tashkent",
    address: "2 Sheikhontohur Street, Tashkent, Uzbekistan",
    phone: "+998 71 233 19 53",
    email: "info@tma.uz",
    website: "https://www.tma.uz/",
    rank: 4,
    description:
      "Tashkent Medical Academy is a prominent medical school in Uzbekistan, offering a wide range of programs in medicine, dentistry, and pharmacy.",
    faculties: [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
    ],
    socials: {
      facebook: "https://www.facebook.com/tma.uz",
      twitter: "https://twitter.com/tma_uz",
      linkedin: "https://www.linkedin.com/school/tashkent-medical-academy/",
    },
  },
  {
    name: "Samarkand State University",
    full_name: "Samarkand State University named after Sharof Rashidov",
    established: 1927,
    type: "Public",
    city: "Samarkand",
    address: "15 University Avenue, Samarkand, Uzbekistan",
    phone: "+998 66 234 41 41",
    email: "info@sammu.uz",
    website: "https://www.sammu.uz/",
    rank: 5,
    description:
      "Samarkand State University offers diverse programs in humanities, social sciences, and natural sciences, with a focus on academic research and historical studies.",
    faculties: [
      "Faculty of Economics",
      "Faculty of History",
      "Faculty of Foreign Languages",
    ],
    socials: {
      facebook: "https://www.facebook.com/sammu.uz",
      twitter: "https://twitter.com/sammu_uz",
      linkedin: "https://www.linkedin.com/school/samarkand-state-university/",
    },
  },
  {
    name: "Fergana Polytechnic Institute",
    full_name: "Fergana Polytechnic Institute",
    established: 1975,
    type: "Public",
    city: "Fergana",
    address: "5 Mirzo Ulughbek Street, Fergana, Uzbekistan",
    phone: "+998 73 223 48 56",
    email: "info@fpif.uz",
    website: "https://www.fpif.uz/",
    rank: 6,
    description:
      "Fergana Polytechnic Institute specializes in technical education, focusing on engineering, mechanical systems, and construction technologies.",
    faculties: [
      "Faculty of Mechanical Engineering",
      "Faculty of Electrical Engineering",
      "Faculty of Construction Engineering",
    ],
    socials: {
      facebook: "https://www.facebook.com/fpif.uz",
      twitter: "https://twitter.com/fpif_uz",
      linkedin:
        "https://www.linkedin.com/school/fergana-polytechnic-institute/",
    },
  },
  {
    name: "Bukhara State University",
    full_name: "Bukhara State University named after Zahiriddin Muhammad Babur",
    established: 1992,
    type: "Public",
    city: "Bukhara",
    address: "6 Bukhara Street, Bukhara, Uzbekistan",
    phone: "+998 65 224 24 15",
    email: "info@buxdu.uz",
    website: "https://www.buxdu.uz/",
    rank: 7,
    description:
      "Bukhara State University offers programs in arts, social sciences, and natural sciences, with an emphasis on cultural and scientific development.",
    faculties: [
      "Faculty of Arts",
      "Faculty of Social Sciences",
      "Faculty of Natural Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/buxdu.uz",
      twitter: "https://twitter.com/buxdu_uz",
      linkedin: "https://www.linkedin.com/school/bukhara-state-university/",
    },
  },
  {
    name: "Andijan State University",
    full_name: "Andijan State University",
    established: 1992,
    type: "Public",
    city: "Andijan",
    address: "1 University Street, Andijan, Uzbekistan",
    phone: "+998 74 221 21 11",
    email: "info@addu.uz",
    website: "https://www.addu.uz/",
    rank: 8,
    description:
      "Andijan State University is known for its focus on pedagogy, engineering, and economics, preparing students for a wide range of professional fields.",
    faculties: [
      "Faculty of Pedagogy",
      "Faculty of Engineering",
      "Faculty of Economics",
    ],
    socials: {
      facebook: "https://www.facebook.com/addu.uz",
      twitter: "https://twitter.com/addu_uz",
      linkedin: "https://www.linkedin.com/school/andijan-state-university/",
    },
  },
  {
    name: "Navoi State Mining Institute",
    full_name: "Navoi State Mining Institute",
    established: 1992,
    type: "Public",
    city: "Navoi",
    address: "2 Industrial Zone, Navoi, Uzbekistan",
    phone: "+998 79 227 40 20",
    email: "info@nigmi.uz",
    website: "https://www.nigmi.uz/",
    rank: 9,
    description:
      "Navoi State Mining Institute specializes in mining and geological engineering, with programs focused on sustainable practices and environmental impact.",
    faculties: [
      "Faculty of Mining Engineering",
      "Faculty of Geology",
      "Faculty of Environmental Engineering",
    ],
    socials: {
      facebook: "https://www.facebook.com/nigmi.uz",
      twitter: "https://twitter.com/nigmi_uz",
      linkedin: "https://www.linkedin.com/school/navoi-state-mining-institute/",
    },
  },
  {
    name: "Karakalpak State University",
    full_name: "Karakalpak State University named after Berdakh",
    established: 1992,
    type: "Public",
    city: "Nukus",
    address: "1 Berdakh Street, Nukus, Uzbekistan",
    phone: "+998 61 220 28 09",
    email: "info@karsu.uz",
    website: "https://www.karsu.uz/",
    rank: 10,
    description:
      "Karakalpak State University offers a range of programs in humanities, natural sciences, and engineering, with a focus on regional development and cultural studies.",
    faculties: [
      "Faculty of Humanities",
      "Faculty of Natural Sciences",
      "Faculty of Engineering",
    ],
    socials: {
      facebook: "https://www.facebook.com/karsu.uz",
      twitter: "https://twitter.com/karsu_uz",
      linkedin: "https://www.linkedin.com/school/karakalpak-state-university/",
    },
  },
  {
    name: "Uzbekistan State World Languages University",
    full_name: "Uzbekistan State World Languages University",
    established: 1992,
    type: "Public",
    city: "Tashkent",
    address: "3 University Street, Tashkent, Uzbekistan",
    phone: "+998 71 233 09 95",
    email: "info@uswlu.uz",
    website: "https://www.uswlu.uz/",
    rank: 11,
    description:
      "Uzbekistan State World Languages University focuses on training professionals in foreign languages and translation, offering programs in multiple international languages.",
    faculties: ["Faculty of English", "Faculty of German", "Faculty of French"],
    socials: {
      facebook: "https://www.facebook.com/uswlu.uz",
      twitter: "https://twitter.com/uswlu_uz",
      linkedin:
        "https://www.linkedin.com/school/uzbekistan-state-world-languages-university/",
    },
  },
  {
    name: "Tashkent University of Information Technologies",
    full_name:
      "Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
    established: 1955,
    type: "Public",
    city: "Tashkent",
    address: "108A, Amir Temur Avenue, Tashkent, Uzbekistan",
    phone: "+998 71 233 04 23",
    email: "info@tuit.uz",
    website: "https://www.tuit.uz/",
    rank: 12,
    description:
      "Tashkent University of Information Technologies is a leading institution for IT and computer science education, providing state-of-the-art facilities and programs in information technology.",
    faculties: [
      "Faculty of Computer Science",
      "Faculty of Information Systems",
      "Faculty of Telecommunications",
    ],
    socials: {
      facebook: "https://www.facebook.com/tuit.uz",
      twitter: "https://twitter.com/tuit_uz",
      linkedin:
        "https://www.linkedin.com/school/tashkent-university-of-information-technologies/",
    },
  },
  {
    name: "Urgench State University",
    full_name: "Urgench State University named after Al-Khwarizmi",
    established: 1992,
    type: "Public",
    city: "Urgench",
    address: "1 University Street, Urgench, Uzbekistan",
    phone: "+998 62 223 01 15",
    email: "info@usul.uz",
    website: "https://www.usul.uz/",
    rank: 13,
    description:
      "Urgench State University offers a wide range of programs in humanities, engineering, and natural sciences, with a focus on regional development and scientific research.",
    faculties: [
      "Faculty of Engineering",
      "Faculty of Humanities",
      "Faculty of Natural Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/usul.uz",
      twitter: "https://twitter.com/usul_uz",
      linkedin: "https://www.linkedin.com/school/urgench-state-university/",
    },
  },
  {
    name: "Gulistan State University",
    full_name: "Gulistan State University",
    established: 1992,
    type: "Public",
    city: "Gulistan",
    address: "1 University Avenue, Gulistan, Uzbekistan",
    phone: "+998 67 222 02 43",
    email: "info@gsu.uz",
    website: "https://www.gsu.uz/",
    rank: 14,
    description:
      "Gulistan State University provides diverse academic programs with a focus on developing local talent in fields such as education, engineering, and social sciences.",
    faculties: [
      "Faculty of Education",
      "Faculty of Engineering",
      "Faculty of Social Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/gsu.uz",
      twitter: "https://twitter.com/gsu_uz",
      linkedin: "https://www.linkedin.com/school/gulistan-state-university/",
    },
  },
  {
    name: "Jizzakh State Pedagogical University",
    full_name: "Jizzakh State Pedagogical University",
    established: 1992,
    type: "Public",
    city: "Jizzakh",
    address: "1 Pedagogical Street, Jizzakh, Uzbekistan",
    phone: "+998 74 225 55 65",
    email: "info@jspu.uz",
    website: "https://www.jspu.uz/",
    rank: 15,
    description:
      "Jizzakh State Pedagogical University focuses on training educators and pedagogical specialists, offering programs in various fields of education and psychology.",
    faculties: [
      "Faculty of Pedagogy",
      "Faculty of Psychology",
      "Faculty of Social Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/jspu.uz",
      twitter: "https://twitter.com/jspu_uz",
      linkedin:
        "https://www.linkedin.com/school/jizzakh-state-pedagogical-university/",
    },
  },
  {
    name: "Kokand University",
    full_name: "Kokand University",
    established: 2018,
    type: "Public",
    city: "Kokand",
    address: "2 University Avenue, Kokand, Uzbekistan",
    phone: "+998 75 224 36 87",
    email: "info@kokand.edu.uz",
    website: "https://www.kokand.edu.uz/",
    rank: 16,
    description:
      "Kokand University offers innovative programs in engineering, business, and humanities, focusing on modern educational practices and regional development.",
    faculties: [
      "Faculty of Engineering",
      "Faculty of Business",
      "Faculty of Humanities",
    ],
    socials: {
      facebook: "https://www.facebook.com/kokand.university",
      twitter: "https://twitter.com/kokand_univ",
      linkedin: "https://www.linkedin.com/school/kokand-university/",
    },
  },
  {
    name: "Termez State University",
    full_name: "Termez State University",
    established: 1992,
    type: "Public",
    city: "Termez",
    address: "1 University Street, Termez, Uzbekistan",
    phone: "+998 75 226 33 21",
    email: "info@termez.edu.uz",
    website: "https://www.termez.edu.uz/",
    rank: 17,
    description:
      "Termez State University provides educational programs with a focus on regional development, offering studies in various fields including education, technology, and social sciences.",
    faculties: [
      "Faculty of Technology",
      "Faculty of Education",
      "Faculty of Social Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/termez.edu.uz",
      twitter: "https://twitter.com/termez_univ",
      linkedin: "https://www.linkedin.com/school/termez-state-university/",
    },
  },
  {
    name: "Kokand State Pedagogical Institute",
    full_name: "Kokand State Pedagogical Institute",
    established: 1992,
    type: "Public",
    city: "Kokand",
    address: "3 Pedagogical Street, Kokand, Uzbekistan",
    phone: "+998 75 224 87 54",
    email: "info@kokand-ped.edu.uz",
    website: "https://www.kokand-ped.edu.uz/",
    rank: 18,
    description:
      "Kokand State Pedagogical Institute is dedicated to training future educators and pedagogical specialists, focusing on innovative teaching methods and educational research.",
    faculties: [
      "Faculty of Pedagogy",
      "Faculty of Psychology",
      "Faculty of Education Management",
    ],
    socials: {
      facebook: "https://www.facebook.com/kokand.ped",
      twitter: "https://twitter.com/kokand_ped",
      linkedin:
        "https://www.linkedin.com/school/kokand-state-pedagogical-institute/",
    },
  },
  {
    name: "Tashkent State Law University",
    full_name: "Tashkent State Law University",
    established: 1992,
    type: "Public",
    city: "Tashkent",
    address: "33a A. Navoi Street, Tashkent, Uzbekistan",
    phone: "+998 71 237 91 67",
    email: "info@tslu.uz",
    website: "https://www.tslu.uz/",
    rank: 19,
    description:
      "Tashkent State Law University offers specialized education in law and legal studies, preparing students for careers in the judiciary, legal practice, and public administration.",
    faculties: [
      "Faculty of Law",
      "Faculty of International Law",
      "Faculty of Legal Psychology",
    ],
    socials: {
      facebook: "https://www.facebook.com/tslu.uz",
      twitter: "https://twitter.com/tslu_uz",
      linkedin:
        "https://www.linkedin.com/school/tashkent-state-law-university/",
    },
  },
  {
    name: "Jizzakh State Technical University",
    full_name: "Jizzakh State Technical University",
    established: 2009,
    type: "Public",
    city: "Jizzakh",
    address: "4 Technical Street, Jizzakh, Uzbekistan",
    phone: "+998 74 225 50 20",
    email: "info@jstu.uz",
    website: "https://www.jstu.uz/",
    rank: 20,
    description:
      "Jizzakh State Technical University focuses on technical and engineering disciplines, offering programs in various branches of engineering and technology.",
    faculties: [
      "Faculty of Engineering",
      "Faculty of Information Technologies",
      "Faculty of Mechanical Engineering",
    ],
    socials: {
      facebook: "https://www.facebook.com/jstu.uz",
      twitter: "https://twitter.com/jstu_uz",
      linkedin:
        "https://www.linkedin.com/school/jizzakh-state-technical-university/",
    },
  },
  {
    name: "Tashkent University of Finance",
    full_name: "Tashkent University of Finance",
    established: 1931,
    type: "Public",
    city: "Tashkent",
    address: "19 B. Yunusov Street, Tashkent, Uzbekistan",
    phone: "+998 71 232 42 23",
    email: "info@fin.uz",
    website: "https://www.fin.uz/",
    rank: 21,
    description:
      "Tashkent University of Finance offers specialized programs in finance, accounting, and business management, focusing on equipping students with skills for the financial sector.",
    faculties: [
      "Faculty of Finance",
      "Faculty of Accounting and Audit",
      "Faculty of Business Management",
    ],
    socials: {
      facebook: "https://www.facebook.com/fin.uz",
      twitter: "https://twitter.com/fin_uz",
      linkedin:
        "https://www.linkedin.com/school/tashkent-university-of-finance/",
    },
  },
  {
    name: "Namangan Engineering Construction Institute",
    full_name: "Namangan Engineering Construction Institute",
    established: 1992,
    type: "Public",
    city: "Namangan",
    address: "10 Engineering Street, Namangan, Uzbekistan",
    phone: "+998 69 233 21 67",
    email: "info@neci.uz",
    website: "https://www.neci.uz/",
    rank: 22,
    description:
      "Namangan Engineering Construction Institute specializes in engineering and construction disciplines, preparing students for careers in civil engineering and architectural design.",
    faculties: [
      "Faculty of Civil Engineering",
      "Faculty of Architecture",
      "Faculty of Urban Planning",
    ],
    socials: {
      facebook: "https://www.facebook.com/neci.uz",
      twitter: "https://twitter.com/neci_uz",
      linkedin:
        "https://www.linkedin.com/school/namangan-engineering-construction-institute/",
    },
  },
  {
    name: "Khorezm Mamun Academy",
    full_name: "Khorezm Mamun Academy",
    established: 1992,
    type: "Public",
    city: "Urgench",
    address: "4 Mamun Street, Urgench, Uzbekistan",
    phone: "+998 62 223 20 10",
    email: "info@khorezm.uz",
    website: "https://www.khorezm.uz/",
    rank: 23,
    description:
      "Khorezm Mamun Academy provides diverse academic programs in science and humanities, with a focus on regional culture, history, and development.",
    faculties: [
      "Faculty of History",
      "Faculty of Natural Sciences",
      "Faculty of Social Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/khorezm.mamun",
      twitter: "https://twitter.com/khorezm_mamun",
      linkedin: "https://www.linkedin.com/school/khorezm-mamun-academy/",
    },
  },
  {
    name: "Namangan State University",
    full_name: "Namangan State University",
    established: 1992,
    type: "Public",
    city: "Namangan",
    address: "1 University Avenue, Namangan, Uzbekistan",
    phone: "+998 69 233 45 65",
    email: "info@nsu.uz",
    website: "https://www.nsu.uz/",
    rank: 24,
    description:
      "Namangan State University offers programs in various fields including natural sciences, humanities, and engineering, focusing on regional and academic excellence.",
    faculties: [
      "Faculty of Natural Sciences",
      "Faculty of Humanities",
      "Faculty of Engineering",
    ],
    socials: {
      facebook: "https://www.facebook.com/nsu.uz",
      twitter: "https://twitter.com/nsu_uz",
      linkedin: "https://www.linkedin.com/school/namangan-state-university/",
    },
  },
  {
    name: "Bukhara Engineering Technological Institute",
    full_name: "Bukhara Engineering Technological Institute",
    established: 2009,
    type: "Public",
    city: "Bukhara",
    address: "7 Technological Street, Bukhara, Uzbekistan",
    phone: "+998 65 224 36 57",
    email: "info@bukhtech.uz",
    website: "https://www.bukhtech.uz/",
    rank: 25,
    description:
      "Bukhara Engineering Technological Institute provides advanced education in engineering and technology, with a focus on research and practical skills.",
    faculties: [
      "Faculty of Mechanical Engineering",
      "Faculty of Electrical Engineering",
      "Faculty of Information Technology",
    ],
    socials: {
      facebook: "https://www.facebook.com/bukhtech.uz",
      twitter: "https://twitter.com/bukhtech_uz",
      linkedin:
        "https://www.linkedin.com/school/bukhara-engineering-technological-institute/",
    },
  },
  {
    name: "Surkhandarya State University",
    full_name: "Surkhandarya State University",
    established: 1992,
    type: "Public",
    city: "Termez",
    address: "1 University Boulevard, Termez, Uzbekistan",
    phone: "+998 75 226 43 56",
    email: "info@surkhandarya.uz",
    website: "https://www.surkhandarya.uz/",
    rank: 26,
    description:
      "Surkhandarya State University offers programs across various disciplines including agriculture, engineering, and social sciences, with a focus on regional issues and development.",
    faculties: [
      "Faculty of Agriculture",
      "Faculty of Engineering",
      "Faculty of Social Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/surkhandarya.uz",
      twitter: "https://twitter.com/surkhandarya_uz",
      linkedin:
        "https://www.linkedin.com/school/surkhandarya-state-university/",
    },
  },
  {
    name: "Samarkand State University",
    full_name: "Samarkand State University",
    established: 1927,
    type: "Public",
    city: "Samarkand",
    address: "15 University Avenue, Samarkand, Uzbekistan",
    phone: "+998 66 233 11 23",
    email: "info@samdu.uz",
    website: "https://www.samdu.uz/",
    rank: 27,
    description:
      "Samarkand State University is one of the oldest universities in Uzbekistan, offering comprehensive programs in arts, sciences, and humanities, with a focus on academic excellence and cultural heritage.",
    faculties: [
      "Faculty of Arts",
      "Faculty of Sciences",
      "Faculty of Humanities",
    ],
    socials: {
      facebook: "https://www.facebook.com/samdu.uz",
      twitter: "https://twitter.com/samdu_uz",
      linkedin: "https://www.linkedin.com/school/samarkand-state-university/",
    },
  },
  {
    name: "Andijan State University",
    full_name: "Andijan State University",
    established: 1992,
    type: "Public",
    city: "Andijan",
    address: "1 University Street, Andijan, Uzbekistan",
    phone: "+998 75 223 42 65",
    email: "info@andu.uz",
    website: "https://www.andu.uz/",
    rank: 28,
    description:
      "Andijan State University offers a broad range of academic programs in science, engineering, and social sciences, focusing on regional development and research.",
    faculties: [
      "Faculty of Engineering",
      "Faculty of Science",
      "Faculty of Social Sciences",
    ],
    socials: {
      facebook: "https://www.facebook.com/andu.uz",
      twitter: "https://twitter.com/andu_uz",
      linkedin: "https://www.linkedin.com/school/andijan-state-university/",
    },
  },
];

fillList(data);

function fillList(list) {
  let html = [];
  list.forEach((element) => {
    html.push(`<div class="card">
<div class="desc">
  <p>${element.name}</p>
  <br />
  City: ${element.city}
  <br />
  Type: ${element.type}
  <br />
  <br />
  
  <div class="bold">Number: <span>${element.phone}</span></div>
  Address: ${element.address}
</div>
<div class="socials">
  <a href="${element.socials.facebook}"
    ><button><i class="fa-brands fa-facebook"></i></button
  ></a>
  <a href="${element.socials.twitter}"
    ><button><i class="fa-brands fa-twitter"></i></button
  ></a>
  <a
    href="${element.socials.linkedin}"
    ><button><i class="fa-brands fa-linkedin"></i></button
  ></a>
</div>
</div>
<br/>`);
  });
  let htmlString = html.join("");
  htmlString = htmlString.replace(/,/g, "");

  container.innerHTML = htmlString;
}
