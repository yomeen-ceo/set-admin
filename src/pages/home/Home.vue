<template>
  <q-page>
    <div class="container page-vertical-padding page-padding">
      <div class="row justify-center">
        <div class="col-12 col-sm-8 col-md-6">
          <h1 class="text-h4 text-center">
            ES系統
          </h1>
          <div class="row q-pa-md justify-center">
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
              <q-btn :loading="loading" color="red" @click="specialCreate()" style="min-width: 110px;" class="q-px-md">
                特殊數據
                <template v-slot:loading>
                  <div style="display: flex; align-items: center; white-space: nowrap;">
                    載入中
                    <q-spinner-pie color="orange" class="q-ml-xs" />
                  </div>
                </template>
              </q-btn>
            </div>
            <div>
              <q-btn :loading="loading" disable color="red" @click="setInitial()" style="min-width: 110px;" class="q-px-md">
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
          <q-separator inset />
          <div class="row q-pa-md justify-center">
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
        </div>
        <q-dialog v-model="inputNum" persistent>
          <q-card style="min-width: 350px">
            <q-form
              @submit="onSubmit"
            >
              <q-card-section>
                <div class="text-h4">請輸入SET數值</div>
              </q-card-section>

              <q-card-section class="q-pt-none row">
                <span class="text-h5">老虎：</span>
                <q-input
                  dense
                  v-model="tigerNum"
                  :rules="[
                    val => !!val || '* 此欄位必填',
                    val => val <= 10 || '此欄位必須填入0~10的數字',
                    val => val >= 0 || '此欄位必須填入0~10的數字'
                  ]"
                  lazy-rules
                  @keyup.enter="prompt = false"
                />
              </q-card-section>

              <q-card-section class="q-pt-none row">
                <span class="text-h5">孔雀：</span>
                <q-input
                  dense
                  v-model="peacockNum"
                  :rules="[
                    val => !!val || '* 此欄位必填',
                    val => val <= 10 || '此欄位必須填入0~10的數字',
                    val => val >= 0 || '此欄位必須填入0~10的數字'
                  ]"
                  lazy-rules
                  @keyup.enter="prompt = false"
                />
              </q-card-section>

              <q-card-section class="q-pt-none row">
                <span class="text-h5">無尾熊：</span>
                <q-input
                  dense
                  v-model="koalaNum"
                  :rules="[
                    val => !!val || '* 此欄位必填',
                    val => val <= 10 || '此欄位必須填入0~10的數字',
                    val => val >= 0 || '此欄位必須填入0~10的數字'
                  ]"
                  lazy-rules
                  @keyup.enter="prompt = false"
                />
              </q-card-section>

              <q-card-section class="q-pt-none row">
                <span class="text-h5">貓頭鷹：</span>
                <q-input
                  dense
                  v-model="owlNum"
                  :rules="[
                    val => !!val || '* 此欄位必填',
                    val => val <= 10 || '此欄位必須填入0~10的數字',
                    val => val >= 0 || '此欄位必須填入0~10的數字'
                  ]"
                  lazy-rules
                  @keyup.enter="prompt = false"
                />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="取消" v-close-popup />
                <q-btn
                  flat
                  label="確定"
                  type="submit"
                />
              </q-card-actions>
              <div v-if="alert" class="text-red text-right">各項數值加起來總和必須等於20</div>
            </q-form>
          </q-card>
        </q-dialog>
        <q-dialog v-model="answerShow">
          <q-card class="q-pa-md" style="min-width: 350px">
            <div class="text-h5">
              您的個性是：
            </div>
            <div class="text-h6" v-html="answer" />
            <q-btn style="width: 100%" :ripple="{ center: true }" color="secondary" label="補充說明" no-caps @click="addExp" />
            <div v-if="addExpShow" class="q-py-md" style="width: 100%">
              <div>
                <q-input
                  ref="addExpInput"
                  color="red-12"
                  v-model="additionalExplanation"
                  filled
                  autogrow
                />
              </div>
              <div class="q-py-md">
                <q-btn style="width: 100%" :ripple="{ center: true }" color="secondary" label=",送出" no-caps @click="addExpSend" />
              </div>
            </div>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<style lang='scss' scoped>
