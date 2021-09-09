module.exports = (sequelize, DataTypes) => {
    const alias = 'Categoria';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    };
    const config = {
        timestamps: false,
        tableName: 'categorias'
    };

    const Categoria = sequelize.define(alias, cols, config);

    // Relaciones
    Categoria.associate = function(models) {
        Categoria.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'categoria_id'
        });
    }

    return Categoria
};