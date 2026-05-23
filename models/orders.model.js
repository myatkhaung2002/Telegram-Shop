// orders.model.js
// Sequelize model definition for Order

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.STRING(20), // e.g., 'pending', 'completed', 'cancelled'
      allowNull: false,
      defaultValue: 'pending',
    },
    price: {
      type: DataTypes.DECIMAL(18, 8),
      allowNull: false,
    },
  }, {
    tableName: 'orders',
    timestamps: true,
  });

  Order.associate = models => {
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Order.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  };

  return Order;
};
