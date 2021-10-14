const createTeamCards = (team) => {
  const createManager = (manager) => {
    return `
    <div class="card col-sm-12  col-md-4 col-lg-3 " style="width: 18rem">
        <div class="card-body card-title bg-primary text-white">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-dark">${manager.getRole()}</h6>
            <li class="list-group-item text-dark">ID: ${manager.id}</li>
            <li class="list-group-item"><p class='text-dark'>Email: <a href="mailto:${manager.email}">${manager.email}</a></p></li>
            <li class="list-group-item text-dark">Office Number: ${manager.officeNumber}</li>
        </div>
    </div>
`;
  };
  const createEmployee = (employee) => {
    if (employee.getRole() === "Intern") {
      return `
      <div class="card col-sm-12  col-md-4 col-lg-3 " style="width: 18rem">
        <div class="card-body card-title bg-primary text-white">
            <h5 class="card-title">${employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-dark">${employee.getRole()}</h6>
            <li class="list-group-item text-dark">ID: ${employee.id}</li>
            <li class="list-group-item"><p class='text-dark'>Email: <a href="mailto:${employee.email}">${employee.email}</a></p></li>
            <li class="list-group-item text-dark">School: ${employee.school}</li>
        </div>
    </div>
      `;
    } else if (employee.getRole() === "Engineer") {
      return `
    <div class="card col-sm-12  col-md-4 col-lg-3 " style="width: 18rem">
        <div class="card-body card-title bg-primary text-white">
            <h5 class="card-title">${employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-dark">${employee.getRole()}</h6>
            <li class="list-group-item text-dark">ID: ${employee.id}</li>
            <li class="list-group-item"><p class='text-dark'>Email: <a href="#" class="card-link">${employee.email}</a><p></li>
            <li class="list-group-item"><p class='text-dark'>GitHub: <a href="mailto:${employee.email}">${employee.github}</a></p></li>
        </div>
    </div>
      `;
    }
  };
  const teamCards = [];
  teamCards.push(
    team
      .filter((manager) => manager.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  teamCards.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((employee) => createEmployee(employee))
  );
  teamCards.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((employee) => createEmployee(employee))
  );
  console.log(teamCards.join(''));
  return teamCards.join('');
};

const createHTML = (team) => {
    return `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!-- Latest compiled and minified CSS -->
    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />

<script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossorigin="anonymous"
    ></script>

</head>
<body>
    <header>
        <h1 style="text-align: center;
        background: red;
        color: white;
        height: 150px;
        justify-self: center;
        padding-top: 45px;
        font-size: 4em;">My Team</h1>
    </header>
    
    <div class="container">
      <div class="row justify-content-center">
      ${createTeamCards(team)}
      </div>
    </div>
</body>
</html>
`;
};
module.exports = createHTML;