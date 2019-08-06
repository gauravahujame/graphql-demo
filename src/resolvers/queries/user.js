import uuid from 'uuid';

export default () => {
  return {
    id: uuid.v4(),
    name: 'Gaurav Ahuja',
    email: 'gauravahuja.me@gmail.com',
    phone: '8588885955',
    emailVerified: 1,
    phoneVerified: 1,
    locale: 'en',
    avatar: 'http://www.google.com',
    country: 'India',
    status: 'Writing the status',
    createdAt: 'Now',
    updatedAt: 'Now'
  };
};
