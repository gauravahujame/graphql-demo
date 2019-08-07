import { User } from '../../models';

export default async ({ limit, offset }, context, info) => {
  const findStatement = {
    where: {},
  };
  if (limit) findStatement.limit = limit;
  if (offset) findStatement.offset = offset;

  const users = await User.findAll(findStatement);

  return users;
};
