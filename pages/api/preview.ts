import {linkResolver, createClient} from '../../prismicio'
import {setPreviewData, redirectToPreviewURL} from '@prismicio/next'
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const client = createClient({req})
    await setPreviewData({req, res})
    // @ts-ignore
    await redirectToPreviewURL({req, res, client, linkResolver})
}
