<template>
  <q-page>
    <div>
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          老虎最高<br/>孔雀最低
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
          老虎最高<br/>無尾熊最低
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
          老虎最高<br/>貓頭鷹最低
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
          孔雀最高<br/>老虎最低
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
          孔雀最高<br/>無尾熊最低
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
          孔雀最高<br/>貓頭鷹最低
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
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          無尾熊最高<br/>老虎最低
        </div>
        <div class="col-8">
          <q-input
            v-model="text7"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          無尾熊最高<br/>孔雀最低
        </div>
        <div class="col-8">
          <q-input
            v-model="text8"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          無尾熊最高<br/>貓頭鷹最低
        </div>
        <div class="col-8">
          <q-input
            v-model="text9"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          貓頭鷹最高<br/>老虎最低
        </div>
        <div class="col-8">
          <q-input
            v-model="text10"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          貓頭鷹最高<br/>孔雀最低
        </div>
        <div class="col-8">
          <q-input
            v-model="text11"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          貓頭鷹最高<br/>無尾熊最低
        </div>
        <div class="col-8">
          <q-input
            v-model="text12"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset  class="q-pa-sm" />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          老虎變色龍
        </div>
        <div class="col-8">
          <q-input
            v-model="text13"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          孔雀變色龍
        </div>
        <div class="col-8">
          <q-input
            v-model="text14"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          無尾熊變色龍
        </div>
        <div class="col-8">
          <q-input
            v-model="text15"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          貓頭鷹變色龍
        </div>
        <div class="col-8">
          <q-input
            v-model="text16"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          超級變色龍
        </div>
        <div class="col-8">
          <q-input
            v-model="text17"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset  class="q-pa-sm" />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          老虎偏高<br/>（大於5）
        </div>
        <div class="col-8">
          <q-input
            v-model="text18"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          孔雀偏高<br/>（大於5）
        </div>
        <div class="col-8">
          <q-input
            v-model="text19"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          無尾熊偏高<br/>（大於5）
        </div>
        <div class="col-8">
          <q-input
            v-model="text20"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <div class="q-pa-md row">
        <div class="col-4 flex flex-center text-center">
          貓頭鷹偏高<br/>（大於5）
        </div>
        <div class="col-8">
          <q-input
            v-model="text21"
            placeholder="請在此輸入資料"
            filled
            autogrow
          />
        </div>
      </div>
      <q-separator inset />
      <br/>
      <q-btn
        label="送出"
        round
        style="position: fixed; right: 10px; bottom: 10px; z-index: 1000; transform: scale(1.5); transform-origin: bottom right;"
        @click="onSubmit"
      />
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
      text1: '', // 老虎最高 孔雀最低
      text2: '', // 老虎最高 無尾熊最低
      text3: '', // 老虎最高 貓頭鷹最低
      text4: '', // 孔雀最高 老虎最低
      text5: '', // 孔雀最高 無尾熊最低
      text6: '', // 孔雀最高 貓頭鷹最低
      text7: '', // 無尾熊最高 老虎最低
      text8: '', // 無尾熊最高 孔雀最低
      text9: '', // 無尾熊最高 貓頭鷹最低
      text10: '', // 貓頭鷹最高 老虎最低
      text11: '', // 貓頭鷹最高 孔雀最低
      text12: '', // 貓頭鷹最高 無尾熊最低
      text13: '', // 老虎變色龍
      text14: '', // 孔雀變色龍
      text15: '', // 無尾熊變色龍
      text16: '', // 貓頭鷹變色龍
      text17: '', // 超級變色龍
      text18: '', // 老虎偏高
      text19: '', // 孔雀偏高
      text20: '', // 無尾熊偏高
      text21: '' // 貓頭鷹偏高
    }
  },
  methods: {
    onSubmit () {
      console.log('=====送出')
    }
  },
  mounted () {
  }
}
</script>
