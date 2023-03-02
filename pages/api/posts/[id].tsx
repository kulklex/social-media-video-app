import { client } from "@/utils/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { postDetailQuery } from '../../../utils/queries';



const handler = async (req:NextApiRequest, res:NextApiResponse ) => {
    if (req.method === 'GET') {
        const {id} = req.query as {id: string}
        const query = postDetailQuery(id)

        const data = client.fetch(query)

        res.status(200).json(data)
    }
}

export default  handler