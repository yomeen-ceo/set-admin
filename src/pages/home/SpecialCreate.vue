<template>
  <q-page>
    <div>
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          老虎孔雀相同
        </div>
        <div class="col-8">
          <q-input
            v-model="text1"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          老虎無尾熊相同
        </div>
        <div class="col-8">
          <q-input
            v-model="text2"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          老虎貓頭鷹相同
        </div>
        <div class="col-8">
          <q-input
            v-model="text3"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          孔雀無尾熊相同
        </div>
        <div class="col-8">
          <q-input
            v-model="text4"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          孔雀貓頭鷹相同
        </div>
        <div class="col-8">
          <q-input
            v-model="text5"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          無尾熊貓頭鷹相同
        </div>
        <div class="col-8">
          <q-input
            v-model="text6"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset class="q-pa-sm"/>
      <br/>
      <q-btn
        :loading="loading"
        label="送出"
        round
        style="position: fixed; right: 10px; bottom: 10px; z-index: 1000; transform: scale(1.5); transform-origin: bottom right;"
        @click="onSubmit"
      >
        <template v-slot:loading>
          <q-spinner-radio />
        </template>
      </q-btn>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.hasFooterBar {
  margin-bottom: 50px;
}
</style>

<script>

export default {
  name: 'PageHome',
  components: {
  },
  data () {
    return {
      loading: false,
      text1: '', // 老虎、孔雀相同
      text2: '', // 老虎、無尾熊相同
      text3: '', // 老虎、貓頭鷹相同
      text4: '', // 孔雀、無尾熊相同
      text5: '', // 孔雀、貓頭鷹相同
      text6: '' // 無尾熊、貓頭鷹相同
    }
  },
  methods: {
    async onSubmit () {
      this.loading = true
      console.log('=====送出')
      const setData = []
      setData.push(this.text1)
      setData.push(this.text2)
      setData.push(this.text3)
      setData.push(this.text4)
      setData.push(this.text5)
      setData.push(this.text6)
      const res = await this.axios.post('http://219.84.228.32:5000/v1/specialModel/modifyData/', { setData })
      console.log('=====================res.data')
      console.log(res.data)
      this.loading = false
      this.$q.notify({
        color: 'positive',
        icon: 'check_circle',
        message: '送出成功'
      })
    },
    async fetch () {
      const res = await this.axios.post('http://219.84.228.32:5000/v1/specialModel/getAll/')
      const messages = res.data.messages
      this.text1 = messages[0].answer
      this.text2 = messages[1].answer
      this.text3 = messages[2].answer
      this.text4 = messages[3].answer
      this.text5 = messages[4].answer
      this.text6 = messages[5].answer
    }
  },
  mounted () {
    this.fetch()
  }
}
</script>
