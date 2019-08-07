import Sequelize from 'sequelize';

import { db } from '../config';

const User = db.define('user', {
  id                : { type: Sequelize.STRING, autoIncrement: true, primaryKey: true },
  name              : { type: Sequelize.STRING, allowNull: false },
  email             : { type: Sequelize.STRING(100), allowNull: true, unique: true },
  phone             : { type: Sequelize.STRING(45), allowNull: true, unique: true },
  emailVerified     : { type: Sequelize.TINYINT, field: 'email_verified' },
  phoneVerified     : { type: Sequelize.TINYINT, field: 'phone_verified' },
  locale            : { type: Sequelize.STRING(45), allowNull: true, unique: true },
  avatar            : { type: Sequelize.STRING(45), allowNull: true, unique: true },
  country           : { type: Sequelize.STRING(45), allowNull: true, unique: true },
  status            : { type: Sequelize.STRING(200), allowNull: true, unique: true },
  createdAt         : { type: Sequelize.DATE, defaultValue: Sequelize.NOW, field: 'created_at' },
  updatedAt         : { type: Sequelize.DATE, defaultValue: Sequelize.NOW, field: 'updated_at' },
}, {
  timestamps: true,
  createdAt : 'created_at',
  updatedAt : 'updated_at',
  tableName : 'user',
});

export default User;
