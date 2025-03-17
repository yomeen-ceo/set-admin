<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="home"
          :to="{ name: buildI18nRouteName({ name: 'home' }) }"
        />
        <q-toolbar-title>
          emotion-seed（ES情感種子分析系統）
        </q-toolbar-title>
        <div>ES. v{{ $t('about.version') }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
