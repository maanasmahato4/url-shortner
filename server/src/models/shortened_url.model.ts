import { sequelize } from '../database/database';
import { DataTypes, Model, Optional } from 'sequelize';

interface UrlAttributes {
	id: number;
	full: string;
	short?: string;
}

interface UrlCreationAttributes extends Optional<UrlAttributes, 'id'> {}

class Url extends Model<UrlAttributes, UrlCreationAttributes> {
	public id!: number;
	public full!: string;
	public short!: string;
}

Url.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		full: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		short: {
			type: DataTypes.UUID,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4,
		},
	},
	{
		sequelize,
		modelName: 'urls',
	},
);

/* Url.sync().then(() => {
	console.log('synced');
}); */

export default Url;
