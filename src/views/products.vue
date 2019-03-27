<template>
  <div>
    <h1 class="subheading grey--text">Projects</h1>
    <div class="container">
    <v-expansion-panel>
      <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
        <div slot="header">{{project.title}}</div>
        <v-card>
          <v-card-text>
             <div class="font-weight-bold">Due By:</div>
             <div>{{project.content}}</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </div>
  </div>
</template>

<script>
import db from '@/fb'  

export default {
  data(){
    return{
      projects : []
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project =>{
        return project.person === 'izzaz'
      })
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
