<template>
<section>
  <v-row>
    <v-col :cols="8">
    <v-card :loading=loading>
    </v-card-text>
      <v-card-title>
        All Repository
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          @keyup.enter="submit"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="getRepos"
        :items-per-page="30"
        @update:page="updatePage"
        @update:items-per-page="updatePerPage"        
        :server-items-length="getPageTotal"
        class="elevation-1"
      ></v-data-table>
    </v-card>
    </v-col>
    <v-col :cols="4">
      <chart-component v-if="data.length > 1" :chart-data="data" />
    </v-col>
    </v-row>
</section>
</template>

<script>
import { mapGetters } from 'vuex'
import ChartComponent from '@/components/ChartComponent'
export default {
  data() {
    return {
      loading: false,
      search: '',
      page: 1,
      per_page: 30,
      data: [['Search', 'Records']],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'short_description' }
      ]
    }
  },
  computed: {
    ...mapGetters('github', ['getRepos', 'getPageTotal'])
  },
  components: {
    ChartComponent
  },
  methods: {
    async updatePerPage(per_page) {
      this.per_page = per_page === -1 ? this.getPageTotal : per_page
      await this.submit()
    },
    async updatePage(page) {
      this.page = page
      await this.submit()
    },
    async submit() {
      await this.$store.dispatch('github/fetchRepos', {
        q: this.search,
        page: this.page,
        per_page: this.per_page
      })

      if (this.getRepos) {
        this.data.push([this.search, this.getPageTotal])
      }
    },
  }
}
</script>
<style lang="scss" scoped>
</style>