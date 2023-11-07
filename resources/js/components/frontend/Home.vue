<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><h3>Users</h3></div>

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
    export default {
    components: { Users },
        
    }
</script>
