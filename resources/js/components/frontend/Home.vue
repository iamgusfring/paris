<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3>Users</h3>
                        <router-link class="btn btn-primary float-right" 
                                     :to="{name: 'frontend.create'}">
                            Create
                        </router-link>
                    </div>

                    <div>
                        <users></users>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Users from './Users.vue'
//import Edit from './Edit.vue'
    export default {
    components: { Users },
        
    }
</script>
