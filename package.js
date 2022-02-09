class Mod
{
    constructor()
    {
		Logger.info("Loading: AdditionalGear - Black Module");
		
		ModLoader.onLoad["AdditionalGearBlackModule"] = require("./src/additionalgearblack.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();