<template>
    <div class="container mt-5 col-md-5">
        <div class="card">
            <div class="card-header">
                <h4>edit User</h4>
            </div>
            <div class="card-body">
                <form method="POST">
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
                        <input type="text" name="password" v-model="model.user.password" class="form-control">
                    </div>
                    <div class="mb-3">
                        <button type="button" @click="updateUser" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'editUser',
    data(){
        return {
            userId: '',
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
    mounted(){
        //console.log(this.$route.params.id);
        this.userId = this.$route.params.id;
        this.getUserData(this.$route.params.id);
    },
    methods: {

        getUserData(userId){
            axios.get(`http://127.0.0.1:8000/api/user/${userId}/edit`)
                .then(res => {
                    console.log(res.data); 

                    this.model.user = res.data
                })
        },

        updateUser(){
            axios.put(`http://127.0.0.1:8000/api/user/${this.userId}`, this.model.user)
                .then(res => {                    
                    console.log(res.data);
                    window.location = 'http://127.0.0.1:8000'
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            
        }
    }
}

</script>