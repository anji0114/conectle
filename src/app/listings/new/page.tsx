import { ListingNewContents } from '@/features/listings/components/ListingNewContents';
import { getUser } from '@/services/auth/getUser';

const ListingNewPage = async () => {
  const user = await getUser();
  return <ListingNewContents userId={user.id} />;
};

export default ListingNewPage;
