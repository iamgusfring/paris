<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eleventh navbar example">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    Intriga
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample09">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link active-class="nav-link active"
                                         :to="{name: 'frontend.home'}"
                                         class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active-menu"
                                        :to="{name: 'frontend.aboutus'}"
                                         class="nav-link">about us</router-link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        ﻿

        <main class="py-4">
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>