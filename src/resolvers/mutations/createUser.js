import uuid from 'uuid';
import { User } from '../../models';

export default async ({ name, email, phone, locale, avatar, country, status }, context, info) => {
  const user = await User.create({
    id: uuid.v4(),
    name,
    email,
    phone,
    locale,
    avatar,
    country,
    status,
    emailVerified: 1,
    phoneVerified: 1,
  });
  return user;
}