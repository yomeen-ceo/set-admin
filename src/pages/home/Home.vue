<template>
  <q-page>
    <div class="container page-vertical-padding page-padding">
      <div class="row justify-center">
        <div class="col-12 col-sm-8 col-md-6">
          <h1 class="text-h4 text-center">
            ES系統
          </h1>
          <div class="row justify-center">
            <div>
              <q-btn :loading="loading" color="red" @click="setCreate()" style="min-width: 110px;" class="q-px-md">
                建模
                <template v-slot:loading>
                  <div style="display: flex; align-items: center; white-space: nowrap;">
                    載入中
                    <q-spinner-pie color="orange" class="q-ml-xs" />
                  </div>
                </template>
              </q-btn>
            </div>
            <div class="q-px-sm">
              <q-btn :loading="loading" color="red" @click="setTest()" style="min-width: 110px;" class="q-px-md">
                測試
                <template v-slot:loading>
                  <div style="display: flex; align-items: center; white-space: nowrap;">
                    載入中
                    <q-spinner-pie color="orange" class="q-ml-xs" />
                  </div>
                </template>
              </q-btn>
            </div>
            <div>
              <q-btn :loading="loading" color="red" @click="setInitial()" style="min-width: 110px;" class="q-px-md">
                初始化
                <template v-slot:loading>
                  <div style="display: flex; align-items: center; white-space: nowrap;">
                    載入中
                    <q-spinner-pie color="orange" class="q-ml-xs" />
                  </div>
                </template>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang='scss' scoped>
</style>

<script>

export default {
  name: 'PageHome',
  components: {
  },
  data () {
    return {
      productName: '',
      loading: false,
      progress: false
    }
  },
  methods: {
    setCreate () {
      this.$router.push({
        name: this.buildI18nRouteName({
          name: 'setCreate'
        })
      })
    },
    setTest () {
      // we set loading state
      this.loading = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 3000)
    },
    async setInitial () {
      const model = 'deepseek-r1:7b'
      // const messages = [
      //   {
      //     role: 'system',
      //     content: '你是一個職能測驗結果分析員，根據不同的數字組合分析個性特質。'
      //   }, {
      //     role: 'user',
      //     content: '個人ES情感種子分析系統是一套透過四個數字來判斷個性的系統，每個數字為0到10之間的正整數，且四個數字的總和必須等於20。\n\n數字對應的個性類型如下：\n- 第一個數字代表「老虎」\n- 第二個數字代表「孔雀」\n- 第三個數字代表「無尾熊」\n- 第四個數字代表「貓頭鷹」\n\n【行為規則】\n1. 當輸入為四個數字時：\n   - 先確認這四個數字的總和是否為20。\n   - 若總和不為20，則回應：「數據有誤，請確認四個數字的總和必須為20。」\n   - 若總和為20，則回應對應的個性分析結果，根據四個數字的比例來描述個性特點。\n\n2. 當輸入的內容不是四個數字時：\n   - 表示用戶正在進行個性判斷的回覆訓練，系統應將該內容作為訓練數據，學習並建立個性判斷的依據。\n\n請執行此邏輯，並在理解後回應：「明白」。'
      //   }
      // ]
      const messages = [
        {
          role: 'system',
          content: '你是一個陪聊機器人。'
        }, {
          role: 'user',
          content: '我想賺錢，我該怎麼做？'
        }
      ]
      const setData = {
        model,
        messages,
        stream: false
      }
      const res = await this.axios.post('http://219.84.228.32:5000/v1/setInitial/setCreate/', { setData })
      // const res = await this.axios.post('http://219.84.228.32:5000/v1/setInitial/addData/', { setData })
      console.log('=====================res')
      console.log(res)
    }
  },
  async mounted () {
  }
}
</script>
