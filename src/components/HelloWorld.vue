<template>
  <div class="container">
    <!-- top header: menu... -->
    <div id="menu" class="row">
      <div class="mt-3" style=" left: 50%;">
        <b-button-group>
          <button
            class="btn btn-success"
            variant="success"
            v-on:click="addnewrow()"
          >
            New
          </button>
          <p>{{ mess }}</p>
        </b-button-group>
      </div>
    </div>
    <!-- table nhân viên -->
    <div class="row">
      <input type="text" v-model="todo2" />
      <p>{{ todo2 }}</p>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <a href="#">{{ id }}</a>
              <br />
            </th>
            <th>
              <a href="#">Name</a>
              <br />
              <input v-model="name" />
            </th>

            <th>
              <a href="#">Address</a>
              <br />
              <input v-model="address" />
            </th>

            <th>
              <a href="#">Age</a>
              <br />
              <input v-model="age" />
            </th>

            <th>
              <a href="#">Company</a>
              <br />
              <input v-model="company" />

              <!-- <p>{{company}}</p> -->
            </th>
            <th>
              <button class="btn btn-info" v-on:click="addNewEmployee()">
                save
              </button>

              <br />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in employees" :key="index">
            <td>{{ index.name }}</td>
            <td>{{ index.address }}</td>
            <td>{{ index.age }}</td>
            <td>{{ index.company }}</td>
            <td>
              <a href="#"  v-on:click="deleteEmployee(index)"
                >X</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
var i = 0;
export default {
  name: "HelloWorld",
  data() {
    return {
      employees: [
        {
          name: "ưeqw",
          address: "eqwe",
          age: "qweqwe",
          company: ""
        },
        {
          name: "qweqweqweqw",
          address: "eqweqeqweqwe",
          age: "ưqe",
          company: ""
        }
        //  <!-- thông tin ( họ tên, địa chỉ, tuổi, nsinh, cty, avatar ) -->
      ],
      name: "",
      address: "",
      age: "",
      company: "",

      table: [
        {
          name: "",
          address: "",
          age: "",
          company: ""
        }
      ]
      // Object.freeze(newObj)
    };
  },

  methods: {
 
    addNewEmployee: function() {
      let employee = {
        name: this.name,
        address: this.address,
        age: this.age,
        company: this.company
      };
      this.employees.push(employee);

      this.task = "";
    },
    deleteEmployee: function(e,index){
      this.employees.splice(index, 1);
    },
    // addnewrow: function() {
    //   this.employees.push({
    //     id: i++,
    //     name: "",
    //     address: "",
    //     age: "",
    //     company: ""
    //   });
    // },
    // deleteem: function() {}
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
