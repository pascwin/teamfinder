const addNewCompetence = () => {
    const dropdown = document.getElementById("selectCompetence").value;
    const container = document.getElementById("competence-container")
    const container2 = document.createElement("div");
    container2.className = "row col-xl-8"
    const headerContainer = document.createElement("div");
    headerContainer.className = "form-group"
    const dropdownContainer = document.createElement("div");
    dropdownContainer.className = "form-group"
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
        options = createOptions("bitte wählen", "javascript", "java", "python", "C++");
        options.map(option => {
            competenceDropdown.appendChild(option);
        })
    } else if (dropdown === "Modellierung") {
        options = createOptions("bitte wählen", "Klassendiagramm", "UML", "Aktivitätsdiagramm", "Sequenzdiagramm");
        options.map(option => {
            competenceDropdown.appendChild(option);
        })
    } else if (dropdown === "test") {
        options = createOptions("1", "2", "3", "4", "5");
        options.map(option => {
            competenceDropdown.appendChild(option);
        })
    } else if (dropdown === "Design-Tools") {
        options = createOptions("bitte wählen", "Figma", "Marvel", "Adope XD", "Overflow");
        options.map(option => {
            competenceDropdown.appendChild(option);
        })
    }
    return competenceDropdown;
}

createOptions = (option1, option2, option3, option4, option5) => {
    let newOption = option(option1)
    let newOption1 = option(option2);
    let newOption2 = option(option3)
    let newOption3 = option(option4)
    let newOption4 = option(option5)
    options = [newOption, newOption1, newOption2, newOption3, newOption4]
    return options
}

const option = (option) => {
    let newOption = document.createElement("option");
    newOption.innerHTML = option;
    return newOption;
}

