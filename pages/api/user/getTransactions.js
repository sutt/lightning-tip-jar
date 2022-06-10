import { listPayments } from '@/lib/api'

export default async function getTransactions(req, res) {

  // Reject all methods other than GET.
  if (req.method !== 'GET') res.status(400).end();

  // Grab the slug and url from the post body.
  let { invoiceKey } = req.query;

  if (!invoiceKey) res.status(400).end();

  return listPayments(walletKey)
}