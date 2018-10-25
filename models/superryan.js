
module.exports = function(sequelize, DataTypes) {
	var player = sequelize.define("player", {
	  user_name: DataTypes.STRING(3),
	  user_score: {type: DataTypes.INTEGER, defaultValue: 0},
	  character: {type: DataTypes.STRING, defaultValue: "Andrew"}
	});
  return player;
};
