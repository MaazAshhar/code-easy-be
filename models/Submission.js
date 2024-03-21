import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../utils/database.js";

const Submission = sequelize.define('Submission', {
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    language:{
        type: DataTypes.STRING,
        allowNull: false
    },
    stdin:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    sourceCode:{
        type: DataTypes.TEXT,
        allowNull: false,
        field:'source_code'
    },
    stdout:{
        type: DataTypes.TEXT,
        allowNull: true
    }
});
await Submission.sync();

export default Submission;