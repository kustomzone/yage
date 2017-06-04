const assets = require('../../assets')
const {init:playerInit} = require('./player')

let templateCount = 0

const template = (templateName,rawState) => ({
    ...assets.templateSprites[templateName],
    name:`${templateName}-${(templateCount=1+templateCount)}つ`, //Default is templateName + (number) + つ (To prevent sprite name conflicts)
    ...rawState
})

const spriteInit = ({fromTemplate,...rawState}) => (!fromTemplate)?{
    zFrame:20,
    ...rawState,
    player:playerInit(rawState.player)
}:spriteInit(template(fromTemplate,rawState))

module.exports.init = spriteInit
