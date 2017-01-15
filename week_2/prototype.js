/**
 * This explains the prototypal inheritence.
 * @type {{value: string, obj: {objValue: string}, walk: parent.walk}}
 */

var parent = {
    value: "parentValue",
    obj: {
        objValue: "parentObjValue"
    },
    walk: function() {
        console.log("walking");
    }
};

var child = Object.create(parent);


console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue", child.obj.objValue);
console.log("PARENT - parent.value:", parent.value);
console.log("PARENT - parent.obj.objVaalue:", parent.obj.objValue);
console.log("PARENT: ", parent);
console.log("CHILD: ", child);
console.log("CHILD __proto__: ", child.__proto__); // parent property

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue", child.obj.objValue);
console.log("PARENT - parent.value:", parent.value);
console.log("PARENT - parent.obj.objVaalue:", parent.obj.objValue);
console.log("PARENT: ", parent);
console.log("CHILD: ", child); // check out the value here. Very interesting.. obj is not created in child

console.log("child.obj === parent.obj ? ", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("Grandchild: ", grandChild);
grandChild.walk();
console.log("GRANDCHILD VALUE: ", grandChild.value);

function Dog(name) {
    this.name = name;
    console.log("'this' is: ", this);
}

var myDog = new Dog("Max");  // new keyword creates a new Object
console.log("myDog: ", myDog);

Dog("Max2"); // this is not creating a new object, but will point to the outer scope. so this will be global scope.

