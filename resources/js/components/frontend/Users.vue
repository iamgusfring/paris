<template>
    <div>     

        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Profession</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody v-if="this.users.length > 0">
                <tr v-for="(users, index) in this.users" :key="index">
                    <td>{{ users.id }}</td>
                    <td>{{ users.name }}</td>
                    <td>{{ users.profession }}</td>
                    <td>{{ users.email }}</td>
                    <td>{{ format_date(users.created_at) }}</td>
                    <td>
                        <RouterLink class="btn btn-success" 
                                    :to="{ path: '/frontend/'+users.id+'/edit' }">
                            Edit
                        </RouterLink>
                        <button type="button" @click="deleteUser(users.id)" class="btn btn-danger">
                            delete
                        </button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <td colspan="7">loading...</td>
            </tbody>
        </table>           
        
    </div>

</template>

<script>
    import axios from 'axios'
    import moment from 'moment';
    import { RouterLink } from 'vue-router';

    export default {
    name: 'users',
    //url = 'http://127.0.0.1:8000/api/users'
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DDMMYYYY');
            }
        },
        getUsers() {
            axios.get('http://127.0.0.1:8000/api/users').then(res => {
                this.users = res.data;
                console.log(this.users);
            });
        },

        deleteUser(userId){
            if(confirm('Are you sure?')){
                //console.log(userId);
                axios.delete(`http://127.0.0.1:8000/api/users/${userId}/delete`).then(res => {
                    console.log(res.data);
                    this.getUsers();
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            }
        }
    },
    components: { RouterLink }
}
</script>
