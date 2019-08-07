import { User } from '../../models';

export default async ({ id }, context, info) => {
  const user = await User.findOne({
    where: {
      id,
    }
  });
  return user;
};
