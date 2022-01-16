# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js
//Using Class
class Project{
  constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects
  }

  getProjects(){
    return this.noOfProjects;
  }
  changeName(newName){
    let oldName = this.name;
     this.name = newName;
     return oldName;
  }
  incrementProject(){
    this.noOfProjects = this.noOfProjects + 1;
    return this.noOfProjects;
  }
  decrementProject(){
    this.noOfProjects = this.noOfProjects - 1;
    return this.noOfProjects;
  }
}

let p1 = new Project("djebd", 1, 1);
let p2 = new Project("vnjkvkjrnv", 2, 4);

```


```js
//Using Pseudoclassical Way
 createProject.prototype = {
  getProjects: function(){
    return this.noOfProjects;
  },
  changeName: function(newName){
    let oldName = this.name;
     this.name = newName;
     return oldName;
  },
  incrementProject: function(){
    this.noOfProjects = this.noOfProjects + 1;
    return this.noOfProjects;
  },
  decrementProject: function(){
    this.noOfProjects = this.noOfProjects - 1;
    return this.noOfProjects;
  }
};

function createProject(name, id, noOfProjects){
  let projectObj = Object.create(createProject.prototype);
  projectObj.name = name;
  projectObj.id = id;
  projectObj.noOfProjects = noOfProjects;
  return projectObj;
}

let p3 = new createProject("aasswcdwf3dek", 3, 1);
let p4 = new createProject("oppcdcjnsknks", 4, 4);
```

```js
//Using Pseudoclassical Way
 let projectMethods = {
  getProjects: function(){
    return this.noOfProjects;
  },
  changeName: function(newName){
    let oldName = this.name;
     this.name = newName;
     return oldName;
  },
  incrementProject: function(){
    this.noOfProjects = this.noOfProjects + 1;
    return this.noOfProjects;
  },
  decrementProject: function(){
    this.noOfProjects = this.noOfProjects - 1;
    return this.noOfProjects;
  }
};

function createProject(name, id, noOfProjects){
  let projectObj = Object.create(projectMethods);
  projectObj.name = name;
  projectObj.id = id;
  projectObj.noOfProjects = noOfProjects;
  return projectObj;
}

let p5 = new createProject("aasswcdwf3dek", 5, 6);
let p6 = new createProject("oppcdcjnsknks", 6, 2);
```