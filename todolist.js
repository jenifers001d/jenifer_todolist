var myToDoList = new Vue({
    el: "#app",
    data: {
        item: "",
        itemToDo: [],
        i: 0
    },
    methods: {
        newToDo: function (todo) {
            //this.itemToDo.splice(i, 0, "todo");
            //i++;
            this.itemToDo.push(todo);
        },
        deleteFn: function (done) {
            this.itemToDo.splice(this.itemToDo.indexOf(done), 1);
        }
    }
});
