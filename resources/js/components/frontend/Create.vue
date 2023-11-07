<template>
    <div class="container mt-5 col-md-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Users</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" name="name" v-model="model.user.name" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" name="email" v-model="model.user.email" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Profession</label>
                    <input type="text" name="profession" v-model="model.user.profession" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Password</label>
                    <input type="password" name="password" v-model="model.user.password" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveUser" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'createUser',
    data(){
        return {
            model: {
                user: {
                    name: '',
                    profession: '',
                    email: '',
                    password: '',
                }
            }
        }
    },
    methods: {
        saveUser(){
            axios.post('http://127.0.0.1:8000/api/users', this.model.user).then(res => {
                console.log(res.data);
                
                this.model.user = {
                    name: '',
                    profession: '',
                    email: '',
                    password: '',
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            
        }
    }
}

</script>