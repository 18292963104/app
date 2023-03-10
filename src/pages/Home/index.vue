<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from "./Recommend"
import Rank from './Rank'
import like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'

export default {
    name: '',
    components: { ListContainer, Recommend, Rank, like, Floor, Brand },
    mounted(){
      this.$store.dispatch('floorList')
    },
    computed: {
        ...mapState({
            floorList: state => state.home.floorList
        })
    }
}
</script>

<style>

</style>