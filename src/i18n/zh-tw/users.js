export default {
  title: '會員管理',
  user: '會員',
  list: '會員列表',
  detail: '會員資料',
  create: '建立會員',
  searchBy: '依電子郵件地址或使用者 UID 搜尋',
  noAccountsFoundMatching: '找不到與「{text}」相符的帳戶',
  makeSure: '請確認電子郵件或使用者 UID 的拼寫和格式皆正確無誤',
  form: {
    email: '信箱',
    providerIds: '提供者',
    creationTime: '建立時間',
    lastSignInTime: '登入時間',
    uid: 'UID',
    displayName: '暱稱',
    address: '地址',
    emailVerified: '信箱驗證',
    photoURL: '大頭照',
    roles: '權限',
    roleMap: {
      admin: '超級管理員',
      manager: '工程師',
      seller: '業務',
      none: '一般會員'
    },
    state: {
      T00: '消費扣點',
      T01: '消費收點',
      T02: '結帳累點',
      T03: '推薦累點',
      T04: '點評累點',
      T05: '交易退回',
      T06: '向官方購點',
      T07: '向店家購點',
      T08: '掛賣',
      T09: '取消掛賣',
      T10: '點評額外給點',
      T11: '向官方兌換商品',
      T12: '店家交易扣點',
      T13: '店家老闆扣除業務抽成',
      T14: '業務獲得業務抽成',
      T15: '向業務購點'
    },
    onlyOneRoleCanBeSet: '權限只能設定一個。'
  },
  formMessage: {
    tips: '提示',
    modified: '{field} 修改成功。',
    deleteAuccessfully: '{field} 刪除成功。'
  }
}
