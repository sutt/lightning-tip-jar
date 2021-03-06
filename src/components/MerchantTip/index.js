import styles from "./styles.module.css"
import MerchantHeader from './MerchantHeader/index.js'
import PayUrlQr       from './PayUrlQr/index.js'
import PrintVersion   from './PrintVersion/index.js'
import RecentTipsBox  from './RecentTipsBox/index.js'


function MerchantTip({ account }) {
  return (
    <div>
      <MerchantHeader
        title={account.title}
        desc={account.description}
      />
      <PayUrlQr 
        payRequest={account.payRequest}
      />
      <RecentTipsBox
        invoiceKey={account.invoiceKey}
        />
      <PrintVersion
        slug={account.slug}
      />
    </div>
  )
}

export default MerchantTip