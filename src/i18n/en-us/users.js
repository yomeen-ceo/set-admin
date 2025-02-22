export default {
  title: 'Member',
  user: 'Member',
  list: 'Member List',
  detail: 'Member Detail',
  create: 'Member Create',
  searchBy: 'Search by email address or user UID',
  noAccountsFoundMatching: 'No accounts found matching「{text}」',
  makeSure: 'Make sure the email or user UID is spelled and formatted correctly',
  form: {
    email: 'Email',
    providerIds: 'Providers',
    creationTime: 'Creation Time',
    lastSignInTime: 'Last SignIn Time',
    uid: 'UID',
    displayName: 'Display Name',
    address: 'Address',
    emailVerified: 'Email Verified',
    photoURL: 'Avatar',
    roles: 'Roles',
    roleMap: {
      admin: 'Admin',
      manager: 'Manager',
      seller: 'Seller',
      none: 'Member'
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
    onlyOneRoleCanBeSet: 'Only one role can be set.'
  },
  formMessage: {
    tips: 'Tips',
    modified: '{field} modified.',
    deleteAuccessfully: '{field} delete auccessfully.'
  }
}
