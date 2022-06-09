import { getCollection } from "@/lib/controller";
import { UserModel }     from '@/models/user'
import { errorHandler }  from '@/lib/error'

export default async function loadUser(req, res) {

  // Reject all methods other than GET.
  if (req.method !== 'GET') res.status(400).end();

  // Grab the slug and url from the post body.
  let { slug } = req.query;

  try {
    // Fetches the collection, and checks if the slug exists.
    const users = await getCollection(UserModel),
          user  = await users.findOne({ slug });

    if (user) return res.status(200).json(user);

    return res.status(200).json({})

  } catch(err) { 
    console.log(err)
    errorHandler(req, res, err) 
  }
}