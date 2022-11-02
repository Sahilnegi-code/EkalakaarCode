
let opp  = {
  data:   [
      {
        Skill : " Background Dancer",
        Company: "Company Name",
       
    },
    {
        Skill : " Background Dancer 2",
        Company: "Recruiter Name",
      
    }
],
};

for(let i of opp.data){

    let card = document.createElement("div");
    card.classList.add("card" , "i.category" );
    let tx = document.createElement("span");
    
    
    let Container = document.createElement("div");
    Container.classList.add("container");

   

    let skill = document.createElement("div");
    skill.classList.add('m-3');
    skill.innerText = i.Skill;
    card.appendChild(skill);


    // Company-name
    let name = document.createElement("h5"); 
    name.classList.add("product-name");
    name.innerText = i.Company;
    Container.appendChild(name);
    
    // div
    let div = document.createElement("div");
    div.classList.add("flex");
    Container.appendChild(div);
    
    // div
    
    let divLocation = document.createElement("div");
    div.appendChild(divLocation);
    
    // location svg image
    let location  = document.createElement("i");
    location.classList.add("bi-geo-alt-fill" , "bi");
    divLocation.appendChild(location);

     // location svg span
    let span = document.createElement("span");
    span.innerText = "Location";
    location.appendChild(span);

    // View Details
    let details =  document.createElement("div");
    details.classList.add("details");
    details.innerText = "View Details";
    div.appendChild(details);

    let svgArrow = document.createElement("i");
    svgArrow.classList.add("bi-arrow-right-circle-fill" , "bi" , "m-2");
    details.appendChild(svgArrow);
card.appendChild(Container);

document.getElementById("data").appendChild(card);



}

