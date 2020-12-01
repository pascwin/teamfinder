const addNewCompetence = () => {
    const dropdown = document.getElementById("selectCompetence").value;
    const container = document.getElementById("competence-container")
    const container2 = document.createElement("div");
    container2.className="row col-xl-8"
    const headerContainer = document.createElement("div");
    headerContainer.className="form-group"
    const dropdownContainer = document.createElement("div");
    dropdownContainer.className="form-group"
    console.log(dropdown);
    if (dropdown === "Wählen Sie eine Kompetenz") {
        return;
    } else {
        let appenddingDropdown = createNewCompetenceElement()
        let label = createLabel(dropdown + ":");
        headerContainer.appendChild(label);
        dropdownContainer.appendChild(appenddingDropdown);
        container2.appendChild(headerContainer);
        container2.appendChild(dropdownContainer);
        container.appendChild(container2);
        console.log(container)
    }
}

const createLabel = (header) => {
    const label = document.createElement("label");
    label.className = ("competence-header")
    label.innerHTML = header;
    return label;
}

const createNewCompetenceElement = () => {
    const dropdown = document.getElementById("selectCompetence").value
    let competenceDropdown = document.createElement("select")
    competenceDropdown.className = ("form-control col-xl-12")
    if (dropdown === "Programmieren") {
        let newOption = option("bitte wählen")
        let newOption1 = option("javascript");
        let newOption2 = option("java")
        let newOption3 = option("python")
        let newOption4 = option("C++")
        competenceDropdown.appendChild(newOption);
        competenceDropdown.appendChild(newOption1);
        competenceDropdown.appendChild(newOption2);
        competenceDropdown.appendChild(newOption3);
        competenceDropdown.appendChild(newOption4);
    } else if (dropdown === "Modellierung") {
        let newOption = option("bitte wählen")
        let newOption1 = option("Klassendiagramm");
        let newOption2 = option("UML")
        let newOption3 = option("Aktivitätsdiagramm")
        let newOption4 = option("Sequenzdiagramm")
        competenceDropdown.appendChild(newOption);
        competenceDropdown.appendChild(newOption1);
        competenceDropdown.appendChild(newOption2);
        competenceDropdown.appendChild(newOption3);
        competenceDropdown.appendChild(newOption4);
    } else if (dropdown === "Design-Tools") {
        let newOption = option("bitte wählen")
        let newOption1 = option("Figma");
        let newOption2 = option("Marvel")
        let newOption3 = option("Adope XD")
        let newOption4 = option("Overflow")
        competenceDropdown.appendChild(newOption);
        competenceDropdown.appendChild(newOption1);
        competenceDropdown.appendChild(newOption2);
        competenceDropdown.appendChild(newOption3);
        competenceDropdown.appendChild(newOption4);
    }
    return competenceDropdown;
}

const option = (option) => {
    let newOption = document.createElement("option");
    newOption.innerHTML = option;
    return newOption;
}

