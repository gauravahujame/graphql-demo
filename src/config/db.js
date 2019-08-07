/* eslint-disable prefer-destructuring */
import Sequelize from 'sequelize';
import secrets from './secrets';
require('mysql2');

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = secrets;

const SingleTon = (function () {
  let instance = null;
  return {
    getInstance () {
      if (instance) return instance;
      instance = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
        dialect: 'mysql',
        host   : DB_HOST,
        port   : DB_PORT,
        pool   : {
          max : 1,
          min : 0,
          idle: 10000,
          acquire: 20000,
        },
        operatorsAliases: false,
        define          : {
          timestamps : true,
        },
      });
      return instance;
    },
  };
}());

export default SingleTon.getInstance();
