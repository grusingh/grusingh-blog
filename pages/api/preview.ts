import { redirectToPreviewURL, setPreviewData } from '@prismicio/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient, linkResolver } from '../../prismicio';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({ req });
  await setPreviewData({ req, res });
  // @ts-ignore
  await redirectToPreviewURL({ req, res, client, linkResolver });
};
