<template>
    <div>
        <nav>
            <v-snackbar v-model="snackbar" top color="success" :timeout="4000">
                <span>Project Added Successfully</span>
                <v-btn flat color="white" @click="snackbar = false">CLOSE</v-btn>
            </v-snackbar>
            <v-toolbar flat app>
                <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="text-uppercase grey--text">
                    <span class="font-weight-light">Todo</span>
                    <span>List</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-menu offset-y>
                    <v-btn flat slot="activator" color="grey">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>

                    <v-list>
                        <v-list-tile v-for="link in links" :key="link.tile" router :to="link.route">
                            <v-list-tile-title>
                                {{link.text}}
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

                <v-btn flat color="grey">
                    <span>Sign Out</span>
                    <v-icon right>exit_to_app</v-icon>
                </v-btn>
            </v-toolbar>

            <v-navigation-drawer v-model="drawer" app class="indigo">
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar size="100">
                            <img src="/profile.png" alt="">
                        </v-avatar>
                        <p class="subheading white--text mt-1">Izzaz Maker</p>
                    </v-flex>
                    <v-flex>
                        <Popup @projectAdded="snackbar = true"/>
                    </v-flex>
                </v-layout>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-action>
                            <v-icon class="white--text">{{link.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </nav>
    </div>
</template>

<script>
import Popup from './popup'

export default {
    components:{
        Popup
    },
    data(){
        return{
            drawer : false,
            links : [
                {icon:'dashboard', text: 'Dashboard', route : '/dashboard'},
                {icon:'folder', text: 'My project', route : '/projects'},
                {icon:'person', text: 'Team', route : '/team'},
            ],
            snackbar : false
        }
    }
}
</script>

