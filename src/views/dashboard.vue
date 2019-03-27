<template>
  <div>
    <h1 class="subheading grey--text">DashBoard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-btn small flat color="grey" @click="sortBy('title')">
          <v-icon left small>folder</v-icon>
          <span class="content text-lowercase">By Project Name</span>
        </v-btn>
        <v-btn small flat color="grey" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="content text-lowercase">By Person</span>
        </v-btn>
      </v-layout>
      <v-card flat  v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`project pa-3 ${project.status}`"> 
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="right">
              <v-chip :class="`${project.status} my-3 white--text`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb';
export default {
  data(){
    return{
      projects : []
    }
  },
  methods : {
    sortBy(prop){
      this.projects.sort((a,b)=>a[prop]<b[prop] ? -1 : 1)
    }
  },
  created(){
    db.collection('projects').onSnapshot(res=>{
      const changes = res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>


<style scoped>
.project.complete{
  border-left: 3px solid #3cd1c2;
}
.project.ongoing{
  border-left: 3px solid orange;
}
.project.overdue{
  border-left: 3px solid tomato;
}

.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: orange;
}
.v-chip.overdue{
  background: tomato;
}
</style>
