import { client } from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";



const handler = async (req:NextApiRequest, res:NextApiResponse ) => {
    if (req.method === 'GET') {
        const query = allPostsQuery()

        const data = await client.fetch(query)
        
        res.status(200).json(data)
    }
}

export default  handler