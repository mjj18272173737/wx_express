/**
 * Created by silence on 2017/2/9.
 */
var wechat = require('wechat');
var config = require('../config');

/**
 *信息回复
 */
exports.message = wechat(config.mp , function (req, res, next){
    var message = req.weixin;
    console.log('log mao:', message);

    /**
     * 可以把不同类型的信息封装起来，分别掉用
     */
    if (message.Content === 'diaosi') {
        // 回复屌丝(普通回复)
        res.reply('hehe');
    } else if (message.Content === 'text') {
        console.log('log text');
        // 你也可以这样回复text类型的信息
        res.reply({
            content : 'text object',
            type : 'text'
        });
    } else if (message.Content === 'hehe') {
        // 回复一段音乐
        res.reply({
            type : "music",
            content : {
                title : "来段音乐吧",
                description : "一无所有",
                musicUrl : "http://mp3.com/xx.mp3",
                hqMusicUrl : "http://mp3.com/xx.mp3",
                thumbMediaId : "thisThumbMediaId"
            }
        });
    } else {
        // 回复高富帅(图文回复)
        res.reply([ {
            title : '你来我家接我吧',
            description : '这是女神与高富帅之间的对话',
            picurl : 'https://www.baidu.com/img/bd_logo1.png',
            url : 'https://www.baidu.com/'
        } ]);
    }
})