</style>

<script>
import { Loading } from 'quasar'
export default {
  name: 'PageHome',
  components: {
  },
  data () {
    return {
      alert: false,
      productName: '',
      loading: false,
      progress: false,
      inputNum: false,
      tigerNum: '',
      peacockNum: '',
      koalaNum: '',
      owlNum: '',
      setNum: '',
      answerShow: false,
      answer: '',
      additionalExplanation: '',
      addExpShow: false,
      aiModel: 'deepseek-r1:14b' // deepseek-r1:7b, deepseek-r1:32b
    }
  },
  watch: {
    inputNum (data) {
      if (!data) {
        this.tigerNum = ''
        this.peacockNum = ''
        this.koalaNum = ''
        this.owlNum = ''
        this.answerShow = false
        this.answer = ''
        this.additionalExplanation = ''
        this.addExpShow = false
      }
    }
  },
  methods: {
    // 補充說明送出
    async addExpSend () {
      this.addExpShow = false
      const aiModel = this.aiModel
      const additionalExplanation = this.additionalExplanation
      const setNum = this.setNum
      console.log('========')
      console.log(
        additionalExplanation,
        setNum,
        aiModel
      )
      Loading.show()
      try {
        const res = await this.axios.post('http://219.84.228.32:5000/v1/testNum/addExp/', { additionalExplanation, setNum, aiModel })
        console.log('========res')
        console.log(res)
        Loading.hide()
        this.additionalExplanation = ''
        this.addExpShow = false
        this.answer = res.data
      } catch (error) {
        if (error.response) {
          // 伺服器有回應，但是錯誤狀態碼（例如 400、500）
          console.error('❌ 伺服器錯誤：', error.response.status, error.response.data)
        } else if (error.request) {
          // 請求發出去了，但伺服器沒回應（你遇到的情況）
          console.error('⚠️ 沒收到伺服器回應（可能掛了）')
        } else {
          // axios 本身設定錯誤或程式邏輯錯
          console.error('🚨 程式錯誤：', error.message)
        }
      }
      Loading.hide()
    },
    // 當按下「補充說明」時
    async addExp () {
      // 彈出填入欄位
      this.addExpShow = true
      // 自動遊標指向輸入欄位
      await this.$nextTick()
      this.$refs.addExpInput.focus()
    },
    setCreate () {
      this.$router.push({
        name: this.buildI18nRouteName({
          name: 'setCreate'
        })
      })
    },
    specialCreate () {
      this.$router.push({
        name: this.buildI18nRouteName({
          name: 'specialCreate'
        })
      })
    },
    setTest () {
      // we set loading state
      // this.loading = true
      // 設定旋轉3秒後恢復正常
      // setTimeout(() => {
      //   this.loading = false
      // }, 3000)
      this.inputNum = true
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
    },
    async onSubmit () {
      const aiModel = this.aiModel
      const { tigerNum, peacockNum, koalaNum, owlNum } = this
      console.log('==============tigerNum, peacockNum, koalaNum, owlNum')
      console.log(tigerNum, peacockNum, koalaNum, owlNum)
      if ((+tigerNum + +peacockNum + +koalaNum + +owlNum) !== 20) {
        this.alert = true
      } else {
        this.inputNum = false
        Loading.show()
        const setNum = tigerNum + ',' + peacockNum + ',' + koalaNum + ',' + owlNum
        this.setNum = setNum
        const res = await this.axios.post('http://219.84.228.32:5000/v1/testNum/testNum/', { setNum, aiModel })
        console.log('========res')
        console.log(res)
        if (res) {
          Loading.hide()
          this.answer = res.data
          this.answerShow = true
        }
      }
    }
  },
  async mounted () {
  }
}
</script>
