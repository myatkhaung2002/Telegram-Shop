// payment.model.js
// Sequelize model definition for Payment

module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(18, 8),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20), // e.g., 'deposit', 'withdrawal'
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20), // e.g., 'pending', 'verified', 'rejected'
      allowNull: false,
      defaultValue: 'pending',
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'payments',
    timestamps: true,
  });

  Payment.associate = models => {
    Payment.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Payment.belongsTo(models.Wallet, { foreignKey: 'walletId', as: 'wallet' });
  };

  return Payment;
};
