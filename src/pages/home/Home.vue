<template>
  <q-page>
    <div>
    </div>
  </q-page>
</template>

<style lang='scss' scoped>
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
    }
  },
  methods: {
  },
  async mounted () {
    const setData = {
      model: 'deepseek-r1:32b',
      messages: [
        {
          role: 'system',
          content: '你是一個職能測驗結果分析員，根據不同的數字組合分析個性特質。'
        }, {
          role: 'user',
          content: '請問 9344 代表什麼？'
        }, {
          role: 'assistant',
          content: '9344 代表個性比較急，說做就做，也比較不愛表達。'
        }, {
          role: 'user',
          content: '那 1234 呢？'
        }, {
          role: 'assistant',
          content: '1234 代表內向，謹慎，偏向理性思考。'
        }, {
          role: 'user',
          content: '那 5678 是什麼個性？'
        }
      ],
      stream: false
    }
    const res = await this.axios.post('http://219.84.228.32:5000/v1/set/setCreate/', { setData })
    console.log('=====================res')
    console.log(res)
  }
}
</script>
