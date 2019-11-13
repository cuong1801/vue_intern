<template>
  <div class="container">
    <!-- top header: menu... -->
    <!-- <i class="fab fa-medium">ádas</i> -->
    <!-- <i class="far fa-envelope"></i> -->
    <!-- table nhân viên -->
    <div class="row">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <a href="#">Name</a>
              <br />
            </th>

            <th>
              <a href="#">Address</a>
              <br />
            </th>

            <th>
              <a href="#">Age</a>
              <br />
            </th>

            <th>
              <a href="#">Company</a>
              <br />

              <!-- <p>{{company}}</p> -->
            </th>
            <th>
              <!-- <a>action</a> -->
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
       
              <a href="#" v-on:click="isDelete=true">
                <i class="fas fa-user-times"></i>
              </a>
              <DeleteEmp>
                <ShadeDeleteEmp class="shade" v-if="isDelete">
                  <ModalDeleteEmp class="modal"></ModalDeleteEmp>
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <infoHeader class="modal-header">
                        <h4>Do you want to Delete???</h4>
                      </infoHeader>
                
                      <infoFooter class="modal-footer">
                        <button @click="isDelete=false" class="btn btn-info">Close</button>
                        <button
                          class="btn btn-info"
                          @click="deleteEmployee(index), isDelete=false"
                        >Delete</button>
                      </infoFooter>
                    </div>
                  </div>
                </ShadeDeleteEmp>
              </DeleteEmp>

              <a href="#" v-on:click="isEdit = true">
                <i class="fas fa-user-edit"></i>
              </a>
              <EditEmp>
                <ShadeEditEmp class="shade" v-if="isEdit">
                  <ModalEditEmp class="modal"></ModalEditEmp>
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <infoHeader class="modal-header">
                        <h1>Do you want to edit?</h1>
                      </infoHeader>
                      <InfoEmployee class="modal-body">
                        <table class="table table-sm table-light">
                          <thead></thead>
                          <tbody>
                            <tr>
                              <th scope="row">Name</th>
                              <input v-model="name" placeholder="sds" />
                            </tr>
                            <tr>
                              <th scope="row">Age</th>
                              <input v-model="age" />
                            </tr>
                            <tr>
                              <th scope="row">Address</th>
                              <input v-model="address" />
                            </tr>
                            <tr>
                              <th scope="row">Company</th>
                              <input v-model="company" />
                            </tr>
                            <tr>
                              <th scope="row">Avartar</th>
                              <div class="custom-file" style="    width: 55%;">
                                <input type="file" class="custom-file-input" id="inputGroupFile04" />
                                <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                              </div>
                            </tr>
                          </tbody>
                        </table>
                      </InfoEmployee>
                      <infoFooter class="modal-footer">
                        <button @click="isEdit=false" class="btn btn-info">Close</button>
                        <button class="btn btn-info" @click="addNewEmployee(), isEdit=false">save</button>
                      </infoFooter>
                    </div>
                  </div>
                </ShadeEditEmp>
              </EditEmp>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="menu" class="row">
      <div class="mt-3" style=" left: 50%;">
        <button v-on:click="isVisible = true">
          <i class="fas fa-user-plus"></i>
        </button>
        <AddEmp>
          <ShadeAddEmp class="shade" v-if="isVisible">
            <ModalAddEmp class="modal"></ModalAddEmp>
            <div class="modal-dialog">
              <div class="modal-content">
                <infoHeader class="modal-header">
                  <h1>Add New Employee</h1>
                </infoHeader>
                <InfoEmployee class="modal-body">
                  <table class="table table-sm table-light">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <th scope="row">Name</th>
                        <input v-model="name" />
                      </tr>
                      <tr>
                        <th scope="row">Age</th>
                        <input v-model="age" />
                      </tr>
                      <tr>
                        <th scope="row">Address</th>
                        <input v-model="address" />
                      </tr>
                      <tr>
                        <th scope="row">Company</th>
                        <input v-model="company" />
                      </tr>
                      <tr>
                        <th scope="row">Avartar</th>
                        <div class="custom-file" style="    width: 55%;">
                          <input type="file" class="custom-file-input" id="inputGroupFile04" />
                          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </InfoEmployee>
                <infoFooter class="modal-footer">
                  <button @click="isVisible=false" class="btn btn-info">Close</button>
                  <button class="btn btn-info" @click="addNewEmployee(), isVisible=false">save</button>
                </infoFooter>
              </div>
            </div>
          </ShadeAddEmp>
        </AddEmp>
      </div>
    </div>
  </div>
</template>

<script>
import posed, { AddEmp } from "vue-pose";
import posed1, { DeleteEmp } from "vue-pose";
import posed2, { EditEmp } from "vue-pose";

export default {
  name: "HelloWorld",
  data() {
    return {
      isVisible: false,
      isDelete: false,
      isEdit: false,

      employees: [
        {
          name: "1",
          address: "eqwe",
          age: "qweqwe",
          company: "",
          avatar: ""
        },
        {
          name: "2",
          address: "2",
          age: "2",
          company: "",
          avatar: ""
        },
        {
          name: "3",
          address: "eqweqeqweqwe",
          age: "ưqe",
          company: "",
          avatar: ""
        },
         {
          name: "4",
          address: "4",
          age: "4",
          company: "",
          avatar: ""
        }
        //  <!-- thông tin ( họ tên, địa chỉ, tuổi, nsinh, cty, avatar ) -->
      ],
      name: "",
      address: "",
      age: "",
      company: "",
      avatar: "",

      table: [
        {
          name: "",
          address: "",
          age: "",
          company: "",
          avatar: ""
        }
      ]
      // Object.freeze(newObj)
    };
  },
  components: {
    AddEmp,
    ShadeAddEmp: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: "linear" }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: "linear" }
      }
    }),

    ModalAddEmp: posed.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    }),
    //delete
    DeleteEmp,
    ShadeDeleteEmp: posed1.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: "linear" }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: "linear" }
      }
    }),

    ModalDeleteEmp: posed1.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    }),

    //edit
    EditEmp,
    ShadeEditEmp: posed1.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: "linear" }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: "linear" }
      }
    }),

    ModalEditEmp: posed1.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    }),
    infoHeader: posed.div({}),
    InfoEmployee: posed.div({}),
    infoFooter: posed.div({})
  },
  methods: {
    addNewEmployee: function() {
      let employee = {
        name: this.name,
        address: this.address,
        age: this.age,
        company: this.company,
        avatar: this.avatar
      };
      this.employees.push(employee);
      this.name = "";
      this.address = "";
      this.age = "";
      this.company = "";
      this.avatar = "";
    },
    deleteEmployee: function(index) {
      
      const employeesIndex = this.employees.indexOf(index);



      this.employees.splice(employeesIndex, 1);
    },
    editEmployee: function(index){

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-180deg, #a5ff36 0%, #09ca92 96%);
}

button {
  border: none;
  border-radius: 300px;
  color: #000;
  font-size: 18px;
  letter-spacing: -0.2px;
  cursor: pointer;
  padding: 10px 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  perspective: 500px;
  transform: translateZ(0);
}

.modal {
  width: 400px;
  height: 250px;
  background: white;
  border-radius: 10px;
}
.modal-dialog {
  width: 2000px;
}
</style>
