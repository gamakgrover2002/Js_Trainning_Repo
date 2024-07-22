// JSON object
const jsonObject = {
  company: {
    departments: [
      {
        name: "Engineering",
        employees: [
          { id: 1, name: "Alice", role: "Engineer" },
          { id: 2, name: "Bob", role: "Senior Engineer" },
        ],
      },
      {
        name: "HR",
        employees: [{ id: 3, name: "Carol", role: "HR Manager" }],
      },
    ],
  },
};

// class based implementation
// object to test add function
var object = {
  id: 2,
  name: "Bob",
  role: "Senior Engineer",
};
// object to test remove function
var object2 = { id: 3 };
// object to test update user
var object3 = { id: 2, name: "Robert", role: "Lead Engineer" };
// add employee function
const addEmployee = (json, department, object) => {
  let isDepartment = false;
  const departments = json.company.departments;
  // find methd, inpalce
  departments.forEach((element) => {
    if (element.name === department) {
      element.employees.push(object);
      console.log("user added");
      console.log(JSON.stringify(json));
      isDepartment = true;
      return;
    }
  });
  if (!isDepartment) {
    console.log("Department does not exsist");
  }
};
// remove function
const removeEmployee = (json, department, object) => {
  let isDepartment = false;
  let departments = json.company.departments;
  departments.forEach((element) => {
    if (element.name === department) {
      let isUser = false;
      element.employees.forEach((e) => {
        if (e.id === object.id) {
          isUser = true;
          element.employees.splice(element.employees.indexOf(e), 1);
          console.log("removed");
          console.log(json);
          return;
        }
      });
      if (!isUser) {
        console.log("user does not exist");
      }
      isDepartment = true;
    }
  });
  if (!isDepartment) {
    console.log("department not found");
  }
};
// function to find employee
const findEmployees = (json, department) => {
  let departments = json.company.departments;
  departments.forEach((e) => {
    if (e.name === department) {
      console.log(e.employees);
    }
  });
};
// function to update employee
const updateEmployee = (json, department, object) => {
  let isDepartment = false;
  let departments = json.company.departments;
  departments.forEach((e) => {
    if (e.name === department) {
      let isUser = false;
      e.employees.forEach((user) => {
        if (user.id === object.id) {
          user.name = object.name;
          user.role = object.role;
          isUser = true;

          console.log("updated");
          console.log(json);
        }
      });
      if (!isUser) {
        console.log("user does not exist");
      }
      isDepartment = true;
    }
  });
  if (!isDepartment) {
    console.log("department not found");
  }
};

const manageCompany = (json, action, department, object) => {
  switch (action) {
    case "find":
      findEmployees(json, department);
      break;
    case "update":
      updateEmployee(json, department, object);
      break;
    case "remove":
      removeEmployee(json, department, object);
      break;
    case "add":
      addEmployee(json, department, object);
      break;
    default:
      console.log("Invalid Employee");
  }
};
manageCompany(jsonObject, "add", "HR", object);
