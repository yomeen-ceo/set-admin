<template>
  <div class="justify-center items-center">
    <h2>卡片資料</h2>
    <div>
      <p><strong>商品名稱：</strong> {{ cardData.PrdName }}</p>
      <p><strong>卡號：</strong> {{ cardData.CardId }}</p>
      <p><strong>卡密：</strong> {{ cardData.CardPwd }}</p>
    </div>
  </div>
</template>

<script>
import { parseStringPromise } from 'xml2js'
export default {
  name: 'AppLoging',
  props: {
    mcardData: {
      type: String
    }
  },
  data () {
    return {
      cardData: null
    }
  },
  methods: {
    async petch () {
      const rawResponse = this.mcardData
      // 第一步：取出 <string> 中的內容
      const match = rawResponse.match(/<string[^>]*>([\s\S]*)<\/string>/)
      let innerXML = match ? match[1] : ''

      // 第二步：把 escape 的 &lt; &gt; 換回來
      innerXML = innerXML
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')

      try {
        // 第三步：用 xml2js 解析成 JSON
        const result = await parseStringPromise(innerXML, { explicitArray: false })

        // 抓出需要的資料
        const getCardResult = result.ReturnResult.GetCardResult
        const prdTable = getCardResult.PrdTable

        this.cardData = {
          PrdName: prdTable.PrdName,
          CardId: prdTable.CardId,
          CardPwd: prdTable.CardPwd
        }
      } catch (error) {
        console.error('解析失敗', error)
      }
    }
  },
  mounted () {
    this.petch()
  }
}
</script>
